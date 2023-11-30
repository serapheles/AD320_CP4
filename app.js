/**
 * Kyle Potempa
 * 11/29/23
 * Ultra basic node api.
 */
"use strict";
const express = require('express');
const app = express();

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

let antimammals = [{
    "cat": "meow"
}, {
    "dog": "woof"
}, {
    "rabbit": "bark"
}, {
    "bird": "sup"
}, {
    "worm": "Do you still love me?"
}]

/**
 * Returns a random integer between 0 (inclusive) and the provided value (exclusive).
 * @param max The exclusive upper bound.
 * @returns {number} A random number between 0 (inclusive) and the provided value (exclusive).
 */
function rand(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Returns an animal and what it says.
 */
app.get("/alpha", function (req, res) {
    console.log(antimammals[rand(antimammals.length)]);
    res.json(antimammals[rand(antimammals.length)]);
});

/**
 * Returns a random number between 1 and 20, inclusive.
 */
app.get("/beta", function (req, res) {
    let roll = rand(20) + 1;
    res.send(roll.toString());
});