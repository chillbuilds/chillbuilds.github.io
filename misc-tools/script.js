let calculate = () => {
    let pricePerKg = $('#price-per-kg').val()
        let printWeight = $('#print-weight').val()
        if(pricePerKg.length && printWeight.length){
            localStorage.setItem('pricePerKg', pricePerKg)
            let printPrice = ((printWeight/10)/100)*pricePerKg
            $('#print-price').text(`$${printPrice.toFixed(2)}`)
        }else{
            alert('please check inputs and try again')
        }
}

$(document).ready(function(){
    let userData = localStorage.getItem('pricePerKg')

    if(userData != null){
        $('#price-per-kg').val(userData)
    }

    $('#pricePerPrintCalc').on('click', () => {
        calculate()
    })

    $('input').keypress((event) => {
        if (event.which === 13) {
            calculate()
        }
      })
})