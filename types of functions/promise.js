let promise=new Promise((resolve, reject) => {
    setTimeout(()=>{
        let success=true;
        if(success){
            resolve("data is fetched ");
        }else{
            reject("data is not fetched");
        }
    },2000);
})
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error); 
  });