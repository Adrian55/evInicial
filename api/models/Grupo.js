module.exports = {

  attributes: {

    anyo : { type: 'string', size: 7, required: true },

    grupo : { type: 'string', size: 5, required: true },

    subgrupo : { type: 'string', size: 5, required: true },

    ensenyanza : { type: 'string', size: 80 },

    curso : { type: 'int', size: 1 },

    alumnos : {
        collection: 'alumno',
        via: 'grupos'
    }

  }
};