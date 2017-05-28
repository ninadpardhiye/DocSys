// */app/models/medicine.model.js*

// ## Medicine Model

// Note: MongoDB will autogenerate an _id for each medicine object created

// Grab the Mongoose module
import mongoose from 'mongoose';

// Define the schema for the showcase item
let MedicineSchema = mongoose.Schema({

  name : String,

  companyName : String,

  sideEffects : String,

  medicineContents : String,

  recDosage : String,

  contraIndications : String,

  pregnancyAdvisable : Boolean

});

// Create the model for medicines and expose it to the app
export default mongoose.model('medicine', MedicineSchema);