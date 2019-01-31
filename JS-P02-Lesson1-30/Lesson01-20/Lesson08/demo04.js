function imgLoad(url) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'blob';
      request.onload = function() {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error('Image didn\'t load successfully; error code:' 
                       + request.statusText));
        }
      };
      request.onerror = function() {
        reject(Error('There was a network error.'));
      };
      request.send();
    });
  }


  imgLoad("https://developer.mozilla.org/static/arrows/chevron-right.3b8652b57659.svg").then(res=>{
      console.log("success",res)
  }).catch(err=>{
    console.log("error:",err)
  })
