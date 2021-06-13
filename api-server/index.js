// importing modules
const express = require("express");
const path = require("path");

// declare and initializing variables
const app = express();
const port = process.env.PORT || "8000";

// routes for servicing api's
app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

// listing and hoisting on localhost
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});