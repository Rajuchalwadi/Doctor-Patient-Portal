import mongoose, { mongo } from "mongoose";

const imageSchema = mongoose.Schema(
  {
    doctor_ids: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const imagedata = mongoose.model("imagedata", imageSchema);
export default imagedata;
