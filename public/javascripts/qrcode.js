var QRCode = require("qrcode");

QRCode.toFile('./public/images/b.png', 'google.com', {
  color: {
    dark: '#000F',  // Blue dots
    light: '#0000' // Transparent background
  }
}, function (err) {
  if (err) {
      throw err;
  }
  console.log('done');
});

QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
  console.log(url);
});



