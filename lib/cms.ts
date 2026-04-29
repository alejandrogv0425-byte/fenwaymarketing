export type CmsPage = {
  slug: string;
  title: string;
  body: string;
};

export async function getPageBySlug(_slug: string): Promise<CmsPage | null> {
  return null;
}
