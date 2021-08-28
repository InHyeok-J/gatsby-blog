import React from "react";
import {
    NavbarContainer,
    ProfileBlock,
    ImagStyle,
    MyName,
    NavBlock,
    Ul,
} from "./style";
import { StaticImage } from "gatsby-plugin-image";
import { FaHome, FaTag, FaUserAlt, FaSearch } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import Item from "./Item";
const NavBar = () => {
    const items = [
        {
            to: "/",
            label: "home",
            icon: FaHome,
        },
        {
            to: "/search",
            label: "Search",
            icon: FaSearch,
        },
        {
            to: "/tags",
            label: "Tags",
            icon: FaTag,
        },
        {
            to: "/about",
            label: "About",
            icon: FaUserAlt,
        },
        {
            to: "/portfolio",
            label: "portfolio",
            icon: TiDocumentText,
        },
    ];
    return (
        <NavbarContainer>
            <ProfileBlock>
                <StaticImage
                    src="https://avatars.githubusercontent.com/u/28949213?v=4"
                    alt="my profile"
                    width={40}
                    height={40}
                    style={ImagStyle}
                />
                <MyName>InHyeokBlog</MyName>
            </ProfileBlock>
            <NavBlock>
                <Ul>
                    {items.map((props) => (
                        <Item meta={props} />
                    ))}
                </Ul>
            </NavBlock>
        </NavbarContainer>
    );
};

export default NavBar;
