const textArea = document.querySelector("textarea")
const tweetar = document.querySelector("button")
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

function pegarTweet(event) {
  event.preventDefault() /* previne o evento padrão da tag form. Ele não envia o formulário instantaneamente */
  const tweetTextArea = textArea.value
  criarTweet(tweetTextArea)
}

tweetar.addEventListener("click", pegarTweet)

function criarTweet(tweetTexto) {
  let data = new Date()
  let hora = data.getHours()
  let minutos = data.getMinutes()

  const tweet = {
    nome: "Daniel",
    foto: "./assets/img/ProfilePic.png",
    usuario: "@danielkenzie",
    texto: tweetTexto,
    tempo: `${hora}:${minutos}`,
  }

  listarTemplateTweet(tweet)
}

function listarTemplateTweet(tweet) {
  const { nome, foto, usuario, texto, tempo } = tweet

  /* Criando elementos para listar o template */
  let li = document.createElement("li")
  li.classList.add("conteudoPrincipal__tweet")

  let img = document.createElement("img")
  img.src = foto
  img.classList.add("tweet__fotoPerfil")

  let div = document.createElement("div")
  div.classList.add("tweet__conteudo")

  let h2 = document.createElement("h2")
  h2.innerText = nome

  let span = document.createElement("span")
  span.innerText = `${usuario} - ${tempo}`

  let p = document.createElement("p")
  p.innerText = texto

  /* Adicionando elementos dentro da div */
  div.appendChild(h2)
  div.appendChild(span)
  div.appendChild(p)

  /* Adicionando elementos dentro da li */
  li.appendChild(img)
  li.appendChild(div)

  feed.appendChild(li)
  textArea.value = ""
}
