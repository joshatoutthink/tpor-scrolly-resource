<script>
  import {fly} from "svelte/transition"
 export let feeling 
  export let isActive
  const id = feeling
  export let description;
  export let image;
</script>


{#if isActive}
<div class={`block showing-details`}  >
  <div  class="BG"></div>

  <div class="content">
  <h3 in:fly="{{y:-50,duration: 600,delay:200 }}" >
    Feelings are for<br> <span class="big">{id}</span>
  </h3>
      <p class="info" in:fly="{{y:50,duration: 600,delay:200 }}">
        {description}
      </p>
  </div>
    <div class="image" in:fly="{{x:100,duration:1000,delay:300}}">
      <img  src={image} />
    </div>
</div>
{/if}

<style>

h1{
  font-size: var(--lg-sz);
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.block{
  position: relative;
  margin-inline:auto;
  --offset:100px;
}
.block{
  display:grid;
  grid-template-columns:1fr 1fr var(--offset);
  align-items:center;
  height:400px;
}
.BG{
  
  z-index:0;
  background:white;
  position: absolute;
  inset:0;
  box-shadow:var(--shadow-lg);
  height:100%;
  border-radius:20px;
}
.BG {
  width:calc( 100% - var(--offset)); 
}
.content {
  position: relative;
  grid-column:1/2; 
  z-index:1;
  height:100%;
  padding:20px;
}
h3{
color:var(--primary);
  font-size: 30px;
}
p{
  font-size: var(--sm-sz);
}
.image {
  box-shadow:var(--shadow-xl);
  position: relative;
  grid-column:2/4;
  z-index:1;
  overflow:hidden;
  border-radius:20px; 
  height:70%;
}
.image img {
  object-fit:cover;
  width:100%;
  height:100%;
}
img{
  max-width:100%;
}

.big{
  text-transform:capitalize;
  font-size: 2em;
}

</style>
