import React from 'react'
import { graphql,useStaticQuery } from "gatsby";
import styled from 'styled-components'

const NextPageWrapper = styled.div`
    width:45%;
    height:200px;
`;

const NextPage = ({ slug }) => {
    console.log("next", slug);

    return (
        <NextPageWrapper>
            <div>{slug}</div>
        </NextPageWrapper>
    )
}
export default NextPage
