import { createClient } from "contentful";


export const client = createClient({
    space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN
});


// const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
//     environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
// });

// export async function getEntries(contentType, query = {}) {
//     const response = await client.getEntries({
//         content_type: contentType,
//         ...query,
//     });
//     return response.items;
// }

// export async function getEntryBySlug(contentType, slug) {
//     const response = await client.getEntries({
//         content_type: contentType,
//         "fields.slug": slug,
//         limit: 1,
//     });
//     return response.items[0] || null;
// }

// export async function getEntryById(id) {
//     return client.getEntry(id);
// }

// export default client;