// */app/models/inventory.model.js*

// ## Inventory Model

// Note: MongoDB will autogenerate an _id for each inventory object created

// Grab the Mongoose module
import mongoose from 'mongoose';

// Define the schema for the showcase item
let InventorySchema = mongoose.Schema({

  medicineId : String,

  purchaseDate : Date,

  mfgDate : Date,

  expiryDate : Date,

  quantity : Number

});

// Create the model for inventorys and expose it to the app
export default mongoose.model('inventory', InventorySchema);