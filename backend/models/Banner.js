import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },

    categoryId: {
      type: String,
    },

    pricePrevious: {
      type: String,
    },

    priceNow: {
      type: String,
    },

    images: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Banner", bannerSchema);
