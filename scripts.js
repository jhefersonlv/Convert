//cotação de moeda
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


//Estou dando uma função para o input do formulario, ele ira receber apenas numeros
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

//Capturando o evento de submit do formulario
form.onsubmit = (event) => {
    //impedindo o comportamento padrão do formulario
    event.preventDefault();
    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break;
    }
}

// Função para converter o valor
function convertCurrency (amount, price, symbol) {
    try {
        //Atualizando o conteudo do resultado
        description.textContent = `${symbol} 1,00 = ${formatCurrencyBRL(price)}`
        let total = amount * price
        result.textContent = `${formatCurrencyBRL(total)}`

        //adiciona a classe
        footer.classList.add("show-result")
    } catch (error) {
        // Remove a classe em caso de erro
        console.log(error)
        footer.classList.remove("show-result")
        alert("Ocorreu um erro ao converter a moeda.")
    }
}

//Formata o valor para o padrão BRL
function formatCurrencyBRL(value){
    //converte para numero, senão não usa o toLocaleString
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

}