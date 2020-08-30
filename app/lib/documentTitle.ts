const name = `Startup Stock Photos`

export function documentTitle(title?: string) {
  return title ? `${title} | ${name}` : name
}
