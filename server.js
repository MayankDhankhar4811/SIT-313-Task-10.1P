const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors'); 
const mailgun = require('mailgun-js');

const app = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.use(cors());

const mg = mailgun({
  apiKey: 'key-a90e8aeabc6e193e9687ae5a0a748030',
  domain: 'sandboxf23d6e3dd42746799e368a7ba6c0e951.mailgun.org',
});

app.post('/', (req, res) => {
  const { email } = req.body;

  const data = {  
    from: 'Mayank <mayank4811.be22@chitkara.edu.in>', // Sender's email address
        to: email, // Recipient's email address (provided in the POST request)
        subject: 'Welcome to Our Daily Insider', // Email subject
        text: 'Hello', // Email body
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error');
    } else {
      console.log('Email sent:', body);
      res.status(200).send('Email sent');
    }
  });
});

const port = 3007;
app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}.`);
});