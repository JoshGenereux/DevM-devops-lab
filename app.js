const submit = document.getElementsByClassName('submit-button')
let dadJoke = document.getElementsByClassName('submit')

const dadJokeUrl = 'https://dad-jokes.p.rapidapi.com/random/joke'

const answer = (e) =>{
    axios.post(dadJokeUrl)
        .then((res)=>{
            console.log(res.data)
            let body = document.querySelector('body')
            let h2 = document.createElement("div")
            h2.textContent = res.data
            body.appendChild(h2)
        })
        .catch(err => console.log(err))

}

dadJoke.addEventListener('submit', answer)
