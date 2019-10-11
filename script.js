let x = document.getElementById('text').value;

function enviar() {
    //window.open('discurso/discurso.html', '_self');
}
function passText() {
    let x = document.getElementById('text').value;
    if (x === 'discurso') {
        window.open('discurso/discurso.html', '_self')
    } else {
       document.getElementById('error').style.display = 'block';
    }
}


