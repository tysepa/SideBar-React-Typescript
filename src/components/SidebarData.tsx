import { AiFillCaretDown, AiFillCaretUp, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { SidebarItem } from "../models/SidebarItem";
import { FaCog} from 'react-icons/fa'
export const SidebarData: SidebarItem[]=[
 {
    title: 'Overview',
    path:'/overview',
    icon: <AiOutlineHome/>,
    iconClosed: <AiFillCaretDown/>,
    iconOpened: <AiFillCaretUp/>,
    subnav:[
        {
            title:'Users',
            path: '/overview/users',
            icon:< AiOutlineUser/>
        }
    ]
    
 },
 {
    title: 'Configurations',
    path:'/configurations',
    icon: <FaCog />,
    
 },
];