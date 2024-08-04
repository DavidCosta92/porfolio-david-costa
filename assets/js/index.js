// @ts-nocheck


// casos especiales, BOTON ENVIAR EN FORMULARIO, CAMBIAR LINK DE DESCARGA DE CV

const btnChangeLeng = document.getElementById("btnIdioma")
btnChangeLeng.addEventListener("click", (e)=>{
    changeLeng(e.target.parentElement.dataset.leng)
})


const textsToChange = document.querySelectorAll("[data-lengvalue]")

const changeLeng = async (leng) =>{    
    const req = await fetch(`./assets/js/textos-${leng}.json`)
    const textsTraslated = await req.json()

    const banderaEsp = document.getElementById("banderaEsp")
    const banderaEng = document.getElementById("banderaEng")

    if(leng == "eng"){
        banderaEsp.setAttribute("style", "opacity:1")
        banderaEng.setAttribute("style", "opacity:0")
    } else {
        banderaEsp.setAttribute("style", "opacity:0")
        banderaEng.setAttribute("style", "opacity:1")
    }


    for (const textToChange of textsToChange){
        const section = textToChange.dataset.sectionlang
        const value = textToChange.dataset.lengvalue
        if(value == "btnEnviar"){
            const btnSend = document.getElementById("btnEnviar")            
            btnSend.setAttribute("value", leng=="esp"? "Enviar" : "Send")        
        }else if(value == "verCv"){
            const linkCV1 = document.getElementById("linkCv1")   
            const linkCV2 = document.getElementById("linkCv2")      
            let cv = `./assets/Curriculum DAVID COSTA - Tec. Desarrollo web - Fullstack JAVA${leng=="eng"?" - ENG" :""}.pdf`
            linkCV1.setAttribute("href",cv)
            linkCV2.setAttribute("href",cv)
            // assets\Curriculum DAVID COSTA - Tec. Desarrollo web - Fullstack JAVA.pdf
        } else{
            textToChange.innerHTML = textsTraslated[section][value]
        }
    }
}

// esta funcion comprueba si un elemento esta visible en pantalla
///  function isVisible(elm) {
///  	var rect = elm.getBoundingClientRect();
///  	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
///  	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
///  }
///  
///  // cuando se carga la página...
///  window.addEventListener('DOMContentLoaded', (ev0) => {
///          // asignamos un evento scroll...
///  	window.addEventListener('scroll', (ev1) => {
///                  // y a todos los elementos con la clase paused...
///  		document.querySelectorAll(".paused").forEach(elm => {
///  			if (isVisible(elm)) // que sean visibles...
///  				elm.classList.remove("paused"); // les quitamos la clase paused
///  		})
///  	});
///  });


const sectionsAnimated = document.querySelectorAll(".animada")
function trigger(entries){
    entries.forEach(element => {
        const section = element.target
        section.classList.toggle("unset", element.isIntersecting) // seria un if, si es true aplica la clase unset, si es false la quita
    });
}
const options = {
    root : null, //document.querySelectorAll("animaaado")
    rootMargin : "20px",
    threshold:0
}

const observer = new IntersectionObserver(trigger, options)

sectionsAnimated.forEach(img =>{
    observer.observe(img)
})

/*
import tinyTypewriter from 'tiny-typewriter/src/';

const typewriter = document.querySelector("#typewriter");
tinyTypewriter(typewriter, {
  items: ['Script', 'HTML']
});

tinyTypewriter(typewriter, {
    // animation speed
    typeSpeed: 100,
    deleteSpeed: 50,
    // delay between text
    delayBetweenItems: 2000,
    // infinite loop
    loop: true,
    // time to wait before starting the animation
    startDelay: 0,
    // start the animation at index n
    startsAtIndex: 0,
    // config animated cursor here
    cursor: true,
    cursorChar: "|",
    cursorCharBlinkSpeed: 500,
    cursorCharBlinkTransitionSpeed: 0.15,
    // start the animation when the element is in the viewport
    startOnView: true,
    // offset for startOnView option
    startOnViewOffset: 0
    
  });

*/
/*
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('SY9HJBbS46YCiQfNz');
})();


window.onload = function() {
    const serviceID= "service_ikp6o26";
    const templateID= "template_9d1snnb";
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

*/