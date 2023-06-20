const iss = require('./iss');

iss.fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }


  console.log('It worked! Returned IP:', ip);
});

iss.fetchCoordsByIP('70.67.13.77', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

const exampleCoords = { latitude: '48.4284207', longitude: '-123.3656444' };

iss.fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});