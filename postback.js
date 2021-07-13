function PostBack(){
    var http = new XMLHttpRequest();
    // var url = "https://postmarket.pro/";
    // var params = 'lol';

    // http.open("POST", url, true);

    // http.onreadystatechange = function() {
    //     if(http.readyState == 4 && http.status == 200) {
    //         alert(http.responseText);
    //     }
    //  }
    // http.send(params);
    http.open('POST', 'postmarket.pro/cpa/48686', true);
    http.send('lorem=ipsum&name=binny');
}