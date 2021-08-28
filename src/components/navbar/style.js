import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 48px;
    border-bottom: 2px solid rgb(246, 247, 255);
`;

export const ProfileBlock = styled.div`
    margin: 0;
    width: auto;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ImagStyle = {
    marginLeft: "20px",
    borderRadius: "10px",
};

export const MyName = styled.div`
    display: inline-block;
    margin-left: 10px;
    padding: 10px;
    font-size: 1.3rem;
    font-weight: 300;
    color: rgb(91, 91, 91);
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
    .link_style {
        display: flex;
        text-decoration: none;
        color: rgb(91, 91, 91);
        margin-left: 15px;
        transition: all 0.4s ease-in-out;
        .icon {
            height: 50px;
        }
        p {
            margin: 0 0 0 5px;
            height: 50px;
            line-height: 45px;
            font-size: 1.3rem;
        }
    }
    .link_style:hover {
        color: black;
    }
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;

    align-items: center;
    justify-content: center;
`;
