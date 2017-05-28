// */app/routes/_inventory.router.js*

// # inventory API object

// HTTP Verb  Route                   Description

// GET        /api/inventory             Get all of the inventories
// GET        /api/inventory/:inventory_id  Get a single inventory by inventory id
// POST       /api/inventory             Create a single inventory
// DELETE     /api/inventory/:inventory_id  Delete a single inventory
// PUT        /api/inventory/:inventory_id  Update a inventory with new info

// Load the `inventory` model
import Inventory from '../models/inventory.model';

export default (app, router) => {

  // ## inventory API Routes

  // Define routes for the `inventory` API

  router.route('/inventory')

    // ### Create a `inventory`

    // Accessed at POST http://localhost:8080/api/inventory

    // Create a `inventory`
    .post((req, res) => {

      Inventory.create({

        medicineId : req.body.medicineId,

        purchaseDate : new Date(req.body.purchaseDate),

        mfgDate : new Date(req.body.mfgDate),

        expiryDate : new Date(req.body.expiryDate),

        quantity : req.body.quantity

      }, (err, inventory) => {

        if (err)
          res.send(err);

        // DEBUG
        console.log(`inventory created: ${inventory}`);

        // return the new `inventory` to our front-end
        res.json(inventory);
      });
    })

    // ### Get all of the `inventories`

    // Accessed at GET http://localhost:8080/api/inventory
    .get((req, res) => {

      // Use mongoose to get all inventories in the database
      Inventory.find((err, inventory) => {

        if(err)
          res.send(err);

        else
          res.json(inventory);
      });
    });

  router.route('/inventory/:inventory_id')

    // ### Get a `inventory` by ID

    // Accessed at GET http://localhost:8080/api/inventory/:inventory_id
    .get((req, res) => {

      // Use mongoose to fetch a single `inventory` by id in the database
      Inventory.findOne(req.params.inventory_id, (err, inventory) => {

        if(err)
          res.send(err);

        else
          res.json(inventory);
      });
    })

    // ### Update a `inventory` by ID

    // Accessed at PUT http://localhost:8080/api/inventory/:inventory_id
    .put((req, res) => {

      // use our `inventory` model to find the `inventory` we want
      Inventory.findOne({

        '_id' : req.params.inventory_id

      }, (err, inventory) => {

        if (err)
          res.send(err);

        // Only update a field if a new value has been passed in
        if (req.body.medicineId)
          inventory.medicineId = req.body.medicineId;

        if (req.body.purchaseDate)
          inventory.purchaseDate = new Date(req.body.purchaseDate);

        if (req.body.mfgDate)
          inventory.mfgDate = new Date(req.body.mfgDate);

        if (req.body.expiryDate)
          inventory.expiryDate = new Date(req.body.expiryDate);

        if (req.body.quantity)
          inventory.quantity = req.body.quantity;

        // save the `inventory`
        return inventory.save((err) => {

          if (err)
            res.send(err);

          return res.send(inventory);

        });
      });
    })

    // ### Delete a `inventory` by ID

    // Accessed at DELETE http://localhost:8080/api/inventory/:inventory_id
    .delete((req, res) => {

      // DEBUG
      console.log(`Attempting to delete inventory with id: ${req.params.inventory_id}`);

      Inventory.remove({

        _id : req.params.inventory_id
      }, (err, inventory) => {

        if(err)
          res.send(err);

        else
          console.log('inventory successfully deleted!');

        inventory.find((err, inventories) => {
          if(err)
            res.send(err);

          res.json(inventories);
        });
      });
    });
};