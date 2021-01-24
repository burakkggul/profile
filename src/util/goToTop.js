import addClassListEventListener, { eventType } from "./addClassListEventListener";
import classListClassManipulator, { operator } from "./classListClassManipulator";

const goToTop = () => {
    let el = document.getElementsByClassName("js-gotop");
    addClassListEventListener(el,eventType.CLICK,function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $('html').offset().top
        }, 500, 'easeInOutExpo');
        
        return false;
    })

    window.addEventListener("scroll", function(){

        let el = document.getElementsByClassName('js-top');

        if (window.scrollY > 200) {
            classListClassManipulator(el,operator.ADD,'active');
        } else {
            classListClassManipulator(el,operator.REMOVE,'active');
        }

    });
}

export default goToTop;