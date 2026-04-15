/**
 * RiskMonitor - Main JavaScript
 * Flexible file - easy to add new features later
 * Beginner friendly with clear comments
 */

console.log('%c🚀 RiskMonitor Dashboard loaded successfully!', 'color:#14b8a6; font-size:14px; font-weight:bold');

document.addEventListener('DOMContentLoaded', function () {
  console.log('✅ All systems operational - Threat monitoring active');

  // Example: You can add more interactivity here in future
  // Example: document.getElementById('some-button').addEventListener(...)
  
  // Keyboard shortcut example (optional)
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault();
      console.log('🔄 Refresh triggered via Ctrl+R');
      location.reload();
    }
  });
});