"use client";



import { HostBlock } from "./host";
import { Inter } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Checkbox,
  Dropdown,
  Footer,
  Label,
  ListGroup,
  Modal,
  Navbar,
  Pagination,
  Progress,
  Rating,
  Sidebar,
  Spinner,
  Table,
  Tabs,
  TextInput,
  Timeline,
  Toast,
  Tooltip,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import {
  HiAdjustments,
  HiArrowNarrowRight,
  HiArrowSmRight,
  HiChartPie,
  HiCheck,
  HiClipboardList,
  HiCloudDownload,
  HiDatabase,
  HiExclamation,
  HiEye,
  HiHome,
  HiInbox,
  HiOutlineAdjustments,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiUserCircle,
  HiViewBoards,
  HiX,
} from "react-icons/hi";

const inter = Inter({ subsets: ["latin"] });

export const HomePageContent = function () {
  useEffect(() => {
    // document.onreadystatechange = function () {
    //   if (document.readyState == "complete") {
    //     const canvas = document.getElementsByName("canvas");
    //     canvas[0].width = "100%";
    //     canvas[0].height = "100%";
    //   }
    // }
  }, []);

  return (
    <div className="p-6">
        <header>
          <h2 className="mb-3 mt-9 text-4xl font-bold dark:text-gray-200">
            LiveStream
          </h2>
        </header>
        <TabsExample/>
    </div>
  );
};

const TabsExample = function  () {

  return (
    <Tabs aria-label="Tabs with icons" style="underline">
      <Tabs.Item title="Host" icon={HiUserCircle}>
        <HostBlock />
      </Tabs.Item>

      {/* Listen Tab
      <Tabs.Item active title="Listen" icon={HiDatabase}>
        <ListenBlock />
      </Tabs.Item> */}
    </Tabs>
  );
};
