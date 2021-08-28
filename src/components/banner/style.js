import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
`;

export const Container = styled.div`
    padding-top: 200px;
    width: 50%;
    margin: 0 auto;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 9fr 1fr;
    grid-gap: 5px;
    .typing {
        margin: 0;
        font-size: 5rem;
        font-weight: 100;
        text-align: center;
    }
`;
export const BraceBlock = styled.div`
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: contain;
    height: 150px;
`;

export const IntroduceContainer = styled.div`
    display: inline-block;
    background: yellow;
    padding: 10px;
    animation: fadein 3s;
    -webkit-animation: fadein 3s; /* Safari and Chrome */

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-webkit-keyframes fadein {
        /* Safari and Chrome */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
