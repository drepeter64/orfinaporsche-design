import https from "https"
import Cookies from "js-cookie"

export abstract class RootService {
  app_domain = process.env.NEXT_PUBLIC_DOMAIN
  app_domain_api = process.env.NEXT_PUBLIC_DOMAIN_API
  agent: https.Agent = new https.Agent()

  // Request library implementation

  setCookie(name: string, value: string, options?: Cookies.CookieAttributes): void {
    if (typeof window === "undefined") {
      return
    }

    Cookies.set(name, value, options)
  }

  getCookie(name: string): string | undefined {
    if (typeof window === "undefined") {
      return ""
    }

    const token: string | undefined = Cookies.get(name)

    return token ? token : ""
  }

  removeCookie(name: string, options?: Cookies.CookieAttributes): string | undefined {
    if (typeof window === "undefined") {
      return ""
    }

    Cookies.remove(name, options)
  }
}
