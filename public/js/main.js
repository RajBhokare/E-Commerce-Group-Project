// RiskMonitor · main.js

function initCharts(months, fraudTrend, safeCount, fraudCount) {
  Chart.defaults.color = '#8a93a8';
  Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';
  Chart.defaults.font.family = "'DM Sans', sans-serif";

  // ── Line Chart: Fraud Trend ──
  const lineCtx = document.getElementById('lineChart');
  if (!lineCtx) return;

  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Fraud Cases',
        data: fraudTrend,
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.08)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#ef4444',
        pointBorderColor: '#161b27',
        pointBorderWidth: 2,
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#161b27',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          titleColor: '#e8edf5',
          bodyColor: '#8a93a8',
          padding: 12,
          callbacks: {
            label: ctx => `  Fraud: ${ctx.parsed.y} cases`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { font: { size: 11 } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { font: { size: 11 }, stepSize: 20 },
          beginAtZero: true
        }
      }
    }
  });

  // ── Pie Chart: Transaction Split ──
  const pieCtx = document.getElementById('pieChart');
  if (!pieCtx) return;

  new Chart(pieCtx, {
    type: 'doughnut',
    data: {
      labels: ['Safe', 'Fraudulent'],
      datasets: [{
        data: [safeCount, fraudCount],
        backgroundColor: ['rgba(34, 197, 94, 0.8)', 'rgba(239, 68, 68, 0.8)'],
        borderColor: ['rgba(34, 197, 94, 0.2)', 'rgba(239, 68, 68, 0.2)'],
        borderWidth: 1,
        hoverOffset: 6,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#161b27',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          titleColor: '#e8edf5',
          bodyColor: '#8a93a8',
          padding: 12,
          callbacks: {
            label: ctx => `  ${ctx.label}: ${ctx.parsed.toLocaleString()} txns`
          }
        }
      }
    }
  });
}

// Auto-init when dashboard data globals are present
document.addEventListener('DOMContentLoaded', () => {
  if (typeof chartMonths !== 'undefined') {
    initCharts(chartMonths, chartFraudData, chartSafe, chartFraud);
  }
});
