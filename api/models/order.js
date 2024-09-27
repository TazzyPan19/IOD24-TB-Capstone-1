const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Order extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Order.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement:true,
        primaryKey: true
    },
    statusType:{
        type: DataTypes.STRING, 
        allowNull: false, 
        required: false
    },
    referralNumber:{
        type: DataTypes.STRING, 
        allowNull: false,
        required: true,
        unique: true
    },
    userId:{
        type: DataTypes.INTEGER, 
        allowNull: false, 
        required: true
    },
    petId:{
        type: DataTypes.INTEGER, 
        allowNull: false, 
        required: true
    }
    },
    {
        sequelize: sequelizeInstance, 
        modelName: 'orders',
        timestamps: true,
        freezeTableName: true
    }
)

module.exports = Order;