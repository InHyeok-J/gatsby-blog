import React from "react";
import { NavbarContainer, ProfileBlock, MyName, NavBlock, Ul } from "./style";
import { StaticImage } from "gatsby-plugin-image";
import { FaHome, FaTag, FaUserAlt, FaSearch } from "react-icons/fa";
import Item from "./Item";
import { Link } from "gatsby";

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
    ];
    return (
        <NavbarContainer>
            <ProfileBlock>
                <StaticImage
                    src="https://avatars.githubusercontent.com/u/28949213?v=4"
                    alt="my profile"
                    width={40}
                    height={40}
                    className="main-image"
                />
                <MyName>
                    <Link to="/">InHyeokBlog</Link>
                </MyName>
            </ProfileBlock>
            <NavBlock>
                <Ul>
                    {items.map((props) => (
                        <Item meta={props} key={props.label} />
                    ))}
                </Ul>
            </NavBlock>
        </NavbarContainer>
    );
};

export default NavBar;
