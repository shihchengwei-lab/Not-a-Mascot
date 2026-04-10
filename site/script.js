(function() {
  var states = ['', 'font-large', 'font-xlarge'];
  var labels = ['標準', '大', '特大'];
  var current = 0;
  try {
    var saved = localStorage.getItem('font-size-state');
    if (saved) current = Math.min(parseInt(saved, 10) || 0, 2);
  } catch(e) {}
  function apply() {
    document.documentElement.className = current > 0 ? states[current] : '';
    var label = document.getElementById('fontLabel');
    if (label) label.textContent = labels[current];
  }
  apply();
  var btn = document.getElementById('fontToggle');
  if (btn) {
    btn.addEventListener('click', function() {
      current = (current + 1) % 3;
      apply();
      try { localStorage.setItem('font-size-state', current); } catch(e) {}
    });
  }
})();
