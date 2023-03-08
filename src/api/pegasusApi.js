import axios from 'axios';

const pegasusApi = axios.create({
  baseURL: 'https://infounit.ten06.eu/pegasus',
});

export const getPorts = async () => {
  const response = await pegasusApi.get('/ports');
  return response.data;
};



export const getCountries = async () => {
  const response = await pegasusApi.get('/countries');
  return response.data;
};

export const getRoutes = async () => {
  const response = await pegasusApi.get('/routes');
  return response.data;
};

export const getAges = async () => {
  const response = await pegasusApi.get('/ages');
  return response.data;
};

//Body
// {
//   "cruise_id" : 4,
//   "date" : "2023-01-30"
// }
export const getRouteAnalysis = async obj => {
  const response = await pegasusApi.post('/dates', obj);
  return response.data;
};


export const getLogin = async obj => {
  const response = await pegasusApi.post('/login',obj);
  return response.data;
};



//=============================
//Body
// {
//   "cruise_id" : 4,
//   "date" : "2023-01-30",
//   "time" : "08:00"
// }

export const getOriginPorts = async obj=> {
  const response = await pegasusApi.post('/origin-ports',obj);
  return response.data;
};


export const getAvailability = async obj => {
  const response = await pegasusApi.post('/availability', obj);
  return response.data;
};

//=============================
//Body
// {
//   "cruise_id": 4,
//   "date": "2023-01-30",
//   "time": "08:00",
//   "passengers": [
//       {
//           "passengerClass": 1,
//           "passengerType": "AD"
//       },
//       {
//           "passengerClass": 1,
//           "passengerType": "AD"
//       }
//   ],
//   "vessel": "MANTALENA"
// }

export const getPricing = async obj => {
  const response = await pegasusApi.post('/pricing', obj);
  return response.data;
};

//=============================
//Body
// {
//   "cruise_id": 4,
//   "date": "2023-01-30",
//   "time": "08:00",
//   "vessel": "MANTALENA"
// }

export const getDiscounts = async obj => {
  const response = await pegasusApi.post('/discounts', obj);
  return response.data;
};
export const getoptional = async obj => {
  const response = await pegasusApi.post('/optional', obj);
  return response.data;
};


export const getFinalize = async obj => {
  const response = await pegasusApi.post('/Finalize', obj);
  return response.data;
};

export const getAgentOrders = async obj => {
  const response = await pegasusApi.post('/agent_orders', obj);
  return response.data;
};


//B2B calls
export const getPortsB2B = async () => {
  const response = await pegasusApi.get('/ports');
  return response.data;
};



export const getCountriesB2B = async () => {
  const response = await pegasusApi.get('/countries');
  return response.data;
};

export const getRoutesB2B = async () => {
  const response = await pegasusApi.get('/routes');
  return response.data;
};

export const getAgesB2B = async () => {
  const response = await pegasusApi.get('/ages');
  return response.data;
};

//Body
// {
//   "cruise_id" : 4,
//   "date" : "2023-01-30"
// }
export const getRouteAnalysisB2B = async obj => {
  const response = await pegasusApi.post('/dates', obj);
  return response.data;
};

//=============================
//Body
// {
//   "cruise_id" : 4,
//   "date" : "2023-01-30",
//   "time" : "08:00"
// }

export const getOriginPortsB2B = async obj=> {
  const response = await pegasusApi.post('/origin-ports',obj);
  return response.data;
};


export const getAvailabilityB2B = async obj => {
  const response = await pegasusApi.post('/b2b-availability', obj);
  return response.data;
};

//=============================
//Body
// {
//   "cruise_id": 4,
//   "date": "2023-01-30",
//   "time": "08:00",
//   "passengers": [
//       {
//           "passengerClass": 1,
//           "passengerType": "AD"
//       },
//       {
//           "passengerClass": 1,
//           "passengerType": "AD"
//       }
//   ],
//   "vessel": "MANTALENA"
// }

export const getPricingB2B = async obj => {
  const response = await pegasusApi.post('/b2b-pricing', obj);
  return response.data;
};

//=============================
//Body
// {
//   "cruise_id": 4,
//   "date": "2023-01-30",
//   "time": "08:00",
//   "vessel": "MANTALENA"
// }

export const getDiscountsB2B = async obj => {
  const response = await pegasusApi.post('/b2b-discounts', obj);
  return response.data;
};
export const getoptionalB2B = async obj => {
  const response = await pegasusApi.post('/b2b-optional', obj);
  return response.data;
};


export const getFinalizeB2B = async obj => {
  const response = await pegasusApi.post('/b2b-Finalize', obj);
  return response.data;
};


