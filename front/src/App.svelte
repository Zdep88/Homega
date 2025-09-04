<script>
  import Header from "./components/Header.svelte";
  import Connect from "./components/Connect.svelte";
  let isConnected = $state(false);
  if (localStorage.getItem("token")) {
    isConnected = true;
  }
</script>

<main>
  <Header />
  {#if isConnected}
    <h1>Welcome !</h1>
  {:else}
    <Connect />
  {/if}
</main>