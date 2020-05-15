import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export type Static = typeof Model & {
	new(values?: object, options?: BuildOptions);
};

export function BarberAvailabilityFactory(sequelize: Sequelize): Static {
	return <Static>sequelize.define("barber_availability", {
		bav_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		barber_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		start_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		end_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		day1: {
			type: DataTypes.TIME,
			allowNull: false
		},
		day2: {
			type: DataTypes.TIME,
			allowNull: false
		},
		day3: {
			type: DataTypes.TIME,
			allowNull: false
		},
		day4: {
			type: DataTypes.TIME,
			allowNull: false
		},
		day5: {
			type: DataTypes.TIME,
			allowNull: false
		},
		day6: {
			type: DataTypes.TIME,
			allowNull: false
		},
		day7: {
			type: DataTypes.TIME,
			allowNull: false
		},
		active: {
			type: DataTypes.BOOLEAN,
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
