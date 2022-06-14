const { DateTime } = require("luxon");
const navigationPlugin = require('@11ty/eleventy-navigation');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const Image = require("@11ty/eleventy-img");
const EleventyFetch = require("@11ty/eleventy-fetch");

(async () => {
  let url = "https://images.unsplash.com/photo-1557898979-252a87810b77";
  let stats = await Image(url, {
    widths: [512, 768],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f";
  let stats = await Image(url, {
    widths: [512, 768],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();


(async () => {
  let url = "https://images.unsplash.com/photo-1604328703693-18313fe20f3a";
  let stats = await Image(url, {
    widths: [512],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1604328704120-91e8d2fdc188";
  let stats = await Image(url, {
    widths: [512],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1604328727766-a151d1045ab4";
  let stats = await Image(url, {
    widths: [512,1280],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1601742348711-716fec4afbd6";
  let stats = await Image(url, {
    widths: [512],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1578915619459-f58bf16d1ed1?";
  let stats = await Image(url, {
    widths: [512],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1565599573128-ae3ef5c9f478";
  let stats = await Image(url, {
    widths: [1680],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1548248823-ce16a73b6d49";
  let stats = await Image(url, {
    widths: [1920],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a";
  let stats = await Image(url, {
    widths: [640],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1521713362244-1b5e5d150b29";
  let stats = await Image(url, {
    widths: [640],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1481026469463-66327c86e544";
  let stats = await Image(url, {
    widths: [640],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1497366811353-6870744d04b2";
  let stats = await Image(url, {
    widths: [500],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1590650046871-92c887180603";
  let stats = await Image(url, {
    widths: [500],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1572021335469-31706a17aaef";
  let stats = await Image(url, {
    widths: [500, 1920],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1587614203976-365c74645e83";
  let stats = await Image(url, {
    widths: [768],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1568359414935-dcd3b0ff3bec";
  let stats = await Image(url, {
    widths: [1024],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1551151665-d7d636a3ae24";
  let stats = await Image(url, {
    widths: [1024],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1452457436726-a8e6ea2adf29";
  let stats = await Image(url, {
    widths: [1024],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1562664377-709f2c337eb2";
  let stats = await Image(url, {
    widths: [1024],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

(async () => {
  let url = "https://images.unsplash.com/photo-1562664348-2188b99b5157";
  let stats = await Image(url, {
    widths: [1024],
    formats: ["jpeg"],
    outputDir: "./dev/img",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  });
  console.log( stats );
})();

module.exports = function(eleventyConfig) {
  // blogposts collection
    eleventyConfig.addCollection("components", function (collection) {
      return collection.getFilteredByGlob("./src/components/*.njk").reverse();
    });

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav"].indexOf(tag) === -1);
  }
  eleventyConfig.setDataDeepMerge(true);

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addCollection("tagList", collection => {
    const tagsObject = {}
    collection.getAll().forEach(item => {
      if (!item.data.tags) return;
      item.data.tags
        .filter(tag => !['post', 'all'].includes(tag))
        .forEach(tag => {
          if(typeof tagsObject[tag] === 'undefined') {
            tagsObject[tag] = 1
          } else {
            tagsObject[tag] += 1
          }
        });
    });

    const tagList = []
    Object.keys(tagsObject).forEach(tag => {
      tagList.push({ tagName: tag, tagCount: tagsObject[tag] })
    })
    return tagList.sort((a, b) => b.tagCount - a.tagCount)

  });


  // Add a filter using the Config API
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.setBrowserSyncConfig({
    reloadDelay: 400
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addCollection('componentstotal', (collection) => {
    return collection.getFilteredByGlob('_components/**/*.njk');
});

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yyyy-LL-dd');
  });
  return {
    dir: {
      input: "src",
      output: "dev"
    }
  };

};
