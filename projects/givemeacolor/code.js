const colorsArray = [
    {
        "name": "aliceblue",
        "hex": "#f0f8ff"
    },
    {
        "name": "antiquewhite",
        "hex": "#faebd7"
    },
    {
        "name": "aqua",
        "hex": "#00ffff"
    },
    {
        "name": "aquamarine",
        "hex": "#7fffd4"
    },
    {
        "name": "azure",
        "hex": "#f0ffff"
    },
    {
        "name": "beige",
        "hex": "#f5f5dc"
    },
    {
        "name": "bisque",
        "hex": "#ffe4c4"
    },
    {
        "name": "black",
        "hex": "#000000"
    },
    {
        "name": "blanchedalmond",
        "hex": "#ffebcd"
    },
    {
        "name": "blue",
        "hex": "#0000ff"
    },
    {
        "name": "blueviolet",
        "hex": "#8a2be2"
    },
    {
        "name": "brown",
        "hex": "#a52a2a"
    },
    {
        "name": "burlywood",
        "hex": "#deb887"
    },
    {
        "name": "cadetblue",
        "hex": "#5f9ea0"
    },
    {
        "name": "chartreuse",
        "hex": "#7fff00"
    },
    {
        "name": "chocolate",
        "hex": "#d2691e"
    },
    {
        "name": "coral",
        "hex": "#ff7f50"
    },
    {
        "name": "cornflowerblue",
        "hex": "#6495ed"
    },
    {
        "name": "cornsilk",
        "hex": "#fff8dc"
    },
    {
        "name": "crimson",
        "hex": "#dc143c"
    },
    {
        "name": "cyan",
        "hex": "#00ffff"
    },
    {
        "name": "darkblue",
        "hex": "#00008b"
    },
    {
        "name": "darkcyan",
        "hex": "#008b8b"
    },
    {
        "name": "darkgoldenrod",
        "hex": "#b8860b"
    },
    {
        "name": "darkgray",
        "hex": "#a9a9a9"
    },
    {
        "name": "darkgreen",
        "hex": "#006400"
    },
    {
        "name": "darkgrey",
        "hex": "#a9a9a9"
    },
    {
        "name": "darkkhaki",
        "hex": "#bdb76b"
    },
    {
        "name": "darkmagenta",
        "hex": "#8b008b"
    },
    {
        "name": "darkolivegreen",
        "hex": "#556b2f"
    },
    {
        "name": "darkorange",
        "hex": "#ff8c00"
    },
    {
        "name": "darkorchid",
        "hex": "#9932cc"
    },
    {
        "name": "darkred",
        "hex": "#8b0000"
    },
    {
        "name": "darksalmon",
        "hex": "#e9967a"
    },
    {
        "name": "darkseagreen",
        "hex": "#8fbc8f"
    },
    {
        "name": "darkslateblue",
        "hex": "#483d8b"
    },
    {
        "name": "darkslategray",
        "hex": "#2f4f4f"
    },
    {
        "name": "darkslategrey",
        "hex": "#2f4f4f"
    },
    {
        "name": "darkturquoise",
        "hex": "#00ced1"
    },
    {
        "name": "darkviolet",
        "hex": "#9400d3"
    },
    {
        "name": "deeppink",
        "hex": "#ff1493"
    },
    {
        "name": "deepskyblue",
        "hex": "#00bfff"
    },
    {
        "name": "dimgray",
        "hex": "#696969"
    },
    {
        "name": "dimgrey",
        "hex": "#696969"
    },
    {
        "name": "dodgerblue",
        "hex": "#1e90ff"
    },
    {
        "name": "firebrick",
        "hex": "#b22222"
    },
    {
        "name": "floralwhite",
        "hex": "#fffaf0"
    },
    {
        "name": "forestgreen",
        "hex": "#228b22"
    },
    {
        "name": "fuchsia",
        "hex": "#ff00ff"
    },
    {
        "name": "gainsboro",
        "hex": "#dcdcdc"
    },
    {
        "name": "ghostwhite",
        "hex": "#f8f8ff"
    },
    {
        "name": "goldenrod",
        "hex": "#daa520"
    },
    {
        "name": "gold",
        "hex": "#ffd700"
    },
    {
        "name": "gray",
        "hex": "#808080"
    },
    {
        "name": "green",
        "hex": "#008000"
    },
    {
        "name": "greenyellow",
        "hex": "#adff2f"
    },
    {
        "name": "grey",
        "hex": "#808080"
    },
    {
        "name": "honeydew",
        "hex": "#f0fff0"
    },
    {
        "name": "hotpink",
        "hex": "#ff69b4"
    },
    {
        "name": "indianred",
        "hex": "#cd5c5c"
    },
    {
        "name": "indigo",
        "hex": "#4b0082"
    },
    {
        "name": "ivory",
        "hex": "#fffff0"
    },
    {
        "name": "khaki",
        "hex": "#f0e68c"
    },
    {
        "name": "lavenderblush",
        "hex": "#fff0f5"
    },
    {
        "name": "lavender",
        "hex": "#e6e6fa"
    },
    {
        "name": "lawngreen",
        "hex": "#7cfc00"
    },
    {
        "name": "lemonchiffon",
        "hex": "#fffacd"
    },
    {
        "name": "lightblue",
        "hex": "#add8e6"
    },
    {
        "name": "lightcoral",
        "hex": "#f08080"
    },
    {
        "name": "lightcyan",
        "hex": "#e0ffff"
    },
    {
        "name": "lightgoldenrodyellow",
        "hex": "#fafad2"
    },
    {
        "name": "lightgray",
        "hex": "#d3d3d3"
    },
    {
        "name": "lightgreen",
        "hex": "#90ee90"
    },
    {
        "name": "lightgrey",
        "hex": "#d3d3d3"
    },
    {
        "name": "lightpink",
        "hex": "#ffb6c1"
    },
    {
        "name": "lightsalmon",
        "hex": "#ffa07a"
    },
    {
        "name": "lightseagreen",
        "hex": "#20b2aa"
    },
    {
        "name": "lightskyblue",
        "hex": "#87cefa"
    },
    {
        "name": "lightslategray",
        "hex": "#778899"
    },
    {
        "name": "lightslategrey",
        "hex": "#778899"
    },
    {
        "name": "lightsteelblue",
        "hex": "#b0c4de"
    },
    {
        "name": "lightyellow",
        "hex": "#ffffe0"
    },
    {
        "name": "lime",
        "hex": "#00ff00"
    },
    {
        "name": "limegreen",
        "hex": "#32cd32"
    },
    {
        "name": "linen",
        "hex": "#faf0e6"
    },
    {
        "name": "magenta",
        "hex": "#ff00ff"
    },
    {
        "name": "maroon",
        "hex": "#800000"
    },
    {
        "name": "mediumaquamarine",
        "hex": "#66cdaa"
    },
    {
        "name": "mediumblue",
        "hex": "#0000cd"
    },
    {
        "name": "mediumorchid",
        "hex": "#ba55d3"
    },
    {
        "name": "mediumpurple",
        "hex": "#9370db"
    },
    {
        "name": "mediumseagreen",
        "hex": "#3cb371"
    },
    {
        "name": "mediumslateblue",
        "hex": "#7b68ee"
    },
    {
        "name": "mediumspringgreen",
        "hex": "#00fa9a"
    },
    {
        "name": "mediumturquoise",
        "hex": "#48d1cc"
    },
    {
        "name": "mediumvioletred",
        "hex": "#c71585"
    },
    {
        "name": "midnightblue",
        "hex": "#191970"
    },
    {
        "name": "mintcream",
        "hex": "#f5fffa"
    },
    {
        "name": "mistyrose",
        "hex": "#ffe4e1"
    },
    {
        "name": "moccasin",
        "hex": "#ffe4b5"
    },
    {
        "name": "navajowhite",
        "hex": "#ffdead"
    },
    {
        "name": "navy",
        "hex": "#000080"
    },
    {
        "name": "oldlace",
        "hex": "#fdf5e6"
    },
    {
        "name": "olive",
        "hex": "#808000"
    },
    {
        "name": "olivedrab",
        "hex": "#6b8e23"
    },
    {
        "name": "orange",
        "hex": "#ffa500"
    },
    {
        "name": "orangered",
        "hex": "#ff4500"
    },
    {
        "name": "orchid",
        "hex": "#da70d6"
    },
    {
        "name": "palegoldenrod",
        "hex": "#eee8aa"
    },
    {
        "name": "palegreen",
        "hex": "#98fb98"
    },
    {
        "name": "paleturquoise",
        "hex": "#afeeee"
    },
    {
        "name": "palevioletred",
        "hex": "#db7093"
    },
    {
        "name": "papayawhip",
        "hex": "#ffefd5"
    },
    {
        "name": "peachpuff",
        "hex": "#ffdab9"
    },
    {
        "name": "peru",
        "hex": "#cd853f"
    },
    {
        "name": "pink",
        "hex": "#ffc0cb"
    },
    {
        "name": "plum",
        "hex": "#dda0dd"
    },
    {
        "name": "powderblue",
        "hex": "#b0e0e6"
    },
    {
        "name": "purple",
        "hex": "#800080"
    },
    {
        "name": "rebeccapurple",
        "hex": "#663399"
    },
    {
        "name": "red",
        "hex": "#ff0000"
    },
    {
        "name": "rosybrown",
        "hex": "#bc8f8f"
    },
    {
        "name": "royalblue",
        "hex": "#4169e1"
    },
    {
        "name": "saddlebrown",
        "hex": "#8b4513"
    },
    {
        "name": "salmon",
        "hex": "#fa8072"
    },
    {
        "name": "sandybrown",
        "hex": "#f4a460"
    },
    {
        "name": "seagreen",
        "hex": "#2e8b57"
    },
    {
        "name": "seashell",
        "hex": "#fff5ee"
    },
    {
        "name": "sienna",
        "hex": "#a0522d"
    },
    {
        "name": "silver",
        "hex": "#c0c0c0"
    },
    {
        "name": "skyblue",
        "hex": "#87ceeb"
    },
    {
        "name": "slateblue",
        "hex": "#6a5acd"
    },
    {
        "name": "slategray",
        "hex": "#708090"
    },
    {
        "name": "slategrey",
        "hex": "#708090"
    },
    {
        "name": "snow",
        "hex": "#fffafa"
    },
    {
        "name": "springgreen",
        "hex": "#00ff7f"
    },
    {
        "name": "steelblue",
        "hex": "#4682b4"
    },
    {
        "name": "tan",
        "hex": "#d2b48c"
    },
    {
        "name": "teal",
        "hex": "#008080"
    },
    {
        "name": "thistle",
        "hex": "#d8bfd8"
    },
    {
        "name": "tomato",
        "hex": "#ff6347"
    },
    {
        "name": "turquoise",
        "hex": "#40e0d0"
    },
    {
        "name": "violet",
        "hex": "#ee82ee"
    },
    {
        "name": "wheat",
        "hex": "#f5deb3"
    },
    {
        "name": "white",
        "hex": "#ffffff"
    },
    {
        "name": "whitesmoke",
        "hex": "#f5f5f5"
    },
    {
        "name": "yellow",
        "hex": "#ffff00"
    },
    {
        "name": "yellowgreen",
        "hex": "#9acd32"
    }
];
const colorMap = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkgrey": "#a9a9a9",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkslategrey": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "goldenrod": "#daa520",
    "gold": "#ffd700",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "grey": "#808080",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavenderblush": "#fff0f5",
    "lavender": "#e6e6fa",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightgrey": "#d3d3d3",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
};

const colorName = document.getElementById("color");
const colorHex = document.getElementById("hex");
const box = document.getElementById("box");
const animations = ["animate__zoomIn", "animate__zoomInDown", "animate__zoomInLeft", "animate__zoomInRight", "animate__zoomInUp"];


document.addEventListener("DOMContentLoaded", () => {
    const href = window.location.href.split("#");
    if (href.length > 1 && colorMap[href[1]]) {
        const choosenColor = colorMap[href[1]];
        document.body.style.backgroundColor = colorMap[choosenColor];
        colorName.innerHTML = choosenColor;
        colorHex.innerHTML = colorMap[choosenColor];
        
        animate(animations[Math.floor(Math.random() * animations.length)]);
    } else {
        setNewColor();
    }
});

function setNewColor() {
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    const randomColor = colorsArray[randomIndex];
    document.body.style.backgroundColor = randomColor.name;
    colorName.innerHTML = randomColor.name;
    colorHex.innerHTML = randomColor.hex;

    animate(animations[Math.floor(Math.random() * animations.length)]);
}

function animate(animation) {
    box.classList.add(animation);
    box.addEventListener('animationend', () => {
        box.classList.remove(animation);
        box.addEventListener("click", setNewColor, {once: true});
    });
}