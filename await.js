let getJson = async ()=>{
    let response = await fetch('hk.json').then((getData)=>{
        if(getData.status == 404){
            throw new Error('Something was wrong in json');
        }
        return getData.json();
    });
    // let data = await response.json();
    return response; 
    
}

getJson().then((datas)=>{
    console.log(datas);
}).catch((error)=>{
    console.log(error.message);
})
