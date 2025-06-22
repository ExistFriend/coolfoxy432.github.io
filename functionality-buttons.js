const profileBtn = document.getElementById('profile-btn');
const robloxBtn = document.getElementById('roblox-btn');

profileBtn.addEventListener('click', function() {
  document.getElementById('profile-section').style.display = '';
  document.getElementById('roblox-section').style.display = 'none';
  profileBtn.classList.add('active');
  robloxBtn.classList.remove('active');
});

robloxBtn.addEventListener('click', function() {
  document.getElementById('profile-section').style.display = 'none';
  document.getElementById('roblox-section').style.display = '';
  robloxBtn.classList.add('active');
  profileBtn.classList.remove('active');
});