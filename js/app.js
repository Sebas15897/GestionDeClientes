const personas = [
    new Persona('Sebastian', 'Calle 47c cra 23-06', 3103737552, 'Colombiano', 'sebas@hola.com'),
    new Persona('Daniela', 'Calle 7 c 2 3', 1564564564, 'Colombiano', 'Daniel@hola.com')
]

console.log(personas);

function mostrarPersonas() {
    let texto = '';
    for ( let persona of personas ) {
        texto += `<li> Nombre: ${persona._nombre} <br> Dirección: ${persona._direccion} <br> Teléfono: ${persona._telefono} <br> Nacionalidad ${persona._nacionalidad} <br> Correo: ${persona._correo}`;
    }
    document.getElementById('clientes').innerHTML = texto;
}

function realizarPerdido() {
    const formulariop = document.forms['Formulario'];
    const nombreP = formulariop['nombre'];
    const cantidad = formulariop['cantidad'];
    const largo = formulariop['largo'];
    const ancho = formulariop['ancho'];
}

function obtenerInformacion() {
    const formulario = document.forms['Personaformulario'];
    const nombre = formulario['nombre'];
    const direccion = formulario['direccion'];
    const telefono = formulario['telefono'];
    const nacio = formulario['nacio'];
    const correo = formulario['email'];
    const persona = new Persona(nombre.value, direccion.value, telefono.value, nacio.value, correo.value);
    personas.push(persona);
    localStorage.setItem("nombre", JSON.stringify( personas ));
    mostrarPersonas();
}




