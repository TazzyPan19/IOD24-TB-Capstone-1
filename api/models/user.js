const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement:true, 
        primaryKey: true},
    firstName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true},
    lastName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true},
    roleName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true},
    gender: {
        type: DataTypes.STRING, 
        allowNull: true,
        defaultValue: ''
        },
    emailAddress: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true,
        unique: true},
    phoneNumber: {
        type: DataTypes.STRING, 
        allowNull: true, 
        required: false,
        unique: true},
    driversLicense: {
        type: DataTypes.STRING, 
        allowNull: true, 
        required: false,
        unique: true},
    passwordId: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true,
        unique: true}
    },
    {
        sequelize: sequelizeInstance, 
        modelName: 'users',
        timestamps: true, 
        freezeTableName: true
    }
)

module.exports = User;