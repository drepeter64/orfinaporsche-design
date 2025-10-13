import { notFound } from "next/navigation"

/**
 * A function that handles the case when a page is not found.
 *
 * @return {void} This function does not return anything.
 */

export default function CatchAllPage() {
  notFound()
}
