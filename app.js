const button = document.getElementsByClassName("accordianContainer__button");

let i;



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
        let icon = this.childNodes;
        if(!(icon[1].style.transform)){
            icon[1].style.transform = 'rotate(180deg)';
        }
        else if(icon[1].style.transform = 'rotate(180deg)'){
            icon[1].style.transform = '';
        }
    })
}


