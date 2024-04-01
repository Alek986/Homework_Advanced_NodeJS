import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingsSchema = new Schema ({
    accomodation: {
        type: Schema.Types.ObjectId,
        ref: "Accomodation"
    },
});

export const bookingModelMongo = mongoose.model("Bookings", bookingsSchema, "bookings");