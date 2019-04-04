//document.getElementById("enviar").addEventListener("click", enviar);
var inputs = document.getElementsByClassName('formulario_input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
var i=0;
var datos = document.getElementsByTagName('tbody')[0].innerHTML;

function enviar(){
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let carrera = document.getElementById('carrera').value;
    let telefono = document.getElementById('telefono').value;
    let s = document.getElementById('M').checked;
    let sex = (s) ? "Male" : "Femenino";
    console.log(codigo);
    console.log(nombre);
    console.log(carrera);
    console.log(telefono);
    console.log(sex);
    datos = datos + "<tr><td>"+ (i+1) +"</td><td>"+codigo+"</td><td>"+nombre+"</td><td>"+carrera    +"</td><td>"+telefono+"</td><td>"+sex+"</td></tr>";
    document.getElementsByTagName('tbody')[0].innerHTML =  datos;
    document.getElementById("codigo").value = '';
    document.getElementById("nombre").value = "";
    document.getElementById("carrera").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("M").checked = true;
    let data = document.getElementsByTagName("td");
    alinear_tdata(data);
    i +=1;
}
function alinear_tdata(data){
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        element.classList.add('dato');
    }
}