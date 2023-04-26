const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => { //FUNCION QUE DEFINE EL MODELO !!!!! ACA NO ESTA EL MODELO! !!!!!
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID, // para que no se repita con el de la API
      defaultValue: DataTypes.UUIDV4,
      // allowNull: false, // no permite que esté vacio
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false, // ESTO NO PUEDE VENIR VACIO 
    },
    healthscore: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png'  // SI NO PONES IMAGEN TE MANDO ESTA 
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    dishtypes: {
      type: DataTypes.STRING
      
    }, 
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,  // SI ES TRUE VIENE DE LA DB SI ES FALSE DE LA API
    }  
  },{
    timestamps: false  // NO ME TRAE LOS DATOS DE LA COLUMNA. LUGAR FECHA Y HORA, EN REDES SOCIALES SIRVE
});
};