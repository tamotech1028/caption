$(function(){

    var time  = 300;
    var $images = $('#image p');

    $images.filter(':nth-child(1)')
        .on('mouseover',function(){
            $(this).find('strong, span').stop(true).animate({
                opacity: 1
            },time);
        })
        .on('mouseout',function(){
            $(this).find('strong, span').stop(true).animate({
                opacity: 0
            },time);
        });

    $images.filter(':nth-child(2)')
        .on('mouseover',function(){
            $(this).find('strong').stop(true).animate({
                opacity: 1,
                left: 0
            },time);
            $(this).find('span').stop(true).animate({
                opacity: 1
            },time);
        })
        .on('mouseout',function(){
            $(this).find('strong').stop(true).animate({
                opacity: 0,
                left: '-200%'
            },time);
            $(this).find('span').stop(true).animate({
                opacity: 0
            },time);
        });

    $images.filter(':nth-child(3)')
        .on('mouseover',function(){
            $(this).find('strong').stop(true).animate({
                opacity: 1,
                bottom: 0
            },time*1.5);
            $(this).find('span').stop(true).animate({
                opacity: 1
            },time);
        })
        .on('mouseout',function(){
            $(this).find('strong').stop(true).animate({
                opacity: 0,
                bottom: '-50px'
            },time);
            $(this).find('span').stop(true).animate({
                opacity: 0
            },time*1.5);
        });

});