const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputsValues)

function sumarInputsValues(event)
    {
        event.preventDefault();
        const sumaInputs = Number(input1.value) + Number(input1.value);
        pResult.innerText = "Resultado: " + sumaInputs;
    }
