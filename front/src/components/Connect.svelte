<script>
    import Login from "./Login.svelte";
    import SignUp from "./SignUp.svelte";
</script>

<div class="connect">
    <Login />
    <SignUp />
</div>

<style>
    .connect {
        margin-top: 3rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
