

// position lon lat latitude
let lon = 0;
let lat = 0;
let altitude = 0;

let precision = 0;
let speed = 0;



//  watch position 
let id;
let target;
let optionswatch;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you reached the target");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

optionswatch = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, optionswatch);

console.log(id)

navigator.geolocation.getCurrentPosition((position) => {
  console.log("##############  position ############## ");
  
  lon = position.coords.longitude
  lat = position.coords.latitude
  altitude = position.coords.altitude


  console.log(lon)
  console.log(lat)
  console.log(altitude)
});

// la precision de mesure
navigator.geolocation.getCurrentPosition((position) => {
  console.log("############## prcision ######################");
  precision = position.coords.precision
  console.log(precision)
});
// sa vitesse
navigator.geolocation.getCurrentPosition((position) => {
  console.log("############## vitesse ######################");
  speed = position.coords.speed
  console.log(speed)
});
// la date a partir du timestamp
  console.log("############## date ######################");
    const date = new Date();
    console.log(date); // Full date and time
    console.log(date.toLocaleDateString()); // 13/11/2026
// // use 2 methodes getcurrentposition and watchposition

// getcurrentposition
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude: ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);


