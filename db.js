const Sequelize = require('sequelize');

const sequelize = new Sequelize('locations', 'postgres', 'password',{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
.authenticate()
.then(()=>{
    console.log('Connection has been established to location database.');
// })

},
function(err){
    console.log(err);
}
);
// .catch(err =>{
//     console.error('Cannot connect to location database', err);
// });

module.exports = sequelize;

