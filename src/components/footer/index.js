import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100px;
    font-size: 1rem;
    div {
        position: relative;
        top: 0px;
    }
    a {
        color: rgb(91, 91, 91);
        text-decoration: none;
    }
    .gatsby {
        color: rgb(92, 36, 139);
    }
    @media screen and (max-width: 767px) {
        /* 모바일 */
        height: 80px;
    }
`;
const Footer = () => {
    return (
        <FooterContainer>
            <div>
                ©{" "}
                <a
                    href="https://github.com/InHyeok-J"
                    target="_blank"
                    rel="noreferrer"
                >
                    InHyeok-J
                </a>{" "}
                Built With{" "}
                <a
                    className="gatsby"
                    href="https://www.gatsbyjs.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Gatsby
                </a>
            </div>
        </FooterContainer>
    );
};

export default Footer;
