import {ONE_STAR_WIDTH} from "./const";

const getRatingWidth = (rating) => Math.round(rating) * ONE_STAR_WIDTH;
const addActiveClass = (isActive, activeClass) => isActive ? activeClass : ``;

export {getRatingWidth, addActiveClass};
