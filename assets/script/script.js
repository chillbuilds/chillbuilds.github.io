let projectCheck = () => {
    for(var i of projectObj){
        if(i.live == 'y'){
            pushCard(i.title, i.body, i.img_src)
        }
    }
}

let pushCard = (title, text, img_src) => {
    let template = `
    <div class="project-card">
        <div class="">
            <img class="card-img" src="https://www.foodandwine.com/thmb/jldKZBYIoXJWXodRE9ut87K8Mag=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg">
        </div>
        <div class="card-title">
            ${title}
        </div>
        <div class="card-txt">
            ${text}
        </div>
        <div class="read-more">
            <a href="">read more.. </a>
        </div>
    </div>`
    $('#body-container').append(template)
}


$(window).on('resize', () => {
    
})

$(document).ready(function() {
    projectCheck()
})