import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from ".";

export class LogsCommands extends Model {
    declare id: number;
    declare bot: string;
    declare command: string;
    declare args: string;
    declare success: boolean;
    declare createdAt: Date;
    declare updatedAt: Date;
}

LogsCommands.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bot: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: false
    },
    user: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: false
    },
    guild: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: false
    },
    command: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    args: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    success: {
        type: DataTypes.BOOLEAN(),
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize: sequelizeInstance,
    tableName: 'logs.Commands',
});

export default LogsCommands;