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
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }
</style>
