/**
 * Stable image URLs for marketing pages. Raster files under public/images were not in the repo,
 * so production builds 404'd /images/*.jpg. Prefer these + SVGs in /public until real assets are added.
 */
function unsplash(id: string, w: number): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const SITE_PHOTOS = {
  heroBackground: unsplash('photo-1552664730-d307ca884978', 1920),
  heroSlide1: unsplash('photo-1451187580459-43490279c0fa', 960),
  heroSlide2: unsplash('photo-1522071820081-009f0129c71c', 960),
  heroSlide3: unsplash('photo-1504384308090-c894fdcc538d', 960),
  guidanceBg: unsplash('photo-1497366216548-37526070297c', 1920),
  footerBlog1: unsplash('photo-1518770660439-4636190af475', 400),
  footerBlog2: unsplash('photo-1460925895917-afdab827c52f', 400),
  blogFeatured: unsplash('photo-1499750310107-0effeab6dad', 1600),
  teamAvatar1: unsplash('photo-1560250097-0b93528c311a', 200),
  teamAvatar2: unsplash('photo-1573496359142-b8d87734a5a2', 200),
  teamAvatar3: unsplash('photo-1472099645785-5658abf4ff4e', 200),
  aboutTeam: unsplash('photo-1600880292203-757bb62b4baf', 900),
  success1: unsplash('photo-1600880292089-90a7e086ee0c', 500),
  success2: unsplash('photo-1521737711867-e3b97375f902', 500),
} as const;

/** Placeholder “logo” when /images/partners/*.png is not deployed. */
export function partnerLogoPlaceholder(name: string): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=f1f5f9&color=334155&bold=true`;
}

/** Blog / demo grid — distinct Unsplash IDs per card */
export const BLOG_CARD_PHOTOS = [
  unsplash('photo-1518770660439-4636190af475', 900),
  unsplash('photo-1460925895917-afdab827c52f', 900),
  unsplash('photo-1677442136019-21780ecad995', 900),
  unsplash('photo-1551288049-bebda4e38f71', 900),
  unsplash('photo-1451187580459-43490279c0fa', 900),
  unsplash('photo-1504384308090-c894fdcc538d', 900),
] as const;
