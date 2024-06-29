document.addEventListener('DOMContentLoaded', function() {
    const cityCounts = {
      City1: 0,
      City2: 0,
      City3: 0,
      City4: 0,
      City5: 0,
      City6: 0,
      City7: 0,
      City8: 0,
      City9: 0,
      City10: 0
    };
  
    const ctx = document.getElementById('cityChart').getContext('2d');
    const cityChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(cityCounts),
        datasets: [{
          label: '# of Selections',
          data: Object.values(cityCounts),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    document.querySelectorAll('.cityButton').forEach(button => {
      button.addEventListener('click', function() {
        const selectedCity = this.getAttribute('data-city');
        cityCounts[selectedCity]++;
        updateChart();
      });
    });
  
    function updateChart() {
      cityChart.data.datasets[0].data = Object.values(cityCounts);
      cityChart.update();
    }
  });
  