import { SvelteKitAuth } from "@auth/sveltekit";
import TwitterProvider from '@auth/core/providers/twitter';

export const { handle, signIn, signOut } = SvelteKitAuth({
    basePath: "/auth",
    secret: process.env.AUTH_SECRET,
    providers: [TwitterProvider({
        clientId: process.env.AUTH_TWITTER_ID,
        clientSecret: process.env.AUTH_TWITTER_SECRET,
    })]
});
