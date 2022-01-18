export function createTweet({ tweet, url }) {
  const enCodedTweet = encodeURIComponent(tweet);
  const enCodedUrl = encodeURIComponent(url);
  return `https://twitter.com/intent/tweet?text=${enCodedTweet}&url=${enCodedUrl}`;
}
export function createFacebookLink({ url }) {
  const enCodedUrl = encodeURIComponent(url);
  return `https://www.facebook.com/sharer/sharer.php?u=${enCodedUrl}`;
}
export function createLinkedInLink({ url, title = "", summary = "" }) {
  const enCodedUrl = encodeURIComponent(url);
  const enCodedTitle = encodeURIComponent(title);
  const enCodedSummary = encodeURIComponent(summary);
  return `https://www.linkedin.com/shareArticle?mini=true&url=${enCodedUrl}&title=${enCodedTitle}&summary=${enCodedSummary}&source=`;
}
