<script>

</script>

<div class="parent">
  <div class="page-container">
    <div>
      <header>
        <div class="pre-heading">Conclusion:</div>
        <h2>Thinking leads to Doing!</h2>
      </header>
      <div class="content">
        <p>What instructions does it offer for making better decisions? For improving your performance? For deepening your sense of meaning?</p>
        <p>A regret about being a clueless, uncaring person won’t help. A regret about not keeping important dates in one’s computer calendar or not regularly expressing gratitude to relatives is useful.</p>
      </div>
    </div>
    <div class="image">
      <img src="https://i.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.webp" alt="Dwight from the office cracking his knuckles getting ready to get to work">
    </div>
  </div>
</div>

<style>
.parent{
  background-color:var(--primary);
  background-image:var(--teal-triangle-bg);
  padding-block:var(--xl-sz);
  padding-inline:var(--sm-sz);
  z-index:var(--layer1);
}
.page-container{
  background:var(--gray50);
  padding:var(--sm-sz);
  border-radius:20px;
  display:flex;
  gap:40px;
}
.page-container > div:not(.image){
  order:1;
}
header{
  margin-block-end:var(--sm-sz);
}
.pre-heading{
  font-size: calc(var(--base-sz) * 1.3);
  line-height:1;
  display:inline-block;
  background:var(--teal50);
  border-radius:4px;  
  padding-inline:calc(var(--base-sz) / 2);
padding-block:calc(var(--base-sz) / 3);
  color:var(--primary);
  font-weight: bold;
  text-transform:uppercase;
  margin-block-end:var(--base-sz);
}

h2{
  font-size: var(--lg-sz);
  color:var(--primary);
}
p{
  font-size: var(--sm-sz);
  margin-block-end:var(--xxs-sz);
}
.image{
  box-shadow: var(--shadow-xl);
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 20px;
  max-width: 80%;
  width: 100%;

  min-width: 40%;
  height: 300px;
  margin-inline: auto;
  order: 0;
}
@media(max-width:600px){
  .page-container{
    flex-direction:column; 
  }
.image{
  max-width:100%;
  order:2;
}
}
img{
  object-fit:cover;
  width:100%;
  height:100%;
  min-height:100%;
  min-width:100%;
}
</style>
