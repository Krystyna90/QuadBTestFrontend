export function displayTable (data) {
    let counter = 1;
    
    data.forEach((item) => {
        const formattedLast = new Intl.NumberFormat('en-US').format(Number(item.last).toFixed(0));
        const formattedSell = new Intl.NumberFormat('en-US').format(Number(item.sell).toFixed(0));
        const formattedBuy = new Intl.NumberFormat('en-US').format(Number(item.buy).toFixed(0));
        const difference = (Number(item.last) - Number(item.buy)) / Number(item.buy) * 100;
        const savings = Number(item.last) - Number(item.buy);
        const tbody = document.querySelector('.dynamicTable');
        const tr = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.classList.add("align-middle");
        idCell.innerHTML = `<h4 class="table-text">${counter++}</h4>`;
        tr.appendChild(idCell);

        const platformCell = document.createElement('td');
        platformCell.classList.add("align-middle");
        platformCell.innerHTML = `<a target="_blank" href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn">
        <h4 class="table-text">
        <span class="exchange-name ">${item.name}</span>
        </h4>
        </a>`;
        tr.appendChild(platformCell);

        const lastCell = document.createElement('td');
        lastCell.classList.add("align-middle");
        lastCell.innerHTML = `<h4 class="table-text">₹ ${formattedLast}</h4>`;
        tr.appendChild(lastCell);

        const buySellCell = document.createElement('td');
        buySellCell.classList.add("align-middle");
        buySellCell.innerHTML = ` <h4 class="table-text">
        <span>₹${formattedBuy}/₹${formattedSell}</span>
        </h4>`;
        tr.appendChild(buySellCell);

        const differenceCell = document.createElement('td');
        differenceCell.classList.add("align-middle");
        differenceCell.innerHTML = `<h4 class="table-text ${difference.toFixed(2) <= 0 ? 'color-red' : 'color-green'}">${difference.toFixed(2)} %</h4>`;
        tr.appendChild(differenceCell);

        const savingsCell = document.createElement('td');
        savingsCell.classList.add("align-middle");
        savingsCell.innerHTML = `<h4 class="table-text ${savings.toFixed(2) <= 0 ? 'color-red' : 'color-green'}">${savings.toFixed(2) <= 0 ? '▼' : '▲'}₹${new Intl.NumberFormat('en-US').format(savings.toFixed(2))}</h4>`;
        tr.appendChild(savingsCell);

        tbody.appendChild(tr);
    });
}