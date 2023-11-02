
const moment = require('moment');

moment.locale('en');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");

    eleventyConfig.addWatchTarget("/src/css");
    eleventyConfig.addFilter('dateIso', date => {
	return moment(date).toISOString();
    });
    
    eleventyConfig.addFilter('dateReadable', date => {
	return moment(date).utc().format('LL'); // E.g. May 31, 2019
    });

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

