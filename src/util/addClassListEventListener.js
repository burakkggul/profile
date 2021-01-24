const addClassListEventListener = (el, eventType, callback) => {
    for(let i = 0 ; i < el.length ; i++){
        el[i].addEventListener(eventType,callback);
    }
}

export const eventType = {
    CLICK : "click"
}

export default addClassListEventListener;