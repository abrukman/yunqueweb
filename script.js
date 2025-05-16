const ig = ['INSTAGRAM2.svg', 'INSTAGRAM2invert.svg'];
const mail = ['MAIL2.svg', 'MAIL2invert.svg'];
const vimeo = ['VIMEO2.svg', 'VIMEO2invert.svg'];

const links = document.getElementsByTagName('img');

const cambiarImagenes = (elem, arr) => {
    elem.onmouseover = () => {elem.src = `./imagenes/${arr[1]}`};
    elem.onmouseout = () => {elem.src = `./imagenes/${arr[0]}`};
};

cambiarImagenes(links[0], ig);
cambiarImagenes(links[1], vimeo);
cambiarImagenes(links[2], mail);