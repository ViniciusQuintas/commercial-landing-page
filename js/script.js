// scroll menu

$('menu-itens li a').click(function () { 
    const href = $(this).attr('href');
    const offSetTop = $(href).offset().top;

    $('html body').animate({'scrollTop': offSetTop});

    return false;
    
});

// menu mobile

const abrirMenu = $('.abrir-menu');

$(abrirMenu).click(function () { 
    $('.menu-mobile .mobile').slideToggle();
});