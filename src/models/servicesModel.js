const {
  getArrayFromDB,
  createDocument,
  removeDocument,
} = require('./dbFunctions');

const DB_NAME = 'NodeJS_praktinis_darbas';
const COLLECTION_NAME = 'services';

async function getAllServicesDb() {
  console.log('getAllServicesDb');
  return getArrayFromDB(DB_NAME, COLLECTION_NAME);
}
async function createServiceDb(newServiceData) {
  if (!newServiceData) throw new Error('nera newServiceData');

  return createDocument(DB_NAME, COLLECTION_NAME, newServiceData);
}
async function deleteDocDb(stringId) {
  if (!stringId) throw new Error('nera stringId deleteDocDb');

  return removeDocument(DB_NAME, COLLECTION_NAME, stringId);
}

module.exports = {
  getAllServicesDb,
  createServiceDb,
  deleteDocDb,
};
