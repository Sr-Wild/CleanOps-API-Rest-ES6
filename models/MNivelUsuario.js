module.exports=(sequelize, Sequelize)=>{
    const NivelUsuario =sequelize.define('NivelUsuario',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descripcion:{
            type: Sequelize.STRING(10)
        },
        estatus:{
            type: Sequelize.INTEGER
        }
    })

    NivelUsuario.associate = (models) => {
		NivelUsuario.belongsTo(models.Usuario, { foreignKey: 'NivelUsuarioId' })
	}
    
    return NivelUsuario;
}