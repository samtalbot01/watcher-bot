const getnewest = () => {
    $.get('/data',(data)=>{
        $('#message').text(data);
    });
    setTimeout(getnewest,250);
}
getnewest();