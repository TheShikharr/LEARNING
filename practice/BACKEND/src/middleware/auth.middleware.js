import jwt from "jsonwebtoken"
import User from "../model/user.model.js"

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized - NO token provided"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.userID)

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            })
        }

        req.user = user
        next()

    } catch (error) {

        console.log("Error in Protect Route Middleware", error.message);
        if(error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "Unauthorized - Invalid or Expired Token"
            })
        }
        res.status(500).json({ message: "Internal Server Error" })
    }
}