// An application depends on what roles it will have.

// const allRoles = {
//   user: ["common", "employee"],
//   client: ["common", "client"],
//   admin: ["common", "admin"],
// };

const allRoles = {
  admin: ["common", "admin"],
  client: ["common", "client"],
  employee: ["common", "employee"],
  user: ["common", "employee"],
  common: ["common"],
};


const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
