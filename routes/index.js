



var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/mailsender', function(req, res, next) {
  res.render('mail');
});


router.post('/mailsender', function (req, res) {
    // Not the movie transporter!
     var mail = req.body.email;
     console.log(mail);
     var sub = req.body.subject;
     console.log(sub);
     var comment = req.body.comment;
   


    var transporter = nodemailer.createTransport({
    host: 'smtp-pulse.com',
    port: 465,
    secure: true,
    auth: {
     user: 'hfgjk@gmail.com',
     pass: 'bjQbHM93b8Lqsa'
    }
});
   
  var mailOptions = {
      from: 'tokjghfh@gmail.com', // sender address
      to: mail, // list of receiver 
      subject: sub, // Subject line
      text:comment, //, // plaintext body
      // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  console.log(mailOptions)


  transporter.sendMail(mailOptions, function(error, info){
    console.log(info);
    console.log(error);
      if(error){
          //console.log(error);
          res.json({result: 'error in sending mail'});
      }else{
          //console.log('Message sent: ' + info.response);
          res.json({result:"sucessfully mail send"});
      };
  });


});











module.exports = router;