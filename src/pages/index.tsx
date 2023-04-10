import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const headingAccentStyles = {
    color: "#663399",
};
const paragraphStyles = {
    marginBottom: 48,
};
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
};
const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
};
const doclistStyles = {
    paddingLeft: 0,
};
const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
};

const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
};

const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    display: `inline-block`,
    marginBottom: 24,
    marginRight: 12,
};

const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};

const docLinks = [
    {
        text: "TypeScript Documentation",
        url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
        color: "#8954A8",
    },
    {
        text: "GraphQL Typegen Documentation",
        url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
        color: "#8954A8",
    },
];

const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative" as "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
};

const links = [
    {
        text: "Tutorial",
        url: "https://www.gatsbyjs.com/docs/tutorial/",
        description:
            "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
        color: "#E95800",
    },
    {
        text: "How to Guides",
        url: "https://www.gatsbyjs.com/docs/how-to/",
        description:
            "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
        color: "#1099A8",
    },
    {
        text: "Reference Guides",
        url: "https://www.gatsbyjs.com/docs/reference/",
        description:
            "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
        color: "#BC027F",
    },
    {
        text: "Conceptual Guides",
        url: "https://www.gatsbyjs.com/docs/conceptual/",
        description:
            "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
        color: "#0D96F2",
    },
    {
        text: "Plugin Library",
        url: "https://www.gatsbyjs.com/plugins",
        description:
            "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
        color: "#8EB814",
    },
    {
        text: "Build and Host",
        url: "https://www.gatsbyjs.com/cloud",
        badge: true,
        description:
            "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
        color: "#663399",
    },
];

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Layout>
                <div className="max-w-[765px]">
                    <h1 className="text-[#E90000] text-4xl font-[Dosis] font-bold text-center h-20">
                        En las mejores manos desde 1853
                    </h1>

                    <p className="text-justify">
                        Hermann Immanuel Kunstmann Von Lüttichau, inmigrante alemán llegó al sur de Chile en 1850 para
                        establecer las bases de una sólida industria, transformándose en fuente de producción y trabajo,
                        que hasta hoy perduran. Herman nació el 26 de diciembre de 1830, atraído por la idea de un
                        futuro promisorio y llevado por su energía y visión. Kunstmann decide migrar al sur de Chile
                        para iniciar su primer emprendimiento. Cerca de la ciudad de Valdivia instala un pequeño molino
                        de piedra movido por agua. Tras ser arrasado por una fuerte inundación, Herman establece un
                        segundo molino en la zona de Collico. Fundó así las bases de lo que 165 años después se
                        convertiría en una de las empresas líderes del negocio de la panificación. La natural inquietud
                        de Herman fue heredada por sus hijos y nietos llevándolos a la búsqueda de nuevas tecnologías y
                        emprendimientos, por ejemplo, importando tecnología desde Alemania. En 1914 construyen una
                        destilería de alcoholes, base sobre la cual es emplazada, en 1922, la primera fábrica de
                        levadura de Chile. Collico nació en 1853 y desde nuestro origen trabajamos constantemente para
                        adquirir nuevos conocimientos y mayores experiencias que nos permitan elaborar los mejores
                        ingredientes para la panadería artesanal. Nuestra búsqueda para comprender las tradiciones en
                        Chile nos llevó a aprender y absorber los valores que nos transforman en una empresa arraigada
                        en la esencia del ser chileno. En nuestros inicios concentramos nuestros esfuerzos en ofrecerte
                        dos ingredientes esenciales para la panadería artesanal: Harina y Levadura Fresca. Nuestro
                        espíritu emprendedor y enérgico nos llevó a buscar innovaciones y tendencias a nivel global para
                        evolucionar y desarrollar un portafolio integral de productos. Nos expandimos a Premezclas,
                        Mejoradores, Cremas, Polvo de Hornear, entre otros. Desarrollamos también un modelo de negocios
                        adaptado a tus necesidades y las de tus clientes constantemente. Collico es una empresa chilena,
                        arraigada nacionalmente y en el negocio de la panadería artesanal, pero sin perder de vista su
                        espíritu emprendedor, Collico decide asociarse a uno de los mayores conglomerados de productos
                        para la panificación: AB Mauri, Empresa de Associated British Foods, brindándole tecnología e
                        innovación, del mundo a Chile.
                    </p>
                </div>

                {/*                 <p style={paragraphStyles}>
                    Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this page update in real-time. 😎
                </p>
                <ul style={doclistStyles}>
                    {docLinks.map((doc) => (
                        <li key={doc.url} style={docLinkStyle}>
                            <a
                                style={linkStyle}
                                href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
                            >
                                {doc.text}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul style={listStyles}>
                    {links.map((link) => (
                        <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                            <span>
                                <a
                                    style={linkStyle}
                                    href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                                >
                                    {link.text}
                                </a>
                                {link.badge && (
                                    <span style={badgeStyle} aria-label="New Badge">
                                        NEW!
                                    </span>
                                )}
                                <p style={descriptionStyle}>{link.description}</p>
                            </span>
                        </li>
                    ))}
                </ul> */}
            </Layout>
        </>
    );
};

export default IndexPage;
