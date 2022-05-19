$(window).on('resize', () => {
    let winHeight = $(window).height()
    let cardDivHeight = parseInt($('.home-card').height())*2
    let topMargin = parseInt((winHeight - cardDivHeight)/2)

    console.log('window height: ' + winHeight)
    console.log('card div height: ' + cardDivHeight)
    console.log('margin: ' + parseInt((winHeight - cardDivHeight)/2))

    $('#body-container').attr('style', `margin-top: ${topMargin-48}px;`)
})

function marginCalc() {
    let winHeight = $(window).height()
    let cardDivHeight = parseInt($('.home-card').height())*2
    let topMargin = parseInt((winHeight - cardDivHeight)/2)

    console.log('window height: ' + winHeight)
    console.log('card div height: ' + cardDivHeight)
    console.log('margin: ' + parseInt((winHeight - cardDivHeight)/2))

    $('#body-container').attr('style', `margin-top: ${topMargin-48}px;`)
}

$('.home-card').on('click', function(){
    window.location.href = `/${$(this).attr('id')}`;
})

marginCalc()