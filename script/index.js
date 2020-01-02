//開頭LOGO及選單滑入動畫
setTimeout(function () {
    $('.main_logo').css('transform', 'translateX(-300%)')
}, 100)
setTimeout(function () {
    $('.main_list').css('transform', 'translateX(0%)')
    $('.main_logo').css('transform', 'translateX(0%)')
}, 1100)

//matchlist清單展現動畫
function showMatchlist() {
    var match = 0;
    var matchtime = setInterval(function () {
        match++;
        if (match > 7) {
            clearInterval(matchtime)
        } else {
            $(`#matchlist_0${match}`).css('transform', 'rotateX(0deg)')
        }
    }, 150)
}

//ourTeam圖片展現動畫
function showTeamlist() {
    var team = 0;
    var teamtime = setInterval(function () {
        team++;
        if (team > 4) {
            clearInterval(teamtime)
        } else {
            $(`#ourTeam_0${team}`).css('transform', 'rotateY(0deg)')
        }
    }, 200)
}


//置頂按扭滑動
$('#gotop').click(function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//捲軸滑動觸發事件
var scroll = $(window).scroll(function () {
    if (scroll.scrollTop() > $('#results').offset().top) {
        $('#gotop').css('display', 'block')
    } else {
        $('#gotop').css('display', 'none')
    };

    //about內容左右滑入
    if (scroll.scrollTop() > $('#about').offset().top - 200) {
        $('.about_team , .about_trainers').css('transform', 'translateX(0%)')
    }
    //呼叫函式matchlist清單展現動畫
    if(scroll.scrollTop() > $('#match').offset().top - 200){
        showMatchlist();
    }

    //呼叫函式showTeamlist清單展現動畫
    if(scroll.scrollTop() > $('#team').offset().top - 200){
        showTeamlist();
    }

});


//置頂選單滑入展開子選單
$('.list_outside li').mousemove(function(){
    $(this).addClass('on')
})

$('.list_outside li').mouseout(function(){
    $(this).removeClass('on')
})


//點擊選單滑動前往
$('.goResults').click(function () {
    window.scrollTo({
        top: $('#results').offset().top,
        behavior: "smooth"
    });
});
$('.goMatch ,#results_btn').click(function () {
    window.scrollTo({
        top: $('#match').offset().top,
        behavior: "smooth"
    });
});
$('.goAbout').click(function () {
    window.scrollTo({
        top: $('#about').offset().top,
        behavior: "smooth"
    });
});
$('.goSupport').click(function () {
    window.scrollTo({
        top: $('#support').offset().top,
        behavior: "smooth"
    });
});
$('.goNews').click(function () {
    window.scrollTo({
        top: $('#news').offset().top,
        behavior: "smooth"
    });
});
$('.goAwards').click(function () {
    window.scrollTo({
        top: $('#awards').offset().top,
        behavior: "smooth"
    });
});
$('.goTeam ,#about_btn').click(function () {
    window.scrollTo({
        top: $('#team').offset().top,
        behavior: "smooth"
    });
});
$('.goTeam').click(function () {
    window.scrollTo({
        top: $('#team').offset().top,
        behavior: "smooth"
    });
});
$('.goGallery').click(function () {
    window.scrollTo({
        top: $('#gallery').offset().top,
        behavior: "smooth"
    });
});
$('.goShop ,#support_btn').click(function () {
    window.scrollTo({
        top: $('#shop').offset().top,
        behavior: "smooth"
    });
});
$('.goMessage').click(function () {
    window.scrollTo({
        top: $('#message').offset().top,
        behavior: "smooth"
    });
});


// 點擊左右圖示，移動內容圖片位置
$('#main_left').click(function () {
    $('#main_pic ul').css('transform', 'translateX(0%)')
});
$('#main_right').click(function () {
    $('#main_pic ul').css('transform', 'translateX(-100%)')
});


// 點擊漢堡bar，開 / 關小畫面選單
$('#main_bars').click(function () {
    $('#main_minlist').toggle(500);
    $('.minlist_inside').slideUp(500)
})
// 偵測螢幕大小改變，小畫面選單自動收合
$(window).resize(function () {
    $('#main_minlist').slideUp(500)
    $('.minlist_inside').slideUp()
})

//點擊小畫面選單，內容選單開合交替
$('#minlist_01').click(function () {
    $('#minlist_01 ul').slideToggle(500)
})
$('#minlist_02').click(function () {
    $('#minlist_02 ul').slideToggle(500)
})
$('#minlist_03').click(function () {
    $('#minlist_03 ul').slideToggle(500)
})
$('#minlist_04').click(function () {
    $('#minlist_04 ul').slideToggle(500)
})
$('#minlist_05').click(function () {
    $('#minlist_05 ul').slideToggle(500)
})


//倒數時間
setInterval(function () {
    //抓取現在時間 & 設定結束時間
    var startDate = new Date;
    var endDate = new Date(2020, 9, 15, 19, 00);
    //相減後時間為毫秒，除1000得到秒數
    //1秒 = 1000 毫秒
    var spantime = (endDate - startDate) / 1000;

    var d = Math.floor(spantime / (24 * 3600));
    var h = Math.floor((spantime % (24 * 3600)) / 3600);
    var m = Math.floor((spantime % 3600) / (60));
    var s = Math.floor(spantime % 60);

    $('#day').text(d);
    $('#hrs').text(h);
    $('#min').text(m);
    $('#sec').text(s);
}, 1000)


//點擊gallery_list清單，顯示相對應圖片，該li變色
$('#gallery_all').click(function () {
    $('#gallery_list li').removeClass('gallery_color')
    $(this).addClass('gallery_color')
    $('#gallery_content div').removeClass('gallery_none')
})
$('#gallery_player').click(function () {
    $('#gallery_list li').removeClass('gallery_color')
    $(this).addClass('gallery_color')
    $('#gallery_content div').removeClass('gallery_none')
    $('#gallery_pic02 , #gallery_pic04').addClass('gallery_none')
})
$('#gallery_audience').click(function () {
    $('#gallery_list li').removeClass('gallery_color')
    $(this).addClass('gallery_color')
    $('#gallery_content div').addClass('gallery_none')
    $('#gallery_pic02 , #gallery_pic04').removeClass('gallery_none')
})

//點擊awards左右按鍵更換顯示圖片
$('#awards_left').click(function () {
    $('.awards_show_content ul').css('transform', 'translateX(0%)')
})
$('#awards_right').click(function () {
    $('.awards_show_content ul').css('transform', 'translateX(-100%)')
})



//shop清單輪播 (每兩秒更新一次)
var shoplist = 20;  //初始位置    
var goshop = setInterval(function () {
    if (shoplist > 520) {
        shoplist = 20;
        $('.shop_content li').css('transform', `translateX(-${shoplist}%)`);
    } else {
        shoplist += 100;
        $('.shop_content li').css('transform', `translateX(-${shoplist}%)`);
    }
    list();
}, 2000)


//點擊shoplist清單選項前往該項目區域
$('#shop_shose').click(function () {
    shoplist = 20;
    $('.shop_content li').css('transform', `translateX(-${shoplist}%)`);
    list();
})
$('#shop_shirts').click(function () {
    shoplist = 220;
    $('.shop_content li').css('transform', `translateX(-${shoplist}%)`);
    list();
})
$('#shop_ball').click(function () {
    shoplist = 620;
    $('.shop_content li').css('transform', `translateX(-${shoplist}%)`);
    list();
})

//shoplist範圍內更換顏色
function list() {
    if (shoplist > 20 && shoplist < 200) {
        $('#shop_list li').removeClass('shop_color');
        $('#shop_shose').addClass('shop_color');
    }
    else if (shoplist > 200 && shoplist < 620) {
        $('#shop_list li').removeClass('shop_color');
        $('#shop_shirts').addClass('shop_color');
    } else if (shoplist == 620) {
        $('#shop_list li').removeClass('shop_color');
        $('#shop_ball').addClass('shop_color');
    } else {
        $('#shop_list li').removeClass('shop_color');
        $('#shop_shose').addClass('shop_color');
    }
}

//message_list左右選單捲動
var ms_match = 0;
$('#ms_left').click(function () {
    if (ms_match > 0) {
        ms_match -= 100;
        $('.message_list li').css('transform', `translateX(-${ms_match}%)`)
    }
})
$('#ms_right').click(function () {
    if (ms_match < 200) {
        ms_match += 100;
        $('.message_list li').css('transform', `translateX(-${ms_match}%)`)
    }
})