module.exports = {
  siteMetadata: {
    title: "OnSeAn",
    siteUrl: "https://onsean.robomx.com",
    description:
      "A better answer for your single query is important to save lot of time. We use StackOverflow and other issue handling platforms. But having multiple answers and trying all is a bad sign. Here I am trying to formulate an idea to save my own time first and save other devs time as well in the long run.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "OnSeAn",
              short_name: "OnSeAn",
              start_url: "/",
              background_color: "#6b37bf",
              theme_color: "#6b37bf",
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: "standalone",
              icon: "src/img/onsean.png", // This path is relative to the root of the site.
              // An optional attribute which provides support for CORS check.
              // If you do not provide a crossOrigin option, it will skip CORS for manifest.
              // Any invalid keyword or empty string defaults to `anonymous`
              crossOrigin: `use-credentials`,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: ["https://onsean.robomx.com"],
        policy: [{ userAgent: "*",allow: ["/posts"] }],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: 'cbcc8d20-42b5-405d-933b-d7b72ce3f26b',
        srcUrl: 'https://analytics.robomx.com/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true
      },
    },
  ],
};
