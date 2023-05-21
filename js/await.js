let getJson = async ()=>{
    let response = await fetch('json/hk.json');
        if(response.status == 404){
            throw new Error('Something was wrong in json');
        }           
    let data = await response.json();
    return data;     
}

getJson().then((datas)=>{
    console.log(datas);
}).catch((error)=>{
    console.log(error.message);
})
