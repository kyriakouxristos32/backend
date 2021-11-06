import { Sequelize } from 'sequelize';

//Στοχέια για σύνδεση στην βάση
const sequelize = new Sequelize('mydb', 'root', 'HarrisHarris1', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3308'
});

export default sequelize;
