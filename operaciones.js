const fs = require('fs')

//Crear una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
    try {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    if(!nombre|| !edad || !animal || !color || !enfermedad) {
        console.error('Debes ingresar todos los datos')
        return
    }
    citas.push({nombre, edad, animal, color, enfermedad})
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2))
    console.log('Se ha creado la cita')
    } catch (error){
        console.error('[registrar] ==>', error)
    }
}

//Funcion Leer todas las citas
function leer() {
    
    let citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    
    console.log(citas);
}
module.exports = {registrar, leer}