const dev = {
  smsContext: process.env.REACT_APP_DEVELOPMENT_SERVER_ADDRESS
};

const prod = {
  smsContext: process.env.REACT_APP_PRODUCTION_SERVER_ADDRESS
};

export const environment = process.env.REACT_APP_DEVELOPMENT_SERVER_ADDRESS === "production" ? prod : dev;