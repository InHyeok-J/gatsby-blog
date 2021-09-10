import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: sticky;
    display: flex;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: 100vw;
    height: 48px;
    border-bottom: 2px solid rgb(234, 235, 236);
    @media screen and (max-width: 767px) {
        /* 모바일 */
        justify-content: center;
    }
    @media screen and (max-width: 480px) {
        /* 작은 모바일 */
    }
`;

export const ProfileBlock = styled.div`
    margin: 0;
    width: auto;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    .main-image {
        margin-left: 20px;
        border-radius: 10px;
    }
    @media screen and (max-width: 767px) {
        /* 모바일 */
        display: none;
    }
`;

export const MyName = styled.div`
    display: inline-block;
    position: relative;
    top: -3px;
    margin-left: 20px;
    a {
        font-size: 1.3rem;
        font-weight: 300;
        color: rgb(91, 91, 91);
        text-decoration: none;
    }
    @media screen and (max-width: 767px) {
        /* 모바일 */
        display: none;
    }
`;

export const NavBlock = styled.div`
    margin: 0;
    width: auto;
    height: 50px;
    display: flex;
    flex-direction: row;
`;

export const NavItem = styled.li`
    width: 150px;
    height: 50px;
    transition: all 0.1s ease-in-out;

    .link_style {
        display: flex;
        text-decoration: none;
        color: rgb(91, 91, 91);
        transition: all 0.4s ease-in-out;
    }
    .nav-icon {
        height: 50px;
    }
    p {
        margin: 0 0 0 5px;
        height: 50px;
        line-height: 45px;
        font-size: 1.3rem;
    }
    .link_style:hover {
        color: black;
    }
    @media screen and (max-width: 1023px) {
        /* 타블렛 */
        width: 130px;
    }
    @media screen and (max-width: 767px) {
        /* 모바일 */
        width: 110px;
    }
    @media screen and (max-width: 480px) {
        /* 작은 모바일 */
        width: 72px;
        height: 50px;
        .nav-icon {
            height: 50px;
            width: 13px;
        }
        p {
            font-size: 1rem;
            margin: 0 0 0 5px;
        }
    }
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    li:nth-of-type(3) {
        position: relative;
        left: 10px;
    }
    @media screen and (max-width: 480px) {
        /* 작은 모바일 */
        li:nth-of-type(3) {
            position: relative;
            left: 7px;
        }
    }
`;
