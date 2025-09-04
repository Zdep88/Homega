<script>
    import { signUp } from "../assets/dataMapper.js";
</script>

<form
    method="post"
    class="signUp"
    onsubmit={async (e) => {
        e.preventDefault();
        const email = document.getElementById("signUp-email").value;
        const password = document.getElementById("signUp-password").value;
        await signUp(email, password);
    }}
>
    <h2>Nouveau compte</h2>
    <label for="signUp-email">Email</label>
    <input type="email" id="signUp-email" name="email" required />
    <label for="signUp-password">Mot de passe</label>
    <input type="password" id="signUp-password" name="password" required />
    <button type="submit">Créer le compte</button>
</form>

<style>
    .signUp {
        padding: 1rem;
        background: var(--light-color);
        border-radius: 1.2rem;
        box-shadow:
            0 4px 24px rgba(42, 125, 225, 0.08),
            0 1.5px 6px rgba(0, 0, 0, 0.04);
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
        border: 1px solid var(--main-color);
    }

    .signUp h2 {
        color: var(--main-color);
        margin-bottom: 0.5rem;
        font-size: 1.7rem;
        font-weight: 700;
        text-align: center;
        letter-spacing: 1px;
    }

    .signUp label {
        color: #222;
        font-size: 1rem;
        margin-bottom: 0.2rem;
        font-weight: 500;
    }

    .signUp input[type="email"],
    .signUp input[type="password"] {
        padding: 0.7rem 1rem;
        border: 1.5px solid var(--main-color);
        border-radius: 0.6rem;
        font-size: 1rem;
        background: #fff;
        color: #222;
        outline: none;
        transition: border 0.2s;
    }
    .signUp input:focus {
        background: var(--light-color);
    }

    .signUp button[type="submit"] {
        margin-top: 0.7rem;
        background: var(--main-color);
        color: #fff;
        border: none;
        border-radius: 0.6rem;
        padding: 0.8rem 0;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(42, 125, 225, 0.1);
        transition:
            background 0.2s,
            box-shadow 0.2s;
    }
    .signUp button[type="submit"]:hover {
        background: #185ca8;
        box-shadow: 0 4px 16px rgba(42, 125, 225, 0.13);
    }
</style>
