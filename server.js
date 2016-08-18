var http = require('http')
var url = require('url')

var port = process.env.PORT || Number(process.argv[2]);
var Course_id = {
  11111: {
    	"11111": [

        {
        
          "Student Name":Bruce Lee
	"Score": 84,
       
	 }
     
      
      ]
  },
22222: {
    	"22222": [

        {
        
          "Student Name":Jackie Chen
	"Score": 93,
       
	 }
     
      
      ]
  },

33333: {
    	"33333": [

        {
        
          "Student Name":Jet Li
	"Score": 88,
       
	 }
     
      
      ]
  }
function parsetime(cid) {
  return Student_id[cid];
}

var server = http.createServer(function (req, res) {
  var result;
  var parsedUrl = url.parse(req.url, true);

  if (/^\/api\/score/.test(req.url)) {
    var cid = parsedUrl.query.course_id;
    result = parsetime(cid);
  }
    

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(port);
