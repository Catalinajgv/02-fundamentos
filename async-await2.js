let empleados = [{
    id: 1,
    nombre: 'Catalina'
}, {
    id: 2,
    nombre: 'Melissa'

}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getempleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new error(`No existe un empleado con el ID ${id}`)
    } else {
        return empleadoDB;
    }
}

let getsalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        throw new error(`No existe un salario para el empleado ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

getempleado(10).then(empleado => {

        return getsalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario} $`)
    })
    .catch(err => {
        console.log(err);
    });


let getinfo = async(id) => {
    let empleado = await getempleado(id);

    console.log(empleado);
}

getinfo(2);