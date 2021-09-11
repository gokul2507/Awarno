var acc = document.getElementsByClassName("accordion01");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active01");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
/* git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https: //github.com/gokul2507/inter.git
git push -u origin main*/