const express = require('express');
const {postRequest} = require('./getOpenAiRequest')
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

// Set up routes
app.post('/openAiRequest', async (req, res) => {
  try {
    console.log('starting request: ', req.body);
    const response = await postRequest(req);
    console.log('returning message: ' + response);
    res.send({resp: response})
  } catch (err) {
    console.log(err);
    res.status(400).send({err: err});
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});