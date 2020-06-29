const pages = ['3d', 'microcontrollers', 'raspberrypi', 'software', 'grind', 'store']

$('.head-link').on('click', function(){
    window.location.href = `/${$(this).attr('id')}`;
})