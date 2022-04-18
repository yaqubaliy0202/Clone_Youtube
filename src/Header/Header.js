import React from "react";
import "./Header.css"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationIcon from "@mui/icons-material/Notifications";
import AvatarIcon from "@material-ui/core/Avatar";

const Header = () => {
    return (
        <div className={"header"}>
            <div className="header_left">
                <MenuIcon/>
                <img className="header_logo"
                     src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                     alt="youtube_logo"/>
            </div>
            <div className="header_input">
                <input placeholder={"Search"} type="text"/>
                <SearchIcon className={"header_inputButton"}/>
            </div>
            <div className="header_icons">
                <VideoCallIcon/>
                <AppsIcon/>
                <NotificationIcon className={"header_icon"}/>
                <AvatarIcon
                    alt={"Remu Sharp"}
                    src={"https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"}
                />
            </div>
        </div>
    )
}
export default Header;