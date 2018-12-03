var os = require('os');
var ni = os.networkInterfaces();
console.log(ni);
for (const key in ni) {
    console.log('key====> ', key);
    console.log('mac====> ', ni[key][0].mac);
}