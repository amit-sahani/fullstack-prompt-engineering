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
import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";

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
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(90deg, #181C2B 0%, #232946 100%)",
        boxShadow: "0 4px 32px 0 #FFD70033, 0 2px 16px 0 #181C2B44",
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
        borderBottom: "4px solid #FFD70055",
        minHeight: 110,
        justifyContent: 'center',
        position: 'relative',
        zIndex: 50,
      }}
    >
      <Toolbar className="flex justify-between min-h-[96px] px-8 py-4 gap-8">
        {/* Logo and Title */}
        <Box className="flex items-center gap-6">
          <span className="bg-[#181C2B] rounded-2xl shadow-2xl p-3 flex items-center justify-center border-2 border-[#FFD700]/60 ring-2 ring-[#FFD700]/10">
            <FaGraduationCap className="text-[#FFD700] text-3xl drop-shadow-lg" />
          </span>
          <div className="flex flex-col">
            <span
              className="text-3xl font-black tracking-widest text-[#FFD700] leading-tight drop-shadow-lg"
              style={{ fontFamily: "Inter, Segoe UI, Arial, sans-serif", letterSpacing: 2 }}
            >
              Fullstack Learning
            </span>
            <span
              className="text-base font-semibold text-[#F4E2D8] tracking-wider mt-1 drop-shadow"
              style={{ letterSpacing: 2 }}
            >
              Your interactive journey to modern web mastery
            </span>
          </div>
        </Box>
        {/* Navigation: inline for large screens, hamburger for small */}
        <Box className="hidden lg:flex gap-4 items-center ml-8">
          {techs.map((tech) => (
            <Link
              key={tech.name}
              href={tech.path}
              className="px-6 py-3 rounded-xl font-bold text-lg tracking-widest transition-all duration-200 text-[#FFD700] hover:bg-[#FFD700] hover:text-[#232946] focus:bg-[#FFD700] focus:text-[#232946] shadow-md border-2 border-transparent hover:border-[#FFD700]/60"
              style={{ fontFamily: "Inter, Segoe UI, Arial, sans-serif", letterSpacing: 2 }}
            >
              {tech.name}
            </Link>
          ))}
        </Box>
        {/* Hamburger menu for small screens */}
        <Box className="flex lg:hidden">
          <IconButton
            size="large"
            edge="end"
            sx={{
              color: "#FFD700",
              background: "#232946",
              borderRadius: 8,
              boxShadow: "0 2px 8px #FFD70022",
              transition: "background 0.2s",
            }}
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              "& .MuiPaper-root": {
                background: "#232946",
                color: "#FFD700",
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                borderRadius: 12,
                boxShadow: "0 4px 24px #181C2B66",
              },
            }}
          >
            {techs.map((tech) => (
              <MenuItem
                key={tech.name}
                onClick={() => {
                  window.location.href = tech.path;
                  handleClose();
                }}
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: 1,
                  borderRadius: 8,
                  "&:hover": {
                    background: "#FFD70022",
                    color: "#232946",
                  },
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
