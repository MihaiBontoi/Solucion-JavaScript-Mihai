/**
 * Comprueba la mayoría de edad
 * @param {*} edad 
 * @returns true | false;
 */

function esMayorEdad(edad)
{
    // Completa el código de la función
    return 0
}
/**
 * Obtiene la calificación equivalente a la nota numérica
 * @param {*} nota: integer. 
 * @returns  cadena: Calificación
 */
function obtenerCalificacion(nota)
{
            var calificacion="Incorrecta";

            // Estructura de control *** switch(nota) ***
            // Completa el código de la función
            if(nota < 3){calificacion="muy deficiente"}
            else if(nota >= 3 && nota <5){calificacion = "insuficiente"}
            else if(nota >= 5 && nota <6){calificacion = "suficiente"}
            else if(nota >= 6 && nota <7){calificacion = "bien"}
            else if(nota >= 7 && nota <9){calificacion = "notable"}
            else if(nota >= 9 && nota <=10){calificacion = "sobresaliente"}
            else{alert("introduce un nota entre 0-10")}
            return calificacion;
}
/**
 * Comprueba la mayoria de edad en la página HTML.
 */
function comprobarEdad()
{
    var edad=Number.parseInt(document.getElementById("edad").value);
    console.log('Edad: '+edad);
    console.log('Mayoría de edad?: '+esMayorEdad(edad));
    var txtEdad="Usted es menor de edad."
    
    if (edad >= 18 ){txtEdad="Usted es mayor de edad."}
                else{txtEdad="Usted no es mayor de edad."};
        
    
    document.getElementById("txtEdad").innerHTML=txtEdad;
    
}
/**
 * Escribe la calificación asociada a la nota en la página HTML.
 */
function averiguarCalificacion()
{
    var nota=Number.parseInt(document.getElementById("nota").value);
    console.log('Nota: '+nota);
    console.log('Calificación: '+obtenerCalificacion(nota));
    
        
    document.getElementById("txtCalificacion").innerHTML="Calificación: "+obtenerCalificacion(nota);
}
