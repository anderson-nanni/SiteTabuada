function dividir (){
    let dividen = document.getElementById('dividendo')
    let divisor = document.getElementById('divisor')
    let res = document.getElementById('res')

    if(dividen.value.length == 0 || dividen.value.length == 0) {
        alert("Digite os dois números!")
    } else {
        let n1 = Number(dividen.value)
        let n2 = Number(divisor.value)
        res.innerHTML = `<p>${n1/n2}</p>`
    }
}