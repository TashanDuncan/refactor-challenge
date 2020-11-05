let html = '';

let color = Math.floor(Math.random() * 256);


for (let i = 1; i <= 10; i++) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    let randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;