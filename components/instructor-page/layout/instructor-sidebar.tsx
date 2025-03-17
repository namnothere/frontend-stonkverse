"use client";

import LoggedinUserAvatar from "@/components/loggedin-user-avatar";
import useUserInfo from "@/hooks/useUserInfo";
import "react-pro-sidebar/dist/css/styles.css";
import {
  AdminPanelSettings,
  ArrowBackIos,
  ArrowForwardIos,
  BarChart,
  HomeOutlined,
  ManageHistory,
  MapOutlined,
  OndemandVideo,
  PeopleOutline,
  Public,
  Quiz,
  Settings,
  VideoCall,
  Web,
  Wysiwyg,
} from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import ReceiptIcon from "@mui/icons-material/Receipt";

import { Box, IconButton, LinearProgress, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FC, useState, Dispatch, SetStateAction, useEffect } from "react";
import { MenuItem, Menu, ProSidebar } from "react-pro-sidebar";
import { TestTube, TestTube2 } from "lucide-react";
import { GiProgression } from "react-icons/gi";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="!text-[15px] !font-poppins">{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};

interface Props {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

const InstructorSidebar: FC<Props> = ({
  isCollapsed,
  setIsCollapsed,
}): JSX.Element | null => {
  const user = useUserInfo();
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${theme === "dark" ? "#111C43 !important" : "#fff !important"
            }`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          marginRight: "0 !important",
          marginTop: "-2px !important",
        },
        "& .pro-inner-item:hover": {
          color: theme === "dark" ? "#7777ff !important" : "#3e4396 !important",
        },
        "& .pro-menu-item.active": {
          color: theme === "dark" ? "#7777ff !important" : "#3e4396 !important",
        },
        "& .pro-inner-item": {
          padding: "7px 37px 7px 22px !important",
          opacity: 1,
        },
        "& .pro-menu-item": {
          color: `${theme !== "dark" && "#000"}`,
        },
      }}
      className="!bg-white dark:bg-[#111c43]"
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: isCollapsed ? "80px" : "15%",
          minWidth: isCollapsed ? "80px" : "250px",
          transition: "width 0.3s ease",
          zIndex: 100,
        }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ArrowForwardIos /> : undefined}
            style={{ margin: "10px 0 20px 0" }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <div className="text-[20px] dark:text-dark_text text-tertiary font-bold !font-poppins">
                  Stock E-Learning
                </div>

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)} className="inline-block !-mr-6 !-mt-[6px]">
                  <ArrowBackIos className="text-tertiary dark:text-[#ffffffc1]" />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <div className="w-[100px] h-[100px] relative border-[3px] border-slate-700 dark:border-[#5b6fe6] rounded-full">
                  <LoggedinUserAvatar />
                </div>
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="!text-lg text-tertiary dark:text-[#ffffffc1] !font-poppins"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="h6"
                  className="!text-base text-tertiary dark:text-[#ffffffc1] capitalize !font-poppins flex items-center justify-center gap-1"
                  sx={{ m: "10px 0 0 0" }}
                >
                  <AdminPanelSettings /> {user?.role}
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Typography
              variant='h6'
              className="admin-nav-title"
              sx={{ m: "15px 20px 5px 25px" }}
            >
              {!isCollapsed && "Stock E-learning"}
            </Typography>

            <Item
              title="Dashboard"
              to="/instructor"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item title="Live Website" to="/" icon={<Public />} selected={selected} setSelected={setSelected} />

            <Typography
              variant='h6'
              className="admin-nav-title"
              sx={{ m: "15px 20px 5px 25px" }}
            >
              {!isCollapsed && "Data"}
            </Typography>

            <Item
              title="Create Course"
              to="/instructor/create-course"
              icon={<VideoCall />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Course Overview"
              to="/instructor/courses"
              icon={<OndemandVideo />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Create Final Test"
              to="/instructor/final-test"
              icon={<TestTube2 />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant='h6'
              className="admin-nav-title"
              sx={{ m: "15px 20px 5px 25px" }}
            >
              {!isCollapsed && "User"}
            </Typography>

            <Item
              title="Users"
              to="/instructor/users"
              icon={<GroupsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default InstructorSidebar;
