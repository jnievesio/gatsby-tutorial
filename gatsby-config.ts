import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `gatsby-tutorial`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],

                web: [
                    {
                        name: `Baloo Bhai 2`,
                        file: `https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;500;600;700;800&display=swap`,
                    },
                    {
                        name: `Dosis`,
                        file: `https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap`,
                    },
                ],
            },
        },
    ],
};

export default config;
