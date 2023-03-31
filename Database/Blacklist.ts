import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from ".";

export class Blacklist extends Model {
    declare guild: string;
    declare reason: string;
}

Blacklist.init({
    guild: {
        type: DataTypes.BIGINT({ length: 32 }),
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    reason: {
        type: DataTypes.TEXT('tiny'),
        allowNull: false
    },
}, {
    sequelize: sequelizeInstance
});

export default Blacklist;