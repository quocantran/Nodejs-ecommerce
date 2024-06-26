import mongoose from "mongoose";
// Declare the Schema of the Mongo model
const keyTokenSchema = new mongoose.Schema(
  {
    user: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    publicKey: {
      type: String,
      required: true,
    },

    refreshTokensUsed: {
      type: Array,
      default: [],
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const KeyTokenModel = mongoose.model("KeyToken", keyTokenSchema);

//Export the model
export default KeyTokenModel;
