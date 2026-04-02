document.getElementById("view-tables").addEventListener("click", getTables);
const ul = document.getElementById('table-list')

async function getTables() {
    const request = await fetch('http://database.snailroom.net/tables')
    const tables = await request.json();

    console.log(tables);

    tables.forEach(table => {
        ul.innerHTML += `<li>${table.name}</li>`;
    })
}