const { successResponce, failResponce } = require('../helpers/dbHelpers');
const {
  getAllServicesDb,
  createServiceDb,
  deleteDocDb,
} = require('../models/servicesModel');

async function serviceIndex(req, res) {
  console.log('serviceIndex');
  const allServices = await getAllServicesDb();
  if (allServices === false) {
    failResponce(res);
    return;
  }
  successResponce(res, allServices);
}
async function createService(req, res) {
  if (!req.body) throw new Error('nepaduoti duomenys i post services');
  const createResult = await createServiceDb(req.body);
  if (createResult === false) {
    failResponce(res);
    return;
  }
  successResponce(res, createResult);
}
async function deleteService(req, res) {
  const { deleteId } = req.params;
  if (!deleteId) {
    throw new Error('nepaduotas deleteId i delete service');
  }

  const deleteResult = await deleteDocDb(deleteId);
  if (deleteResult === false) {
    failResponce(res);
    return;
  }
  if (deleteResult.deletedCount !== 1) {
    failResponce(res, 'nepavyko istrinti', 400);
    return;
  }
  successResponce(res, deleteResult);
}

module.exports = {
  serviceIndex,
  createService,
  deleteService,
};
