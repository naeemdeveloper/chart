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
            padding: 10
        },
        scales: {
            y: {
                beginAtZero: true
            },
        },
    },
});

const ctx2 = document.getElementById('lineChart');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['01.2018', '01.2019', '01.2020', '01.2021', '01.2022', '01.2023'],
        datasets: [{
            label: '',
            data: [20, 10, 50, 30, 40, 30],
            backgroundColor: '#fff',
            borderColor: '#fff',       
            borderWidth: 2
        }]
    },
    options: {
        layout: {
            padding: 20
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                },
                beginAtZero: true
            },
        },
    },
});

const ctx3 = document.getElementById('lineChart2');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['01.2018', '01.2019', '01.2020', '01.2021', '01.2022', '01.2023'],
        datasets: [{
            label: '',
            data: [40, 30, 10, 50, 20, 30],
            backgroundColor: '#fff',
            borderColor: '#fff',       
            borderWidth: 2
        }]
    },
    options: {
        layout: {
            padding: 20
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                },
                beginAtZero: true
            },
        },
    },
});

const ctx4 = document.getElementById('myChart2');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Restauracje', 'Kino / teatr', 'Alkohol', 'Remonty', 'Słodycze', 'Siłownia / basen / rekreacja', 'Ubrania', 'Fryzjer / kosmetyczka', 'Wakacje', 'Perfumy', 'Kosmetyki kolorowe', 'Mięso / wędliny', 'Paliwo', 'Płyny do mycia podłóg', 'Żele pod prysznic', 'Internet / komórka', 'Dentysta', 'Szczoteczki do zębów', 'Nabiał', 'Pieczywo', 'Pasty do zębów', 'Warzywa / owoce'],
        datasets: [{
            label: '',
            data: [80, 75, 74, 73, 69, 69, 69, 67, 67, 65, 50, 34, 33, 31, 31, 28, 26, 17, 16, 16, 14, 13],
            color: ['#253c7e'],
            backgroundColor: [
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#ed6a1d',
                '#4c769e',
                '#4c769e',
                '#ed6a1d',
                '#4c769e',
                '#4c769e',
                '#ed6a1d',
                '#4c769e',
            ],
            borderColor: [
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#4c769e',
                '#ed6a1d',
                '#4c769e',
                '#4c769e',
                '#ed6a1d',
                '#4c769e',
                '#4c769e',
                '#ed6a1d',
                '#4c769e',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        layout: {
            padding: 10
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks : {
                    color: '#4c769e'
                }
            },
        },
    },
});

const ctx5 = document.getElementById('barChart1');
new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022'],
        datasets: [{
            label: '',
            data: [98, 98, 98],
            color: ['#253c7e'],
            backgroundColor: [
                '#ed6a1d',
            ],
            borderColor: [
                '#fff',
            ],
            borderWidth: 2
        }]
    },
    options: {
        // indexAxis: 'y',
        layout: {
            padding: 10
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff',
                }
            },
        },
    },
});

const ctx6 = document.getElementById('barChart2');
new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022'],
        datasets: [{
            label: '',
            data: [83, 83, 81],
            color: ['#253c7e'],
            backgroundColor: [
                '#ed6a1d',
            ],
            borderColor: [
                '#fff',
            ],
            borderWidth: 2
        }]
    },
    options: {
        // indexAxis: 'y',
        layout: {
            padding: 10
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff',
                }
            },
        },
    },
});

const ctx7 = document.getElementById('barChart3');
new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022'],
        datasets: [{
            label: '',
            data: [88, 88, 87],
            color: ['#253c7e'],
            backgroundColor: [
                '#ed6a1d',
            ],
            borderColor: [
                '#fff',
            ],
            borderWidth: 2
        }]
    },
    options: {
        // indexAxis: 'y',
        layout: {
            padding: 10
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff',
                }
            },
        },
    },
});

const ctx8 = document.getElementById('multipleChart');
new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: ['Pasty do zębów', 'Szczoteczki do zębów', 'Żele pod prysznic'],
        datasets: [{
            label: '',
            data: [20, 60, 30],
            color: ['#253c7e'],
            backgroundColor: [
                '#1ab5be',
            ],
            borderColor: [
                '#fff',
            ],
            borderWidth: 2
        },
        {
            label: '',
            data: [98, 98, 98],
            color: ['#253c7e'],
            backgroundColor: [
                '#ed6a1d',
            ],
            borderColor: [
                '#fff',
            ],
            borderWidth: 2
        }]
    },
    options: {
        // indexAxis: 'y',
        layout: {
            padding: 10
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff',
                }
            },
        },
    },
});

const ctx9 = document.getElementById('barChart4');
new Chart(ctx9, {
    type: 'bar',
    data: {
        labels: ['Kategoria', 'Żele damskie', 'Żele męskie', 'Żele dziecięce',],
        datasets: [{
            label: 'WZROST I KONTRYBUCJA',
            data: [134, 76, 50, 9,],
            color: ['#253c7e'],
            backgroundColor: [
                '#006648',
                '#a9c23e',
                '#000000',
                '#58acdc',
            ],
            borderColor: [
                '#006648',
                '#a9c23e',
                '#000000',
                '#58acdc',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        layout: {
            padding: 10
        },
        scales: {
            y: {
                beginAtZero: true
            },
        },
    },
});

const ctx10 = document.getElementById('barChart5');
new Chart(ctx10, {
    type: 'bar',
    data: {
        labels: ['Żele damskie', 'Konsystencja żelowa', 'Konsystencjakremowa', 'Inne',],
        datasets: [{
            label: 'WZROST I KONTRYBUCJA',
            data: [76, 58, 14, 4,],
            color: ['#253c7e'],
            backgroundColor: [
                '#a9c23e',
                '#7fc242',
                '#50ba64',
                '#5bbcaf',
            ],
            borderColor: [
                '#a9c23e',
                '#7fc242',
                '#50ba64',
                '#5bbcaf',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        layout: {
            padding: 10
        },
        scales: {
            y: {
                beginAtZero: true
            },
        },
    },
});

