window.onscroll = function (e) {
    var vertical_position = 0;
    if (scrollY)//usual
        vertical_position = scrollY;
    else if (document.documentElement.clientHeight)//ie
        vertical_position = document.documentElement.scrollTop;
    else if (document.body)//ie quirks
        vertical_position = document.body.scrollTop;

    var your_div = document.getElementById('scroll');
    your_div.style.top = (vertical_position + 200) + 'px';//200 is arbitrary.. just to show you could now position it how you want
}