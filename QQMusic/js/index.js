/*搜索到指定歌单*/
function searchLink(){
	var sou = document.getElementById("sou");
	sou.onclick = function(){
		var w = document.getElementById("w").value;
		var s = "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=" + w;
		location = s;
	}
	
	$('#w').bind('keyup', function(event) {
		if (event.keyCode == "13") {
			var w = document.getElementById("w").value;
			var s = "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=" + w;
			location = s;
		}
	
	}); 
}

/*歌单推荐--展示阴影*/
function showPlay(){
	$(".playlist_content>div>div:first-child").hover(
		function(){
			$(this).children(".playlist_img").css("transition","transform .75s");
			$(this).children(".playlist_img").css("-webkit-transform","scale(1.07) translateZ(0)");
			$(this).children(".play_song").css("opacity",1);
			$(this).children(".play_song").css("transform","scale(1) translateZ(0)");
			$(this).children(".cover_mark").css("opacity",0.2);
			$(this).children(".cover_mark").css("transform","scale(1) translateZ(0)");
		},
		function(){
			$(this).children(".playlist_img").css("-webkit-transform","scale(1) translateZ(0)");
			$(this).children(".play_song").css("transform","scale(0.7) translateZ(0)");
			$(this).children(".cover_mark").css("opacity",0);
			$(this).children(".play_song").css("opacity",0);
		}
	);
}
/*歌单推荐--歌单切换*/
function playListChange(){
	var lis = $("#playlist_nav li a");
	var divs = $("#playlist_content").children(".playlist_content");
	var aas = $("#playlist_footer a");
	lis.each(function(i,e){
		$(e).click(function(){
			lis.each(function(index,element){
				$(element).css("color","#333333");
			});
			divs.each(function(index,element){
				$(element).css("display","none");
			});
			aas.each(function(index,element){
				$(element).css("background-color","#E5E5E5");
			});
			$(lis).eq(i).css("color","#31c27c");
			$(divs).eq(i).css("display","block");
			$(aas).eq(i).css("background-color","#B2B2B2");
			return false;
		});
		
	});
	aas.each(function(i,e){
		$(e).click(function(){
			lis.each(function(index,element){
				$(element).css("color","#333333");
			});
			divs.each(function(index,element){
				$(element).css("display","none");
			});
			aas.each(function(index,element){
				$(element).css("background-color","#E5E5E5");
			});
			$(lis).eq(i).css("color","#31c27c");
			$(divs).eq(i).css("display","block");
			$(aas).eq(i).css("background-color","#B2B2B2");
			return false;
		});
	});
}
/*新歌首发--展示阴影*/
function showPlayNewMusic(){
	$(".new_music_content>div>div:first-child").hover(
		function(){
			$(this).children(".new_music_img").css("transition","transform .75s");
			$(this).children(".new_music_img").css("-webkit-transform","scale(1.07) translateZ(0)");
			$(this).children(".new_music_play_song").css("opacity",1);
			$(this).children(".new_music_play_song").css("transform","scale(1) translateZ(0)");
			$(this).children(".new_music_cover_mark").css("opacity",0.2);
			$(this).children(".new_music_cover_mark").css("transform","scale(1) translateZ(0)");
		},
		function(){
			$(this).children(".new_music_img").css("-webkit-transform","scale(1) translateZ(0)");
			$(this).children(".new_music_cover_mark").css("opacity",0);
			$(this).children(".new_music_play_song").css("transform","scale(0.7) translateZ(0)");
			$(this).children(".new_music_play_song").css("opacity",0);
		}
	);
}
/*新歌首发--歌单切换*/
function newMusicChange(){
	var lis = $("#new_music_nav li a");
	var divs = $("#new_music_content").children(".new_music_page");
	var aas = $("#new_music_footer a");
	lis.each(function(i,e){
		$(e).click(function(){
			lis.each(function(index,element){
				$(element).css("color","#333333");
			});
			divs.each(function(index,element){
				$(element).css("display","none");
			});
			aas.each(function(index,element){
				$(element).css("background-color","#E5E5E5");
			});
			$(lis).eq(i).css("color","#31c27c");
			$(divs).eq(i).css("display","block");
			$(aas).eq(i).css("background-color","#B2B2B2");
			return false;
		});
	});
	aas.each(function(i,e){
		$(e).click(function(){
			lis.each(function(index,element){
				$(element).css("color","#333333");
			});
			divs.each(function(index,element){
				$(element).css("display","none");
			});
			aas.each(function(index,element){
				$(element).css("background-color","#E5E5E5");
			});
			$(lis).eq(i).css("color","#31c27c");
			$(divs).eq(i).css("display","block");
			$(aas).eq(i).css("background-color","#B2B2B2");
			return false;
		});
	});
}
/*精彩推荐--歌单切换*/
function recommendedChange(){
	var divs = $("#hot_recommended_content").children(".hot_recommended_img");
	var aas = $("#hot_recommended_footer a");
	aas.each(function(i,e){
		$(e).click(function(){
			divs.each(function(index,element){
				$(element).css("display","none");
			});
			aas.each(function(index,element){
				$(element).css("background-color","#E5E5E5");
			});
			$(divs).eq(i).css("display","block");
			$(aas).eq(i).css("background-color","#B2B2B2");
			return false;
		});
	});
}
/*新碟首发--歌单切换*/
function newDishChange(){
	var lis = $("#new_dish_nav li a");
	var divs = $("#new_dish_content").children(".new_dish_content");
	var aas = $("#new_dish_footer a");
	lis.each(function(i,e){
		$(e).click(function(){
			lis.each(function(index,element){
				$(element).css("color","#333333");
			});
			divs.each(function(index,element){
				$(element).css("display","none");
			});
			aas.each(function(index,element){
				$(element).css("background-color","#E5E5E5");
			});
			$(lis).eq(i).css("color","#31c27c");
			$(divs).eq(i).css("display","block");
			$(aas).eq(i).css("background-color","#B2B2B2");
			return false;
		});
	});
	aas.each(function(i,e){
		$(e).click(function(){
			lis.each(function(index,element){
				$(element).css("color","#333333");
			});
			divs.each(function(index,element){
				$(element).css("display","none");
			});
			aas.each(function(index,element){
				$(element).css("background-color","#E5E5E5");
			});
			$(lis).eq(i).css("color","#31c27c");
			$(divs).eq(i).css("display","block");
			$(aas).eq(i).css("background-color","#B2B2B2");
			return false;
		});
	});
}
/*MV--展示阴影*/
function showPlayMv(){
	$(".mv_class>div>div:first-child").hover(
		function(){
			$(this).children(".mv_playlist_img").css("transition","transform .75s");
			$(this).children(".mv_playlist_img").css("-webkit-transform","scale(1.07) translateZ(0)");
			$(this).children(".mv_play_song").css("opacity",1);
			$(this).children(".mv_play_song").css("transform","scale(1) translateZ(0)");
			$(this).children(".mv_cover_mark").css("opacity",0);
			$(this).children(".mv_cover_mark").css("transform","scale(1) translateZ(0)");
		},
		function(){
			$(this).children(".mv_playlist_img").css("-webkit-transform","scale(1) translateZ(0)");
			$(this).children(".mv_cover_mark").css("opacity",0);
			$(this).children(".mv_play_song").css("transform","scale(0.7) translateZ(0)");
			$(this).children(".mv_play_song").css("opacity",0);
		}
	);
}
/*MV--歌单切换*/
function mvChange(){
	var lis = $("#mv_nav li a");
	var divs = $("#mv_content").children(".mv_content");
	var aas = $("#mv_footer a");
	lis.each(function(i,e){
		$(e).click(function(){
			lis.each(function(index,element){
				$(element).css("color","#333333");
			});
			divs.each(function(index,element){
				$(element).css("display","none");
			});
			aas.each(function(index,element){
				$(element).css("background-color","#E5E5E5");
			});
			$(lis).eq(i).css("color","#31c27c");
			$(divs).eq(i).css("display","block");
			$(aas).eq(i).css("background-color","#B2B2B2");
			return false;
		});
	});
	aas.each(function(i,e){
		$(e).click(function(){
			lis.each(function(index,element){
				$(element).css("color","#333333");
			});
			divs.each(function(index,element){
				$(element).css("display","none");
			});
			aas.each(function(index,element){
				$(element).css("background-color","#E5E5E5");
			});
			$(lis).eq(i).css("color","#31c27c");
			$(divs).eq(i).css("display","block");
			$(aas).eq(i).css("background-color","#B2B2B2");
			return false;
		});
	});
}
/*MV--播放按钮展示*/
function showPlayRank(){
	$(".rank_content>div>div:first-child").hover(
		function(){
			$(this).children(".rank_img").css("transition","transform .75s");
			$(this).children(".rank_img").css("-webkit-transform","scale(1.07) translateZ(0)");
			$(this).children(".rank_play_song").css("opacity",1);
			$(this).children(".rank_play_song").css("transform","scale(1) translateZ(0)");
			$(this).children(".rank_cover_mark").css("opacity",0);
			$(this).children(".rank_cover_mark").css("transform","scale(0.7) translateZ(0)");
		},
		function(){
			$(this).children(".rank_img").css("-webkit-transform","scale(1) translateZ(0)");
			$(this).children(".rank_cover_mark").css("opacity",1);
			$(this).children(".rank_cover_mark").css("transform","scale(1) translateZ(0)");
			$(this).children(".rank_play_song").css("transform","scale(0.7) translateZ(0)");
			$(this).children(".rank_play_song").css("opacity",0);
		}
	);
}

/*加载完毕运行*/
$(function(){
	searchLink();
	
	showPlay();
	
	playListChange();
	showPlayNewMusic();
	
	newMusicChange();
	
	recommendedChange();
	
	newDishChange();
	
	showPlayMv();
	mvChange();
	
	showPlayRank();
});
