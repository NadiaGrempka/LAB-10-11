const cars = [
    {year: 1990, mileage: 909000, startPrice: 1000000, endPrice: 1000000},
    {year: 2000, mileage: 808080, startPrice: 2002000, endPrice: 3003000},
    {year: 2003, mileage: 777070, startPrice: 303003, endPrice: 40404004},
    {year: 2007, mileage: 10000, startPrice: 190900, endPrice: 200200},
    {year: 1970, mileage: 9000, startPrice: 1023456, endPrice: 1234678},
];

function createTable(data) {
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const header = ['Year', 'Mileage', 'StartPrice', 'EndPrice'];

    header.forEach(headerTxt => {
        const th = document.createElement("th");
        th.textContent = headerTxt;
        tr.appendChild(th);
    })

    table.appendChild(thead);
    thead.appendChild(tr);


    const tbody = document.createElement("tbody");

    data.forEach((car) => {
        const row = document.createElement("tr");

        Object.values(car).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.getElementById('table').appendChild(table);
}
createTable(cars);