import {Router} from 'react-router'
export  function makeRequest (opts) { 
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url);
    xhr.onload = function () {
      if(401 == this.status){
      }
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4 && xhr.status==401)
      {
         reject({
          status: 'failure',
          statusText:"Unauthorized"
        });
      }
      
    }
    xhr.onerror = function () {
      if(401 == this.status){
        
      }
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }
    var data = opts.data;
    if (data && typeof data === 'object') {
      data = Object.keys(data).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
      }).join('&');
    }
   
    xhr.send(data);    
  });
}


  





