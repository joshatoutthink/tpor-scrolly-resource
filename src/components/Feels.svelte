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

  let feelingEl,ignoringEl,thinkingEl,introEl,parentEl
  let els ={}
   els = {feeling:feelingEl,ignoring:ignoringEl,thinking:thinkingEl}

  
  function createInterSectionCallback(key){
    return function whenInViewShow(entries){
      entries.forEach((entry)=>{
        const {boundingClientRect:{y,height}, intersectionRatio,} = entry
        if(y >= 0 && intersectionRatio >.4 ){
/* console.log(key + " entering",y) */
          showing[key] = true
console.log(entry)
        }

        if(y <= 100 || y>=height ){
/* console.log(key + " leaving",y) */
          showing[key] = false
console.log(entry)
        }

      }) 
      
    }
  }

  function headerObserverCallback(entries){
    entries.forEach((entry)=>{
      const {boundingClientRect:{y}, intersectionRatio} = entry
      if(y<=170){
/* console.log({headerEntry:entry}) */
        showAppHeader = true
      }
      else{
        showAppHeader = false
      }

      console.log({y})
      if(y<=140){
        setTimeout(()=>{
        layout="column"
        },200)

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

    Object.keys(els).forEach((feelingKey)=>{
       feelingsObserver.observe(els[feelingKey])
    })

  })  

</script>

<div class="parent" bind:this={parentEl}>
  <div class="page-container">

    <header >
      {#if showAppHeader }
        <div transition:fly="{{y:-50}}" class="app-heading">Regrets make us feel.</div>
      {/if}
      <h2>
        Possible ways to deal with Regret
      </h2>
    </header>

    {#if false}
      <div class="text" bind:this={introEl}>
        This is some text to explain whats going to happen and what is going to be shown.
      </div>
    {/if}
  
    {#key layout}
    <div class={`feelings-group ${layout=="column"&&"column-layout"}`} transition:fade>
      {#each feelings as feeling (feeling.id)}
        <div animate:flip="{{duration:200}}" class={`feeling ${showing[feeling.id]==true && "is-active"}`} data-feeling={feeling.id}>Feelings are for {feeling.id}</div>
      {/each}
    </div>
    {/key}
    {#each feelings as feeling (feeling.id)}
      <div class="wrapper" bind:this={els[feeling.id]} ><FeelingExplainer  isActive={showing[feeling.id]==true} feeling={feeling}/></div>
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
.wrapper{
  padding:var(--sm-sz);
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
  .feelings-group.column-layout{
    display:none;
  }
}
.feeling{
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
  top:calc(var(--lg-sz) * 1.2);
  text-align: center;
}

h2{
  padding-top:calc(var(--lg-sz) * 1.2);
  font-size: var(--lg-sz);
  color:var(--teal50);
  text-align: center; 
}


</style>
