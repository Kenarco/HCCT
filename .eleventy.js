module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");

    eleventyConfig.addWatchTarget("/src/css");

    return {
        templateFormats: [
	    "md",
	    "njk",
	    "html"
	],
	
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",

        dir: {
            input: "src",
            include: "_include",
            output: "dist"
        },
    };
};

