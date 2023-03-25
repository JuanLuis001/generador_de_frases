
    /* #1. VINCULAR ARCHIVO JS Y CSS
#2. HACER ARREGLO DE OBJETOS
#3. HACER FUNCION QUE ME REGRESE POSICIONES DEL ARREGLO
#4. HACER QUE SE IMPRIMA LA FUNCION 
#5. CONFIGURAR EL BOTON
#6. DAR ESTILOS */

const frases=[

    {

        frase: "“ La animación es cine. La animación no es un género infantil, es un medio ”",
        autor: " Guillermo del Toro",
        img: "GuillermoDelToro.jpg"
    },
    {

        frase: "“ Vive como si fueras a morir mañana. Aprende como si fueras a vivir para siempre ”",
        autor: " Mahatma Gandhi",
        img: "Gandhi.jpg"
    },
    {

        frase: "“ El arte de la vida es mas parecido a luchar que a bailar ”",
        autor: " Marco Aurelio",
        img: "MarcoAurelio.jpg"
    },
    {

        frase: "“ La felicidad del ambicioso depende de la acción ajena; La del voluptuoso, de sus pasiones; La del prudente, de sus propios actos ”",
        autor: " Marco Aurelio",
        img: "MarcoAurelio.jpg"
    },
    {

        frase: "“ Dios mío, dame el valor para cambiar las cosas que puedo cambiar, la serenidad para aceptar las que no puedo cambiar, y la sabiduría para distinguir entre las dos ”",
        autor: " Marco Aurelio",
        img: "MarcoAurelio.jpg"
    },
    {

        frase: "“ Nuestras virtudes y nuestros defectos son inseparables, como la fuerza y la materia. Cuando se separan, el hombre deja de existir ”",
        autor: " Nikola Tesla",
        img: "Tesla.jpg"
    },
    {

        frase: "“ La estrategia sin táctica es el mas lento camino hacia la Victoria. Las tácticas sin estrategia son el ruido antes de la derrota ”",
        autor: " Sun Tzu",
        img: "SunTzu.jpg"
    },
    {

        frase:"“ Los hombre ofenden antes al que aman, que al que temen ”",
        autor: " Nicolás Maquiavelo",
        img: "Maquiavelo.jpg"
    }, 
    {

        frase: "“ Los hombre ofenden antes al que aman, que al que temen ”",
        autor: " Nicolás Maquiavelo",
        img: "Maquiavelo.jpg"
    },
    {

        frase: "“ Nada en este mundo debe ser temido… solo entendido ”",
        autor: " Marie Curie",
        img: "Marie.jpg"
    }
]

function generaFrase() {
 
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    const fraseGenerada = frases[numeroAleatorio];
    const fraseHTML = `<p>${fraseGenerada.frase}</p> <p>-${fraseGenerada.autor}</p> <img src="${fraseGenerada.img}">`;
    document.getElementById('fraseGenerada').innerHTML = fraseHTML;
    return fraseHTML;
}





