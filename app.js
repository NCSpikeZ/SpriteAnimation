const sidebarBtnToggle = document.getElementById("sidebarBtnToggle");
// ajouter le script pour ajouter une class "open" pour la sidebar
sidebarBtnToggle.addEventListener("click", openSidebar);

function openSidebar(){
  document.getElementById("sidebar").classList.toggle('open');
  sidebarBtnToggle.classList.toggle('burgeropen');
}
  


const modalBtn = document.getElementById("modalBtn");
// ajouter le script pour ajouter une class "open" pour la modal
modalBtn.addEventListener("click", openModal);

function openModal(){
  document.getElementById("modal-element").classList.toggle('open');
}

const closemodalBtn = document.getElementById("clode-modal-btn");
closemodalBtn.addEventListener("click", closeModal);

function closeModal(){
  document.getElementById("modal-element").classList.toggle('open');
}
