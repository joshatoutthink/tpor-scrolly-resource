<script>
  import {fly,fade} from "svelte/transition"
</script>
<div class="promo">
  <div class="page-container">
    <div class="content">
        <p class="pre-head">Dan Pink's New Book</p> 
        <h2>The Power of Regret</h2>
        <p class="subtitle">
          How Looking Backward Moves Us Forward
        </p>
        <p class="desc">
          In Daniel Pink's new book, find out how regret, our most misunderstood emotion, can be the pathway to our best life.
        </p>
    </div>
    <div class="book">
      <img src="https://www.danpink.com/wp-content/uploads/2021/11/POWER-OF-REGRET-DAN-PINK-BOOK-JACKET.png" alt="">
    </div>
  </div>
</div>

<style>
.bg{
  inset:0;
background:hsl(0 0% 0% / 60%);
  width:100%;
  height:100%;
  position:fixed;
}
h2{
  font-size: var(--lg-sz);
  line-height: 1.1;
  margin-block-end:10px;
  color:var(--primary);
}
.pre-head{
  font-size: var(--sm-sz);
}
.subtitle{
line-height: 1.2;
  font-size: var(--md-sz);
  margin-block-end:10px;
}

.desc{
  font-size: var(--sm-sz);
}

.promo{
  padding:var(--md-sz);
  background:var(--teal50);
  min-height:100vh;
  z-index:var(--layer3);
  display: grid;
  place-conent:center;
}

.page-container{
  height:100%;
  display:flex;
  gap:40px;
  align-items: center;
}
@media(max-width:762px){
  .page-container{
    flex-direction:column;
}
  .book{
  width:75%; 
}
}
.content{
  max-width:80ch;
  width:100%;
}
.overlay{
  background:var(--teal50);
  border-radius:20px;
  box-shadow:var(--shadow-2xl);
  position:fixed;
  inset:30px;
  z-index:11;
}
</style>
