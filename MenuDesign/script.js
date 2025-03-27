var selectfield = document.getElementById("selectfield");
var selectText = document.getElementById("selectText");
var list = document.getElementById("list");
var options = document.querySelectorAll(".options"); // Select all option elements

selectfield.onclick = function() {
    list.classList.toggle("hide");
};

options.forEach(function(option) {
    option.onclick = function() {
        selectText.innerHTML = this.textContent;
        list.classList.add("hide"); // Close the list after selection
    };
});