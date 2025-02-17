const {ping} = require("./ping");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function polling( pingUrl, maxTime = 5000, pollInterval = 500 ) {

  const startTime = Date.now();
  let timePassed = 0;

  return new Promise(async (resolve, reject) => {
    while (true) {
      timePassed = Date.now() - startTime;
      if (timePassed >= maxTime) {
        reject();
        break;
      } else if (await ping(pingUrl)) {
        resolve(Date.now() - startTime);
      }

      await wait(pollInterval)
    }
  });
}

module.exports = {
  polling
};
