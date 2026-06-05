const externalPattern = /^[a-z][a-z0-9+.-]*:|^#/i;

export function siteHref(href: string) {
  if (!href || externalPattern.test(href)) return href;

  const base = import.meta.env.BASE_URL || "/";
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const path = href.startsWith("/") ? href : `/${href}`;

  return trimmedBase ? `${trimmedBase}${path}` : path;
}

export function routePath(pathname: string) {
  const base = import.meta.env.BASE_URL || "/";
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const withoutBase =
    trimmedBase && pathname.startsWith(trimmedBase) ? pathname.slice(trimmedBase.length) : pathname;

  return withoutBase.replace(/\/$/, "") || "/";
}
