<script>
  import {onMount} from "svelte"
  import {fly} from  "svelte/transition"
  import {mapPercentTo} from "../lib/scrollProgress"
  import {gsap} from "gsap"
  

  let headerEl;
  let headerScale=1;
  let showInfo = true;
  onMount(()=>{
    gsap.to("header",{
      scrollTrigger:{
        trigger:"header",
        start:"top top",
        end:"+=200px",
        onUpdate:({progress})=>{
          headerScale = mapPercentTo(1 - progress,{start:.5,end:1})
        },
        onEnter:()=>(showInfo=true),
        onEnterBack:()=>{
          showInfo=true
        },
        onLeave:()=>{
          showInfo=false
        }
      }
    })   
  }) 

</script>

<header bind:this={headerEl} style={`--header-scale:${headerScale}`}>
  <div class="page-container "  >
    <h1>Three Options for Responding to Regret</h1>
    {#if showInfo}
    <hr out:fly="{{x:-100}}">
    <div class="info" out:fly="{{x:-100}}">
      <p class="sub-heading">Imagine you forgot a loved one’s birthday.<br> Think about how this makes you feel.</p>
    </div>
    {/if}
  </div>
    {#if showInfo}
      <p class="copy">When it comes to feelings, all regrets aggravate. Productive regrets aggravate, then activate. The
chart below explains the process. It also demonstrates the key point: Your response determines your result.</p>
    {/if}
</header>

<style>
header{
  z-index:var(--layer0);
  margin-block-start:var(--header-height);
  padding-block-end:calc(var(--xl-sz) - 1em);
  text-align: center;
  position:sticky;
  top:0;
  height:calc(100vh - 200px);
  pointer-events:none;
  background:var(--teal50);
}  

.page-container{
  top:0;
  display:flex;
  flex-direction:column;
  gap:var(--md-sz);
  transition:transform .1s linear; 
  transform:scale(var(--header-scale));
}

h1 {
  font-size:var(--lg-sz);
  font-weight:200;
  color:var(--primary);
  line-height: 1.2;
}

hr{
  border:none; 
  margin-inline:auto;
  background:var(--secondary);
  height:var(--base-sz);
  width:200px;
}

.info .sub-heading {
  max-width:50ch;
  margin-inline:auto;
  font-size: var(--md-sz);  
  font-weight:  600;
}
 .copy{
  margin-inline:auto;
  max-width: 70ch;
font-size: var(--sm-sz);
}
</style>
