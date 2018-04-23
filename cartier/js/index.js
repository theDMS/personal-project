window.onload = function() {
            var list = document.getElementById('lis');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var container = document.getElementById('container');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var index = 1;
            var timer;

            function animate(offset) {
                //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
                //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
                var newLeft = parseInt(list.style.left) + offset;
                list.style.left = newLeft + 'px';
                if(newLeft<-1092){
      			list.style.left = -273 + 'px';
 				}
 				if(newLeft>-273){
    			list.style.left = -1092 + 'px';
 				}
            }
        
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
                    index = 4;
                }
                buttonsShow();
                animate(273);
            }
            next.onclick = function() {
                //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
                index += 1;
                if (index > 4) {
                    index = 1;
                }
                buttonsShow();
                animate(-273);
            }
        
        function play() {
        	timer = setInterval(function () {
        	next.onclick()
    		}, 1500)
		}
     	
        function stop() {
            clearInterval(timer);
        }

        for (var i = 0; i < buttons.length; i++) {
                 (function(i) {
                    buttons[i].onclick = function() {
                    var clickIndex = parseInt(this.getAttribute('index'));
                    var offset = 273 * (index - clickIndex); //这个index是当前图片停留时的index
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
