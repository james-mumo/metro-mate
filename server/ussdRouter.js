// Import necessary modules
import express from "express";

// Create an Express router
const router = express.Router();

// Define a route for handling USSD requests
router.post("/ussd", (req, res) => {
  // Extract the USSD parameters from the request body
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  // Log the USSD parameters for debugging
  console.log("Session ID:", sessionId);
  console.log("Service Code:", serviceCode);
  console.log("Phone Number:", phoneNumber);
  console.log("Text:", text);

  // Implement your USSD logic here

  let response = "";

  if (text == "") {
    // This is the first request. Note how we start the response with CON
    response = `CON What would you like to check
        1. My account
        2. My phone number`;
  } else if (text == "1") {
    // Business logic for first level response
    response = `CON Choose account information you want to view
        1. Account number
        2. Account balance`;
  } else if (text == "2") {
    // Business logic for first level response
    // This is a terminal request. Note how we start the response with END
    response = `END Your phone number is ${phoneNumber}`;
  } else if (text == "1*1") {
    // This is a second level response where the user selected 1 in the first instance
    const accountNumber = "ACC100101";
    // This is a terminal request. Note how we start the response with END
    response = `END Your account number is ${accountNumber}`;
  } else if (text == "1*2") {
    // This is a second level response where the user selected 1 in the first instance
    const balance = "KES 10,000";
    // This is a terminal request. Note how we start the response with END
    response = `END Your balance is ${balance}`;
  }

  // Print the response onto the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(response);
});

// Export the router
export default router;
