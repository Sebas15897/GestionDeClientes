class Persona{
    constructor(nombre, direccion, telefono, nacionalidad, correo){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
        this._nacionalidad = nacionalidad;
        this._correo = correo;
    }
    get nombre () {
        return this._nombre;
    }
    set nombre ( nombre ) {
        this._nombre = nombre;
    }
    get direccion () {
        return this._direccion;
    }
    set direccion ( direccion ){
        this._direccion = direccion;
    }
    get telefono () {
        return this._telefono;
    }
    set telefono ( telefono ) {
        this._telefono = telefono;
    }
    get nacionalidad () {
        return this._nacionalidad;
    }
    set nacionalidad ( nacionalidad ) {
        this._nacionalidad = nacionalidad;
    }
    get correo () {
        return this._correo = correo;
    }
    set correo ( correo ) {
        this._correo = correo
    }

    toString() {
        return `Nombre: ${this._nombre}, dirección ${this._direccion}, telefono ${this._telefono}, nacionalidad: ${this._nacionalidad}, correo ${this._correo}`
    }
}

