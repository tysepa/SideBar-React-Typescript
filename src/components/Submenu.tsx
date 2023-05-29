import React, { FC } from "react";
import { SidebarItem } from "../models/SidebarItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

type SidebarLinkProps = {
    item: SidebarItem;
}

const SidebarLink = styled(Link)`
display: flex;
justify-content: space-between;
align-items: center;
height: 3.75rem;
font-size: 1.125rem;
padding: 2rem;
text-decoration: none;
color: #ffffff;

&:hover{
    background-color: #fff;
    color: #3399ff;
}
`;

const SidebarLabel = styled.span`
margin-left: 1rem;
`;

const Submenu: FC<SidebarLinkProps> = ({item})=>{
    return(
       <div>
        <SidebarLink to={item.path}>
            <div>
            {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
            </div>
        </SidebarLink>
       
       </div>
    )

}
export default Submenu;