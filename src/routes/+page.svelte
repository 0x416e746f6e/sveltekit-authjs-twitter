<script>
    import { signIn, signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"

    const _signIn = () => {
      signIn("twitter");
    }

    const _signOut = () => {
      signOut();
    }
</script>

<h1>SvelteKit Twitter Auth Example</h1>
<p>
  {#if $page.data.session}
    <span class="signedInText">
      Signed in as <strong>{$page.data.session.user?.name ?? "User"}</strong>
      <button on:click={_signOut}>Sign out</button>
    </span>
  {:else}
    <span class="notSignedInText">
      You are not signed in
    </span>
    <button on:click={_signIn}>Sign in</button>
  {/if}
</p>
