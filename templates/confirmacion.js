

let emailConfirmacion = module.exports.emailConfirmacion = function(obj){
    let html=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Confirme su Email</title><style type="text/css">@import url(http://fonts.googleapis.com/css?family=Droid+Sans);/* Take care of image borders and formatting */img {max-width: 600px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;}a {text-decoration: none;border: 0;outline: none;color: #bbbbbb;}a img {border: none;}/* General styling */td, h1, h2, h3{font-family: Helvetica, Arial, sans-serif;font-weight: 400;}td {text-align: center;}body {-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;width: 100%;height: 100%;color: #37302d;background: #ffffff;font-size: 16px;} table {border-collapse: collapse !important;}.headline {color: #ffffff;font-size: 36px;} .force-full-width {width: 100% !important; } .force-width-80 {width: 80% !important; }</style><style type="text/css" media="screen">@media screen { /*Thanks Outlook 2013! http://goo.gl/XLxpyl*/td, h1, h2, h3 {font-family: Droid Sans, Helvetica Neue, Arial, sans-serif !important;}}</style><style type="text/css" media="only screen and (max-width: 480px)">/* Mobile styles */@media only screen and (max-width: 480px) {table[class="w320"] {width: 320px !important;}td[class="mobile-block"] {width: 100% !important;display: block !important;}}</style></head>
    <body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none" bgcolor="#ffffff">
    <table align="center" cellpadding="0" cellspacing="0" class="force-full-width" height="100%" ><tr><td align="center" valign="top" bgcolor="#ffffff"width="100%">
    <center>
    <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="600" class="w320">
    <tr><td align="center" valign="top">
    <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" class="force-full-width" bgcolor="#4dbfbf">
    <tr><td><br><img src="data:image/gif;base64,R0lGODlh4ADwANUAAE29vUNaXEyxsUNSVEiNjUuvr0Z8fUiVlUV0dUy4uEqhoky1tUmYmUyzs027u0unp0RfYUmRkUJPUUiJikupqUZ5ekJHSUeBgkVnaUJMTkVsbkurq0RqbEeEhUVmZ0NXWERgYUusrEFERkFCRERkZkZxckJISkqen0qcnUJKTEqkpUeFhkRjZEVvcEZydEqfoEuyskNhYkFBQ0iPkEqjpEmcnEd/gEiHiEZ3eEiLjEd7fEmXmEqdnkqbm0FAQk2/vyH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmEyYjc0YmZhLTg2ODMtN2Q0NS05Y2MyLTM3NDlkMjY3ZmE0NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRDlDMjExQ0YzMjQxMUUzQTQzREE1NzEwN0QyQURFNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRDlDMjExQkYzMjQxMUUzQTQzREE1NzEwN0QyQURFNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNl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" width="224" height="240" alt="">
    <img src="https://www.filepicker.io/api/file/carctJpuT0exMaN8WUYQ" width="224" height="240" alt="robot picture"></td></tr>
    <tr><td class="headline">${obj.nombre}</td></tr>
    <tr><td><center>
    <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="60%">
    <tr><td style="color:#187272;"><br> Para continuar con el proceso de inscripción debe verificar su cuenta de email haciendo click en el siguiente enlace: <br><br></td></tr>
    </table></center></td></tr>
    <tr><td><div><a href="https://www.frenon.cl/${obj.hash}"style="background-color:#178f8f;border-radius:4px;color:#ffffff;display:inline-block;font-family:Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;">Verifique su Email</a></div><br><br></td></tr>
    </table><table style="margin: 0 auto;" cellpadding="0" cellspacing="0" class="force-full-width" bgcolor="#3b3c3e" style="margin: 0 auto">
    <tr><td style="background-color:#fff;"><img src="https://nodemailer.com/nm_logo_200x136.png" alt="logo"></td></tr>
    </table></td></tr>
    </table></center></td></tr>
    </table>
    </body></html>`;

    return html;
}