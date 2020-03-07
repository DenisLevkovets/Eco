function add() {
    let el = document.createElement('p');
    let name = document.getElementById('name').value;
    let time = document.getElementById('time').value;

    el.innerHTML = name+' ' + time;
    let list = document.getElementById('list');

    list.appendChild(el);
}


function show() {
    document.getElementById('detailes').style.display='block'
}
