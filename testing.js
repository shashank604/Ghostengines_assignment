
let start_time = new Date().getTime();
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        var y=document.getElementById('time')
        var text=document.createTextNode(new Date().getTime() - start_time)
        y.appendChild(text)
        console.log('Response time:', new Date().getTime() - start_time);
    }
    )
fetch('https://api.agify.io/?name=bella')
    .then((resppp) => {
        return resppp.json();
    })
    .then((data) => {
        var y=document.getElementById('time1')
        var text=document.createTextNode(new Date().getTime() - start_time)
        y.appendChild(text)
        console.log('Response time:', new Date().getTime() - start_time);
    }
    )