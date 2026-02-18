const express = require('express');
const app = express();
const cors = require('cors');
const UserController = require('./controller/UserController');
const BooingController = require('./controller/BookingController');

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const userController = new UserController();
const booingController = new BooingController();
/**
 * Add new user
 */
app.post('/add-new-user', async (req, res) => {
    const response = await userController.saveNewUser(req.body);
    res.send(response);
});

app.post('/verify-user', async (req, res) => {
    const response = await userController.verifyUser(req.body);
    res.send(response);
});

app.post('/save-booking', async (req, res) => {
    const response = await booingController.saveBooking(req.body);
    res.send(response);
});

app.post('/fetch-bookings', async (req, res) => {
    const response = await booingController.fetchBookingByUserId(req.body);
    res.send(response);
});

module.exports.server = app;