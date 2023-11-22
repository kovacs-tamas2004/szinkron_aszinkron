let tip = document.getElementById("display");

function displayer(fgv){
    tip.innerHTML = `<div class="size black"></div>`;
    fgv();
    tip.innerHTML += `<div class="size yellow"></div>`;
}

function syncFunction(){
    tip.innerHTML += `<div class="size red"></div>`;
}

function asyncFunction(){
    setTimeout(function() {
        tip.innerHTML += `<div class="size red"></div>`;
    }, 2000);
}

console.log(tip);