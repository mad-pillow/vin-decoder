class VinService {
  constructor() {
    this.API_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/';

    this.getCarData = this.getCarData.bind(this);
    this.getVariables = this.getVariables.bind(this);
  }

  async getData(url) {
    const data = await fetch(url);

    if (!data.ok) {
      throw new Error(`Cannot fetch data from ${url}. Status - ${data.status}`);
    }

    return await data.json();
  }

  async getCarData(vin) {
    const carData = await this.getData(`${this.API_URL}decodevin/${vin}?format=json`);

    let processedCarData = carData.Results.map((car) => {
      const processedCar = { Variable: car.Variable, Value: car.Value };

      return processedCar;
    });

    processedCarData = processedCarData.filter((item) => item.Value);

    return { message: carData.Message, carData: processedCarData };
  }

  async getVariables() {
    const variables = await this.getData(`${this.API_URL}getvehiclevariablelist?format=json`);

    const processedVariablesData = variables.Results.map((variable) => {
      return { Id: variable.ID, Name: variable.Name, Description: variable.Description };
    });

    return { message: variables.Message, variables: processedVariablesData };
  }

  async getVariableDetails(id) {
    const variables = await this.getData(`${this.API_URL}getvehiclevariablelist?format=json`);
    let variableDetails = {};
    variables.Results.forEach((item) => {
      if (item.ID === Number(id)) {
        variableDetails = Object.assign({}, item);
        return;
      }
    });

    return variableDetails;
  }
}

const vinService = new VinService();

export default vinService;
