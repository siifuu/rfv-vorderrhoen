export function getGoogleFormEmbedUrl(formUrl: string) {
  try {
    const url = new URL(formUrl);

    if (
      url.hostname.includes("docs.google.com") &&
      url.pathname.includes("/forms/")
    ) {
      url.searchParams.set("embedded", "true");
      return url.toString();
    }

    return formUrl;
  } catch {
    return formUrl;
  }
}
