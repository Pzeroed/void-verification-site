// Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Enable Verify button if checkbox is checked
const checkbox = document.getElementById('agree-checkbox');
const verifyBtn = document.getElementById('verify-btn');

checkbox.addEventListener('change', () => {
  verifyBtn.disabled = !checkbox.checked;
});
