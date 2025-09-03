<script>
  import Header from "./components/Header.svelte";
  import Connect from "./components/Connect.svelte";
  const token = localStorage.getItem("token");
</script>

<main>
  <Header />
  {#if !token}
    <Connect />
  {:else}
    <h1>Vous êtes connecté !</h1>
  {/if}
</main>
