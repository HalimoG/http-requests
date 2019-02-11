module.exports = {

    getHTML:function getHTML (options, callback) {
        var https = require('https');
        var output = ''
        https.get(options, function (response){
             
            response.setEncoding('utf8');
            
            response.on('data', function (data) {
                console.log(output+=data);
              });
            response.on('end', function() {
                console.log('Response stream complete.');
              });
    
          });
        
        callback(output);
        
      }    
}