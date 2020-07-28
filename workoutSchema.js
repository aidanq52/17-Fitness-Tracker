const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: Boolean,
        required: "Cardio or not cardio (resistance) is required"
    },

    name: {
        type: String,
        trim: true,
        required: "Exercise name is required"
    },

    duration:{
        type: Number,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    reps:{
        type: Number,
        required: true
    },

    sets: {
        type: Number,
        required: true
    }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;