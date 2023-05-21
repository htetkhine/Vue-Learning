let request = (resource)=>{

    return new Promise((resolve,reject)=>{

        let xhr =new XMLHttpRequest;
        xhr.addEventListener("readystatechange",function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                let data = this.responseText;
                let jsonData = JSON.parse(data);
                resolve(jsonData);
            }else if(xhr.status === 404){
                reject('something was wrong');
            }
        })
    
        xhr.open('GET', resource);
        xhr.send();
    })    
}

request('json/hk.json')
.then((data)=>{
    console.log(data);
    return request('json/bio.json');
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

