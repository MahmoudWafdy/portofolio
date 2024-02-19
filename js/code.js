/* global $ ,document,window */


$(document).ready(function () {
    "use strict";
    
    /* start smoothly scroll */
    $(".navbar ul .nav-item a").click(function (e) {
        e.preventDefault();
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
        $("body,html").animate({
            "scrollTop": $("." + $(this).data("class")).offset().top + 5
        }, 1200);
    });
    
    /* end smoothly scroll */
    
    /* when click on about button */
    $("header .head-content button:last-of-type").click(function () {
        $("body,html").animate({
            scrollTop: $("section.about").offset().top + 10
        }, 900);
    });
    
    
    /* start CV popup */
    $("button.hire-me").click(function () {
        $(".cv-popup").animate({
            "left": 0
        });
    });
    $(".cv-popup").click(function () {
        $(".cv-popup").animate({
            "left": "-100%"
        });
    });
    $(".cv-popup .content .header i.fa-window-close").click(function () {
        $(".cv-popup").animate({
            "left": "-100%"
        });
    });
    $(".cv-popup .content").click(function (e) {
        e.stopPropagation();
    });
    
    /* end CV popup */
    
    /* start popup portfolio */
    
       // mo salah portfolio 
    var devHight = $(".portfolio .row .img").height(),
        imgHight = $(".portfolio .Mo-Salah .row .img img").height(),
        marginTop = devHight - imgHight;
    $(".portfolio .Mo-Salah .row .img").hover(function () {
        $(".portfolio .Mo-Salah .row .img img").css("marginTop", marginTop);
    }, function () {
        $(".portfolio .Mo-Salah .row .img img").css("marginTop", 0);
    });
    $(window).resize(function () {
        var devHight = $(".portfolio .row .img").height(),
            imgHight = $(".portfolio .Mo-Salah .row .img img").height(),
            marginTop = devHight - imgHight;
        $(".portfolio .Mo-Salah .row .img").hover(function () {
            $(".portfolio .Mo-Salah .row .img img").css("marginTop", marginTop);
        }, function () {
            $(".portfolio .Mo-Salah .row .img img").css("marginTop", 0);
        });

    });
    
        /* home popup */
    $(".portfolio .row .description button").click(function () {
        $($(this).data("class")).fadeIn(500);
    });
    
    $(".portfolio .home-popup").click(function () {
        $(this).fadeOut(600);
    });
    
    $(".portfolio .home-popup .popup ").click(function (e) {
        e.stopPropagation();
    });
    $(".portfolio .home-popup .popup h3 i.fa-window-close").click(function () {
        $(".portfolio .home-popup").fadeOut(500);
    });
    
        /*gallary popup */
    $(".portfolio .row .description button").click(function () {
        $($(this).data("class")).animate({
            "top": 0
        }, 600);
        $($(this).data("class")).find(".gallary-popup").animate({
            "top": "50%",
            "marginTop": "-235px"
        }, 600);
    });
    $(".portfolio .row .img button").click(function () {
        $($(this).data("class")).animate({
            "top": 0
        }, 600);
        $($(this).data("class")).find(".gallary-popup").animate({
            "top": "50%",
            "marginTop": "-235px"
        }, 1200);
        
    });
    $(".portfolio .main-gallary-popup").click(function () {
        $(this).animate({
            "top": "-100%"
        }, 600);
        $(this).find(".gallary-popup").animate({
            "top": "-50%",
            "marginTop": "-235px"
        }, 600);
    });
    $(".portfolio .main-gallary-popup .gallary-popup ").click(function (e) {
        e.stopPropagation();
    });
    $(".portfolio .main-gallary-popup .gallary-popup i.fa").click(function () {
        $(".portfolio .main-gallary-popup").animate({
            "top": "-100%"
        }, 600);
        $(".portfolio .main-gallary-popup").find(".gallary-popup").animate({
            "top": "-50%",
            "marginTop": "-235px"
        }, 600);
    });
    /* start adjust the porfolio image gallary popup */
    var widthDiv = $(".portfolio .main-gallary-popup .gallary-popup .small-img").width(),
        imgNum = $(".portfolio .main-gallary-popup .gallary-popup .small-img img").length;
    $(".portfolio .main-gallary-popup .gallary-popup .small-img img").css("width", widthDiv / imgNum);
    
    var divHeight = $(".portfolio .main-gallary-popup .gallary-popup .small-img img").width();
    $(".portfolio .main-gallary-popup .gallary-popup .small-img img").css("height", divHeight / 2.15);
    
    $(".portfolio .main-gallary-popup .gallary-popup .small-img img").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".portfolio .main-gallary-popup .gallary-popup .main-img img").fadeOut().attr("src", $(this).attr("src")).fadeIn(400);
    });
    /* end adjust portfolio images gallary popup*/
    

    /* end popup portfolio */
    
    /* strat contact popup */
    
    $(".popup-btn").click(function () {
        $(this).animate({
            "bottom": "-50"
        });
        
        $(".popup").delay(500).animate({
            "bottom": "10"
        });
    });
    
    $(".popup .head").click(function () {
        $(".popup").animate({
            "bottom": "-450"
        });
        $(".popup-btn").delay(500).animate({
            "bottom": "10"
        });
    });
    
    /* end contact popup */
    
    
    /* start on scroll */
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $(".navbar").css({
                "height": 100,
                "background": "rgba(43, 44, 45,1)",
                "box-shadow": "rgb(36, 0, 0) 0px 5px 15px 4px"
            });
            $(".navbar-expand-lg .navbar-collapse ul li a").css("color", "#FFF");
            $(".navbar-brand").css("color", "#FFF");
            if ($(this).scrollTop() > 550) {
                $(".navbar").css({
                    "height": 100,
                    "background": "rgba(255, 255, 255,1)",
                    "box-shadow": "rgb(255, 0, 68) 0px 1px 5px -3px",/**/
                    "color": "#111"
                });
                $(".navbar-expand-lg .navbar-collapse ul li a").css("color", "#111");
                $(".navbar-brand").css("color", "#111");
            }
        } else {
            $(".navbar").css({
                "height": 120,
                "background": "rgba(0,0,0,0)",
                "box-shadow": "none",
                "color": "#FFF"
            });
            $(".navbar-expand-lg .navbar-collapse ul li a").css("color", "#FFF");
            $(".navbar-brand").css("color", "#FFF");
        }
     
        
        /* add activ class when scroll */
        $("section").each(function () {
            if ($(window).scrollTop() > $(this).offset().top + 1) {
                var secClass = $(this).attr("id");
                
                $('.navbar ul .nav-item a[data-scroll = "' + secClass + '"]').addClass("active");
                $(".navbar ul .nav-item a[data-scroll != '" + secClass + "']").removeClass("active");
            }
        });
       
    });
    
    /* end on scroll */
    if ($(this).scrollTop() > 30) {
        $(".navbar").css({
            "height": 100,
            "background": "rgba(43, 44, 45,1)",
            "box-shadow": "rgb(36, 0, 0) 0px 5px 15px 4px"
        });
        $(".navbar-expand-lg .navbar-collapse ul li a").css("color", "#FFF");
        $(".navbar-brand").css("color", "#FFF");
        if ($(this).scrollTop() > 600) {
            $(".navbar").css({
                "height": 100,
                "background": "rgba(255, 255, 255,1)",
                "box-shadow": "rgb(255, 0, 68) 0px 1px 5px -3px",/**/
                "color": "#111"
            });
            $(".navbar-expand-lg .navbar-collapse ul li a").css("color", "#111");
            $(".navbar-brand").css("color", "#111");
        }
    } else {
        $(".navbar").css({
            "height": 120,
            "background": "rgba(0,0,0,0)",
            "box-shadow": "none",
            "color": "#FFF"
        });
        $(".navbar-expand-lg .navbar-collapse ul li a").css("color", "#FFF");
        $(".navbar-brand").css("color", "#FFF");
    }
    
    
    $("body").niceScroll({
        cursorcolor: "rgb(255, 0, 68)",
        cursorwidth: "7px"
    });
    

    
});