import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from ".";

export class IPs extends Model {
    declare id: number;
    declare user: string;
    declare v4: string;
    declare v6: string;
}

IPs.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user: {
        type: DataTypes.BIGINT({ length: 32 }),
        allowNull: false
    },
    ip: {
        type: DataTypes.STRING(),
        allowNull: true
    }
}, {
    sequelize: sequelizeInstance
});

export default IPs;