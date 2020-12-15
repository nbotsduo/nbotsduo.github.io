//get screen resolution
var percent=1;
// $("div.head1").css('top', Math.round( screen.height * percent)+'px');
$("div.head1").width(Math.round( screen.width * percent));

// $(document).ready(function(){
//     alert(screen.width);
// });

$('#content').height($(window).height() - ($('#title').height() + $('#nav').height()));
