module.exports= function(sequelize,DataTypes){
    return sequelize.define('story',{

        comments:DataTypes.STRING,
        owner:DataTypes.STRING,
        reactions:DataTypes.STRING
    })
}