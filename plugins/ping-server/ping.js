const axios = require("axios");

function ping(url) {
  return axios.get(url).then(
    (res) => res.status <= 400,
    () => false
  );
}

module.exports = {ping};
