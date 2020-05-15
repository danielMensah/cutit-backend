import { Options } from 'sequelize';

export default {
	dialect: 'postgres',
	ssl: true,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false // <<<<<<< YOU NEED THIS
		}
	}
} as Options;
