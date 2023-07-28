const Andi = document.querySelector('#andi')
const Claire = document.querySelector('#claire')


document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)

function andiNext() {
    Claire.classList.add('hidden')
    Andi.classList.remove('hidden')
}

function claireNext() {
    Andi.classList.add('hidden')
    Claire.classList.remove('hidden')
}