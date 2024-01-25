alert("Bienvenido al juego Tucu Taca Mat, es para mayores de 5");
let edad = prompt("Ingresa tu edad")

if (edad > 5) {
    alert("puede entrar al juego")
    let ficha = prompt("Elija su primer ficha para mover: TUCU / TACA / TOCO")

    if (ficha == "TOCO") {
        alert("Toco TOOOOOC...")
        let numeroToco = prompt("ingresa un numero entre 1 y 25 y te enseñare sus multiplos")

        function multiplosToco() {
            let multiplosToco = [];
            for (let toc = 1; toc <= 25; toc++) {
                multiplosToco.push(toc);
            }
            multiplosToco.filter((el) => {
                if (el % numeroToco === 0) alert("TUS numeros multiplos de " + " " + numeroToco + " " + "son los siguientes: " + el)
            })
        }
        multiplosToco();
    
    } else if (ficha == "TUCU") {
        alert("Tucu TUUUUU...")

    } else if (ficha == "TACA") {
        alert("Taca TAAAAAC...")
        let numeroTaca = prompt("ingresa un numero entre 1 y 100")
        let numeroTaca2 = Math.floor(Math.random(numeroTaca) * 100 + 1)
        alert("TU numero de la suerte TACA ES: " + numeroTaca2)
    }
} else {
    alert("NO puede entrar al juego")
}