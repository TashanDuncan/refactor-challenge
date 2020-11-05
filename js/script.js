let html = '';

const color = () => Math.floor(Math.random() * 256);


for (let i = 1; i <= 10; i++) {
    let randomRGB = `rgb( ${color()}, ${color()}, ${color()} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;