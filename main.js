const insert = document.getElementById("qwerty");
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  
   <div class="keys">
   ${e.key == " " ? "Space" : e.key}
      <small>event.key</small>
   </div>
   <div class="keys">
   ${e.keyCode}
      <small>event.keyCode</small>
   </div>
   <div class="keys">
   ${e.code}
      <small>event.code</small>
   </div>
  `;
});
