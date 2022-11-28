const SMSNumberVerifier = require("sms-number-verifier");

const smsVerifier = new SMSNumberVerifier("getsmscode", {
  username: "...",
  token: "...",
});

// fetch a number to use for a new verification request
const number = await smsVerifier.getNumber({ service: "google" });

// give number to third-party service such as google...
// third-party service sends SMS code to the given number

// check for valid codes received via SMS from the google service
const codes = await smsVerifier.getAuthCodes({ number, service: "google" });
// codes = [ '584125' ]
