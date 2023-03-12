const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Kategoria past', 'Colgate', 'Elmex', 'Marka A', 'Marka B', 'Marka C'],
        datasets: [{
        label: 'zmiana wartości sprzedaży rok do roku (mln zł)',
        data: [91, 30, 15, 15, 9, 6],
        color: ['#253c7e'],
        backgroundColor: [
            '#253c7e',
            '#e31f26',
            '#f36f21',
            '#77787b',
            '#9d9fa2',
            '#c6c8ca',
        ],
        borderColor: [
            '#253c7e',
            '#e31f26',
            '#f36f21',
            '#77787b',
            '#9d9fa2',
            '#c6c8ca',
        ],
        borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        layout: {
            padding: 20
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});