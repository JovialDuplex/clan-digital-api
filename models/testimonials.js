const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testimonials', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 5
    },
    client_picture: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    sent_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'testimonials',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
