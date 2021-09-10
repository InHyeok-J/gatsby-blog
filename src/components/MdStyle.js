import styled from "styled-components";
import React from "react";

export const MarkdownWrapper = styled.div`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: rgb(45, 45, 45);
    }
    h1:not(:first-child),
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 2rem;
    }
    h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: 400;
    }
    h2 {
        font-size: 1.5rem;
        line-height: 1.875rem;
        font-weight: 400;
    }
    h3 {
        font-size: 1.375rem;
        line-height: 1.645rem;
        font-weight: 400;
    }
    h4 {
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    h5 {
        font-size: 1.125rem;
        line-height: 1.375rem;
        font-weight: 400;
    }
    h6 {
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: 400;
        text-transform: uppercase;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.875rem;
        font-weight: 400px;
        color: rgb(114, 114, 114);
    }
    a {
        color: gray;
        text-decoration: none;
    }
    del {
        text-decoration: line-through;
    }
    strong {
        font-weight: 800;
    }
    em {
        font-style: italic;
    }
    blockquote p {
        font-style: italic;
        font-size: 1.5rem;
        line-height: 2.125rem;
        text-align: center;
        max-width: 36rem;
        margin: 3rem auto;
    }
    ul,
    ol {
        color: gray;
        margin: 1rem 0 1rem 2rem;
    }

    li {
        margin: 0.25rem 0;
    }
    code {
        background: rgba(135, 131, 120, 0.15);
        color: #eb5757;
        border-radius: 3px;
        font-size: 1rem;
        line-height: 1.875rem;
        padding: 0 0.3rem;
    }
    hr {
        border: 0;
        height: 1px;
        background: black;
        opacity: 0.2;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    table {
        width: 100%;
        border-spacing: 0.25rem;
        border-collapse: collapse;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400px;
    }
    th {
        font-weight: 700;
    }
    table,
    th,
    td {
        border: 1px solid black;
    }
    th,
    td {
        text-align: left;
        padding: 0.5rem;
    }
    .active {
        font-weight: bold;
        color: rgb(183, 203, 131);
    }
    .table-of-contents {
        width: auto;
        height: fit-content;
        border-left: 5px solid rgb(183, 203, 131);
        border-radius: 3px;
        position: fixed;
        right: calc((100vw - 1050px) * 0.45);
        top: 200px;
        ul {
            margin: 13px;
            list-style: none;
        }
    }
    @media (max-width: 1100px) {
        .table-of-contents {
            display: none;
        }
    }
    @media (max-width: 765px) {
        img {
            max-width: 700px;
        }
    }
    @media (max-width: 480px) {
        img {
            max-width: 300px;
        }
    }
    margin-bottom: 50px;
`;

const TableWrapper = styled.div`
    overflow-x: auto;
    margin-top: 2rem;
`;

export const Table = ({ children }) => {
    return (
        <TableWrapper>
            <table>{children}</table>
        </TableWrapper>
    );
};
