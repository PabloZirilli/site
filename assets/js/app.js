const row = document.querySelector(".row");
const container = document.querySelector(".container");

const header = document.createElement('div');
const logo = document.createElement('svg');
const footer = document.createElement('div');
const body = document.createElement('div');

let message = '<h1>Welcome!</h1><p>we are currently working on the new site ... but you can visit my social networks</p>';

header.className = 'brand';

logo.innerHTML = `<svg id="iso" class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364 364">
<path id="Trazado_1" data-name="Trazado 1" class="cls-1" d="M298,56.6a9.87,9.87,0,1,0,11,8.64h0A9.9,9.9,0,0,0,298,56.6Zm3.45,14.89-2.2-3.7-.38-3.12.28,0c.75-.1,1.1-.45,1-1.1s-.55-.8-1.42-.7l-.65.08,1.05,8.84-3.6.43-1.4-12.09,4.62-.55a4.73,4.73,0,0,1,3.4.65A3.89,3.89,0,0,1,303.82,63a3.75,3.75,0,0,1-1.25,3.27L305.25,71Z" transform="translate(0 0)"/>
<path id="Trazado_2" data-name="Trazado 2" class="cls-1" d="M268.76,118.36a9.44,9.44,0,0,0,12.69-4.14c.09-.17.17-.34.25-.52a10.4,10.4,0,0,0-4.84-13.48,9.28,9.28,0,0,0-7.53-.4,9.14,9.14,0,0,0-5.45,5.08A10.42,10.42,0,0,0,268.76,118.36Z" transform="translate(0 0)"/>
<path id="Trazado_3" data-name="Trazado 3" class="cls-1" d="M362.72,160.58C350.89,60.77,260.39-10.54,160.58,1.28S-10.56,103.61,1.29,203.42s102.32,171.12,202.13,159.3S374.55,260.39,362.72,160.58ZM244.61,95.85a31.42,31.42,0,0,1,18.32-16.14,29.57,29.57,0,0,1,23.55,1.2A30.91,30.91,0,0,1,301.33,122l-.07.15a31.55,31.55,0,0,1-41.71,15,29.84,29.84,0,0,1-16.14-17.53A29.51,29.51,0,0,1,244.61,95.85Zm36.91,62.34a12.27,12.27,0,0,1-15.12,5.46,10.57,10.57,0,0,1-5.16-14l.16-.34a11.27,11.27,0,0,1,14.79-5.35,10.6,10.6,0,0,1,5.33,14.26ZM224.34,71.62l27.74,76.76-21,7.6L203.31,79.23ZM163.85,93.49l16.6,45.93q4.05,11.18,12.1,8.29a8.54,8.54,0,0,0,5-4.44,8.06,8.06,0,0,0,.35-6.52,8.47,8.47,0,0,0-4.33-4.95,7.72,7.72,0,0,0-6.34-.34,10.27,10.27,0,0,0-4.56,3.94l-8.38-23.17c2.39-1.12,4.22-1.9,5.5-2.36a29.36,29.36,0,0,1,23.41,1.19,30,30,0,0,1,15.9,17.53A29.63,29.63,0,0,1,218,152.44a31.91,31.91,0,0,1-31.39,17.75A29.41,29.41,0,0,1,174,166.35q-9.69-5.67-14.33-18.53L142.8,101.09Zm39.68,92.89a12.28,12.28,0,0,1-15.12,5.46,10.57,10.57,0,0,1-5.16-14c.05-.12.11-.23.16-.34a11.26,11.26,0,0,1,14.79-5.35,10.59,10.59,0,0,1,5.47,13.94,2.92,2.92,0,0,1-.14.31ZM41.54,195q-4.63-12.87-.84-23.41a29.5,29.5,0,0,1,7.18-11,32,32,0,0,1,35.48-6.39,29.13,29.13,0,0,1,13.22,11.61,29.73,29.73,0,0,1,2.68-17.29,30,30,0,0,1,17.66-16q13.6-4.9,24.34.2t15.7,18.9l9.95,27.5-21,7.6-9.4-26a11.5,11.5,0,0,0-4.74-6.3A7.62,7.62,0,0,0,125,154a8.8,8.8,0,0,0-1,16,8,8,0,0,0,6.39.25,10.24,10.24,0,0,0,4.6-3.32l7.87,21.75a30.71,30.71,0,0,1-4.56,2.17c-.44.15-.9.28-1.35.42a11,11,0,0,1,5.64,1,10.6,10.6,0,0,1,5.47,13.95c0,.1-.09.21-.14.31A12.28,12.28,0,0,1,132.82,212a10.58,10.58,0,0,1-5.17-14l.17-.34a10.94,10.94,0,0,1,5.68-5.39,29.9,29.9,0,0,1-19.25-2.06,29.29,29.29,0,0,1-13.16-11.8,30.19,30.19,0,0,1-2.72,17.15,29.28,29.28,0,0,1-17.11,16c-1.28.46-3.2,1-5.77,1.63L67.12,190a8.85,8.85,0,0,0,5.92.22,8,8,0,0,0,4.73-4.44,8.52,8.52,0,0,0,.27-6.59,8,8,0,0,0-4.47-4.77,8.48,8.48,0,0,0-6.63-.25q-8.09,2.93-4,14.13l16.62,46-21,7.6Zm57,101.4,4.75-40.32-17.77,6.43L77.57,240.6l52.13-18.83L124.81,262l19.79-7.16,8,22Zm54.31-19.63-20.27-56.06,21-7.6,20.27,56.06Zm55.6-20.09L195.89,222a7.68,7.68,0,0,0-3,.35c-3.83,1.4-4.69,5-2.57,10.86l9.62,26.59-21,7.6-11.08-30.63q-4.38-12.13-.38-21.77t15.1-13.62a46.06,46.06,0,0,1,6.63-1.7l.2.55,19.86-7.16,20.26,56.05Zm26-9.42-27.74-76.75,21-7.6,27.75,76.75Zm26-9.37-27.74-76.76,21-7.6,27.74,76.76Zm26-9.4-20.27-56.06,21-7.6,20.27,56.06Zm14.1-150.88a11.44,11.44,0,1,1,10-12.71,11.44,11.44,0,0,1-10,12.71Z" transform="translate(0 0)"/>
</svg>`;

