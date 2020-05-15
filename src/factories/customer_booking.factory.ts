import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export type Static = typeof Model & {
	new(values?: object, options?: BuildOptions);
};

export function CustomerBookingFactory(sequelize: Sequelize): Static {
	return <Static>sequelize.define("customer_booking", {
		bok_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		customer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		shop_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		barber_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		service_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		status: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		booking_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		booking_fee: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		comment: {
			type: DataTypes.TEXT
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
