function implementRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(resolve).catch(reject);
    });
  });
}
implementRace([promise1, promise2]).then(value => console.log(value));
