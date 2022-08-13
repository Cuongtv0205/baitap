function an(){
    let T = '';
    let n = +document.getElementById('so').value;
    for (i = 1 ;i <= n; i++){
    T = T + i + '<br>';
    document.write(T);
    }
    // document.getElementById('done').innerHTML = T;
}