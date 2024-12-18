import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "hr"] as const;
export const localePrefix = "always"; // Default
export const defaultLocale = "en" as const;

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",
  "/about": "/about",

  //   // If locales use different paths, you can
  //   // specify each external path per locale.
  //   "/about": {
  //     en: "/about",
  //     hr: "/ueber-uns",
  //   },

  //   // Dynamic params are supported via square brackets
  //   "/news/[articleSlug]-[articleId]": {
  //     en: "/news/[articleSlug]-[articleId]",
  //     hr: "/neuigkeiten/[articleSlug]-[articleId]",
  //   },

  //   // Also (optional) catch-all segments are supported
  //   "/categories/[...slug]": {
  //     en: "/categories/[...slug]",
  //     hr: "/kategorien/[...slug]",
  //   },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  });
