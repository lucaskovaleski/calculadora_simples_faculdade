function sum() {
    var n1 = parseFloat(document.getElementById("add-firstn").value)
    var n2 = parseFloat(document.getElementById("add-secondn").value)
    var sum = n1 + n2
    document.getElementById("answer").innerHTML =  "A soma entre " + n1 + " e " + n2 + " é igual:" + sum
}
function sub() {
    var subn1 = parseFloat(document.getElementById("sub-firstn").value)
    var subn2 = parseFloat(document.getElementById("sub-secondn").value)
    var sub = subn1 - subn2
    document.getElementById("answer").innerHTML = "A subtração entre " + subn1 + " e " + subn2 + " é igual:" + sub
}
function mult() {
    var multn1 = parseFloat(document.getElementById("mult-firstn").value)
    var multn2 = parseFloat(document.getElementById("mult-secondn").value)
    var mult= multn1 * multn2
    document.getElementById("answer").innerHTML = "A multiplicação entre " + multn1 + " e " + multn2 + " é igual:" + mult
}
function div() {
    var divn1 = parseFloat(document.getElementById("div-firstn").value)
    var divn2 = parseFloat(document.getElementById("div-secondn").value)
    var div = divn1 / divn2
    document.getElementById("answer").innerHTML = "A divisão entre " + divn1 + " e " + divn2 + " é igual:" + div
}