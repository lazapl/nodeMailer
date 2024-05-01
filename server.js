const express = require('express')
const app = express()
const nodeMailer = require('nodemailer')

const PORT = process.env.PORT || 5000

// Middleware
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contactform.html')
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodeMailer.createTransport({
        host: 'smtp.o2.pl',
        port: 587,
        secure: true, 
        auth: {
            user: 'rghs123@o2.pl', 
            pass: 'qwertyui12345' 
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'rghs123@gmail.com',
        subject: `$Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            res.send('error')
        } else {
            console.log('Email sent' + info.response)
            res.send('success')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})