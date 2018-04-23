window.onload = function() {
            var list = document.getElementById('lis');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var container = document.getElementById('nav');
            var link_span = document.getElementById('link').getElementsByTagName('span');
            var link_img_box = document.getElementById('link_img_box');
            var link_li = document.getElementById('link').getElementsByTagName('li');
            var friend_img = document.getElementById('friend').getElementsByTagName('img');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var index = 1;
            var timer;
            var timer_1;

            function animate(offset) {
                //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
                //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
                var newLeft = parseInt(list.style.left) + offset;
                list.style.left = newLeft + 'px';
                if(newLeft<-6750){
      			list.style.left = -1350 + 'px';
 				}
 				if(newLeft>-1350){
    			list.style.left = -6750 + 'px';
 				}
            }
        
            function rnd(n, m){
                var random = Math.floor(Math.random()*(m-n+1)+n);
                return random;
            }

            function turnturn(){
                // clearInterval(timer_1);
                var rnd_number = rnd(0,15);
                friend_img[rnd_number].className = "img_turn";
            }
            
            function turndelete(){
                for(var i = 0;i < friend_img.length; i++) {
                    if (friend_img[i].className == "img_turn") {
                        friend_img[i].className = " ";
                    }
                }
            }

            function turnstart(){
                turnturn();
                setTimeout(turndelete,3000);
            }

            // turnstart();

            function turngo(){
                timer_1 = setInterval(turnstart, 3998);
            }

            turngo();

			function buttonsShow() {
                //这里需要清除之前的样式
            for (var i = 0; i < buttons.length; i++) {
                if (buttons[i].className == 'on') {
                        buttons[i].className = '';
                    }
                }
                //数组从0开始，故index需要-1
            buttons[index - 1].className = 'on';
            }

            prev.onclick = function() {
                index -= 1;
                if (index < 1) {
                    index = 5;
                }
                buttonsShow();
                animate(1350);
            }
            next.onclick = function() {
                //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
                index += 1;
                if (index > 5) {
                    index = 1;
                }
                buttonsShow();
                animate(-1350);
            }
        
        function play() {
        	timer = setInterval(function () {
        	next.onclick()
    		}, 1500)
		}
     	
        function stop() {
            clearInterval(timer);
        }
        
        for (var i = 0; i < link_li.length;i++) {
            (function(i){
                link_li[i].onclick = function(){
                    var clIndex = parseInt(this.getAttribute('index'));
                    for(var j = 0; j < link_li.length;j++){
                        if (link_li[j].className == 'is') {
                            link_li[j].className = '';
                        }
                    }
                    link_li[i].className = 'is';
                    var link_result = -1124*(clIndex - 1);
                    link_img_box.style.transform = 'translate(' + link_result +'px,0)';

                    link_span[0].style.left = 60 + 122*(clIndex - 1) + 'px';
                }
            })(i)
        }



        for (var i = 0; i < buttons.length; i++) {
                 (function(i) {
                    buttons[i].onclick = function() {
                    var clickIndex = parseInt(this.getAttribute('index'));
                    var offset = 1350 * (index - clickIndex); //这个index是当前图片停留时的index
                    animate(offset);
                    index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
                    buttonsShow();
                    }
                })(i)
            }

        container.onmouseover = stop;
        container.onmouseout = play;
		play();
        
}