"use client";

import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface UserImageProps {
  name: string;
  image: string;
}

const UserImage: React.FC<UserImageProps> = ({ name, image }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null); //ankarEl för menyn

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <IconButton onClick={handleClick}>
          <Avatar alt="GitHub ProfilBild" src={image} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">Mitt konto</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
        <Typography
          sx={{
            color: "black",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            backgroundColor: "#F0E8D5",
            fontSize: "13px",
            marginRight: "2rem",
          }}
        >
          Välkommen: {name}
        </Typography>
      </Box>
    </>
  );
};

export default UserImage;
