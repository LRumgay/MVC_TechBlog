const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          comment_text : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
          },

          post_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                  model: 'post',
                  key: 'id'
              }
          },

          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
    );




module.exports = Post;