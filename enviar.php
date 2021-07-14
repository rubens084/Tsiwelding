<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if( $request->nombre  == '') {

    echo json_encode(array('status' => 'error','mensaje' => 'el nombre es requerido'));
    exit;
}
if($request->correo  == '') {

    echo json_encode(array('status' => 'error','mensaje' => 'el correo es requerido'));
    exit;
}
if($request->cell  == '') {

    echo json_encode(array('status' => 'error','mensaje' => 'el celular es requerido'));
    exit;
}
if($request->mensaje  == '') {

    echo json_encode(array('status' => 'error','mensaje' => 'el mensaje es requerido'));
    exit;
}


$nombre = $request->nombre;
$mail = $request->correo;
$cell = $request->cell;
$mensaje = $request->mensaje;

// $header = 'From: '. $i ."\r\n";
// $header .= "X-mailer: PHP/"  .phpversion(). "\r\n";
// $header .= "Mime-Version: 1.0 \r\n";
// $header .= "Content-Type: text/plain";

// $mensaje = "Este mensaje fue enviado por: " . $nombre . ",\r\n";
// $mensaje .= "Su e-mail es: " . $mail . "\r\n";
// $mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
// $mensaje .= "Enviado el " . date('d/m/Y', time());

$destinatario = "rubendorado084@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta =  "De: $nombre \n";
$carta .= "Correo: $mail \n";   
$carta .= "Cell: $cell \n";
$carta .= "Mensaje: $mensaje";

// mail($destinatario, $asunto, $carta);



if (mail($destinatario, $asunto,$carta) ) {
   
    echo json_encode(array('status' => 'enviado','mensaje' => 'Mensaje enviado!'));

    exit;
}

echo json_encode(array('status' => 'error', 'mensaje' =>'error al enviar el correo'));

?>