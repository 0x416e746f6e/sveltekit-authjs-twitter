import { SvelteKitAuth } from "@auth/sveltekit";
import TwitterProvider from '@auth/core/providers/twitter';

import {AUTH_SECRET, AUTH_TWITTER_ID, AUTH_TWITTER_SECRET} from "$env/static/private";

export const { handle, signIn, signOut } = SvelteKitAuth({
    basePath: "/auth",
    secret: AUTH_SECRET,
    providers: [TwitterProvider({
        clientId: AUTH_TWITTER_ID,         // oauth 2.0 client id
        clientSecret: AUTH_TWITTER_SECRET, // oauth 2.0 client secret
    })]
});
