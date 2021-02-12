const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const aws = require('aws-sdk')
const {contactEmail} = require('./templates/email')
require('dotenv').config();

// ssh -i "ArthurPristupa.pem" ubuntu@ec2-54-219-40-114.us-west-1.compute.amazonaws.com

const app = express()

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
})

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

const port = 3001

const ses = new aws.SES({apiVersion: '2010-12-01'})

app.use('/api/email', async (req, res) => {
  const {name, email, phone, subject, message} = req.body

  const params = contactEmail(name, email, phone, subject, message)

  const sendEmail = ses.sendEmail(params).promise()

  sendEmail.then( data => {
    console.log('Email submitted on SES', data)
    return res.json(`Thank you for contacting use, we'll back to you as soon as we can`)
  }).catch( err => {
    console.log(err)
    return res.status(400).json({error: 'We could not verify your email, please try again'})
  })
  
})

app.listen(port, () => console.log(`Server is running on port ${port}`))