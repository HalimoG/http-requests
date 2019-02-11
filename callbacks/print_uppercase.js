
var getHTML = require('./http-functions').getHTML;



function printUppercase (output){
  console.log(output.toUpperCase());
}


  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };




getHTML(requestOptions,printUppercase);

