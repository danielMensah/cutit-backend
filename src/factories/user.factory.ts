import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export type Static = typeof Model & {
	new (values?: object, options?: BuildOptions);
};

export function UserFactory (sequelize: Sequelize): Static {
	return <Static>sequelize.define("app_user", {
		user_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		firebase_id: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true
		},
		user_type: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		shop_id: {
			type: DataTypes.INTEGER,
		},
		first_name: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		last_name: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		date_of_birth: {
			type: DataTypes.DATEONLY
		},
		main_phone: {
			type: DataTypes.TEXT
		},
		secondary_phone: {
			type: DataTypes.TEXT
		},
		address_line1: {
			type: DataTypes.TEXT
		},
		address_line2: {
			type: DataTypes.TEXT
		},
		post_code: {
			type: DataTypes.TEXT
		},
		city: {
			type: DataTypes.TEXT
		},
		country: {
			type: DataTypes.TEXT
		},
		img_url: {
			type: DataTypes.TEXT
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		created_by: {
			type: DataTypes.INTEGER,
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_by: {
			type: DataTypes.INTEGER,
		}
	}, {
		freezeTableName: true,
		timestamps: false
	});
}
