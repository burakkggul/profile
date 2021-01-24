const classListStyleManipulator = (el,styleType,value) => {
    for (let i = 0 ; i < el.length ; i++){
        el[i].style[styleType] = value.toString()+"px";
    }
}

export const styleType = {
    HEIGHT : "height"
}

export default classListStyleManipulator;