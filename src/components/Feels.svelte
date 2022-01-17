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

  let layout = "row"
  let showAppHeader = false
  let headerHeight;

  let feelingEl,ignoringEl,thinkingEl,introEl,parentEl
  let els = {feeling:feelingEl,ignoring:ignoringEl,thinking:thinkingEl}

  
  function createInterSectionCallback(key){
    return function whenInViewShow(entries){
      entries.forEach((entry)=>{
        const {boundingClientRect:{y,height}, intersectionRatio,} = entry
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
      console.log("y",y,{entry})

      if(y <= 300 ){
          layout="column"
          setTimeout(()=>{
          document.querySelector("#option-1").scrollIntoView(true);
          },100)
      }else{
        layout="row"
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

  
    {#key layout}
    <div class={`feelings-group ${layout=="column"&&"column-layout"}`} transition:fade>
      {#each feelings as feeling,index (feeling.id)}
        <a href={`#option-${index+1}`} animate:flip="{{duration:200}}" class={`feeling ${showing[feeling.id]==true && "is-active"}`}
data-feeling={feeling.id}>Option<br>{index+1}</a>
      {/each}
    </div>
    {/key}
    {#each feelings as feeling, index (feeling.id)}
    <div id={`option-${index+1}`} class={`wrapper feeling-${feeling.id}`}  bind:this={els[feeling.id]} >
      <FeelingExplainer {index}  isActive={showing[feeling.id]==true} feeling={feeling}/>
    </div>
    {/each}
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
  padding-left:var(--sidebar-width,200px);
  height:100vh;
}
@media (max-width:762px){
  .wrapper {
    padding-left:var(--sm-sz);
  }
}
.feelings-group{
  position:sticky;
  margin-top:150px;
  top:150px;
  display:flex;
  z-index:var(--layer1);
  gap:10px;
  justify-content:center;
  flex-direction:row;
  height:calc(100vh - 150px);
  padding:var(--md-sz);
}
.feelings-group.column-layout{
  flex-direction:column;
  margin-top:0;
  width:200px;
  justify-content: flex-start; 
}
@media(max-width:762px){
  .feelings-group{
    display:none;
  }
}
.feelings-group .feeling{
  background:white;
  max-height:200px;
  width:100%; 
  transition:transform .28s ease-in-out;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  padding:var(--sm-sz);
  text-align: center;
  font-weight: bold;
  color:var(--primary);
  border-radius:10px;
}

.feeling.is-active{
  transform:translateX(10px) scale(1.05);
}
.column-layout .feeling{
  height:100%;
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
