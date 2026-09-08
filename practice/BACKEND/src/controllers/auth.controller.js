import User from "../model/user.model.js"
import bcrypt from "bcryptjs"
import { generateTokens } from "../lib/tokens.js"

export const signup = async (req, res) => {
    const { username, email, password } = req.body

    try {

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All Credentials required" })
        }
        
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be atleast 6 Characters" })
        }

        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: "Email Already Exists" })

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPass
        })

        await newUser.save()

        generateTokens(newUser._id, res)

        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email
        })

    } catch (error) {
        console.log("Error in signup Controller", error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
}



export const login = async (req, res) => {
    const {email, password} = req.body

    try {

        const user = await User.findOne({ email })
        if(!user) {
            return res.status(401).json({ message: "User not Found" })
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid Password" })
        }

        generateTokens(user._id, res)

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email
        })

    } catch (error) {

        console.log("Error during login: ", error.message);
        res.status(500).json({ message: "Internal Server Error" })

    }
}


export const logout = async (req, res) => {
    try {

        res.cookie("jwt", "", {
            maxAge: 0,
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
        })
        res.status(200).json({ message: "Logged out successfully" })

    } catch (error) {
        console.log("Error during logout", error.message);
        res.status(500).json({ message: "Internal Server Error" })
        
    }
}