var cafe = []
var almoco = []
var jantar = []
var item


do{
    item = prompt("Digite um alimento para o café da manhã")
    if(item == ""){
    alert("O campo não pode ficar vazio")
    }
    else{
    cafe.push(item)
}

}while(item != null) 

    

for (var i = 0; i < cafe.length-1; i++){
    document.write("<li>" + cafe[i] + "</li>")

}


