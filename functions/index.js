const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Jfjm1SFF4llsHP7hIv0y6bJTWVPhTh9ifVR6kmZWHw9PTt4rXj75cS62jglMtvkvYXk1uiHR6YDOtmHzGpxqWKh00B2HwMzOe"
);

//API

//APP-CONFIG
const app = express();

//MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

//API-ROUTES

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  //console.log("Payment request received of rs ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//LISTEN COMMAND
exports.api = functions.https.onRequest(app);
