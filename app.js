window.onload = function (){
    function scrool(target, duration) {
        // var duration = document.querySelector(duration)
        var target = document.querySelector(target);
        var targetPositon = target.getBoundingClientRect().top;
        var startPositon = window.pageYOffset;
        var distance = targetPositon - startPositon;
        var startTime = null;
        function animation(CurrentTime) {
            if (startTime === null) startTime = CurrentTime;
            var timeElapsed = CurrentTime - startTime;
            var run = ease(timeElapsed, startPositon, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation)
        }
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;

        }

        requestAnimationFrame(animation);


    }
    var bt1 = document.querySelector("#btn1");

    bt1.addEventListener('click',()=>{

        scrool('.section2', 1000)
    })



}


    // var btn1 = document.querySelector("#btn1");
    // // function hello() {
    // //     alert('hello')
    // // }
    // btn1.addEventListener('click',()=>{

    //     // scrool('.section1', 100)
    //     alert('hh')
    // })


