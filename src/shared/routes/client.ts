/**
 * Centralized client-side routes configuration for Next.js App Router
 */
export const ClientRoutes = {
  // Static routes
  home: "/",
  story: "/story",
  about: "/about",
  not_found: "/404",
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

  reference: (id: string) => {
    return `/references/${id}`
  },
  reference_case: (id: string) => {
    return `/references/${id}/case-finishes`
  },
  reference_caseback: (id: string) => {
    return `/references/${id}/caseback`
  },
  reference_rehaut: (id: string) => {
    return `/references/${id}/rehaut`
  },
  reference_dial: (id: string) => {
    return `/references/${id}/dial`
  },
}

export const getRoute = (name: string) => {
  return ClientRoutes.components[name as keyof typeof ClientRoutes.components]
}

export const getReferenceRoute = (name: string, id: string) => {
  switch (name) {
    case "main":
      return ClientRoutes.reference(id)
    case "case":
      return ClientRoutes.reference_case(id)
    case "caseback":
      return ClientRoutes.reference_caseback(id)
    case "rehaut":
      return ClientRoutes.reference_rehaut(id)
    case "dial":
      return ClientRoutes.reference_dial(id)
    default:
      return ClientRoutes.not_found
  }
}
