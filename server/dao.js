//logica de negocio
const mongoose = require('mongoose')
const authSchema = require('./models/Usuario')
const authSchema_ = require('./models/Producto')

//conexiones a la base de datos
authSchema.statics = {
    create: function(data,cb){
        const user = new this(data)
        user.save(cb)
    },
    login: function(query, cb){
        this.find(query,cb)
    }
}

//necesario, no quitar
const authModel = mongoose.model('usuarios',authSchema)
const authModel_ = mongoose.model('productos',authSchema)
//modulos
module.exports = authModel
module.exports = authModel_