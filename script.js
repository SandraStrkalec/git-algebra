//grupirati stvari - samopozivajuća funkcija - izvan toga neće se kositi s logikom izvan
//dodati objekt, ne znamo kolko puta ćemo nešto reuse-at, u obliku funkcije - napunit podacima (ToDo)
//logika kako početi dodavati sve te stvari, što nam je sve potrebno da izvrtimo našu logiku: upisat u ToDo funkciju varijable kao reference u našem html-u
//nakačiti se na logiku gumba s nekim event listnerom, objekti imaju prototype u koji možemo stavljati funkcije
//event listener dodajemo na neki element - definiramo funkciju koja je zadužena za to nešto 
//ako nemamo defer u script.js window.addEventListener("load")


(function() { //samopozivajuća funkcija - bilo što izvan toga se neće kositi s logikom unutar ove funkcije, tu pišem svoj neki m
  function ToDo () {
    //var todo = document.querySelector("#todo") ako u div-u označimo id, za bolji performanceggggg
    var input = document.querySelector("#todoInput"),
        button = document.querySelector("#todoButton"),
        list = document.querySelector("#todoList");

        function deleteItem(event) {
          event.target.parentElement.remove();

        }

        function addDeleteButton(item) {
          var deleteButton = document.createElement("button"); //promijeni iz texta u checkbox
          deleteButton.innerText = "x";

          deleteButton.addEventListener("click", deleteItem);
          item.appendChild(deleteButton);

          return item;
        }

        function addCheckbox(item) {
          var checkbox = document.createElement("input"); //promijeni iz texta u checkbox
          checkbox.setAttribute("type", "checkbox");

          item.insertBefore(checkbox, item.firstChild);

          return item;
        }

        function createItem(text) {
            var item = document.createElement("li");

            item.innerText = text; 

            // dodati checkbox 
            item = addCheckbox(item);

            //dodati delete button
            item = addDeleteButton(item);

            return item;
        }

        function addItem() {
            //console.log("Netko me kliknuo")
            var text = input.value;

            if (text.length === 0) {
              window.alert("Molimo vas unesite stavku")
              return;
            }

        //kada počinjemo s logikom razmisliti možemo li modularizirat - neku novu funkciju dodati npr.
        
        //moramo kreirati - create li element, 

        var item = createItem(text);
        
        //nakon toga ga moramo dodati - appendat u listi, 

        list.appendChild(item);

        //izbrisat ga - clear

        input.value = "";
    }

    this.addListeners = function () {
      button.addEventListener("click", addItem);
    }

  }

  ToDo.prototype.init = function() {
    this.addListeners();            //nalazimo se sad izvan objekta - scope-a, potrebno je this dodati
  }

  var todo = new ToDo();
  
  window.addEventListener("load", todo.init())

}
)();