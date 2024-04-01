import { Router } from "express";
import {accomodationMongoModel} from "../Schemas/accomodation.schema.js";

const AccommondationsRouter = Router();

AccommondationsRouter.post("/accomodations", async (req, res) =>{
    const accomodationBody = req.body;

    const accomodationEntity = {
        name: accomodationBody.name,
        address: accomodationBody.address,
        bookingPricePerDay: accomodationBody.bookingPricePerDay,
        type: accomodationBody.type,
        hasAC: accomodationBody.hasAC,
        hasPrivatePraking: accomodationBody.hasPrivatePraking,
        hasWiFi: accomodationBody.hasWiFi,
        isAvailable: accomodationBody.isAvailable,
    };

    
try {
    const accomodationFromAccomodationModel = new accomodationMongoModel(accomodationEntity);
    const accomodation = await accomodationFromAccomodationModel.save();
    res.status(201).send({message: "Accomodation created"})
} catch (error) {
    res.send({message: error.message});
};
});

AccommondationsRouter.get("/accomodations", async (req, res) =>{
    const accomodations = await accomodationMongoModel.find();
    res.send(accomodations);
});

AccommondationsRouter.get("/accomodations/:id", async (req, res) => {
    const accomodationId = req.params.id;

    const accomodation = await accomodationMongoModel.findById(accomodationId);
    if(!accomodation){
        return res.status(404).send({message: `Accomodation with ${accomodationId} was not found`})
    };
    res.send(accomodation);
});

AccommondationsRouter.delete("/accomodations/:id", async (req, res) => {
    const accomodationId = req.params.id;

    const accomodation = await accomodationMongoModel.findByIdAndDelete(accomodationId);

    if(!accomodation){
        return res.status(404).send({message: `Accomodation with that ${accomodationId} was not found`})
    };

    response.send({message: `${accomodation} was successfully deleted`});
})

AccommondationsRouter.put("/accomodations/:id", async (req,res) => {
    const accomodationId = req.params.id;

    const accomodationBody = req.body;

    const updatedAccomodation = {
        name: accomodationBody.name,
        address: accomodationBody.address,
        bookingPricePerDay: accomodationBody.bookingPricePerDay,
        type: accomodationBody.type,
        hasAC: accomodationBody.hasAC,
        hasPrivatePraking: accomodationBody.hasPrivatePraking,
        hasWiFi: accomodationBody.hasWiFi,
        isAvailable: accomodationBody.isAvailable,
    };

    const accomodation = await accomodationMongoModel.findByIdAndUpdate(accomodationId, updatedAccomodation);

    if(!accomodation){
        return res.status(404).send({message: `Accomodation with id: ${accomodationId} was not found`})
    };
    res.send({message: `Accomodation was successfully updated`})
});

export default AccommondationsRouter;
