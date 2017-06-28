var button = document.createElement("button");
button.innerHTML = "CLIQUE";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  alert("aint nobody fresher than my clique");
});

// text

$(document).click(function (event) {
  $(event.target).css("color", "red");
});

var name = lance
$(document).on("click", function(e){
    if (e.click) {
        name.show();
    } 
});