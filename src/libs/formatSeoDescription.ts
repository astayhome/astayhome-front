export function formatSeoDescription(desc: string) {
  return `${desc
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 136)}...`;
}
