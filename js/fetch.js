fetch('json/hk.json')
//use then
.then((response)=>{
    if(response.status == 404){
        throw new Error("Something was wrong!"); //throw to catch funtion below
    }
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.message);
})