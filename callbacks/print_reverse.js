
var getHTML = require('./http-functions').getHTML;



function printReverse (output){
  console.log(output.split('').reverse().join(''));
}


  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };




getHTML(requestOptions,printReverse);

