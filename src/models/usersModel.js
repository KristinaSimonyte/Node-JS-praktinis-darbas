const dbClient = require("../db");
const { getArrayFromDB, createDocument } = require("./dbFunctions");

const DB_NAME = "NodeJS_praktinis_darbas";
const COLLECTION_NAME = "users";

async function getAllUsersDb(sortParam = "asc") {
  const sort = sortParam === "asc" ? 1 : -1;
  return getArrayFromDB(DB_NAME, COLLECTION_NAME, { sort: { name: sort } });
}
async function createUserDb(newUserData) {
  if (!newUserData) throw new Error("nera newUserData");

  return createDocument(DB_NAME, COLLECTION_NAME, newUserData);
}

module.exports = {
  getAllUsersDb,
  createUserDb,
};
