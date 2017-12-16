const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/myfunction', (request, response)=>{
    response.send('Hello Seema!');

});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/  docs/functions/write-firebase-functions
//
 exports.app = functions.https.onRequest(app);

