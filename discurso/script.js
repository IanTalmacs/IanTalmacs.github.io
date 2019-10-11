
let i = 0


function addSubtema() {
    let x = document.getElementById('subtema');
    let clone = x.cloneNode(true);
    clone.id = 'subtema' + ++i;
    x.parentNode.appendChild(clone);
    let ref = document.getElementById('add-subtema')
    ref.before(clone)
}

let x 


function remove(elem) {
    x = document.getElementById(elem.parentNode.id);
    x.remove();
}
