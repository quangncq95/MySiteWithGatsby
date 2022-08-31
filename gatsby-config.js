module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "My First Gatsby Site",
    author:"QuangNC"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve:"gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `./src/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
