module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addCollection("projectsByDate", function (collectionApi) {
    return collectionApi.getFilteredByTag("project").sort((a, b) => {
      const d1 = a.data.date ? new Date(a.data.date).getTime() : 0;
      const d2 = b.data.date ? new Date(b.data.date).getTime() : 0;
      return d2 - d1;
    });
  });

  eleventyConfig.addFilter("dateDisplay", function (date) {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  });
  eleventyConfig.addFilter("dateISO", function (date) {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
