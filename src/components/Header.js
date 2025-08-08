"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Image from "next/image";

const techs = [
  { name: "HTML", path: "/tech-journeys/html" },
  { name: "CSS", path: "/tech-journeys/css" },
  { name: "JavaScript", path: "/tech-journeys/javascript" },
  { name: "React", path: "/tech-journeys/react" },
  { name: "NodeJS", path: "/tech-journeys/nodejs" },
  { name: "ExpressJS", path: "/tech-journeys/expressjs" },
];

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar className="flex justify-between">
        {/* Mock Logo */}
        <Box className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            style={{ background: "#eee", borderRadius: 8 }}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Fullstack Learning
          </Typography>
        </Box>
        {/* Navigation Menu */}
        <Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {techs.map((tech) => (
              <MenuItem
                key={tech.name}
                onClick={() => {
                  window.location.href = tech.path;
                  handleClose();
                }}
              >
                {tech.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
