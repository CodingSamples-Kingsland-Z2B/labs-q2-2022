const url = require("url");
const fs = require("fs");
const path = require("path");


function getContentType(url){
    if(url.endsWith("css")){
        return 'text/css';
    }else if(url.endsWith("jpg")){
        return 'image/jpg';
    }else if(url.endsWith("ico")||url.endsWith("png")){
        return 'image/png';
    }else if(url.endsWith("jpeg")){
        return "image/jpeg";
    }//add more here

}

module.exports = (req,res)=>{
    const pathname = url.parse(req.url).pathname;

    if(pathname.startsWith("/content")&& req.method === "GET"){
        let filepath = path.normalize(
            path.join(__dirname,`../${pathname}`)
        );
        if((pathname.endsWith("png")||pathname.endsWith("jpg")||pathname.endsWith("jpeg")||pathname.endsWith("ico"))&&req.method ==="GET"){
            //console.log(filepath);
            fs.readFile(filepath,(err,data)=>{
                if(err){
                    console.log(err);
                    res.writeHead(404,{
                        'Content-Type':"text/plain",
                    });
                    res.write("error was found");
                    res.end();
                    return;
                }
    
                //console.log(pathname);
                res.writeHead(200,{
                    'Content-Type':getContentType(pathname),
                });
                res.write(data);
                res.end();
                return;
            });
        }else {
            // console.log(filepath);
            fs.readFile(filepath,"utf8",(err,data)=>{
                if(err){
                    console.log(err);
                    res.writeHead(404,{
                        'Content-Type':"text/plain",
                    });
                    res.write("error was found");
                    res.end();
                    return;
                }
    
                //console.log(pathname);
                res.writeHead(200,{
                    'Content-Type':getContentType(pathname),
                });
                res.write(data);
                res.end();
                return;
            });
        }
    }else{
        return true;
    }
}