<script>
  import Header from "./components/Header.svelte";
  import Connect from "./components/Connect.svelte";
  import Card from "./components/Card.svelte";
  import { getCards } from "./assets/dataMapper.js";

  let isConnected = $state(false);
  if (localStorage.getItem("token")) {
    isConnected = true;
  }

  let cards = $state([]);
  $effect(async () => {
    const fetchedCards = await getCards();
    console.log(fetchedCards);
    cards = [...fetchedCards];
    console.log(cards);
  });
  </script>

<main>
  <Card name="test" />
  <!-- <Header />
  {#if !isConnected}
  <Connect />
  {:else}
  <h1>Welcome !</h1>
  {/if} -->
</main>
