<script>
  import Header from "./components/Header.svelte";
  import Connect from "./components/Connect.svelte";
</script>

<main>
  <Header />
  {#if false}
  {:else}
    <Connect />
  {/if}
</main>
