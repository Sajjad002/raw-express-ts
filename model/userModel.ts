import { Schema, model } from "mongoose";

// * 1.Create an interface representing a document in MongoDB.
interface IUser {
  username: string;
  email: string;
  password: string;
}

// * 2.Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: [true, "username is required"] },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  {
    timestamps: true,
  }
);

// * 3.Create a Model.
const User = model<IUser>("User", userSchema);

export default User;
