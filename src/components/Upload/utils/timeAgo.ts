import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const t = new TimeAgo("en-US");

export const timeAgo = (seconds: string) => {
  return t.format(new Date(seconds));
};
