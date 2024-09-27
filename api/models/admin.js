const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Admin extends Model {}

Admin.init({
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
    gender: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true},
    emailAddress: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true,
        unique: true},
    phoneNumber: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true,
        unique: true},
    driversLicense: {
        type: DataTypes.BOOLEAN, 
        allowNull: false, 
        required: true,
        unique: true},
    passwordId: {
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true,
        unique: true}
    },
    {
        sequelize: sequelizeInstance, 
        modelName: 'admins',
        timestamps: true, 
        freezeTableName: true
    }
)

module.exports = Admin;

// TODO Implement this code to drivers license

// driversLicense: [
//     {
//         licenseNumber: {
//         type: DataTypes.INTEGER, 
//         allowNull: true, 
//         required: false},
//     },
//     {
//         dob: {
//         type: DataTypes.STRING, 
//         allowNull: true, 
//         required: false},
//     },
// ],