import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, RequiredValidator, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';





@Component({ 
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']

})

// video HTTP 




export class ContactoComponent implements OnInit {
postId: any;
  constructor(private http: HttpClient) { }

  formulario =  new FormGroup({
    nombre : new FormControl('',),
    correo : new FormControl (''),
    cell : new FormControl('',),
    mensaje: new FormControl('')
  } 

  )

  ngOnInit(): void {
    
    
  }
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  enviar (){
  this.http.post<any>('./enviar.php', this.formulario.value).subscribe(data => {
  console.log(data);
  if(data.status === 'error')  {alert(data.mensaje); return;} 

alert('Mensaje enviado, seras redireccionado.');

 window.location.href='http://tsiwelding.com/';
 


    });
  }

  

  url="./assets/img/soldador.jpg";
  img1="./assets/img/img1.jpg";
  img2="./assets/img/img2.jpg";
  img3="./assets/img/img3.jpg";
  img4="./assets/img/img4.jpg";
  img5="./assets/img/img5.jpg";
  imagen1="./assets/img/imagen1.jpg";
  imagen2="./assets/img/imagen2.jpg";
  imagen3="./assets/img/imagen3.jpg";
  imagen4="./assets/img/imagen4.jpg";
  imagen5="./assets/img/imagen5.jpg";
  imagen6="./assets/img/imagen6.jpg";
  imagen7="./assets/img/imagen7.jpg";
  imagen8="./assets/img/imagen8.jpg";
  imagen9="./assets/img/imagen9.jpg";
  imagen10="./assets/img/imagen10.jpg";
 
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }}
  
  









  


