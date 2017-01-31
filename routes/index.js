// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');
// var hbs = require('nodemailer-express-handlebars');


// // // var transporter = nodemailer.createTransport({
// // //     host: 'smtp-pulse.com'
// // //     port: 465,
// // //     secure: true,
// // //     auth: {
// // //     	ID: '181813834307ae2d310cf638197e51c4'
// // //     	Secret: 'd607252db7cbb674f4c7c9879d5982f6'
// // //     }
// // // });

// // // var transporter = nodemailer.createTransport({
// // //     transport: 'ses', // loads nodemailer-ses-transport
// // //     accessKeyId: 'AWSACCESSKEY',
// // //     secretAccessKey: 'AWS/Secret/key'
// // // });

// // var smtpConfig = {
// //     host: 'smtp-pulse.com',
// //     port: 465,
// //     secure: true, // use SSL
// //     auth: {
// //         user: 'user@gmail.com',
// //         pass: 'pass'
// //     }
// // };

// // var poolConfig = {
// //     pool: true,
// //     host: 'smtp-pulse.com',
// //     port: 465,
// //     secure: true, // use SSL
// //     auth: {
// //         user: 'user@gmail.com',
// //         pass: 'pass'
// //     }
// // };

// // var directConfig = {
// //     name: 'hostname' // must be the same that can be reverse resolved by DNS for your IP
// // };


// // mailer use('compile', hsb({
// // 	viewPath: 'views/email',
// // 	extName: '.hbs'
// // }))
// // /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Express' });
// // });

// // router.get('/sendmail', function(req, res, next) {
// //   mailer.sendMail({
// //   	from: 'totan0010@tmail.com',
// //   	to: 'totan0010@gmail.com',
// //   	subject: 'Password',
// //   	template: 'recover',
// //   	context: {}
// //   },function(err, response){
// //   	if(err){
// //   		res send('bad mail');
// //   	}
// //   	res send('good mail');
// //   });
// // });


// module.exports = router;



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
     // console.log(comment);
    // var transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //         user: 'gorai.ranjit13@gmail.com', // Your email id
    //         pass: '8119061245' // Your password
    //     }
    // });



    var transporter = nodemailer.createTransport({
    host: 'smtp-pulse.com',
    port: 465,
    secure: true,
    auth: {
     user: 'totan0010@gmail.com',
     pass: 'bjQbHM93b8Lqsa'
    }
});
   
  var mailOptions = {
      from: 'totan0010@gmail.com', // sender address
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