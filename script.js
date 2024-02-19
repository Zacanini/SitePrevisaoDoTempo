const keyApi = "e953f74cd6e4f5324c0b52713a2a3abb"


function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°c"
    document.querySelector(".tezto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function BuscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${keyApi}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocarDadosNaTela(dados)
}

document.querySelector(".imput-city").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        CliqueiNoBotao();
    }
});



function CliqueiNoBotao() {
    const cidade = document.querySelector(".imput-city").value
    BuscarCidade(cidade)
}

