// */app/routes/_medicine.router.js*

// # Medicine API object

// HTTP Verb  Route                   Description

// GET        /api/medicine             Get all of the medicines
// GET        /api/medicine/:medicine_id  Get a single medicine by medicine id

// Load the `medicine` model
import Medicine from '../models/medicine.model';

export default (app, router, io) => {

  // ## medicine API Routes

  // Define routes for the `medicine` API

  router.route('/medicine')

    // ### Create a `medicine`

    // Accessed at POST http://localhost:8080/api/medicine

    // Create a `medicine`
    .post((req, res) => {

      Medicine.create({

        name : req.body.name,

        companyName : req.body.companyName,

        sideEffects : req.body.sideEffects,

        medicineContents : req.body.medicineContents,

        recDosage : req.body.recDosage,

        contraIndications : req.body.contraIndications,

        pregnancyAdvisable : req.body.pregnancyAdvisable

      }, (err, medicine) => {

        if (err)
          res.send(err);

        // DEBUG
        console.log(`Medicine created: ${medicine}`);

        io.emit('new-medicine', medicine);

        // return the new `medicine` to our front-end
        res.json(medicine);
      });
    })

    // ### Get all of the `medicines`

    // Accessed at GET http://localhost:8080/api/medicine
    .get((req, res) => {

      // Use mongoose to get all medicines in the database
      Medicine.find((err, medicine) => {

        if(err)
          res.send(err);

        else
          res.json(medicine);
      });
    });

  router.route('/medicine/:medicine_id')

    // ### Get a `medicine` by ID

    // Accessed at GET http://localhost:8080/api/medicine/:medicine_id
    .get((req, res) => {

      // Use mongoose to fetch a single `medicine` by id in the database
      Medicine.findOne(req.params.medicine_id, (err, medicine) => {

        if(err)
          res.send(err);

        else
          res.json(medicine);
      });
    })

};