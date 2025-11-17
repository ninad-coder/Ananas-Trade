{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 module.exports = function (eleventyConfig) \{\
  // \uc0\u38745 \u24577 \u25991 \u20214 \u30452 \u25509 \u25335 \u36125 \
  eleventyConfig.addPassthroughCopy("images");\
  eleventyConfig.addPassthroughCopy("styles.css");\
  eleventyConfig.addPassthroughCopy("admin");\
\
  // \uc0\u20998 \u31867 \u38598 \u21512 \u65288 \u25353  order \u25490 \u24207 \u65289 \
  eleventyConfig.addCollection("categories", (collectionApi) => \{\
    return collectionApi\
      .getFilteredByGlob("content/categories/*.md")\
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));\
  \});\
\
  // \uc0\u20135 \u21697 \u38598 \u21512 \
  eleventyConfig.addCollection("products", (collectionApi) => \{\
    return collectionApi.getFilteredByGlob("content/products/*.md");\
  \});\
\
  return \{\
    dir: \{\
      input: ".",\
      includes: "_includes",\
      data: "_data",\
      output: "_site"\
    \},\
    markdownTemplateEngine: "njk",\
    htmlTemplateEngine: "njk"\
  \};\
\};\
}