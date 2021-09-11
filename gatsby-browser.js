import "./globalStyle.css";
import React from "react";
import { Table } from "./src/components/MdStyle";
import { MDXProvider } from "@mdx-js/react";
import { createGlobalStyle } from "styled-components";
import Code from "./src/components/CodeBlock";
import { Helmet } from "react-helmet";
import "./language-tabs.css";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border;
        margin:0;
        padding:0;
        
    }
    body{
        font-family: "NotoSansKR";
    }
`;
const components = {
    table: Table,
    pre: (props) => <Code {...props} />,
    code: (props) => <pre style={{ color: "black" }} {...props} />,
};

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <Helmet
            title="HyeokBlog"
            link={[
                {
                    rel: "icon",
                    type: "images/blog.ico",
                    href: "images/blog.ico",
                },
            ]}
        />
        <GlobalStyle /> {element}
    </MDXProvider>
);
