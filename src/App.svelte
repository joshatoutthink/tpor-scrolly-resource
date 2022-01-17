<script>
  import Introduction from "./components/Feels.svelte"
  import Header from "./components/Header.svelte"
  import Footer from "./components/Footer.svelte"
  import {scrollProgress} from "./lib/scrollProgress"

  import {onMount} from "svelte"

  let AppEl;
  let scrolled = 0;
  onMount(()=>{
    scrollProgress(AppEl,{
      onUpdate:({progress})=>{
        scrolled = progress
      }
    })
  }) 


</script>


<div class="App" bind:this={AppEl} style={`--scrolled:${scrolled}`}>
  <div class="scroll-progress-indicator"></div>
  <Header 
    --header-height="33vh"
  />

  <main>
    <Introduction />
  </main>
  <Footer/>
</div>

<style>
.App{
  min-height:100vh;
}
section{
  min-height:100vh;
  z-index:var(--layer0);
  background:white;
  
}

.scroll-progress-indicator{
  width:100%;
  position:fixed;
  top:0;
  height:10px;
  background:var(--yellow);
  transform:scaleX(var(--scrolled));
  z-index:var(--layer-top);
}

section:last-child{
  box-shadow:var(--shadow-xl);
}
</style>
