const myArgv = process.argv[2];

const request = require('request');

const path = `https://api.thecatapi.com/v1/breeds/search?q=${myArgv}`

request(`${path}`, (error, response, body) => {
  const data = JSON.parse(body);


  if (path === undefined) {
    console.log('error: ', error);
  }
  else if (path) {
      for (let i = 0; i < data.length; i++) {
    if (data[i].name === myArgv) {
      console.log('data: ', data[i].description)
    } else {
      console.log('Breed not found!')
    }
  }
}

});