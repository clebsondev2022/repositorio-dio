let button = document.querySelector('button')

button.addEventListener('click', function () {
    renderTasks()
})

function renderTasks() {
    let value = document.getElementById('task-input').value
    if (value != '') {
    createTasks()
    }

    document.getElementById('task-input').value = ''
}

function createTasks() {
    let tasks = document.querySelector('#tasks')
    let value = document.getElementById('task-input').value

    let div = document.createElement('div')
    div.classList.add('container')

    let item = document.createElement('input')
    item.type = 'checkbox'

    let text = document.createElement('p')
    text.innerText = value

    div.appendChild(item)
    div.appendChild(text)
    tasks.appendChild(div)

}