//---------------This is our custom Ajax library-----------------

function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

//Make an HTTP GET request
EasyHTTP.prototype.get = function(url,callback){
    this.http.open('GET',url,true);

    this.http.onload = function(){
        if(this.status === 200){
            callback(null,this.responseText);
        } else {
            callback(`Error: ${this.status}`,null);
        }
    }

    this.http.send();
}


//Make an HTTP POST request
EasyHTTP.prototype.post = function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    
    this.http.onload = function(){
        callback(null,this.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//Make an HTTP PUT request
EasyHTTP.prototype.put = function(url,data,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    
    this.http.onload = function(){
        callback(null,this.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//Make an HTTP DELETE request
EasyHTTP.prototype.delete = function(url,callback){
    this.http.open('DELETE',url,true);

    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,'POST DELETED');
        } else {
            callback(`Error: ${self.http.status}`);
        }
    }
    this.http.send();
}
