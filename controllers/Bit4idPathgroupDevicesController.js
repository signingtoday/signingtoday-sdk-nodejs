const Controller = require('./Controller');

class Bit4idPathgroupDevicesController {
  constructor(Service) {
    this.service = Service;
  }

  async deviceAuthorizationDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.deviceAuthorizationDELETE);
  }

  async deviceAuthorizationGET(request, response) {
    await Controller.handleRequest(request, response, this.service.deviceAuthorizationGET);
  }

  async deviceAuthorizationPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.deviceAuthorizationPOST);
  }

  async devicesGET(request, response) {
    await Controller.handleRequest(request, response, this.service.devicesGET);
  }

}

module.exports = Bit4idPathgroupDevicesController;
