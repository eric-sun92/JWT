const CustomErrorAPI = require("./customError");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends CustomErrorAPI {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;
