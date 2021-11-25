var acc = document.getElementsByClassName("accordion");

for (var index = 0; index < acc.length; index++) {
    acc[index].addEventListener("click", function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";       
        }
        else{
            panel.style.display = "block";
        }
    });
    
}