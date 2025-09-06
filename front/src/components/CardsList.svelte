<script>
    import Card from "./Card.svelte";
    let { cards } = $props();
</script>

<h2>Routes Disponibles</h2>
<section class="cardsList">
    {#each cards as card}
        <Card {card} />
        <Card {card} />
        <Card {card} />
        <Card {card} />
        <Card {card} />
        <Card {card} />
        <Card {card} />
        <Card {card} />
        <Card {card} />
        <Card {card} />
        <Card {card} />
    {/each}
</section>

<style>
    .cardsList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }
</style>
