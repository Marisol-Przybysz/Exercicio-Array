var cafe = []
var almoco = []
var jantar = []
var item


do{
    item = prompt("Digite um alimento para o café da manhã")

    if (item == "") {
        alert("O campo não pode ficar vazio")
        continue
    }

    if (item == null && cafe.length < 2) {
        alert("O cardápio deve conter pelo menos dois itens")
        continue
    }

    if (item != null) {
        cafe.push(item)
    }

}while(item != null || cafe.length < 2) 

    do{
    item = prompt("Digite um alimento para o almoço")

    if (item == "") {
        alert("O campo não pode ficar vazio")
        continue
    }

    if (item == null && almoco.length < 2) {
        alert("O cardápio deve conter pelo menos dois itens")
        continue
    }

    if (item != null) {
        almoco.push(item)
    }

}while(item != null || almoco.length < 2) 

    do{
    item = prompt("Digite um alimento para o jantar")

    if (item == "") {
        alert("O campo não pode ficar vazio")
        continue
    }

    if (item == null && jantar.length < 2) {
        alert("O cardápio deve conter pelo menos dois itens")
        continue
    }

    if (item != null) {
        jantar.push(item)
    }

}while(item != null || jantar.length < 2) 

    document.write("<h1>Cardápio</h1>\n<h2>Café da manhã</h2>\n<ul>")
for (var i = 0; i < cafe.length; i++){
    document.write("<li>" + cafe[i] + "</li>")
}
    document.write("</ul>")

    document.write("<h2>Almoço</h2>\n<ul>")
for (var i = 0; i < almoco.length; i++){
    document.write("<li>" + almoco[i] + "</li>")
}
    document.write("</ul>")


    document.write("<h2>Jantar</h2>\n<ul>")
for (var i = 0; i < jantar.length; i++){
    document.write("<li>" + jantar[i] + "</li>")
}
    document.write("</ul>")


