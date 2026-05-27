var DataTypes = require("sequelize").DataTypes;
var _admission_requests = require("./admission_requests");
var _chat_groups = require("./chat_groups");
var _conversations = require("./conversations");
var _group_members = require("./group_members");
var _group_messages = require("./group_messages");
var _messages = require("./messages");
var _projects = require("./projects");
var _service_requests = require("./service_requests");
var _services = require("./services");
var _sub_services = require("./sub_services");
var _testimonials = require("./testimonials");
var _users = require("./users");

function initModels(sequelize) {
  var admission_requests = _admission_requests(sequelize, DataTypes);
  var chat_groups = _chat_groups(sequelize, DataTypes);
  var conversations = _conversations(sequelize, DataTypes);
  var group_members = _group_members(sequelize, DataTypes);
  var group_messages = _group_messages(sequelize, DataTypes);
  var messages = _messages(sequelize, DataTypes);
  var projects = _projects(sequelize, DataTypes);
  var service_requests = _service_requests(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);
  var sub_services = _sub_services(sequelize, DataTypes);
  var testimonials = _testimonials(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  chat_groups.belongsToMany(users, { as: 'user_id_users', through: group_members, foreignKey: "group_id", otherKey: "user_id" });
  users.belongsToMany(chat_groups, { as: 'group_id_chat_groups', through: group_members, foreignKey: "user_id", otherKey: "group_id" });
  group_members.belongsTo(chat_groups, { as: "group", foreignKey: "group_id"});
  chat_groups.hasMany(group_members, { as: "group_members", foreignKey: "group_id"});
  group_messages.belongsTo(chat_groups, { as: "group", foreignKey: "group_id"});
  chat_groups.hasMany(group_messages, { as: "group_messages", foreignKey: "group_id"});
  messages.belongsTo(conversations, { as: "conversation", foreignKey: "conversation_id"});
  conversations.hasMany(messages, { as: "messages", foreignKey: "conversation_id"});
  projects.belongsTo(services, { as: "service", foreignKey: "service_id"});
  services.hasMany(projects, { as: "projects", foreignKey: "service_id"});
  service_requests.belongsTo(services, { as: "service", foreignKey: "service_id"});
  services.hasMany(service_requests, { as: "service_requests", foreignKey: "service_id"});
  sub_services.belongsTo(services, { as: "service", foreignKey: "service_id"});
  services.hasMany(sub_services, { as: "sub_services", foreignKey: "service_id"});
  admission_requests.belongsTo(users, { as: "reviewed_by_user", foreignKey: "reviewed_by"});
  users.hasMany(admission_requests, { as: "admission_requests", foreignKey: "reviewed_by"});
  chat_groups.belongsTo(users, { as: "created_by_user", foreignKey: "created_by"});
  users.hasMany(chat_groups, { as: "chat_groups", foreignKey: "created_by"});
  conversations.belongsTo(users, { as: "admin", foreignKey: "admin_id"});
  users.hasMany(conversations, { as: "conversations", foreignKey: "admin_id"});
  conversations.belongsTo(users, { as: "client", foreignKey: "client_id"});
  users.hasMany(conversations, { as: "client_conversations", foreignKey: "client_id"});
  group_members.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(group_members, { as: "group_members", foreignKey: "user_id"});
  group_messages.belongsTo(users, { as: "sender", foreignKey: "sender_id"});
  users.hasMany(group_messages, { as: "group_messages", foreignKey: "sender_id"});
  messages.belongsTo(users, { as: "sender", foreignKey: "sender_id"});
  users.hasMany(messages, { as: "messages", foreignKey: "sender_id"});
  projects.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(projects, { as: "projects", foreignKey: "user_id"});

  return {
    admission_requests,
    chat_groups,
    conversations,
    group_members,
    group_messages,
    messages,
    projects,
    service_requests,
    services,
    sub_services,
    testimonials,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
