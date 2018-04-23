$(function() {
		$("#top ul a").click(function() {
        $("#top ul a").removeClass("activ");
        $(this).addClass("activ");
        });
});
$(function() {
	$("#cont .list .cont_3").mouseenter(function() {
		$("#cont .list .cont_3>a>img").fadeTo("fast",0.7);
		$("#cont .list .cont_3>a>img").fadeTo("fast",1);
	});
});
$(function() {
    $("#cont .list .cont_3").mouseleave(function() {
		$("#cont .list .cont_3>a>img").fadeTo("fast",0.7);
		$("#cont .list .cont_3>a>img").fadeTo("fast",1);
	});
});
$(function() {
    $("#table .second_floor .slid").mouseenter(function() {
		$(this).find('span').slideDown(400);
	});
});
$(function() {
    $("#table .second_floor .slid").mouseleave(function() {
		$(this).find('span').slideUp(400);
	});
});
