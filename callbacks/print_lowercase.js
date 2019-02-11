
var getHTML = require('./http-functions').getHTML;



function printLowercase (output){
  console.log(output.toLowerCase());
}


  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };




getHTML(requestOptions,printLowercase);

