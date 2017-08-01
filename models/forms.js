var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var criticalFactorSchema = new Schema({
    factor: String,
    measurement: String,
    low: String,
    medium: String,
    high: String

});

var PositionFormSchema = new Schema({

    Position: {
        type: String,
        required: true
    },
    Category1: {
        type: [criticalFactorSchema],
        required: true
    },
    Category2: {
        type: [criticalFactorSchema],
        required: true
    },
    Category3: {
        type: [criticalFactorSchema],
        required: true
    },
    Category4: {
        type: [criticalFactorSchema],
        required: true
    },
    Category5: {
        type: [criticalFactorSchema],
        required: true
    },
    Category6: {
        type: [criticalFactorSchema],
        required: true
    },
    Category7: {
        type: [criticalFactorSchema],
        required: true
    },
    Category8: {
        type: [criticalFactorSchema],
        required: true
    },
    Category9: {
        type: [criticalFactorSchema],
        required: true
    },
    Category10: {
        type: [criticalFactorSchema],
        required: true
    }
});

var PositionForm = mongoose.model("PositionForm", PositionFormSchema);

module.exports = PositionForm;