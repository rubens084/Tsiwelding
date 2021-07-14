<<<<<<< HEAD
<?php
//Llamar a los campos
if (!empty($_POST['Name']) && !empty($_POST['Asunto']) && !empty($_POST['Phone']) && !empty($_POST['Message']) && !empty($_POST['Email'])) {
    $Name = $_POST['Name'];
    $Asunto =$_POST['Asunto'];
    $Phone =$_POST['Phone'];
    $Message = $_POST['Message'];
    $Email = $_POST['Email'];
    //Destinatario
    $destinatario = "rubendorado084@gmail.com";
    $asunto = "Contacto desde nuestra web";
// html
    $carta = "De: $Name \n";
    $carta .= "Asunto: $Asunto \n";
    $carta .= "Correo: $Email \n";
    $carta .= "Telefono: $Phone \n";
    $carta .= "Message: $Message ";
    
    //Enviando mensaje

 
    
  if(mail ($destinatario, $asunto, $carta)) {
    echo  json_encode(array('status'=> 'enviado'));
  } else 
  {
    echo  json_encode(array('status'=> 'error', 'msg'=>"Error de sistema!"));
  }
   

} else {
    echo  json_encode(array('status'=> 'error', 'msg'=>"Algun campo esta vacio!"));

}

?>
=======
<?php
//Llamar a los campos
if (!empty($_POST['Name']) && !empty($_POST['Asunto']) && !empty($_POST['Phone']) && !empty($_POST['Message']) && !empty($_POST['Email'])) {
    $Name = $_POST['Name'];
    $Asunto =$_POST['Asunto'];
    $Phone =$_POST['Phone'];
    $Message = $_POST['Message'];
    $Email = $_POST['Email'];
    //Destinatario
    $destinatario = "rubendorado084@gmail.com";
    $asunto = "Contacto desde nuestra web";
// html
    $carta = "De: $Name \n";
    $carta .= "Asunto: $Asunto \n";
    $carta .= "Correo: $Email \n";
    $carta .= "Telefono: $Phone \n";
    $carta .= "Message: $Message ";
    
    //Enviando mensaje

 
    
  if(mail ($destinatario, $asunto, $carta)) {
    echo  json_encode(array('status'=> 'enviado'));
  } else 
  {
    echo  json_encode(array('status'=> 'error', 'msg'=>"Error de sistema!"));
  }
   

} else {
    echo  json_encode(array('status'=> 'error', 'msg'=>"Algun campo esta vacio!"));

}

?>
>>>>>>> 90c3682cde07e2d3882a4a829eb3bb76f5a44b49
