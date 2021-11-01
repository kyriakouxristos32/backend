import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mydb', 'root', 'HarrisHarris1', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3308'
});

export default sequelize;
