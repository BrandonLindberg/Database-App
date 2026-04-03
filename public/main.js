document.getElementById("add-name-button").addEventListener("click", editTable);

const ul = document.getElementById('table-list')

async function getTable() {
    const request = await fetch('http://database.snailroom.net/view')
    const tables = await request.json();

    ul.innerHTML = '';

    tables.forEach(table => {
        ul.innerHTML += `<li>${table.name}</li>`;
    })
}

async function editTable() {
    const input = document.getElementById("name-text-box").value;

    const request = await fetch('http://database.snailroom.net/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
    });
    getTable();
}

document.addEventListener('DOMContentLoaded', getTable);