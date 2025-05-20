const ctx = document.getElementById('myChart').getContext('2d');

// Detecta se a tela é pequena
const isMobile = window.innerWidth <= 768;

// Tamanhos adaptáveis
const fontSizeTitle = isMobile ? 16 : 20;
const fontSizeAxis = isMobile ? 12 : 14;
const fontSizeLegend = isMobile ? 14 : 16;

const data = {
  labels: ['Unidade 1', 'Unidade 2', 'Unidade 3', 'Unidade 4', 'Unidade 5', 'Unidade 6'],
  datasets: [{
    label: 'Pontos',
    data: [65, 59, 80, 81, 56, 75],
    backgroundColor: ['#b98859', '#d1b38d', '#cfa76e', '#b3873a', '#a16e25', '#7d5825'],
    borderColor: '#6e4f38',
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    aspectRatio: isMobile ? 1.2 : 1.6,
    plugins: {
      title: {
        display: true,
        text: 'Pontuação por Unidade',
        color: '#4b3621',
        font: {
          size: fontSizeTitle,
          weight: 'bold'
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          color: '#4b3621',
          font: {
            size: fontSizeAxis,
            weight: 'bold'
          }
        },
        grid: {
          color: '#f0e6d2'
        }
      },
      x: {
        ticks: {
          color: '#4b3621',
          font: {
            size: fontSizeAxis,
            weight: 'bold'
          }
        },
        grid: {
          display: false
        }
      }
    }
  }
};

new Chart(ctx, config);
