<script>
  import {onMount} from "svelte"
  import {fly,crossfade,fade} from "svelte/transition"
  import {flip} from "svelte/animate"
  import FeelingExplainer from "./FeelingExplainer.svelte"
  import {ScrollTrigger} from "gsap/ScrollTrigger"
  import {feelings} from "../feelings.js"

  let showing = feelings
    .reduce((acc,feeling)=>{
      acc[feeling.id] = false
      return acc
    },{})

  let showAppHeader= false
  let headerHeight;

  let feelingEl,ignoringEl,thinkingEl,introEl,parentEl
  let els = {feeling:feelingEl,ignoring:ignoringEl,thinking:thinkingEl}

  
  function createInterSectionCallback(key){
    return function whenInViewShow(entries){
      entries.forEach((entry)=>{
        const {boundingClientRect:{y,height}, intersectionRatio} = entry
        if(y >= 0 && intersectionRatio >.4 ){
          showing[key] = true
        }

        if(y <= 0 || y>=height ){
          showing[key] = false
        }

      }) 
      
    }
  }

  function headerObserverCallback(entries){
    entries.forEach((entry)=>{
      const {boundingClientRect:{y}, intersectionRatio} = entry
      if(y<=200){
/* console.log({headerEntry:entry}) */
        showAppHeader = true
      }
      else{
        showAppHeader = false
      }
      
    })
  }

  const threshold = [0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]
  const parentObserver = new IntersectionObserver(headerObserverCallback, {threshold})
  const feelingsObserver = new IntersectionObserver(createInterSectionCallback("feeling"),{threshold}) 
  const ignoringObserver = new IntersectionObserver(createInterSectionCallback("ignoring"),{threshold}) 
  const thinkingObserver = new IntersectionObserver(createInterSectionCallback("thinking"),{threshold}) 

  onMount(()=>{

    parentObserver.observe(parentEl)

    feelingsObserver.observe(els.feeling)
    ignoringObserver.observe(els.ignoring)
    thinkingObserver.observe(els.thinking)
  })  

</script>

<div class="parent" bind:this={parentEl} style="--header-height:{headerHeight}px">
  <div class="page-container">
    <header bind:clientHeight={headerHeight} transition:fly="{{y:-50}}">
      <div  class="app-heading">
        Ways to deal with Regret
      </div>
      <h2>Three possible responses</h2>
    </header>

  
    <div class="feelings">
    {#each feelings as feeling, index (feeling.id)}
      <div id={`option-${index+1}`} class={`wrapper feeling-${feeling.id}`}  bind:this={els[feeling.id]} >
        <FeelingExplainer 
           {index}  
           isActive={showing[feeling.id]==true}
           feeling={feeling}
        />
      </div>
    {/each}
    </div>
  </div>
  
</div>

<style>
.parent{
  z-index:var(--layer2);
  background:var(--primary);
}
.app-heading{
  position:absolute;
  width:100%;
  text-align: center;
  font-size: var(--md-sz);
  color:var(--yellow);
}
.text{
  text-align: center; 
  color:white;
}
.wrapper{
  padding:var(--m-sz);
  padding-block-start:var(--header-height);
  height:100vh;
}
.feelings{
  max-width:700px;
  margin-inline:auto;
}

header{
  position:sticky;
  background:var(--primary);
  z-index:var(--layer2);
  top:0;
  text-align: center;
}
@media(max-width:762px){
  header{
    margin-bottom:200px;
  }
}

h2{
  padding-top:calc(var(--lg-sz) * 1.2);
  font-size: var(--lg-sz);
  color:var(--teal50);
  text-align: center; 
}


</style>
