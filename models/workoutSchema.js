//this needs to be in a models folder
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Cardio or not cardio (resistance) is required"
            },

            name: {
                type: String,
                trim: true,
                required: "Exercise name is required"
            },

            duration:{
                type: Number,
                required: "please enter a workout duration"
            },

            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;