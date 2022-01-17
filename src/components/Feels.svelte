<script>
  import {onMount} from "svelte"
  import FeelingExplainer from "./FeelingExplainer.svelte"
  import {ScrollTrigger} from "gsap/ScrollTrigger"

  let feelingEl,ignoringEl,thinkingEl,introEl,parentEl

  let showing = null
  function activate(feeling){
    if(!showing){
      showing = feeling
    }
  }
  function deactivate(feeling){
    if(showing == feeling){
      showing = null
    }
  }
  function feelingController(el,name){
    ScrollTrigger.create({
      trigger:el,
      marker:true,
      start:"top top",
      end:"bottom bottom",
      onEnter:()=>{
        activate(name)
      },
      onEnterBack:()=>{
        activate(name)
      },
      onLeave:()=>{
        console.log(name)
        deactivate(name)
      },
      onLeaveBack:()=>{
        deactivate(name)
      },
    })
  }

  $:showing,console.log(showing)

  onMount(()=>{


    ScrollTrigger.create({
      trigger:parentEl,
      start:"top top",
      end:"+=200",
      onEnter:()=>activate("intro")||console.log("introA"),
      onLeave:()=>deactivate("intro")||console.log("introL")
    })
    //FEELINGS

    //Feeling Feeling
    feelingController(feelingEl, "feeling")
    feelingController(feelingEl, "feeling")
    feelingController(ignoringEl, "ignoring")
    feelingController(thinkingEl, "ignoring")

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
  
    <div class="feelings-group" style={`--layout:${ showing=="intro" ? "row" : "column" }`}>
      <div class="feeling" data-feeling="feeling">Feelings are for Feeling</div>
      <div class="feeling" data-feeling="ignoring">Feelings are for Ignoring</div>
      <div class="feeling" data-feeling="thinking">Feelings are for Thinking</div>
    </div>

      <div class="wrapper" bind:this={feelingEl} ><FeelingExplainer  isActive={showing==="feeling"} feeling="feeling"/></div>
      <div class="wapper" bind:this={ignoringEl}><FeelingExplainer feeling="ignoring" isActive={showing==="ignoring"} /></div>
      <div class="wrapper" bind:this={thinkingEl}>
            <FeelingExplainer  feeling="thinking" isActive={showing==="thinking"} />
      </div>
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
