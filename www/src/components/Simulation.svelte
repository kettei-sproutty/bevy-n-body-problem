<script lang="ts">
  import init from "../assets/simulation/simulation";

  $effect(() => {
    init();
  });
</script>

<div class="w-full h-full">
  <canvas class="focus:outline-none" width="100%" height="100%" id="simulation"
  ></canvas>
</div>
