import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from ".";

export class Subscriptions extends Model {
    declare bot: string;
    declare renewDate: Date;
}

Subscriptions.init({
    bot: {
        type: DataTypes.BIGINT({ length: 32 }),
        primaryKey: true,
        unique: true
    },
    renewDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: sequelizeInstance,
    timestamps: false
});

export default Subscriptions;