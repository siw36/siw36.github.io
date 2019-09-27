function userData(userName){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET","https://api.github.com/users/" + userName,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
