/*
Tarea: Sistema de pacientes

1 - Crea una clase para crear objetos con datos de pacientes. 
Los datos serían:
- Nombre
- Fecha de nacimiento
- Género
- DNI
- Dirección
- Teléfono
- email
- número de historia clínica
- Enfermedad pre-existente
La clase debe tener las siguientes funciones:
- mostrarDatosPersonales: Lista en pantalla los datos nombre, DNI, dirección, telefono e email.
- mostrarDatosClinicos: Lista en pantalla los datos nombre, DNI, número de historia clínica y enfermedad pre-existente.
*/
class DatosPacientes {

    constructor(n, fn, g, dni, dir, tel, em, nhc, epe) {
        this.nombre = n;
        this.fechanacimiento = fn;
        this.genero = g;
        this.dni = dni;
        this.direccion = dir;
        this.telefono = tel;
        this.email = em;
        this.historiaclinica = nhc;
        this.preenfermedad = epe;
    }

    mostrarDatosPersonales() {
        document.write(`Nombre: ${this.nombre}<br>`)
        document.write(`DNI: ${this.dni}<br>`)
        document.write(`Dirección: ${this.direccion}<br>`)
        document.write(`Telefono: ${this.telefono}<br>`)
        document.write(`eMail: ${this.email}<br>`)
    }
    mostrarDatosClinicos() {
        document.write(`Nombre: ${this.nombre}<br>`)
        document.write(`DNI: ${this.dni}<br>`)
        document.write(`Numero de historia clinica: ${this.historiaclinica}<br>`)
        document.write(`Enfermedad pre-existente: ${this.preenfermedad}<br>`)
    }
}

let pacientes = [
    new DatosPacientes('John Miguel', '12/05/1985', 'Otros', 12684720, 'Provincia de Jujuy 5120, Tucuman', '3816528745', 'johnmiguel45@live.com.ar', 860567, 'Cardiopatía Congénita'),
    new DatosPacientes('marian', 2016, 'hombre', 4395894, 'santiago', 3816487745, 'woiasoads@asdasd.com', 'tuberculosis')
]



/*2 - Escribe una función que te permita agregar pacientes a un array y al finalizar muestre los datos clínicos de los mismos.*/

const AGREGAR_PACIENTE = (nombre, dni, telefono, email, direccion, historiaclinica, preenfermedad) => {
    const paciente = new DatosPacientes(nombre, dni, telefono, email, direccion, historiaclinica, preenfermedad)
    pacientes.push(paciente)
    alert('El paciente ha sido agregado exitosamente')
}

/* 3 - Escribe una función que permita eliminar un paciente por su DNI*/
const eliminarPaciente = (dni) => {
    pacientes = pacientes.filter(paciente => paciente.dni !== dni)
}



/*4 - Escribe una función que permita buscar pacientes por DNI y otra que permita hacer la búsqueda por nombre (puede devolver más de un paciente que coincida con la búsqueda)*/
const buscarPorDni = (buscadordni) =>{
    const buscarPorDniStr = String(buscadordni);
    const pacientesDni = pacientes.filter(paciente => String(paciente.dni).includes(buscarPorDniStr))
    return pacientesDni
}

const buscarPorNombre = (termino) => {
    const pacienteNombre = pacientes.filter(paciente => paciente.nombre.toLowerCase().includes(termino))
    if (pacienteNombre > 0) {
        return pacienteNombre
    } else {
        console.warn('No se encontraron datos del paciente')
    }
}


/* 
5 - Escribe una función que ordene la lista de pacientes por nombre

*/
const ordenarPorNombre = () => {
    pacientes.sort((a, b)=>{
        if (a.nombre < b.nombre) {
            return -1;
        }
        
        else if (a.nombre > b.nombre) {
            return 1;
        } else {
            return 0;
        }       
    }) 
  console.log(pacientes)
}



