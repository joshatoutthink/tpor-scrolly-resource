<script>
  import {createTweet,createLinkedInLink, createFacebookLink} from "../lib/createSocialLinks.js"
  let socials = [
    {
      name:"Facebook",
      icon:'<svg version="1.1" fill="white" id="Capa_1" viewBox="0 0 96.124 96.123" > <g> <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" /> </g> </svg>',
      link:createFacebookLink({
        url:window.location.href 
      }),
    },
    {
      name:"Twitter",
      icon:'<svg fill="white" preserveAspectRatio="xMidYMid meet" viewBox="0 0 40 40" > <g> <path d="m37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z"></path> </g> </svg>',
      link:createTweet({
        tweet:"",
        url:window.location.href,
      })
    },
    {
      name:"LinkedIn",
      icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>',
      link:createLinkedInLink({
        url:window.location.href,
      }),
    }
  ]

</script>

<h3>Share: </h3>
<div class="button-row">
  {#each socials as social}
  <a class="{social.name}" href="{social.link}">
    <span>{@html social.icon}</span>
    <span>{social.name}</span>
  </a>
  {/each}
</div>

<style>

h3{
  font-size: var(--sm-sz);
  margin-block-end:1em;
}

.button-row{
  display:flex;
  gap:20px;
}

@media(max-width:762px){
  .button-row{
    justify-content: center; 
  }
}

a{
  font-size: var(--xs-sz);
  color:white;
  font-weight: bold;
  display:flex;
  text-decoration:none;
  gap:8px;
  padding:4px 8px;
  
}

a span{
  display:inline-flex; 
  justify-content: center;  
  align-items: center;
  font-size: inherit;
  color:currentColor;
}

svg{
  width:1em;
}

.LinkedIn{
  background:#0173B1;
}
.Twitter{
  background:#1C95E0;
}
.Facebook{
  background:#1777F2;
}
</style>
