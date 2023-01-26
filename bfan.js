
/* 音乐播放控制 */
function audbf() {
    var ele = window.event.srcElement.lang;//获取点击的id
    var nam = "musicplay-" + ele;//得出对应的音乐位置id

    var bfkztu = "sh-aud-left-plak-" + ele;//获得播放控制按钮
    var bfz = document.getElementById(bfkztu).lang;//获得播放状态
    //console.log(bfz);

    var audio = document.getElementById(nam);//取到音乐播放器

    if (bfz == 0) {
        //没有播放
        audio.play();//开始播放音乐
        document.getElementById(bfkztu).lang = "1";//更新播放状态为播放中
        document.getElementById(bfkztu).className = "iconfont icon-iconstop";//开始播放后设置播放按钮图片为暂停的图片


        //console.log("进度"+audio.currentTime)
        //获取音乐总时长
        var audj = "audjdt-" + ele;//获取进度条id
        //console.log(audj)
        var yyzs = parseInt(audio.duration);//获取音乐总时长
        //-------console.log("总时长"+yyzs);
        //console.log("当前进度"+audio.currentTime)
        var mms = yyzs / "100";//音乐总时长除100 得到的结果就是暂停的秒数 暂停后进度加1 改变进度条
        var mms = mms * 1000;//将秒转为毫秒
        //console.log(mms);
        audio.volume = 0.3;//设置音乐的音量


        //console.log(aet);
        //var art=aet.replace("%","");
        //判断音乐是否在播放

        var i = 1;
        timer = setInterval(function () {
            if (audio.paused) {
                // 当音乐没有播放时则关闭定时器 
                //---------console.log("关闭定时器");
                clearInterval(timer);
                return;
            }
            //----------console.log("当前进度"+audio.currentTime)
            /*var yyzsc=parseInt(audio.duration);//获取音乐总时长
            var yydqsc=parseInt(audio.currentTime);//获取音乐当前进度
            yyzsc2= yyzsc- yydqsc;
            console.log("总时长"+yyzsc2)
        
                    mms=yyzsc2/"100";//音乐总时长除100 得到的结果就是暂停的秒数 暂停后进度加1 改变进度条
                    mms=mms*1000;//将秒转为毫秒
                    console.log(mms)*/

            var aet = document.getElementById(audj).lang;//获取当前宽度参数
            var st = parseInt(aet) + 1;//宽度参数加1
            document.getElementById(audj).lang = st;//设置进度条宽度参数
            document.getElementById(audj).style.width = st + "%";//改变进度条

            if (i === 100) {
                //等于100 则音乐播放完成，复位控制按钮为未播放状态，复位进度条为0
                //audio.pause();//停止音乐播放
                audio.currentTime = 0;//音乐进度设为0
                audio.pause();
                document.getElementById(bfkztu).lang = "0";//更新播放状态为未播放
                //document.getElementById(bfkztu).src="./assets/img/pua.svg";//暂停播放后设置播放按钮图片为开始的图片
                document.getElementById(bfkztu).className = "iconfont icon-jixu";//暂停播放后设置播放按钮图片为开始的图片
                document.getElementById(audj).lang = "0"//设置播放进度为0
                document.getElementById(audj).style.width = "0%"//设置播放进度条宽度为0
                //-----------console.log("关闭定时器");
                clearInterval(timer);
                return;
            }
            i++;
        }, mms);



    } else {
        //在播放
        audio.pause();//暂停播放音乐
        clearInterval(timer);//关闭定时器
        document.getElementById(bfkztu).lang = "0";//更新播放状态为未播放
        //document.getElementById(bfkztu).src="./assets/img/pua.svg";//暂停播放后设置播放按钮图片为开始的图片
        document.getElementById(bfkztu).className = "iconfont icon-jixu";//暂停播放后设置播放按钮图片为开始的图片
    }




}

