module.exports = function (eleventyConfig) {
  // Copy these folders straight into the finished site
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });

  // Newest post first
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date);
  });

  // "Oct 3, 2026 · 11:57 PM" in your local time zone
  eleventyConfig.addFilter("prettyDate", function (date) {
    const d = new Date(date);
    const day = d.toLocaleDateString("en-US", {
      timeZone: "America/New_York",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const time = d.toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
    });
    return day + " · " + time;
  });

  // Machine-readable date for the <time> tag
  eleventyConfig.addFilter("isoDate", function (date) {
    return new Date(date).toISOString();
  });

  // First N items of a list (used by the RSS feed)
  eleventyConfig.addFilter("head", function (array, n) {
    return array.slice(0, n);
  });

  // Strip HTML so search can match plain text
  eleventyConfig.addFilter("plainText", function (html) {
    return String(html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
