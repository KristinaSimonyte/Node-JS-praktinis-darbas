const { successResponce, failResponce } = require('../helpers/dbHelpers');
const {
  getAllUsersDb,
  createUserDb,
} = require('../models/usersModel');

async function usersIndex(req, res) {
  const { sortParam } = req.params;
  const allUsers = await getAllUsersDb(sortParam);
  if (allUsers === false) {
    failResponce(res);
    return;
  }
  successResponce(res, allUsers);
}
async function createUser(req, res) {
  if (!req.body) throw new Error('nepaduoti duomenys i post users');
  const createResult = await createUserDb(req.body);
  if (createResult === false) {
    failResponce(res);
    return;
  }
  successResponce(res, createResult);
}

module.exports = {
  usersIndex,
  createUser,
};
