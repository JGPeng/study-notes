function post() {
    let http=new XMLHttpRequest()
    http.open('GET', '/post')
    http.send()
}