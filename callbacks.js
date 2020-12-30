// setTimeout(function() {
//     console.log('Hola Mundo');
// }, 3000);

let getusuariobyid = (id, callback) => {

    let usuario = {
        nombre: 'Catalina',
        id

    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`);
    } else {
        callback(null, usuario);
    }

}

getusuariobyid(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
});