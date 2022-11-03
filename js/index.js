
const resumen=document.getElementById('resumen');
const costoTicket=200;
let arrayDescuento={Estudiante:80,Trainee:50,Junior:15,SinCategoria:0}
let validar=false;
resumen.addEventListener('click',function(event){
let cantidadTicket=0;
let costoFinal=0;
let cantidad=document.getElementById('cantidad');
let categoria=document.getElementById('categoria');
let mostrarTotal=document.getElementById('MostrarTotal');
cantidadTicket=cantidad.value;
validarCampos();
  if(validar){
    if(categoria.value==='Estudiante'){
      costoFinal=((costoTicket - (costoTicket*arrayDescuento.Estudiante/100))*cantidadTicket);
      }else if(categoria.value==='Trainee'){
        costoFinal=((costoTicket- (costoTicket*arrayDescuento.Trainee/100))*cantidadTicket);
      }else if(categoria.value==='SinCategoria'){
        costoFinal=0;
      }
      else{
        costoFinal=((costoTicket - (costoTicket*arrayDescuento.Junior/100))*cantidadTicket);
      }
  }else{
    alert("verifique los datos ingresados")
  }
    mostrarTotal.value=`Total A Pagar: $ ${costoFinal}`;
    event.preventDefault();
})





function validarCampos(event){

   var regOficial =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let cantidadTicket=0;
  let cantidad=document.getElementById('cantidad');
  cantidadTicket=cantidad.value;
  let nombre=document.getElementById('nombre').value;
  let apellido=document.getElementById('apellido').value;
  let correo=document.getElementById('correo').value;
  if(nombre==null || nombre==""){
    alert("Debe completar el nombre")
    return validar=false;
  }
  if(apellido==null || apellido==""){
    alert("Debe completar el apellido")
    return validar=false;
  }
  
  if(correo==null || correo=="" ||  (!(regOficial.test(correo)))){
  //  event.target.setCustomValidity('Verifique los datos ingresados, debe ingresar example@gmail.com');
  alert("Verifique los datos ingresados en el email, debe ingresar example@gmail.com")
    return validar=false;
  }
  if(cantidadTicket <=0){
    alert("la cantidad debe ser mayor a cero")
    return validar=false;
  }
  return validar=true;
}



