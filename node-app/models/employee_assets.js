// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var employeeAssetsSchema = new mongoose.Schema({
    empId: String,
    assetID1: String,
    assetID2: String,
    assetID3: String,
    assetID4: String,
    assetID5: String
});

// Return model
module.exports = restful.model('EmployeeAssets', employeeAssetsSchema);
