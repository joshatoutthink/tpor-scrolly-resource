<script>
 export let feeling 
  export let isActive
</script>

{#if isActive}
<h1>{feeling}</h1>
{/if}

<style>
h1{
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
