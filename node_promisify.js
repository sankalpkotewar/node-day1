const util = require('util');
const dns = require('dns');

let lookupSite = util.promisify(dns.lookup);

lookupSite('google.co.in')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
