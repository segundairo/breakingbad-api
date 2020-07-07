class AppUI {
  showCharacters(data) {
    const characters = document.getElementById("characters");
    let output = "";
    for (const character of data) {
      output += `
       <div class="character">
       <div class="character__image">
          <img src="${character.img}" alt="">
          <h3>${character.name}</h3>
       </div>
       <div class="character__bio">
          <h2>${character.name}</h2>
          <ul>
             <li>
                <div>
                   <h4>Birthday</h4>
                   <h5>${character.birthday}</h5>
                </div>
             </li>
             <li>
                <div>
                   <h4>Occupation</h4>
                   <h5>${character.occupation.join(", ")}</h5>
                </div>
             </li>
             <li>
                <div>
                   <h4>Nickname</h4>
                   <h5>${character.nickname}</h5>
                </div>
             </li>
             <li>
                <div>
                   <h4>Status</h4>
                   <h5 class="status ${this.getStatus(character.status)}">${
        character.status
      }</h5>
                </div>
             </li>
             <li>
                <div>
                   <h4>Appearances</h4>
                   <h5>${character.appearance.join(", ")}</h5>
                </div>
             </li>
             <li>
                <div>
                   <h4>Potrayed</h4>
                   <h5>${character.portrayed}</h5>
                </div>
             </li>
          </ul>
       </div>
    </div>
       
       `;

      characters.innerHTML = output;
    }
  }
  showMessage(msg) {
    const error = document.querySelector(".error");

    if (error) return;
    const top = document.getElementById("top");
    const div = document.createElement("div");
    div.classList.add("error");
    div.textContent = msg;
     top.appendChild(div);
     this.clearUI()
     setTimeout(() => {
        this.clearError()
     }, 2000);
  
  }
  clearUI() {
    const search = document.getElementById("search");
    const characters = document.getElementById("characters");
    search.value = "";
    characters.innerHTML = "";
  }
  getStatus(status) {
    return status.split(" ")[0].toLowerCase();
   }
   clearError() {
      const error = document.querySelector(".error");
      error.remove()
   }
}
