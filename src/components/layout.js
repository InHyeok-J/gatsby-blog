import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Main, NavUl, NavItem, NavText, H1, SiteTitle } from "./style";

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Main>
            <title>
                {pageTitle}|{data.site.siteMetadata.title}
            </title>
            <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
            <nav>
                <NavUl>
                    <NavItem>
                        <Link to="/">
                            <NavText>Home</NavText>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about">
                            <NavText>About</NavText>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/blog">
                            <NavText>Blog</NavText>
                        </Link>
                    </NavItem>
                </NavUl>
            </nav>
            <H1>{pageTitle}</H1>
            {children}
        </Main>
    );
};

export default Layout;
