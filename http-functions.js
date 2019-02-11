module.exports = {

    getHTML: function (options, callback) {
        var output = ''
    https.get(options, function (response){
         
        response.setEncoding('utf8');
        
        response.on('data', function (data) {
            output+=data
          });
        response.on('end', function() {
            console.log('Response stream complete.');
            callback(output);
          });

      });
    
      }    
}