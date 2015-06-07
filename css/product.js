// JavaScript Document
$(document).ready(
				function(){
					var nowshowpic = 0;
					var shuliang=$(".tu ul li").length;
					console.log(shuliang)
					$(".rightbut")[0].onclick = you;
					$(".leftbut")[0].onclick = null;

					$(".xiaotu li").mouseover(
						function(){
							$(".datu img").attr("src",$(this).children("img").attr("src"));
						}
					);
					function you(){
						if(!$(".xiaotu ul").is(":animated")){
							if(shuliang >8){
								nowshowpic++;
								if(nowshowpic == 0){
								//从按钮监听讨论：
								$(".leftbut")[0].onclick = null;
								$(".rightbut")[0].onclick = you;
								}
								else if(0 < nowshowpic && nowshowpic < shuliang-8){
								//从按钮监听讨论：
								$(".leftbut")[0].onclick = zuo;
								$(".rightbut")[0].onclick = you;
								}
								else if(nowshowpic >=shuliang-8)
								{
								//从按钮监听讨论：
								$(".leftbut")[0].onclick = zuo;
								$(".rightbut")[0].onclick = null;
								}
								$(".xiaotu ul").animate(
								{
									"left":nowshowpic*(-45)
								},500
								);
							}else{
								$(".leftbut")[0].onclick = null;
								$(".rightbut")[0].onclick = null;
								}
						}
					}

					function zuo(){
						if(!$(".xiaotu ul").is(":animated")){
							if(shuliang >8){
								nowshowpic--;
								if(nowshowpic == 0){
								//从按钮监听讨论：
								$(".leftbut")[0].onclick = null;
								$(".rightbut")[0].onclick = you;
								}
								else if(0 < nowshowpic && nowshowpic < shuliang-8){
								//从按钮监听讨论：
								$(".leftbut")[0].onclick = zuo;
								$(".rightbut")[0].onclick = you;
								}
								else if(nowshowpic >=shuliang-8)
								{
								//从按钮监听讨论：
								$(".leftbut")[0].onclick = zuo;
								$(".rightbut")[0].onclick = null;
								}
								$(".xiaotu ul").animate(
								{
									"left":nowshowpic*(-45)
								},500
								);
							}else{
								$(".leftbut")[0].onclick = null;
								$(".rightbut")[0].onclick = null;
								}
						}
					}
				}
			);