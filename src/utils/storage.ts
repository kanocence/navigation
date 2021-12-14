/**
 * fetch || save localStorage
 */
export const storage = {
  fetch(key: string) {
    return JSON.parse(localStorage.getItem(key) || "[]")
  },
  save(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}