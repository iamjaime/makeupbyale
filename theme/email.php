<?php
$subjectfield   = $_POST['subject']; 
$subject        = 'Contact Form '.$subjectfield;
$name           = $_POST['cname']; 
$emailaddress   = $_POST['cemailaddress']; 
$phone          = $_POST['cphone'];
$messages        = $_POST['cmessage'];
$logo           = 'http://smartpixelz.com/preview/makeupartist/assets/images/logo.png'; /*update your logo url here*/ 

$to = 'demo@demo.com';
$headers = "From: ".$name."<demo@yourdomain.in>\r\n";
$headers .= "Reply-To: ".strip_tags($emailaddress)."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "X-Mailer: PHP". phpversion() ."\r\n";
$message ='<html><body style="background:#fff; font-family:Arial, Helvetica, sans-serif">';
$message .= '<table width="90%" style="margin:0px auto; border:1px solid #ddd; background:#fff;" cellpadding="0" cellspacing="0">';
$message .= '<tr><td colspan="2" style="padding:20px 0px; border-bottom:1px solid #ddd; background:#1d1f2c;" align="center"><img src="'.$logo.'"/></td></tr>';
$message .= '<tr><td colspan="2" style="padding:20px 0px; border-bottom:1px solid #ddd;" align="center"><h4 style="margin-bottom:0px;">Alisha Jordan</h4></td></tr>';
$message .= '<tr><td style="border-bottom:1px solid #ddd; padding:10px;">Name: </td>
<td style="border-bottom:1px solid #ddd; border-left:1px solid #ddd; padding:10px;">'.$name.'</td></tr>';
$message .= '<tr><td style="border-bottom:1px solid #ddd; padding:10px;">Email: </td>
<td style="border-bottom:1px solid #ddd; border-left:1px solid #ddd; padding:10px;">'.$emailaddress.'</td></tr>';
$message .= '<tr><td style="border-bottom:1px solid #ddd; padding:10px;">Phone: </td>
<td style="border-bottom:1px solid #ddd; border-left:1px solid #ddd; padding:10px;">'.$phone.'</td></tr>';
$message .= '<tr><td style="border-bottom:1px solid #ddd; padding:10px;">Subject: </td>
<td style="border-bottom:1px solid #ddd; border-left:1px solid #ddd; padding:10px;">'.$subjectfield.'</td></tr>';
$message .= '<tr><td style="border-bottom:1px solid #ddd; padding:10px;">Message: </td>
<td style="border-bottom:1px solid #ddd; border-left:1px solid #ddd; padding:10px;">'.$messages.'</td></tr>';
$message .= '</table>';
$message .= '</body></html>';
if (@mail($to, $subject, $message, $headers)) {
echo 'success';
}
else {
 echo 'false';
}
?>