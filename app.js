const numberBtn = document.querySelector('.number-button')
const response = document.querySelector('.number-response')
const submit = document.querySelector('#submit')
const userNum = document.getElementById('user-num')
const submitResponse = document.getElementById('submit-response')
numberBtn.addEventListener('click', answer)
submit.addEventListener('submit', num)

const url = 'http://numbersapi.com'

function answer(e){
    e.preventDefault()
    axios.get(`${url}/random`).then((res)=>{
        console.log(res.data)
        let item = document.createElement('p')
        item.textContent = `${res.data}`
        response.appendChild(item)
    })
        .catch(err => console.log(err))
}

function num(e){
    e.preventDefault()
    axios.get(`${url}/${userNum.value}`)
        .then((res)=>{
            console.log(res.data)
            let numba = document.createElement('p')
            numba.textContent = `${res.data}`
            submitResponse.appendChild(numba)
            userNum.value = ''
        })
        .catch(err => console.log(err))
}
