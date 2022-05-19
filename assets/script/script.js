$(window).on('resize', () => {
    marginCalc()
})

function marginCalc() {
    let winWidth = $(window).width()
    if(winWidth > 1200){
    let winHeight = $(window).height()
    let cardDivHeight = $('.home-card').height()*2
    let topMargin = (winHeight - cardDivHeight)/2

    console.log('window height: ' + winHeight)
    console.log('card div height: ' + cardDivHeight)
    console.log('margin: ' + parseInt((winHeight - cardDivHeight)/2))

    $('#body-container').attr('style', `margin-top: ${topMargin-48}px;`)
    $('.card-text').attr('style', `top: ${cardDivHeight/2-48}px`)
    }
    else{
    $('.card-text').attr('style', `top: ${($('.home-card').height())-48}px`)
    }
}

$('.home-card').on('click', function(){
    window.location.href = `/${$(this).attr('id')}`;
})

$(document).ready(function() {
    marginCalc()
})