/*
Constructor Consultorio
*/
function Consultorio(nombre, pacientes) {
  let _nombre = nombre;
  let _pacientes = pacientes; //Tipo de dato array
  Object.defineProperty(this, "pacientes", {
    get: function () {
      return _pacientes;
    },
  });
}

/*
Constructor Paciente
*/
function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  let _edad = edad;
  let _rut = rut;
  let _diagnostico = diagnostico;

  Object.defineProperty(this, "nombre", {
    get: function () {
      return _nombre;
    },
    set: function (nombre) {
      _nombre = nombre;
    },
  });
  Object.defineProperty(this, "edad", {
    get: function () {
      return _edad;
    },
    set: function (edad) {
      _edad = edad;
    },
  });
  Object.defineProperty(this, "rut", {
    get: function () {
      return _rut;
    },
    set: function (rut) {
      _rut = rut;
    },
  });
  Object.defineProperty(this, "diagnostico", {
    get: function () {
      return _diagnostico;
    },
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    },
  });
}
/*
Creación de Método para buscar usuarios por nombre
*/
Consultorio.prototype.buscarUsuario = function (nombre) {
  const usuariosCoincidencias = this.pacientes.filter(
    (paciente) => paciente.nombre == nombre
  );
  let dataMostrar = `---------\nLos usuarios registrados por nombre: ${nombre} \n`;
  usuariosCoincidencias.forEach((obj, index, arr) => {
    if (index != arr.length - 1) {
      dataMostrar += `Nombre:${obj.nombre}, Edad: ${obj.edad}, Rut: ${obj.rut}, Diagnostico: ${obj.diagnostico} \n`;
    } else {
      dataMostrar += `Nombre:${obj.nombre}, Edad: ${obj.edad}, Rut: ${obj.rut}, Diagnostico: ${obj.diagnostico} \n--------- `;
    }
  });
  return dataMostrar;
};

/*
Creación de Método para mostrar todos los datos de los usuarios registrados
*/
Consultorio.prototype.showAllUsers = function () {
  const usuarios = this.pacientes;
  let dataMostrar = `---------\nLa cantidad de usuarios registrados es de: ${usuarios.length} \n`;
  usuarios.forEach((obj, index, arr) => {
    if (index != arr.length - 1) {
      dataMostrar += `Nombre:${obj.nombre}, Edad: ${obj.edad}, Rut: ${obj.rut}, Diagnostico: ${obj.diagnostico} \n`;
    } else {
      dataMostrar += `Nombre:${obj.nombre}, Edad: ${obj.edad}, Rut: ${obj.rut}, Diagnostico: ${obj.diagnostico} \n--------- `;
    }
  });
  return dataMostrar;
};
/*
Instancio 3 objetos pacientes y un objeto consultorio
*/
const paciente1 = new Paciente("Luis", 25, "1145-1", "Resfrio");
const paciente2 = new Paciente("Andrea", 58, "7489-5", "Diabetes");
const paciente3 = new Paciente("Luis", 59, "4596-5", "Cancer");

const consultorioSantiago = new Consultorio("Consultorio Santiago", [
  paciente1,
  paciente2,
  paciente3,
]);
/*
Ejecución de Método buscarUsuario por nombre igual a Luis
Ejecución de Método Mostrar todos los usuarios llamado showAllUsers
*/
console.log(consultorioSantiago.buscarUsuario("Luis"));
console.log(consultorioSantiago.showAllUsers());
