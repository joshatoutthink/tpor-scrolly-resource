<script>
  import {onMount} from "svelte"
  import FeelingExplainer from "./FeelingExplainer.svelte"
  import {ScrollTrigger} from "gsap/ScrollTrigger"

  let showing = {
    feeling:false,
    ignoring:false,
    thinking:false,
  }

  let layout = "row"

  let feelingEl,ignoringEl,thinkingEl,introEl,parentEl

  function createInterSectionCallBack(key){
    return function whenInViewShow(entries){
      entries.forEach((entry)=>{
        const {boundingClientRect:{y}, intersectionRatio} = entry
        if(y >= 0 && intersectionRatio >.4 ){
          console.log(key + " entering",y)
          showing[key] = true
          console.log(entry)
        }

        if(y <= 0 ){
          console.log(key + " leaving",y)
          showing[key] = false
          console.log(entry)
        }

      }) 
      
    }
  }

  const threshold = [0,.2,.4,.5,.6,.8,1]
  const feelingsObserver = new IntersectionObserver(createInterSectionCallBack("feeling"),{threshold}) 
  const ignoringObserver = new IntersectionObserver(createInterSectionCallBack("ignoring"),{threshold}) 
  const thinkingObserver = new IntersectionObserver(createInterSectionCallBack("thinking"),{threshold}) 

  onMount(()=>{

    feelingsObserver.observe(feelingEl)
    ignoringObserver.observe(ignoringEl)
    thinkingObserver.observe(thinkingEl)

  })  

</script>

<div bind:this={parentEl}>
  <div class="page-container">
    <h2>
      Possible ways to deal with Regret
    </h2>
    {#if showing=="intro"}
    <div class="text" bind:this={introEl}>
      This is some text to explain whats going to happen and what is going to be shown.
    </div>
    {/if}
  
    <div class="feelings-group" style={`--layout:${layout}`}>
      <div class="feeling" data-feeling="feeling">Feelings are for Feeling</div>
      <div class="feeling" data-feeling="ignoring">Feelings are for Ignoring</div>
      <div class="feeling" data-feeling="thinking">Feelings are for Thinking</div>
    </div>

    <div class="wrapper" bind:this={feelingEl} ><FeelingExplainer  isActive={showing.feeling==true} feeling="feeling"/></div>
    <div class="wrapper" bind:this={ignoringEl}><FeelingExplainer feeling="ignoring" isActive={showing.ignoring==true} /></div>
    <div class="wrapper" bind:this={thinkingEl}> <FeelingExplainer  feeling="thinking" isActive={showing.thinking==true} /> </div>
  </div>
  
</div>

<style>
.wrapper{
  padding-left:var(--sidebar-width,200px);
  height:100vh;
}
.feelings-group{
  display:flex;
  gap:20px;
  justify-content:center;
  flex-direction:var(--layout);
}
</style>
