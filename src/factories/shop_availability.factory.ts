import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export type Static = typeof Model & {
	new(values?: object, options?: BuildOptions);
};

export function ShopAvailabilityFactory(sequelize: Sequelize): Static {
	return <Static>sequelize.define("shop_availability", {
		sav_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		shop_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		day1: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		day2: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		day3: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		day4: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		day5: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		day6: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		day7: {
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
