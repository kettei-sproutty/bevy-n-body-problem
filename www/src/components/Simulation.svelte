<script lang="ts">
  import init from "../assets/simulation/simulation";

  $effect(() => {
    init()
  })
</script>

{#await init()}
  <div>Loading</div>
{/await}
<canvas id="simulation"></canvas>
