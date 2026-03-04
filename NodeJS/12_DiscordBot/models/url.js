import mongoose from 'mongoose'

const URLschema = new mongoose.Schema(
    {
        shortID: {
            type:String
        },
        redirectURL: {
            type:String
        },
        createdBY: {
            type:Date,
            default:Date.now
        }
    }
)

const URL = mongoose.model('url', URLschema)

export default URL