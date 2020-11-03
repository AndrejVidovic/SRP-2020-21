const winston = require("winston");
const LoginService = require("./login.service");
const UserService = require("./user.service");
const MedicalTestService = require("./medical-test.service");
const { User, MedicalTest } = require("../models");


const logger = winston.loggers.get("logger");

exports.userServiceInstance = new UserService({ logger, userModel: User });
exports.loginServiceInstance = new LoginService({ logger, userModel: User });
exports.MedicalTestService=new MedicalTestService({
  logger,
  testModel:MedicalTest,
});