body.innerHTML = message;
body.className = 'message';

footer.className = 'footer';

function load(){
    row.appendChild(header);
    row.appendChild(body);
    row.appendChild(footer);
    header.appendChild(logo);
    socialFooter();
}

function socialFooter(){
    const ul = document.createElement('ul');
    ul.setAttribute('id','social');

    const social = [
        {url:'https://www.linkedin.com/in/pablo-zirilli/', icon:'assets/images/linkedin.svg', name: 'linkedin'},
        {url:'http://behance.net/zirillipablo', icon:'assets/images/behance.svg', name: 'behance'},
        {url:'https://github.com/PabloZirilli', icon:'assets/images/github.svg', name: 'github'}
    ];
    for(let i = 0; i < social.length; i++ ) {
        let socialItem = document.createElement('li');
        socialItem.innerHTML = `<a href="${social[i].url}" target="_new" class="social ${social[i].name}"><img src="${social[i].icon}" alt=""></a>`;
        socialItem.setAttribute('class','');
        ul.appendChild(socialItem);
        footer.appendChild(ul);
        row.appendChild(footer);
    }
}

load();

// Creo una linea de tiempo
let tl = new TimelineMax({});

// Agrego elementos al timeline
tl.to('.logo', 1.4, {opacity: 1, delay: 1});
tl.to('.message', 2, {opacity: 1});
tl.to('.linkedin , .behance , .github', 1, {opacity: 1});
