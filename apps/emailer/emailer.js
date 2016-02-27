'use strict';

const nodemailer = require('nodemailer');

const emailConfig = {
	'username': process.env.EMAIL_USERNAME,
	'passwordToken': process.env.EMAIL_PASSWORDTOKEN,
    'sendTo': process.env.EMAIL_SENDTO
};

module.exports = {
	sendMail: function(data, callback) {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
            port: 465,
            secure: true,
			auth: {
		        user: emailConfig.username,
		        pass: emailConfig.passwordToken
	    }
		});
		
		let subject = "New Inquiry from: " + data.name;
		let text = "Name: " + data.name + "<br><br>" +
					"Phone: " + data.phone + "<br><br>" + 
					"Email: " + data.email + "<br><br>" + 
					"Message: " + data.message;

		let message = {
			from: emailConfig.username,
			to: emailConfig.sendTo,
			subject: subject,
			html: text
		};

		transporter.sendMail(message, function(error, info) {
			if (error) {
				console.log('Error occurred');
				console.log(error);
				console.log(error.message);
				if (callback)
					callback(error.message, false);
				return;
			}

			console.log('Message success!');
			console.log(info);
			console.log('Server responded with "%s"', info.response);

			if (callback)
				callback(null, true);
		});
	}
};