<script lang='ts'>
  export let value = '';
  export let coords: [number, number];
  export let onClick: (coords:[number,number]) => void;
</script>
<button type="button" class="btn btn-sm variant-filled" on:click={()=>onClick(coords)}>{value}</button>