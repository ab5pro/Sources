import * as sequelize from 'sequelize';

export const sequelizeInstance = new sequelize.Sequelize({
    host: "",
    username: "",
    password: "",
    database: "",
    port: 3306,
    dialect: '',
    define: {
        timestamps: true
    },
    logging: false,
    timezone: "Europe/Paris",
    pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 300000
    }
});

export { default as Auths } from './Auths';
export { default as Settings } from './Settings';
export { default as IPs } from './IPs';
export { default as Bots } from './Bots';
export { default as Admins } from './Admins';
export { default as LogsCommands } from './Logs.Commands';
export { default as LogsJoin } from './Logs.Join';
export { default as Blacklist } from './Blacklist';
export { default as Subscriptions } from './Subscriptions';