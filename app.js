const button = document.getElementsByClassName("accordianContainer__button");
const icon = document.getElementsByClassName("icon");
let i;

console.log(icon);

for(i = 0; i<button.length; i++){
    button[i].addEventListener('click', function(){
        this.classList.toggle("activeAccordion");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block"){
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    })
}

