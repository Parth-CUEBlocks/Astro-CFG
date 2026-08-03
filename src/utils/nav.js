export function isNavActive(pathname, href) {
  if (href === "/") return pathname === "/";

  const normalize = (value) => (value !== "/" && value.endsWith("/") ? value.slice(0, -1) : value);
  const normalizedPath = normalize(pathname);
  const normalizedHref = normalize(href);

  return normalizedPath === normalizedHref || normalizedPath.startsWith(`${normalizedHref}/`);
}
