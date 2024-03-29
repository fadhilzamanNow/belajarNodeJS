const http = require('http')

const add = http.createServer({},(req,res)=>{
    if(req.url == "/home"){
        res.end("This is homepage");
    }
    else if(req.url == "/server"){
        res.end("This is server");
    }
   
    res.end(`
    <h1 style="text-align:center">Sorry, the page you are looking for is not found at the moment</h1>
    <p>lorem </p>
    `
    )
    
    
});

add.listen(5000,"localhost")


