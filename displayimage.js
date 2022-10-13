function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}
display_image('https://i.imgur.com/FfARmys.png', 
                 200, 
                 200, 
                 'JavaScriptImage');
