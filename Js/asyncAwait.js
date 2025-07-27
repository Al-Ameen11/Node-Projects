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
async function getUserData() {
  try {
    const userData = await fetchingData();
    console.log(userData) 
  } catch (error) {
    console.error('User Data :',error);
  }
}
getUserData();