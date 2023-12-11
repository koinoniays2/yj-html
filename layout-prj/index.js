window.addEventListener("load", function () {
    
    // 스크롤 이벤트
    window.addEventListener('scroll', function () {
        // aside 고정
        let aside = document.getElementById('main-aside');
        let offsetTop = aside.parentElement.offsetTop;
        let left = aside.getBoundingClientRect().left;
        let right = aside.getBoundingClientRect().right;
        
        if (window.scrollY > offsetTop) {
            aside.style.position = 'fixed';
            aside.style.top = 0;
            aside.style.left = left + "px";
            aside.style.right = right + "px";
        } else {
            aside.style.position = 'static';
        }

        // fadeIn,Out
        let scotch = document.querySelector("#scotch");
        let scotchDiv = document.querySelectorAll("#scotch>div");
        let scotchPosition = scotch.getBoundingClientRect().top;
        let scotchPosition2 = scotch.getBoundingClientRect().bottom;
        let cognac = document.querySelector("#cognac");
        let cognacDiv = document.querySelectorAll("#cognac>div");
        let cognacPosition = cognac.getBoundingClientRect().top;
        let cognacPosition2 = cognac.getBoundingClientRect().bottom;

        if (scotchPosition <= window.innerHeight / 1.5  && scotchPosition2 >= 0) {
            for (let i = 0; i < scotchDiv.length; i++) {
                scotchDiv[i].style.opacity = 1;
                scotchDiv[i].style.transition = "opacity 0.5s ease-out";
            }
        } else {
            for (let i = 0; i < scotchDiv.length; i++) {
                scotchDiv[i].style.opacity = 0;
                scotchDiv[i].style.transition = "opacity 0.5s ease-out";
            }
        }

        if (cognacPosition <= window.innerHeight / 1.5 && cognacPosition2 >= 0) {
            for (let i = 0; i < cognacDiv.length; i++) {
                cognacDiv[i].style.opacity = 1;
                cognacDiv[i].style.transition = "opacity 0.5s ease-out";
            }
        } else {
            for (let i = 0; i < cognacDiv.length; i++) {
                cognacDiv[i].style.opacity = 0;
                cognacDiv[i].style.transition = "opacity 0.5s ease-out";
            }
        }
    })
    window.addEventListener('resize', function () {
        let aside = document.getElementById('main-aside');
        let offsetTop = aside.parentElement.offsetTop;
      
        // 화면이 조절될 때, fixed 상태에서 해제
        // 다시 스크롤하면 나타남
        if (window.scrollY > offsetTop) {
          aside.style.position = 'static';
        }
      });
});