import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from ".";

export class Settings extends Model {
    declare id: number;
    declare bot: string;
    declare guild: string;
    declare role: string;
    declare successTitle: string;
    declare successMessage: string;
    declare successColor: string;
}

Settings.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bot: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: false
    },
    guild: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: false
    },
    role: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: true
    },
    successTitle: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Compte vérifiée"
    },
    successMessage: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Votre compte a été vérifié avec succès."
    },
    successColor: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "#00ff00"
    }
}, {
    sequelize: sequelizeInstance,
    timestamps: false
});

export default Settings;
