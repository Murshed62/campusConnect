const button = document.getElementById("btn-dept");
const list = document.getElementById("drop-dept");

list.style.display = "none";
 
button.addEventListener("click",(event) => {
    if(list.style.display == "none") {
        list.style.display = "block"; 


    }
    else{
        list.style.display = "none";
    }
})

const button1 = document.getElementById("btn-tag");
const list1 = document.getElementById("drop-tag");

list1.style.display = "none";

button1.addEventListener("click",(event) => {
    if(list1.style.display == "none") {
        list1.style.display = "block"; 


    }
    else{
        list1.style.display = "none";
    }
})


// Textarea sections

const textarea = document.getElementById('myTextarea');

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});


