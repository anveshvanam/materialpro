import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material/";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar className="flex justify-between items-center px-10">
        <Typography variant="h6" component="h1">
          MATERIAL <span className="text-gray-200 font-extralight">PRO</span>
        </Typography>
        <div className="flex space-x-4 mr-auto ml-24">
          <a
            color="inherit"
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            Starter
          </a>
          <a
            color="inherit"
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            About
          </a>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <a
                  {...bindTrigger(popupState)}
                  className="text-gray-300 hover:text-white cursor-pointer flex items-center"
                >
                  DD Menu <MdArrowDropDown />
                </a>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Option 1</MenuItem>
                  <MenuItem onClick={popupState.close}>Option 2</MenuItem>
                  <hr className="my-2" />
                  <MenuItem onClick={popupState.close}>Reset</MenuItem>
                </Menu>
              </>
            )}
          </PopupState>
        </div>
        <img
          src="http://getdrawings.com/free-icon/cool-profile-icons-70.png"
          className="w-8 h-8 rounded-full"
          alt="profile"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
