const body = document.querySelector('body')
const siderbar = document.querySelector('.sidebar')
const toggle = document.querySelector('.toggle')
const searchBtn = document.querySelector('.search-box')
const modeSwitch = document.querySelector('.mode')
const modeText = document.querySelector('.mode-text')

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark')

    if (body.classList.contains('dark')) {
        modeText.innerText = 'Light Mode'
    } else {
        modeText.innerText = 'Dark Mode'
    }
})
searchBtn.addEventListener('click', () => {
    siderbar.classList.remove('close')
})

toggle.addEventListener('click', () => {
    siderbar.classList.toggle('close')


})
