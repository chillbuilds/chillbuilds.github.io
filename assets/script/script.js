let projectCheck = (filter) => {
    if(filter == null){
        $('#body-container').html('')
        projectObj.forEach(project => {
            if(project.live == 'y'){
                pushCard(project.title, project.body, project.img_src)
            }
        })
    }else{
        $('#body-container').html('')
        projectObj.forEach(project => {
            if(project.live == 'y' && project.tags.includes(filter)){
                pushCard(project.title, project.body, project.img_src)
            }
        })
    }
}

let pushCard = (title, text, img_src) => {
    // set default image
    if(img_src == ''){
        img_src = 'https://www.foodandwine.com/thmb/jldKZBYIoXJWXodRE9ut87K8Mag=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg'
    }else{
        img_src = './assets/images/project-images/' + img_src
    }
    let template = `
    <div class="project-card">
        <div class="">
            <img class="card-img" src="${img_src}">
        </div>
        <div class="card-title">
            ${title}
        </div>
        <div class="card-txt-container">
            <div class="card-txt">
                ${text}
            </div>
        </div>
        <div project="${title}" class="read-more">
            read more..
        </div>
    </div>`
    $('#body-container').append(template)
}


$(window).on('resize', () => {
    if($(window).width() <= 1100){

    }
})

$(document).ready(function() {

    projectCheck(null)

    $('#mobile-menu-icon').on('click', function() {
        $('#mobile-head-links').slideToggle()
    })
    $('.read-more').on('click', function() {
        alert($(this).attr('project'))
    })
    $('.head-link').on('click', function() {
        if($(this).attr('id') == 'contact'){
            $('#body-container').attr('style', 'display: none;')
            $('#contact-container').attr('style', 'display: inline-block;')
        }else{
            projectCheck($(this).attr('id'))
        }
    })
    $('.mobile-head-link').on('click', function() {
        if($(this).attr('id') == 'contact'){
            $('#body-container').attr('style', 'display: none;')
            $('#contact-container').attr('style', 'display: inline-block;')
        }else{
            projectCheck($(this).attr('id'))
        }
        $('#mobile-head-links').slideToggle()
    })
})