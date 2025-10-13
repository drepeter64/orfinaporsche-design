/**
 * Centralized client-side routes configuration for Next.js App Router
 */
export const ClientRoutes = {
  home: "/",
  story: "/story",
  about: "/about",

  // References routes
  references: {
    ref7750: {
      main: "/references/7750",
      caseFinishes: "/references/7750/case-finishes",
      caseback: "/references/7750/caseback",
      rehaut: "/references/7750/rehaut",
      dial: "/references/7750/dial",
    },
    ref7176: {
      main: "/references/7176",
      caseFinishes: "/references/7176/case-finishes",
      caseback: "/references/7176/caseback",
      rehaut: "/references/7176/rehaut",
      dial: "/references/7176/dial",
    },
    ref7177: {
      main: "/references/7177",
      caseFinishes: "/references/7177/case-finishes",
      caseback: "/references/7177/caseback",
      rehaut: "/references/7177/rehaut",
      dial: "/references/7177/dial",
    },
  },

  // Components routes
  components: {
    bracelets: "/components/bracelets",
    straps: "/components/straps",
    hands: "/components/hands",
    crowns: "/components/crowns",
    movements: "/components/movements",
    dateWheels: "/components/date-wheels",
    boxes: "/components/boxes",
  },
}
