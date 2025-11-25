module.exports = function(eleventyConfig) {

  // 复制静态文件目录到 _site
  eleventyConfig.addPassthroughCopy("admin");  
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "https://github.com/ninad-coder/Ananas-Trade/tree/main",         // 输入目录（你的网站根目录）
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
