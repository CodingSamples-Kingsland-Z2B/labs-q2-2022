const mongoose = require("mongoose");
const Cube = require("./Cube");

const accessorySchema = new mongoose.Schema({
	name: { type: String, required: true, minLength:5 },
	imageURL: {
		type: String,
		required: true,
		validate: validImage
	},
	description: { type: String, required: true, minLength: 20 },
	cubes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cube" }],
});

function validImage(val) {
	if (val.startsWith("http://") || val.startsWith("https://")) {
		return true;
	}
	return false;
}

module.exports = mongoose.model("Accessory", accessorySchema);
