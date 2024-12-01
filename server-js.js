// Toggle dropdown menu
function shownav() {
    const navContents = document.querySelectorAll('.nav-content');
    navContents.forEach((nav) => {
        nav.classList.toggle('show');
    });
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const sales = [1200, 1500, 1100, 1600, 1900, 1700, 2000, 1800, 1500, 2200, 2100, 2500];

        // Get the canvas context
        const ctx = document.getElementById('salesChart').getContext('2d');

        // Create the line chart
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: months, // X-axis labels
                datasets: [{
                    label: 'Sales (in PHP)',
                    data: sales, // Y-axis data
                    borderColor: 'rgba(72, 43, 0, 1)',
                    backgroundColor: 'rgba(72, 43, 0, 0.2)',
                    borderWidth: 2,
                    fill: true, // Fills the area under the line
                    tension: 0.4 // Smooth curve
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Months'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Sales (PHP)'
                        },
                        beginAtZero: true
                    }
                }
            }
        });