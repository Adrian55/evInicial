module.exports = {

  attributes: {

    dni : { type: 'string', size: 10 },

    apellido1 : { type: 'string', size: 30 },

    apellido2 : { type: 'string', size: 30 },

    nombre : { type: 'string', size: 30, required: true },

    fechaNac : { type: 'date' },

    email : { type: 'string', email: true, unique: true, required: true},

    user: {
        model: 'user'
    },

    grupos: {
        collection : 'grupo',
        via : 'alumnos'
    },

    cuestionarios : {
        collection : 'cuestionario',
        via : 'alumnos'
    }

  }
};