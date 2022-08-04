(async function () {

    const globals = await fetch('/globals.json').then(res => res.json());

    document.getElementsByTagName('title')[0].innerHTML = `COMING SOON | ${globals.name}`;
    document.getElementById('data-loading').style.display = 'none';
    document.getElementById('data-footer').innerHTML = `<p>${globals.footerCopy || `Copyright &copy; ${new Date().getFullYear()} - ${globals.name}. &nbsp;All rights reserved`}</p>`;
    
    const h1 = document.getElementById('data-app-name')
    h1.innerHTML = globals.name;
    h1.style.color = globals.titleColour || '#bdbdbd';
    
    const content =document.getElementById('data-content')
    
    content.style.display = 'grid';
    
    if (globals.backgroundPath) {
        content.style.backgroundImage = `url(${globals.backgroundPath})`;
    }
    
    if(!globals.logoPath.endsWith('.svg')){
        const imageLogo = document.createElement('img');
        document.getElementById('data-logo').appendChild(imageLogo);
        imageLogo.src = globals.logoPath
        imageLogo.setAttribute('alt', `${globals.name} logo`);
    } else {
        const svgContents = await fetch(globals.logoPath).then(res => res.text());
        const imgSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        document.getElementById('data-logo').appendChild(imgSvg);
        imgSvg.outerHTML = svgContents;
    }

})();