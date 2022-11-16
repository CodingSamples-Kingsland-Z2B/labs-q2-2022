const url = "http://localhost:9999/api/origami";
let options = {
    method:"POST",
    headers: {
        'Content-Type': 'application/json'  
    }
}

export default function addOrigami(data,jwt){
   
    //console.log(data);
    //set the data
    options.body = JSON.stringify(data);
    //set the headers
    options.headers["Authorization"] = "Bearer "+jwt;
    //console.log(options);
    return fetch(url,options)
            .then(response => {
                //console.log(response)
              return response.json()
            })
            .catch(error=>{
                console.log(error)
                return error;
            });

}