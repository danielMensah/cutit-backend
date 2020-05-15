import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export type Static = typeof Model & {
	new(values?: object, options?: BuildOptions);
};

export function ShopFactory(sequelize: Sequelize): Static {
	return <Static>sequelize.define("shop", {
		sho_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		owner_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		phone_number: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		address_line1: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		address_line2: {
			type: DataTypes.TEXT,
		},
		post_code: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		city: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		country: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		created_by: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_by: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		freezeTableName: true,
		timestamps: false
	});
}
