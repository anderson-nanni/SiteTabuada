function gerar () {
    let num = document.getElementById('numero')
    let tab = document.getElementById('tab')

    if(num.value.length == 0) {
        alert("Digite um número!")
    } else {
        let n = Number(num.value)
        tab.innerText = ''

        for (i = 1;i <= 10; i++) {
            let item = document.createElement('option')
            item.text += `${n} X ${i} = ${n*i}`
            tab.appendChild(item)
        }

    }
}