const nodemailer = require("nodemailer");
const log = console.log;
const MailSender = () => {
  //Nodemailer;

  // Step 1
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL || "testnodemailer1001@gmail.com", // TODO: your gmail account
      pass: process.env.PASSWORD || "johndoe123", // TODO: your gmail password
    },
  });

  // Step 2
  let mailOptions = {
    from: "testnodemailer1001@gmail.com", // TODO: email sender
    to: "gauravshinde1816@gmail.com", // TODO: email receiver
    subject: "Nodemailer - Test",
    text: "Wooohooo it works!!",
    html: `
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      <title>PCSB Community</title>
  </head>
  
  <body>
      <div class="container text-center border-1">
          <h1 class="display-3">Forgot password link</h1>
          <hr>
  
          <img class="img-responsive mb-3"
              src="
              https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmdvdCUyMHBhc3N3b3JkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="" srcset="">
          <hr>
          <div class="btn btn-success btn-lg p-2">
              <strong>To reset your password</strong> <a href="https://www.pictcsi.com/">click here</a>
          </div>
  
  
      </div>
  
  
  </body>
  
  </html>
    
    `,
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log("Error occurs", err);
    }
    return log("Email sent!!!");
  });
};

export default MailSender;
