// src/lib/seo.ts
import { client } from './contentful';

export async function getSeoMetadata(pathname: string, defaults?: { title?: string; description?: string }) {
  const currentUrl = pathname.replace(/\/$/, '') || '/';

  try {
    const response = await client.getEntries({
      content_type: "pagesTitleAndDescription",
      "fields.pageUrl": currentUrl,
      limit: 1,
    });

    const pageData = response.items[0]?.fields;

    return {
      title: (pageData?.pageTitle as string) || defaults?.title || "CueForGood",
      description: (pageData?.pageMetaDescription as string) || defaults?.description || "Default description",
    };
  } catch (error) {
    console.error(`SEO Fetch Error on ${currentUrl}:`, error);
    return {
      title: defaults?.title || "CueForGood",
      description: defaults?.description || "Default description",
    };
  }
}