<script>
  import Header from "./components/Header.svelte";
  import Connect from "./components/Connect.svelte";
  import CardsList from "./components/CardsList.svelte";
  import { getCards } from "./assets/dataMapper.js";

  let isConnected = $state(false);
  if (localStorage.getItem("token")) {
    isConnected = true;
  }

  let cards = $state([]);
  $effect(async () => {
    cards = await getCards();
  });
</script>

<main>
  <Header />
  {#if !isConnected}
    <Connect />
  {:else}
    <h1>Welcome !</h1>
    <CardsList {cards}/>
  {/if}
</main>
