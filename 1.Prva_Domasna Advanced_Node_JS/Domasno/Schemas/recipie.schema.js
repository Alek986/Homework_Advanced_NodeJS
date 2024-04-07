import mongoose from "mongoose";

const { Schema } = mongoose;

const recipieSchema = new Schema({
    recipieName: {
        type: String,
    },
    description: {
        type: String,
    },
    cookingDuration: {
        type: String,
    },
    ingredients:[
        {type: String}, // go pratev primerot na Djordje od casot
    ],
    // ingredients:{
    // type: [String],
    // },??? dali moze vaka???
    servings: {
        type: Number,
    },
    difficulty: {
        type: String,
    },
    cuisine: {
        type: String,
    },
});

export const recipieMongoModel = mongoose.model("Recipe", recipieSchema, "recipies");


// koga stavav required: true - vo propertinjata(nebitno dali vo edno ili vo site) ne mi go kreirase recipie-to...