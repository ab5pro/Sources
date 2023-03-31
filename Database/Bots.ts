import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from ".";

export class Bots extends Model {
    declare id: string;
    declare type: number;
    declare account: string;
    declare secret: string;
    declare token: string;
    declare buyer: string[];
    declare owners: string[];
    declare logHook: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Bots.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    type: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    secret: {
        type: DataTypes.STRING,
        allowNull: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    buyer: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: JSON.stringify([])
    },
    owners: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: JSON.stringify([])
    },
    logHook: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: sequelizeInstance
});

Bots.afterFind(async (bots) => {
    if (!bots) return;
    if (Array.isArray(bots)) {
        bots.forEach(bot => {
            bot.owners = JSON.parse(bot.owners as unknown as string);
            bot.buyer = JSON.parse(bot.buyer as unknown as string);
        });
    } else {
        (bots as Bots).owners = JSON.parse((bots as Bots).owners as unknown as string);
        (bots as Bots).buyer = JSON.parse((bots as Bots).buyer as unknown as string);
    }
});

export default Bots;