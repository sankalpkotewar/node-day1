const dns = require('dns');
const util = require('util');

let lookupSite = url => {
  return new Promise((resolve, reject) => {
    // Get the IP address of the server, by reverse DNS lookup
    dns.lookup(url, (err, addresses, family) => {
      if (err) {
        reject(err);
      } else {
        resolve(addresses);
      }
    });
  });
};

//  DNS Parameters: https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml
let resolveSite = (url, record) => {
  return new Promise((resolve, reject) => {
    dns.resolve(url, record, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

let resolveNameServer = url => {
  return new Promise((resolve, reject) => {
    dns.resolveNs('maasthi.com', (err, addresses) => {
      if (err) {
        reject(err);
      } else {
        resolve(addresses);
      }
    });
  });
};

let driver = async () => {
  try {
    const ip = await lookupSite('google.co.in');
    const resolve_result = await resolveSite('google.com', 'TXT');
    const ns = await resolveNameServer('google.com');

    util.log('IP', ip);
    util.log('Resolve', resolve_result);
    util.log('NS', ns);
    util.log('Completed!');
  } catch (error) {
    console.log(error);
  }
};

driver();
util.log('Starting the process. Please wait...');
