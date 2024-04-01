import { Router } from "express";
import { bookingModelMongo } from "../Schemas/booking.schemas.js";

const BookingRouter = Router ();



BookingRouter.post("/bookings", async (req, res) => {
    const bookingBody = req.body;

    const bookingEntity = {
        accomodation: bookingBody.accomodation
    };

    const bookingFromBookingModel = new bookingModelMongo(bookingEntity);
    const booking = await bookingFromBookingModel.save();
    res.send({message: `Booking created`});
});

BookingRouter.get("/bookings", async (req, res) => {
    
    const bookings = await bookingModelMongo.find().populate("accomodation");
    res.send({bookings});
});


BookingRouter.delete("/bookings/:id", async (req, res) => {
    const bookingId = req.params.id;

    const booking = await bookingModelMongo.findByIdAndDelete(bookingId);

    if(!booking){
        return res.status(404).send({message: `Booking with that ${bookingId} was not found`})
    };

    response.send({message: `${booking} was successfully deleted`});
});


export default BookingRouter;

