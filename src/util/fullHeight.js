import classListStyleManipulator,{ styleType } from "./classListStyleManipulator";
import isMobile from "./isMobile";

const fullHeight = () => {
    if(! isMobile.any()){
        classListStyleManipulator(document.getElementsByClassName("js-fullheight"),styleType.HEIGHT,window.screen.availHeight - (window.outerHeight - window.innerHeight));
        window.addEventListener('resize',() => {
            classListStyleManipulator(document.getElementsByClassName("js-fullheight"),styleType.HEIGHT,window.screen.availHeight - (window.outerHeight - window.innerHeight));
        });
    }

}

export default fullHeight;