document.addEventListener('DOMContentLoaded', () => {
    const vng1 = document.querySelector('.vuong1');
    if (!vng1) return;

    vng1.style.transition = 'transform 0.5s ease';

    vng1.addEventListener('mouseenter', () => {
        vng1.style.transform = 'scale(1.4)';
    });

    vng1.addEventListener('mouseleave', () => {
        vng1.style.transform = 'scale(0.8)';
    });

    vng1.style.position = 'relative';

    vng1.addEventListener('mouseenter', () => {
        vng1.style.zIndex = '9999';
    });

    vng1.addEventListener('mouseleave', () => {
        vng1.style.zIndex = '';
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const vng2 = document.querySelector('.vuong2');
    if (!vng2) return;
    vng2.style.position = 'relative';
    vng2.style.transition = 'transform 0.5s ease';

    vng2.addEventListener('mouseenter', () => {
        vng2.style.transform = 'scale(1.4) translateX(450px)';
        vng2.style.zIndex = '9999';
    });

    vng2.addEventListener('mouseleave', () => {
        vng2.style.transform = 'scale(0.8) translateX(0px)';
        vng2.style.zIndex = '';
    });



});

document.addEventListener('DOMContentLoaded', () => {
    const vng3 = document.querySelector('.vuong3');
    if (!vng3) return;

    vng3.style.transition = 'transform 0.5s ease';

    vng3.addEventListener('mouseenter', () => {
        vng3.style.transform = 'scale(1.4) translateX(-450px)';
        vng3.style.zIndex = '9999';
    });

    vng3.addEventListener('mouseleave', () => {
        vng3.style.transform = 'scale(0.8) translateX(0px)';
        vng3.style.zIndex = '';
    });
});
