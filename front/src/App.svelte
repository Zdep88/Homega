<script>
  import Header from "./components/Header.svelte";
  import Connect from "./components/Connect.svelte";
</script>

<main>
  <Header />
  {#if false}
    <h1>Welcome !</h1>
  {:else}
    <Connect />
  {/if}
</main>
