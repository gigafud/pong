import $ from "jquery";

$('body').append('<div class="paddle">life is just a game!</div>');

$('body').on('mousemove', e => {

    postPosition({
        pos: e.clientX,
        min: 100,
        max: $('body').width() - 100
    });
});

function postPosition(data) {
    $.post("/test", data, function( data ) {
        console.log(data);
        $('.paddle').css('left', parseInt(data.pos));
    });
}