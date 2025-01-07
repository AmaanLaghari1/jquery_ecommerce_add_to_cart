$(document).ready(() => {
    $(".burger").click(function() {
        $(".collapsed").toggleClass("d-block");
        $(this).toggleClass("active")
    });

    $(".change-mode-btn").click(function() {
        $("body").toggleClass("dark-mode")
        $(this).toggleClass("btn-dark")
        $(this).toggleClass("btn-light")
        $(this).text() == "Light Mode"? $(this).text("Dark Mode"): $(this).text("Light Mode")
        $(".navbar").toggleClass(".navbar-dark")
    })

    $(".cart-btn").click(function(){
        $(".cart").slideToggle()
        if($(this).text() == 'Cart'){
            $(this).text('x')
        }
        else {
            $(this).text('Cart')
        }
    })
    
    $('.add-to-cart').click(function(){
        let title = $(this).siblings("h5").text()
        let price = $(this).siblings("p").text()
        let pimg = $(this).parents(".card-body").siblings(".card-img-top").attr("src")

        $("#cart-items").append(`
            <div class="order card m-2" style="width: 12rem;">
                <img src="${pimg}" alt="" class="card-img-top" style="height: 5rem;">
                <div class="card-body">
                    <h6 class="card-title">${title}</h6>
                    <p class="card-text text-danger">Rs. ${price}</p>
                    <div><button class="remove-from-cart btn btn-sm btn-danger">Remove</button></div>
                </div>
            </div>
        `)

        $('#remove-all-item-btn').removeClass('d-none')
        
        $(".remove-from-cart").click(function(){
            $(this).parents(".order").remove()
        })
    })
    
    $('#remove-all-item-btn').click(function(){
        $('.order').remove()
        $(this).addClass('d-none')
    })
});
