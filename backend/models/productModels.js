const mongoose = require("mongoose")


const productSchema =  mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter Product name"]
    },
    description: {
        type: String,
        required: [true,"Please enter Product description"]
    },
    price: {
        type: Number,
        required: [true,"Please enter Product price"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    category: {
        type: String,
        required: [true,"Please enter Product category"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            commment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: String,
        default: Date.now()
    }

})

module.exports = mongoose.model("Product", productSchema)