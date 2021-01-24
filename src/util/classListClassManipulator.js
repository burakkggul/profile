const classListClassManipulator = (el, operator, className) => {
  for (let i = 0; i < el.length; i++) {
    el[i].classList[operator](className);
  }
};

export const operator = {
  ADD: "add",
  REMOVE: "remove",
};

export default classClassListManipulator;
