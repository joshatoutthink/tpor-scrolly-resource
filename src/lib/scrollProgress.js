import {ScrollTrigger} from "gsap/ScrollTrigger"

export function nativeScrollProgress(){

  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  return scrolled
}


export function scrollProgress(
  ref,
  options={}
){
  const triggerOptions = {
    trigger:ref,
    start: "top top",
    end: "bottom bottom",
    ...options
  }
  return ScrollTrigger.create(triggerOptions)
}

export function mapPercentTo(input,{start,end}){
  return ((end - start) * input) + start
}

export function createMapToRange([fromStart, fromEnd],[toStart, toEnd]) {
  const fromRange = fromEnd - fromStart
  const toRange = toEnd-toStart
  
  return function mapRangeTo(input){
    const fromPercent = input/fromRange 
    return fromPercent * toRange + toStart 
  } 
}
console.log(createMapToRange([100,0],[0,100])(50))

