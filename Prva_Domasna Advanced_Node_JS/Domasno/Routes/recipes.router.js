import Router from "express";
import { recipieMongoModel } from "../Schemas/recipie.schema.js";

const recipiesRouter = Router();

recipiesRouter.post("/recipies", async (req, res) => {
    const rawRecipie = req.body

    const recipieEntity = {
        recipieName: rawRecipie.recipieName,
        description: rawRecipie.description,
        cookingDuration: rawRecipie.cookingDuration,
        ingredients: rawRecipie.ingredients,
        servings: rawRecipie.servings,
        difficulty: rawRecipie.difficulty,
        cuisine: rawRecipie.cuisine
    };

    try {
        const productOfRecipieModel = new recipieMongoModel(recipieEntity);
    
        recipies = await productOfRecipieModel.save();
        //console.log(recipies);
        res.status(201).send({message: "Recipie created"})
    } catch (error) {
        res.send({message: error.message})
    };
    
});

recipiesRouter.get("/recipies", async (req, res) => {
    const recipies = await recipieMongoModel.find();
    //console.log(recipies);
    res.send(recipies);
});

recipiesRouter.get("/recipies/:id", async (req, res) => {
   
    const recipieID = req.params.id
    
   const recipie = await recipieMongoModel.findById(recipieID);
    //console.log(recipie);
    if(!recipie){
        return res.status(404).send({message: `Product with id ${recipieID} not found`})
    }
    res.send(recipie);
});

recipiesRouter.delete("/recipies/:id", async (req, res) => {
   
    const recipieID = req.params.id
    
   const recipie = await recipieMongoModel.findByIdAndDelete(recipieID);
    //console.log(recipie);
    if(!recipie){
        return res.status(404).send({message: `Product with id ${recipieID} not found`})
    }
    res.send({message:`${recipie} was successfully deleted`});
});

recipiesRouter.put("/recipies/:id", async (req, res) => {
   
    const recipieID = req.params.id;
    
    const recipieBody = req.body;
    
    const updatedRecipie = {
        recipieName: recipieBody.recipieName,
        description: recipieBody.description,
        cookingDuration: recipieBody.cookingDuration,
        ingredients: recipieBody.ingredients,
        servings: recipieBody.servings,
        difficulty: recipieBody.difficulty,
        cuisine: recipieBody.cuisine
    };

    const recipie = await recipieMongoModel.findByIdAndUpdate(recipieID, updatedRecipie);

    if(!recipie){
        return res.status(404).send({message: `Product with id ${recipieID} not found`})
    }
   
    res.send({message: "Recipie updated"})
});
export default recipiesRouter;