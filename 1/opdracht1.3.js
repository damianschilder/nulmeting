let axios = require("axios");

axios({
	method: 'get',
	url: 'https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json',
  })
  .then((response) => {
	console.log(response.data);
	// console.log(JSON.stringify(response.data))
  })


