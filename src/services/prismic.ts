import * as Prismic from '@prismicio/client'

export const prismicio = Prismic.createClient(process.env.PRISMIC_ENTRY_POINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});
