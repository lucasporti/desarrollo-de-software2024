// paradigma orientado a objetos
/*



*/

// representacion de cosas del mundo real

// alumno juan
const juan = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(){ return this.nombre + " " + this.apellido},
    legajo: 2024322,
    saludar: function(){console.log("Hola soy " + this.nombreCompleto())},
    presentarse: function(nombre){console.log("Hola " + nombre + ", soy " + this.nombreCompleto())}
}
// objeto con 3 caracteristicas que son propias -> las caracteristicas se llaman atributos

console.log(juan.nombre)

juan.saludar() // -> método del objeto juan

const fran = "Francisco";

juan.presentarse(fran)

// cuando yo quiero crear muchos alumnos, necesito crear un molde de alumno
// los moldes de objetos se llaman clases, y nos sirven para crear muchos casos particulares
// las clases se escriben en UpperCamelCase

// para crear un objeto a partir de una clase usamos la palabra reservada new
const roberto = new Alumno("Roberto", "Perez");
// para asignarle valores a los atributos utilizamos el dot notation

// aprendimos sobre constructores y no son necesarias estas asignaciones
//roberto.nombre = "Roberto";
//roberto.apellido = "Perez";
roberto.legajo = 20207;
roberto.fechaDeNacimiento = 2003;
roberto.saludar();
// creación de otro objeto
const nadia = new Alumno("Nadia", "Rodriguez");

// aprendimos sobre constructores y no son necesarias estas asignaciones
//nadia.nombre = "Nadia";
//nadia.apellido = "Rodriguez";
nadia.legajo = 20208;
nadia.fechaDeNacimiento = 2005;
nadia.saludar();
//  cuando creamos un objeto a partir de una clase, estamos creando una instancia
nadia.saludarAlumno(roberto);

// de cada alumno, su fecha de nacimiento, poder preguntar cuantos años tiene. sin atributo edad
console.log(roberto.dameTuEdad())

// a la creación de clases y atributos se lo llama modelado

// cuando algo me está llevando mucho tiempo, le pongo un return hardcodeado, y le escribo un comment //TODO


// cuando no le pongo ningun valor al atributo de una instancia, devuelve undefined
// para evitar eso tengo que usar el método constructor
const maria = new Alumno("Maria", "Fernandez");
maria.saludar();

// nombre del curso, nombre docente, promedio edades de estudiantes del curso


// promedio general de un curso, teniendo en cuenta q cada alumno va a tener 2 calificaciones
const cursoDesarrollo = new Curso();
cursoDesarrollo.nombre = "Desarrollo de Software";
cursoDesarrollo.agregarAlumnoAlCurso(roberto);
cursoDesarrollo.agregarAlumnoAlCurso(maria);
cursoDesarrollo.agregarAlumnoAlCurso(nadia);
console.log(cursoDesarrollo.promedioDeEdadesDeAlumnos());

// preguntarle a un curso si es joven, si el promedio de las edades de sus alumnos es menor a 22

