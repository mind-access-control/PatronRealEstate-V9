"use client"

export const auth = {
  login: (role: "admin" | "agent", email: string, name?: string) => {
    localStorage.setItem("userRole", role)
    localStorage.setItem("userEmail", email)
    if (name) localStorage.setItem("agentName", name)

    // Also set cookies for middleware
    document.cookie = `userRole=${role}; path=/; max-age=86400`
    document.cookie = `userEmail=${email}; path=/; max-age=86400`
  },

  logout: () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("agentName")

    // Clear cookies
    document.cookie = "userRole=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    document.cookie = "userEmail=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"

    window.location.href = "/"
  },

  getUser: () => {
    if (typeof window === "undefined") return null

    return {
      role: localStorage.getItem("userRole"),
      email: localStorage.getItem("userEmail"),
      name: localStorage.getItem("agentName"),
    }
  },

  isAuthenticated: (requiredRole?: "admin" | "agent") => {
    if (typeof window === "undefined") return false

    const role = localStorage.getItem("userRole")
    if (!role) return false

    if (requiredRole) return role === requiredRole
    return true
  },
}
