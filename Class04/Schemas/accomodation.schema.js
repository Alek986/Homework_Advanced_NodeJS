import mongoose from "mongoose";

const { Schema } = mongoose;

const accomodationSchema = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    bookingPricePerDay: {
        type: Number,
    },
    type: {
        type: String,
    },
    hasAC: {
        type: Boolean,
    },
    hasPrivateParking: {
        type: Boolean,
    },
    hasWiFi: {
        type: Boolean,
    },
    isAvailable: {
        type: Boolean,
    },
});

export const accomodationMongoModel = mongoose.model("Accomodation", accomodationSchema, "accomodation");