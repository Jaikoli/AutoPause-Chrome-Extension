document.addEventListener('visibilitychange',()=>{
  const video=document.querySelector('video');
  if(video){
    if(document.hidden){
      video.pause();

    }else{
      video.play();
    }
  }
});


chrome.runtime.onMessage.addEventListener((Request,sender,sendResponse)=>{
  if(requestAnimationFrame.action==='checkVisibility'){
    const video =document.querySelector('video');
    if(video){
      if(document.hidden){
        video.pause();
      }else{
        video.play();
      }
    }
  }
});