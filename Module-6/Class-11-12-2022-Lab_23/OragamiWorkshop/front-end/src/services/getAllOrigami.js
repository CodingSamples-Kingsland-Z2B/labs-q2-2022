const url = "http://localhost:9999/api/origami";
let options = {
    method:"get",
   
}

export default function getOrigami(){
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