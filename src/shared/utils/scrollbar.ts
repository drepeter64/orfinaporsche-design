"use client"

class ScrollbarController {
  bodyLockClassName: string = "_lock"
  widthVariableName: string = "--scrollbar-width"

  private getWidth(): number {
    const $outer = document.createElement("div")
    $outer.style.width = "100px"
    $outer.style.height = "100px"
    $outer.style.overflow = "scroll"

    const $inner = document.createElement("div")
    $inner.style.width = "100%"
    $inner.style.height = "100%"

    $outer.append($inner)
    document.body.append($outer)

    const diff: number = $outer.offsetWidth - $inner.offsetWidth

    $outer.remove()

    return diff
  }

  public lock(): void {
    const scrollbarWidth: number = this.getWidth()

    setTimeout(() => {
      document.documentElement.style.setProperty(this.widthVariableName, `${scrollbarWidth}px`)
      document.body.classList.add(this.bodyLockClassName)
    }, 10)
  }

  public unlock(): void {
    document.documentElement.style.setProperty(this.widthVariableName, "0px")
    document.body.classList.remove(this.bodyLockClassName)
  }

  public toggle(): void {
    setTimeout(() => {
      const isLocked: boolean = document.body.classList.contains(this.bodyLockClassName)
      if (isLocked) {
        this.unlock()
      } else {
        this.lock()
      }
    }, 10)
  }
}

export const Scrollbar = new ScrollbarController()
