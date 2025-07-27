function fetchingData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let condition = 0;
      if (condition) {
        resolve('data fetched successfully!');
      } 
      else {
        reject("Error!");
      }
    },2000);
    });
}
fetchingData()
      .then((data)=>{
        console.log(data)
      })
      .catch((error)=>{
        console.error('User Data :',error);
      })