import React from "react";
import { graphql, Link } from "gatsby";
import { NavItem } from "./style";

const Item = ({ meta }) => {
    return (
        <NavItem>
            <Link to={meta.to} className="link_style">
                {meta.icon && <meta.icon className="nav-icon" />}
                <p>{meta.label}</p>
            </Link>
        </NavItem>
    );
};

export default Item;
