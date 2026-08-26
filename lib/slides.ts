export type Slide = {
  id: number;
  slug: string;
  title: string;
  sectionId: string;
  divider?: boolean;
};

export type NavSection = {
  id: string;
  label: string;
  number?: string;
};

export const SECTIONS: NavSection[] = [
  { id: "cover", label: "Cover" },
  { id: "introduction", label: "Introduction" },
  { id: "logo", label: "Logo", number: "01" },
  { id: "color", label: "Color", number: "02" },
  { id: "typography", label: "Typography", number: "03" },
  { id: "applications", label: "Applications", number: "04" },
  { id: "visual-direction", label: "Visual Direction", number: "05" },
  { id: "colophon", label: "Colophon" },
];

export const SLIDES: Slide[] = [
  { id: 1, slug: "cover", title: "Brand Guidelines", sectionId: "cover", divider: true },
  { id: 2, slug: "introduction", title: "Welcome", sectionId: "introduction" },
  { id: 3, slug: "logo", title: "Logo", sectionId: "logo", divider: true },
  { id: 4, slug: "primary-logo", title: "Primary Logo", sectionId: "logo" },
  { id: 5, slug: "logo-concept", title: "Logo Concept", sectionId: "logo" },
  { id: 6, slug: "logo-in-color", title: "Logo in Color", sectionId: "logo" },
  { id: 7, slug: "logo-breakdown", title: "Logo Breakdown", sectionId: "logo" },
  { id: 8, slug: "icon-colors", title: "Icon in Various Colors", sectionId: "logo" },
  { id: 9, slug: "full-logo-breakdown", title: "Full Logo Breakdown", sectionId: "logo" },
  { id: 10, slug: "wordmark-breakdown", title: "Wordmark Breakdown", sectionId: "logo" },
  { id: 11, slug: "logo-clearspace", title: "Logo Clearspace", sectionId: "logo" },
  { id: 12, slug: "color", title: "Color", sectionId: "color", divider: true },
  { id: 13, slug: "primary-color-palette", title: "Primary Color Palette", sectionId: "color" },
  { id: 14, slug: "secondary-color-palette", title: "Secondary Color Palette", sectionId: "color" },
  { id: 15, slug: "primary-color-wheel", title: "Primary Color Wheel", sectionId: "color" },
  { id: 16, slug: "secondary-color-wheel", title: "Secondary Color Wheel", sectionId: "color" },
  { id: 17, slug: "color-application", title: "Color Application", sectionId: "color" },
  { id: 18, slug: "color-in-slides", title: "Color in Slides", sectionId: "color" },
  { id: 19, slug: "premade-gradients", title: "Premade Gradients", sectionId: "color" },
  { id: 20, slug: "typography", title: "Typography", sectionId: "typography", divider: true },
  { id: 21, slug: "geist", title: "Geist", sectionId: "typography" },
  { id: 22, slug: "primary-typeface", title: "Primary Typeface", sectionId: "typography" },
  { id: 23, slug: "geist-typestyles", title: "Geist Typestyles", sectionId: "typography" },
  { id: 24, slug: "usage-text-placement", title: "Usage Text Placement", sectionId: "typography" },
  { id: 25, slug: "logo-placement-documents", title: "Logo Placement on Documents", sectionId: "typography" },
  { id: 26, slug: "slide-master-typeface", title: "Slide Master Typeface", sectionId: "typography" },
  { id: 27, slug: "slide-master-aptos", title: "Slide Master with Aptos", sectionId: "typography" },
  { id: 28, slug: "aptos-typestyles", title: "Aptos Typestyles", sectionId: "typography" },
  { id: 29, slug: "applications", title: "Applications", sectionId: "applications", divider: true },
  { id: 30, slug: "billboard", title: "Billboard", sectionId: "applications" },
  { id: 31, slug: "half-zip", title: "Half Zip with Icon", sectionId: "applications" },
  { id: 32, slug: "icon-sticker", title: "Icon Sticker", sectionId: "applications" },
  { id: 33, slug: "business-cards", title: "Business Cards", sectionId: "applications" },
  { id: 34, slug: "linkedin-banners", title: "LinkedIn Banners", sectionId: "applications" },
  { id: 35, slug: "zoom-background-navy", title: "Zoom Background Navy", sectionId: "applications" },
  { id: 36, slug: "zoom-background-light", title: "Zoom Background Light", sectionId: "applications" },
  { id: 37, slug: "zoom-background-navy-2", title: "Zoom Background Navy 2", sectionId: "applications" },
  { id: 38, slug: "zoom-background-light-2", title: "Zoom Background Light 2", sectionId: "applications" },
  { id: 39, slug: "visual-direction", title: "Visual Direction", sectionId: "visual-direction", divider: true },
  { id: 40, slug: "gradient-photos", title: "Gradient Photos", sectionId: "visual-direction" },
  { id: 41, slug: "mountain", title: "Mountain", sectionId: "visual-direction" },
  { id: 42, slug: "sunset-mountain", title: "Sunset Mountain", sectionId: "visual-direction" },
  { id: 43, slug: "city", title: "City", sectionId: "visual-direction" },
  { id: 44, slug: "dusk-mountain", title: "Dusk Mountain", sectionId: "visual-direction" },
  { id: 45, slug: "forest", title: "Forest", sectionId: "visual-direction" },
  { id: 46, slug: "house", title: "House", sectionId: "visual-direction" },
  { id: 47, slug: "topographical-lines", title: "Topographical Lines", sectionId: "visual-direction" },
  { id: 48, slug: "brand-gradient", title: "Gradient MGMT's Gradient", sectionId: "visual-direction" },
  { id: 49, slug: "photos-traditional", title: "Gradient Photos — Traditional", sectionId: "visual-direction" },
  { id: 50, slug: "traditional-mountain", title: "Traditional Mountain", sectionId: "visual-direction" },
  { id: 51, slug: "traditional-bridge", title: "Traditional Bridge", sectionId: "visual-direction" },
  { id: 52, slug: "traditional-city", title: "Traditional City", sectionId: "visual-direction" },
  { id: 53, slug: "traditional-meadow", title: "Traditional Meadow", sectionId: "visual-direction" },
  { id: 54, slug: "colophon", title: "Colophon", sectionId: "colophon", divider: true },
];

export const SLIDE_WIDTH = 3611;
export const SLIDE_HEIGHT = 2031;
export const DOWNLOAD_HREF = "/downloads/gradient-brandkit.zip";
export const DOWNLOAD_FILENAME = "Gradient MGMT.zip";

export function slideSrc(id: number) {
  return `/slides/${String(id).padStart(2, "0")}.webp`;
}

export function getNavGroups() {
  return SECTIONS.map((section) => {
    const slides = SLIDES.filter((slide) => slide.sectionId === section.id);
    const landing = slides[0];
    const items = slides.filter((slide) => !slide.divider);
    return { ...section, landing, items };
  });
}