/* 首页顶部音乐播放控制 */
function syaudbf() {

    var bfkztu = "sh-main-top-mu";//获得播放控制按钮
    var bfz = document.getElementById(bfkztu).lang;//获得播放状态
    //console.log(bfz);

    var audio = document.getElementById("sh-main-top-musicplay-b");//取到音乐播放器

    if (bfz == 0) {
        //没有播放

        audio.play();//开始播放音乐
        document.getElementById(bfkztu).lang = "1";//更新播放状态为播放中

        var tul = document.querySelector("#sh-main-top-mu").getAttribute("data-bfzt");//获取当前的图标
        //console.log(tul)
        if (tul == "bb") {
            document.getElementById("sh-main-top-mu").className = "iconfont icon-iconstop ri-z-sx";
            document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt", "bbz");
        } else if (tul == "bbh") {
            document.getElementById("sh-main-top-mu").className = "iconfont icon-iconstop ri-z-sxh";
            document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt", "zbbh");
        }



        //console.log("进度"+audio.currentTime)
        //获取音乐总时长
        var audj = "sh-main-top-mucisjd";//获取进度条id
        //console.log(audj)
        var yyzs = parseInt(audio.duration);//获取音乐总时长
        //----console.log("总时长"+yyzs);
        //console.log("当前进度"+audio.currentTime)
        var mms = yyzs / "100";//音乐总时长除100 得到的结果就是暂停的秒数 暂停后进度加1 改变进度条
        var mms = mms * 1000;//将秒转为毫秒
        //console.log(mms);
        audio.volume = 0.3;//设置音乐的音量


        //console.log(aet);
        //var art=aet.replace("%","");
        //判断音乐是否在播放

        var i = 1;
        timer2 = setInterval(function () {
            if (audio.paused) {
                // 当音乐没有播放时则关闭定时器 
                //--------console.log("关闭定时器");
                clearInterval(timer2);
                return;
            }
            //-----------console.log("当前进度"+audio.currentTime)
            var aet = document.getElementById(audj).lang;//获取当前宽度参数
            var st = parseInt(aet) + 1;//宽度参数加1
            document.getElementById(audj).lang = st;//设置进度条宽度参数
            document.getElementById(audj).style.width = st + "%";//改变进度条

            if (i === 100) {
                //等于100 则音乐播放完成，复位控制按钮为未播放状态，复位进度条为0
                //audio.pause();//停止音乐播放
                audio.currentTime = 0;//音乐进度设为0
                audio.pause();
                document.getElementById(bfkztu).lang = "0";//更新播放状态为未播放
                var tul = document.querySelector("#sh-main-top-mu").getAttribute("data-bfzt");//获取当前的图标
                //console.log(tul)
                if (tul == "bbz") {
                    document.getElementById("sh-main-top-mu").className = "iconfont icon-jixu ri-z-sx"
                    document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt", "bb");
                } else if (tul == "zbbh") {
                    document.getElementById("sh-main-top-mu").className = "iconfont icon-jixu ri-z-sxh"
                    document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt", "bbh");
                }

                document.getElementById(audj).lang = "0"//设置播放进度为0
                document.getElementById(audj).style.width = "0%"//设置播放进度条宽度为0
                //-------console.log("关闭定时器");
                clearInterval(timer2);
                return;
            }
            i++;
        }, mms);



    } else {
        //在播放
        audio.pause();//暂停播放音乐
        clearInterval(timer2);//关闭定时器
        document.getElementById(bfkztu).lang = "0";//更新播放状态为未播放
        var tul = document.querySelector("#sh-main-top-mu").getAttribute("data-bfzt");//获取当前的图标
        //console.log(tul)
        if (tul == "bbz") {
            document.getElementById("sh-main-top-mu").className = "iconfont icon-jixu ri-z-sx"
            document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt", "bb");
        } else if (tul == "zbbh") {
            document.getElementById("sh-main-top-mu").className = "iconfont icon-jixu ri-z-sxh"
            document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt", "bbh");
        }

    }




}




//首页顶部音乐随机获取
function sjsyyy() {
    // 异步对象
    var xhr = new XMLHttpRequest();
    // 设置属性
    xhr.open('post', './api/symusic.php');
    // 如果想要使用post提交数据,必须添加此行
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // 将数据通过send方法传递
    xhr.send('q=1');
    // 发送并接受返回值
    xhr.onreadystatechange = function () {
        // 这步为判断服务器是否正确响应
        if (xhr.readyState == 4 && xhr.status == 200) {
            //alert(xhr.responseText);
            if (xhr.responseText == "") {
                errorpop("未获取到数据");
                return;
            }
            //console.log(xhr.responseText)
            var obj = JSON.parse(xhr.responseText); //由JSON字符串转换为JSON对象
            var code = obj[0].code;//获取第一个的值 状态码
            var mum = obj[0].mum;//获取返回歌名
            var muurl = obj[0].muurl;//获取返回歌链接
            if (code == 200) {
                //获取到音乐

                bfkztu = "sh-main-top-mu";//获得播放控制按钮
                var audio = document.getElementById("sh-main-top-musicplay-b");//取到音乐播放器
                audio.pause();//暂停播放音乐
                document.getElementById(bfkztu).lang = "0";//更新播放状态为未播放
                var tul = document.querySelector("#sh-main-top-mu").getAttribute("data-bfzt");//获取当前的图标
                //console.log(tul)
                if (tul == "bbz") {
                    document.getElementById("sh-main-top-mu").className = "iconfont icon-jixu ri-z-sx"
                    document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt", "bb");
                } else if (tul == "zbbh") {
                    document.getElementById("sh-main-top-mu").className = "iconfont icon-jixu ri-z-sxh"
                    document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt", "bbh");
                }



                var audj = "sh-main-top-mucisjd";//获取进度条id
                document.getElementById(audj).lang = "0"//设置播放进度为0
                document.getElementById(audj).style.width = "0%"//设置播放进度条宽度为0
                document.getElementById("sh-main-top-g-m").lang = mum;//设置新歌名
                document.getElementById("sh-main-top-musicplay-b").src = muurl;//设置新音乐


                //获取到音乐
            } else { errorpop("获取歌曲失败"); }
        }
    };
}