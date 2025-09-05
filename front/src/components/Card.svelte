<script>
    import { login } from "../assets/dataMapper.js";
    let { name } = $props();
</script>

<div class="card">
    <div>{name}</div>
</div>

<style>
    .card {
        border: 1px solid var(--main-color);
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--light-color);
        color: var(--main-color);
        width: 100px;
        height: 100px;
        margin: 1rem auto;
        text-align: center;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
</style>