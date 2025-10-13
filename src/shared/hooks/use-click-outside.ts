import { useEffect, RefObject } from "react"

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event)
      }
    }

    window.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("touchstart", handleClickOutside)

    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("touchstart", handleClickOutside)
    }
  }, [ref, handler])
}
