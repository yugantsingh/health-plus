const mongoose = require("mongoose");

const Schema = mongoose.Schema; //syntax

const AllergySchema = new Schema({
  title: { type: String, required: true }, //the database will contain a row for 'from' in it
  place: { type: String, required: true }, //the database will contain a row for 'reaction' in it
  date: { type: String, required: true }, //the database will contain a row for 'creator' in it
  description: { type: String, required: true }, //the database will contain a row for 'creator' in it
  meds: { type: String, required: true }, //the database will contain a row for 'creator' in it
  creator: { type: String, required: true }, //the database will contain a row for 'creator' in it
});

module.exports = mongoose.model("Allergy", AllergySchema); //'Allergy' written here will form a database of 'allergies' in mongo db
