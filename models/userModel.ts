import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, "Please enter the username"] },
    email: {
        type: String,
        unique: [true, "Email address already exist!"],
        required: [true, "Please enter the email address!"]
    },
    password: {
        type: String,
        required: [true, "Please add the user password!"]
    }
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User