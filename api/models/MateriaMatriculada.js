/**
* MateriaMatriculada.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    expediente : { 
    	type: 'int',
    	size:11
    },

    materia : { 
    	type: 'string',
    	size:6
    	 },

    profesor : { 
    	type: 'string' ,
    	size:6
    },

    anyo : { 
    	type: 'string', 
		size:7,
    	required: true
    }
     alumnos:{
    collection: 'alumno',
    via:'materias'
  }
  }
};

