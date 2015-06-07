// JavaScript Document
$(document).ready(
				function(){
					var picamount = $("#lunbo #tupian ul li").length;	
					//利用循环语句，添加小圆点。让小圆点的个数，和图片个数一样多。
					//设置信号量，表示当前显示图片的id
					var nowshowpic = 0 ; 
					//这是设置自动滚动的时间间隔的 ↓ 
					var jiangeshijian = 3000;
					//调用设置小圆点函数，使初始状态，第一个小圆点是蓝色
					shezhilianjie(0);

					//让页面每2000毫秒自动轮播
					var mytimer = window.setInterval(
						function(){
							$("#lunbo #anniu .you").trigger("click");
						},jiangeshijian);

					//给右边按钮添加事件监听
					$("#lunbo #anniu .you").click(
						function(){
							if(!$("#zhezhao").is(":animated")){
								//折腾信号量，如果不是最后一张，就加1。否则变成0
								//不用改 ↓ 
								if(nowshowpic != picamount - 1){
									nowshowpic ++ ;
								}else{
									nowshowpic = 0;
								}
								huantu(nowshowpic);
								shezhilianjie(nowshowpic);
							}
						}
					);

					//给左边按钮添加事件监听
					$("#lunbo #anniu .zuo").click(
						function(){
							if(!$("#zhezhao").is(":animated")){
								//折腾信号量，如果不是最后一张，就加1。否则变成0
								//不用改 ↓ 
								if(nowshowpic != 0){
									nowshowpic -- ;
								}else{
									nowshowpic = picamount - 1;
								}
								huantu(nowshowpic);
								shezhilianjie(nowshowpic);
							}
						}
					);

					$("#lunbo #xiaoyuandian ul li").click(
						function(){
							if(!$("#zhezhao").is(":animated")){
								//让信号量的值变为自己的值
									nowshowpic = $(this).index();
								//调用换图函数
									huantu(nowshowpic);
								//调用设置连接函数
									shezhilianjie(nowshowpic);
							}
						}
					);

					//当鼠标进入遮罩层的时候，停止自动滚动
					$("#zhezhao,#xiaoyuandian,#anniu").mouseover(
						function(){
							window.clearInterval(mytimer);
						}
					);

					//当鼠标离开遮罩层的时候，开始自动滚动
					$("#zhezhao,#xiaoyuandian,#anniu").mouseout(
						function(){
							window.clearInterval(mytimer);	//设表先关原则
							mytimer = window.setInterval(
								function(){
								$("#lunbo #anniu .you").trigger("click");
								},jiangeshijian);
						}
					);
					//这是设置连接的函数，功能是让遮罩上的猫腻a标签的href，等于当前图片a的href
					function shezhilianjie(num){
						// 不用改 ↓
						$("#lunbo #zhezhao a").attr("href",$("#tupian ul li").eq(num).children("a").attr("href"));
					}
					
					//这是换图函数，功能就是根据指定的num，来呼吸切换图片
					function huantu(num){
						$("#lunbo #zhezhao").animate(
							{
								"opacity":1
							},300,
							function(){
								$("#lunbo #tupian ul li").eq(num).show().siblings().hide();
							}
						).animate(
							{
								"opacity":0
							},300
						);
					}
				}
			);