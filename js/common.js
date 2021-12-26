function randomUrl($arrUrl){
  location.href=($arrUrl[Math.floor(Math.random()*$arrUrl.length)]+".html");
  }