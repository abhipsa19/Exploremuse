const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "https://media.istockphoto.com/id/1369175723/photo/isolated-tropical-island-middle-of-ocean.webp?a=1&b=1&s=612x612&w=0&k=20&c=PxKMOd9c67EkKl5ChMNWg60LaAC9odw_W7bJp5hSshQ=",
    set: (v) => v === "" ? "https://media.istockphoto.com/id/1369175723/photo/isolated-tropical-island-middle-of-ocean.webp?a=1&b=1&s=612x612&w=0&k=20&c=PxKMOd9c67EkKl5ChMNWg60LaAC9odw_W7bJp5hSshQ=" : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

});
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
