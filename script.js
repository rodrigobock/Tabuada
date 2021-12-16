function gerar(){
    let v = document.getElementById('txtvalor')
    let res = document.getElementById('res')

    if(v.value.length == 0){
        window.alert('Valor não pode ser vazio')
    }else{
        let valor = Number(v.value)
        res.innerHTML = ''
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${valor} x ${i} = ${valor*i}`
            item.value = `tab${i}`
            res.appendChild(item)
        }
    }

}