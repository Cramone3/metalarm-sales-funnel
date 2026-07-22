document.getElementById('year').textContent = new Date().getFullYear();

const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! Wire this form up to your email/CRM tool to start capturing real orders.');
  orderForm.reset();
});
