const User = require("../models/User.js");
const Post = require("../models/Post.js");

// create associations
User.hasMany(Post, {
    foreignKey: "user_id"
});

Post.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Post };