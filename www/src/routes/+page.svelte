<script lang="ts">
  import Simulation from "../components/Simulation.svelte";
  const authors = ["kettei-sproutty", "lutaok", "BackupMiles"];
</script>

<header
  class="bg-surface0 text-subtext1 h-10 flex items-center justify-between px-2 gap-2"
>
  <h1 class="inline">N-body simulation</h1>
</header>
<section class="w-full h-[calc(100dvh-5rem)]">
  <Simulation />
</section>
<footer
  class="bg-surface0 text-subtext1 h-10 flex items-center justify-center px-2 gap-2"
>
  <ul class="inline-flex gap-1 text-xs">
    <li>Made with 🤍 by:</li>
    {#each authors as author}
      <li class="hover:underline">
        <a href={`https://github.com/${author}`}>{author}</a>
      </li>
      <span aria-hidden="true" class="last:hidden inline">/</span>
    {/each}
  </ul>
</footer>
