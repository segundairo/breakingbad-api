const UI = new AppUI();
const api = new AppAPI();
const searchText = document.getElementById("search");



searchText.addEventListener("keyup", (e) => {
  input = searchText.value.trim();

   if (input === "") {
      api.getAllCharacters().then((data) => {
         UI.showCharacters(data.data);
      })
   } else {
       api.searchCharacters(input).then((data) => {
      if (data.data.length < 1) {
         UI.showMessage('Record Not Found')
      } else {
         UI.showCharacters(data.data);
     } 
  });   
   } 
});


api.getAllCharacters().then((data) => {
   UI.showCharacters(data.data);
})