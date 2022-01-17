<script>
  import {fly} from "svelte/transition"
 export let feeling 
  export let isActive
  export let index;
  const {image, id, description} = feeling
</script>


{#if isActive}
<div class={`block showing-details`}  >
  <div in:fly="{{y:100}}" out:fly="{{y:100,delay:200}}" class="BG"></div>

  <div class="content">
    <header transition:fly="{{y:-50,duration: 600,delay:200 }}">    
      <span class="tag">Option {index+1}</span>
      <h3>
        Feelings are for<br> <span class="big">{id}</span>
      </h3>
    </header>
    <p class="info" transition:fly="{{y:50,duration: 600,delay:200 }}">
      {description}
    </p>
  </div>
  <div class="image" transition:fly="{{x:100,duration:1000,delay:300}}">
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
}
.content {
  position: relative;
  z-index:1;
  padding:20px;
}
@media(min-width:762px){
.content{
  display:flex;
  justify-content: space-between;
  gap:40px;
}
.content p{
  width:100%;
}
.content h3{
  min-width:fit-content;
}
.content header:after{
  content:"";
  height:90%;
  width:2px;
  position:absolute;
  right:-20px;
  top:0;
  background:var(--teal50);
}
}
h3{
  font-size: 30px;
}
h3 .big{  color:var(--primary);
}
.tag{
  display:inline-flex;
  background:var(--teal50);
  border-radius:4px;  
  padding-inline:var(--base-sz);
  font-size: var(--base-sz);
  color:var(--primary);
  font-weight: bold;
  text-transform:uppercase;
}
p{
  font-size: var(--sm-sz);
}
.image {
  box-shadow:var(--shadow-xl);
  position: relative;
  z-index:1;
  overflow:hidden;
  border-radius:20px; 
  height:70%;
  max-width:80%;
  margin-inline:auto;
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
