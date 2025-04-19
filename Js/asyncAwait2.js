function fetchingPostData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Post data fetched!!!')
    },2000)
  })
}

function fetchingCommentData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Comment data fetched!!!');
    },2000)
  })
}

async function blogdata() {
  try {
    console.log('fetching the user data...')
    // const postData = await fetchingPostData();
    // const commentData = await fetchingCommentData();
    const [postData,commentData] = await Promise.all([fetchingPostData(),fetchingCommentData()]);
    console.log(postData);
    console.log(commentData);
  }
  catch(error){
    console.error(error);
  }
}
blogdata();
