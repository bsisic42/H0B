var MailjetClient = require ('node-mailjet');

module.exports = function ( recipients, name, som, callback ) {
  console.log(recipients, name, som);
  var mailjet = MailjetClient.connect('keypub', 'keypriv');

  var send = mailjet.post('send');
  send
    .request({
        "FromEmail":"gbadi@mailjet.com",
        "FromName":"John Doe",
        "Subject":"MjApp Test!",
        "Html-part": `<!doctype html>
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <style type="text/css">
          #outlook a { padding: 0; }
          .ReadMsgBody { width: 100%; }
          .ExternalClass { width: 100%; }
          .ExternalClass * { line-height:100%; }
          body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
          p { display: block; margin: 13px 0; }
        </style>
        <!--[if !mso]><!-->
        <style type="text/css">

              @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);

          </style>
        <style type="text/css">
          @media only screen and (max-width:480px) {
            @-ms-viewport { width:320px; }
            @viewport { width:320px; }
          }
        </style>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <style type="text/css">
          @media only screen and (min-width:480px) {
            .mj-column-per-100, * [aria-labelledby="mj-column-per-100"] { width:100%!important; }
          }
        </style>
        </head>
        <body>
          <div style="background-color:#222;"><!--[if mso]>
              <table border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"><tr><td>
              <![endif]--><div style="margin:0 auto;max-width:600px;"><table cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;font-size:0px;padding:20px 0px;"><!--[if mso]>
              <table border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
              <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100" style="vertical-align:top;display:inline-block;font-size:13px;text-align:left;width:100%;"><table cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;text-align:center;"><div style="cursor:auto;color:#fff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;">Bon anniversaire <span style="color:#fead0d">${name}</span> !</div></td></tr></tbody></table></div><!--[if mso]>
              </td></tr></table>
              <![endif]--></td></tr></tbody></table></div><!--[if mso]>
              </td></tr></table>
              <![endif]-->
              <!--[if mso]>
              <table border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"><tr><td>
              <![endif]--><div style="margin:0 auto;max-width:600px;background:#fff;"><table cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#fff;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;font-size:0px;padding:20px 0px;"><!--[if mso]>
              <table border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
              <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100" style="vertical-align:top;display:inline-block;font-size:13px;text-align:left;width:100%;"><table cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;text-align:center;"><div style="cursor:auto;color:#222;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;">Je t'offre <span style="color:#fead0d">${som}</span> euros pour cet évènement.</div></td></tr></tbody></table></div><!--[if mso]>
              </td></tr></table>
              <![endif]--></td></tr></tbody></table></div><!--[if mso]>
              </td></tr></table>
              <![endif]-->
              <!--[if mso]>
              <table border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"><tr><td>
              <![endif]--><div style="margin:0 auto;max-width:600px;"><table cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;font-size:0px;padding:20px 0px;"></td></tr></tbody></table></div><!--[if mso]>
              </td></tr></table>
              <![endif]--></div>
        </body>
        </html>
`,
        "Recipients":[{"Email": recipients}]
    })
    .on('success', function (response, body) {
        console.log (response.statusCode, body);
        callback();
    })
    .on('error', function (err, response) {
        console.log (response.statusCode, err);
    });
}
