const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Pet extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Pet.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement:true,
        primaryKey: true
    },
    petName:{
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true
    },
    descriptionText:{
        type: DataTypes.STRING, 
        allowNull: true
    },
    catergory:{
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true
    },
    typeName:{
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true
    },
    sex:{
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true
    },
    age:{
        type: DataTypes.INTEGER, 
        allowNull: false, 
        required: true
    },
    weight:{
        type: DataTypes.STRING, 
        allowNull: false, 
        required: true
    },
    desexed:{
        type: DataTypes.BOOLEAN, 
        allowNull: false 
    },
    vaccinated:{
        type: DataTypes.BOOLEAN, 
        allowNull: false
    },
    dewormed:{
        type: DataTypes.BOOLEAN, 
        allowNull: false 
    },
    colour:{
        type: DataTypes.STRING, 
        allowNull: true 
    },
    userId:{
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    },
    {
        sequelize: sequelizeInstance, 
        modelName: 'pets',
        timestamps: true,
        freezeTableName: true
    }
)

module.exports = Pet;