import express from "express";
import AfricasTalking from "africastalking";

const router = express.Router();

// Initialize AfricasTalking with your credentials
const credentials = {
  apiKey: "894aafd0ca327ca28cb32e6de7a8f07ecd5f0959ec5387b1df46bf93128872f9",
  username: "TheCoolestApp123",
};
const africasTalking = AfricasTalking(credentials);

// Initialize a service e.g. SMS
const sms = africasTalking.SMS;

// Define your route
router.get("/sms", (req, res) => {
  // Extract data from request body
  //   const { to, message } = req.body;
  // const to = ["+254743376820", "+254743376821"];
  const to = ["+254743376820"];
  const message = "hello James";
  // Prepare options for sending SMS
  const options = {
    to: to, // Array of phone numbers
    message: message,
  };

  // Send message and capture the response or error
  sms
    .send(options)
    .then((response) => {
      console.log(response); // Log response to console
      res.send("SMS sent successfully!"); // Send response to client
    })
    .catch((error) => {
      console.error(error); // Log error to console
      res.status(500).send("Failed to send SMS."); // Send error response to client
    });
});

export default router;
