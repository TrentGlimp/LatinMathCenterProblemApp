const unit1 = document.querySelector('.sidebar-item:nth-child(1)');
const unit2 = document.querySelector('.sidebar-item:nth-child(2)');
const unit3 = document.querySelector('.sidebar-item:nth-child(3)');

const unit1Content = document.getElementById('unit1-content');
const unit2Content = document.getElementById('unit2-content');
const unit3Content = document.getElementById('unit3-content');

unit1.addEventListener('click', () => {
  unit1Content.style.display = 'block';
  unit2Content.style.display = 'none';
  unit3Content.style.display = 'none';
});

unit2.addEventListener('click', () => {
  unit1Content.style.display = 'none';
  unit2Content.style.display = 'block';
  unit3Content.style.display = 'none';
});

unit3.addEventListener('click', () => {
  unit1Content.style.display = 'none';
  unit2Content.style.display = 'none';
  unit3Content.style.display = 'block';
});
