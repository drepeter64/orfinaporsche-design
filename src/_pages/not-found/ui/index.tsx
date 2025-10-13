import { NotFound } from "@/widgets/not-found/ui"

/**
 * Note however that Next.js will only render this page when the **notFound** function
 * is called from within a route, not for all unknown routes in general.
 * You can find more info about this in the [Next Intl docs](https://next-intl-docs.vercel.app/docs/environments/error-files)
 *
 * Now it is catching in the `app/[locale]/[...rest]page.tsx` page
 * */

export function NotFoundPage() {
  return <NotFound />
}
