// setTimeout(function(){
//     $('.images > img:nth-child(1)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images > img:nth-child(2)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images > img:nth-child(1)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },3000)

// setTimeout(function(){
//     $('.images > img:nth-child(2)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images > img:nth-child(3)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images > img:nth-child(2)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },6000)

// setTimeout(function(){
//     $('.images > img:nth-child(3)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images > img:nth-child(4)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images > img:nth-child(3)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },9000)

// setTimeout(function(){
//     $('.images > img:nth-child(4)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images > img:nth-child(5)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images > img:nth-child(4)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },12000)

// setTimeout(function(){
//     $('.images > img:nth-child(5)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images > img:nth-child(6)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images > img:nth-child(5)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },15000)

// setTimeout(function(){
//     $('.images > img:nth-child(6)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images > img:nth-child(7)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images > img:nth-child(6)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },18000)

// setTimeout(function(){
//     $('.images > img:nth-child(7)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images > img:nth-child(1)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images > img:nth-child(7)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },21000)

    //      $('.images > img:nth-child(1)').addClass('current');
    //      $('.images > img:nth-child(2)').addClass('enter');

    //    setTimeout(()=>{
    //       $('.images > img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    //           $(e.currentTarget).removeClass('leave').addClass('enter')
    //       })
    //       $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
    //    },3000)

    //    setTimeout(()=>{
    //     $('.images > img:nth-child(2)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    //         $(e.currentTarget).removeClass('leave').addClass('enter')
    //     })
    //     $('.images > img:nth-child(3)').removeClass('enter').addClass('current')
    //  },6000)

    //  setTimeout(()=>{
    //     $('.images > img:nth-child(3)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    //         $(e.currentTarget).removeClass('leave').addClass('enter')
    //     })
    //     $('.images > img:nth-child(4)').removeClass('enter').addClass('current')
    //  },9000)

    //  setTimeout(()=>{
    //     $('.images > img:nth-child(4)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    //         $(e.currentTarget).removeClass('leave').addClass('enter')
    //     })
    //     $('.images > img:nth-child(5)').removeClass('enter').addClass('current')
    //  },12000)

    //  setTimeout(()=>{
    //     $('.images > img:nth-child(5)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    //         $(e.currentTarget).removeClass('leave').addClass('enter')
    //     })
    //     $('.images > img:nth-child(6)').removeClass('enter').addClass('current')
    //  },15000)

    //  setTimeout(()=>{
    //     $('.images > img:nth-child(6)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    //         $(e.currentTarget).removeClass('leave').addClass('enter')
    //     })
    //     $('.images > img:nth-child(7)').removeClass('enter').addClass('current')
    //  },18000)

    //  setTimeout(()=>{
    //     $('.images > img:nth-child(7)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    //         $(e.currentTarget).removeClass('leave').addClass('enter')
    //     })
    //     $('.images > img:nth-child(1)').removeClass('enter').addClass('current')
    //  },21000)


    //  $('.images > img:nth-child(1)').addClass('current');
    //  $('.images > img:nth-child(2)').addClass('enter');
    //  $('.images > img:nth-child(3)').addClass('enter');
    //  $('.images > img:nth-child(4)').addClass('enter');
    //  $('.images > img:nth-child(5)').addClass('enter');
    //  $('.images > img:nth-child(6)').addClass('enter');
    //  $('.images > img:nth-child(7)').addClass('enter');

        // //    优化后
        function imgsInit(){
            let n=1;
            $(`.images > img:nth-child(${n})`).addClass('current')
                .siblings().addClass('enter')
        }  
        function x(n){
            if(n>7){
                n=n%7
                if(n===0){
                    n=7
                }
            }//n = 1 2 3 4 5 6 7
            return n
         }  
       
       
         let n = 1;
    //   setInterval(()=>{
    //               $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    //           .one('transitionend',(e)=>{
    //               $(e.currentTarget).removeClass('leave').addClass('enter')
    //           })
    //               $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
    //           n += 1
    //        },2000)

       
         function makeLeave($node){
            $node.removeClass('current').addClass('leave')
            return $node
        }
        
        //其他的依次类推
        function makeEnter($node){
            $node.removeClass('leave').addClass('enter')
            return $node
        }
        function makeCurrent($node){
            $node.removeClass('enter').addClass('current')
            return $node
        }
        let m = 1 
               $(`.images > img:nth-child(${x(m)})`)

        function getImages(m){
            return $(`.images > img:nth-child(${x(m)})`)
        }

         

        imgsInit()

                setInterval(() => {
                    makeLeave(getImages(m)).one('transitionend',(e) => {
                            makeEnter($(e.currentTarget))
                        })
                    makeCurrent(getImages(m+1))
                    m += 1
                },2000)