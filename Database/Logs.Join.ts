import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from ".";

export class LogsJoin extends Model {
    declare id: number;
    declare bot: string;
    declare guild: string;
    declare user: string;
    declare stats: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

LogsJoin.init({
    bot: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: false
    },
    guild: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: false
    },
    user: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: false
    },
    stats: {
        type: DataTypes.TEXT("long"),
        allowNull: true
    }
}, {
    sequelize: sequelizeInstance,
    tableName: 'logs.Join'
});

export default LogsJoin;