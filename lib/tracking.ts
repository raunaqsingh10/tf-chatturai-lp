type TrackingParams = Record<string, string[]>;

type StoredTouch = {
  params: TrackingParams;
  capturedAt: string;
  expiresAt: string;
};

type StoredAttribution = {
  first_touch?: StoredTouch;
  latest_touch?: StoredTouch;
};

type FlatTrackingParams = Record<string, string>;

const STORAGE_KEY = "chatturai_attribution";
const EXPIRY_DAYS = 30;
const SENSITIVE_KEYS = [
  "token",
  "access_token",
  "refresh_token",
  "password",
  "code",
  "state",
  "session",
  "secret",
];

function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function isSensitiveKey(key: string) {
  const normalized = key.toLowerCase();
  return SENSITIVE_KEYS.some((sensitiveKey) => normalized.includes(sensitiveKey));
}

function nowTouch(params: TrackingParams): StoredTouch {
  const capturedAt = new Date();
  const expiresAt = new Date(capturedAt);
  expiresAt.setDate(expiresAt.getDate() + EXPIRY_DAYS);

  return {
    params,
    capturedAt: capturedAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
  };
}

function readStoredAttribution(): StoredAttribution {
  if (!isBrowser()) return {};

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};

    const parsed = JSON.parse(raw) as StoredAttribution;
    const currentTime = Date.now();

    const isFresh = (touch?: StoredTouch) =>
      Boolean(touch?.expiresAt && new Date(touch.expiresAt).getTime() > currentTime);

    return {
      ...(isFresh(parsed.first_touch) ? { first_touch: parsed.first_touch } : {}),
      ...(isFresh(parsed.latest_touch) ? { latest_touch: parsed.latest_touch } : {}),
    };
  } catch {
    return {};
  }
}

function writeStoredAttribution(attribution: StoredAttribution) {
  if (!isBrowser()) return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Storage can be unavailable in private browsing modes.
  }
}

function flattenParams(params: TrackingParams) {
  const entries: Array<[string, string]> = [];

  Object.entries(params).forEach(([key, values]) => {
    values.forEach((value) => entries.push([key, value]));
  });

  return entries;
}

export function flattenTrackingParams(params: TrackingParams): FlatTrackingParams {
  return flattenParams(params).reduce<FlatTrackingParams>((flat, [key, value]) => {
    if (flat[key] === undefined) {
      flat[key] = value;
      return flat;
    }

    const values = Array.isArray(params[key]) ? params[key] : [flat[key], value];
    flat[key] = values.join(",");
    return flat;
  }, {});
}

export function captureTrackingParams() {
  if (!isBrowser()) return readStoredAttribution();

  const searchParams = new URLSearchParams(window.location.search);
  const params: TrackingParams = {};

  searchParams.forEach((value, key) => {
    if (isSensitiveKey(key)) return;
    params[key] = [...(params[key] ?? []), value];
  });

  const stored = readStoredAttribution();

  if (Object.keys(params).length === 0) {
    writeStoredAttribution(stored);
    return stored;
  }

  const touch = nowTouch(params);
  const next = {
    first_touch: stored.first_touch ?? touch,
    latest_touch: touch,
  };

  writeStoredAttribution(next);
  return next;
}

export function getStoredTrackingParams(kind: "first_touch" | "latest_touch" = "latest_touch") {
  return readStoredAttribution()[kind]?.params ?? {};
}

export function getFlatStoredTrackingParams(
  kind: "first_touch" | "latest_touch" = "latest_touch",
) {
  return flattenTrackingParams(getStoredTrackingParams(kind));
}

export function mergeParamsIntoUrl(url: string, params: TrackingParams) {
  if (!isBrowser()) return url;
  if (/^(mailto|tel|sms|javascript):/i.test(url)) return url;

  try {
    const samePageAnchor = url.startsWith("#");
    const base = samePageAnchor
      ? `${window.location.origin}${window.location.pathname}`
      : window.location.href;
    const parsed = new URL(url, base);

    flattenParams(params).forEach(([key, value]) => {
      if (parsed.searchParams.has(key)) return;
      parsed.searchParams.append(key, value);
    });

    if (samePageAnchor) {
      return `${parsed.search}${parsed.hash}`;
    }

    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return url;

    if (parsed.origin === window.location.origin) {
      return `${parsed.pathname}${parsed.search}${parsed.hash}`;
    }

    return parsed.toString();
  } catch {
    return url;
  }
}

export function decorateTrackingLinks(root: ParentNode = document) {
  const params = getStoredTrackingParams("latest_touch");
  const links = root.querySelectorAll<HTMLAnchorElement>("a[href]");

  links.forEach((link) => {
    const originalHref = link.getAttribute("data-original-href") ?? link.getAttribute("href");
    if (!originalHref) return;

    link.setAttribute("data-original-href", originalHref);
    link.setAttribute("href", mergeParamsIntoUrl(originalHref, params));
  });
}
