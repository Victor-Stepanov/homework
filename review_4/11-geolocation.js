const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function getPostion(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      error => {
        reject(error);
      },
      options
    );
  });
}

getPostion(options)
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err));
