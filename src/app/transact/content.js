"use client";

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
import Image from "next/image";
import React, { useState, useEffect } from "react";
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


export const HomePageContent = function () {
    useEffect(() => {
    }, []);

  return (
    <div className="p-6">
      <section>
        <header>
          <h2 className="mb-3 mt-9 text-4xl font-bold dark:text-gray-200">
            Transaction History
          </h2>
        </header>
        
      </section>
      <section className="pt-4">
        <div className="max-w-full ">
          <TablesExample />
        </div>
      </section>
    </div>
  );
};




  const TablesExample = function () {
    return (
      
    
<div class="bg-white shadow-md rounded my-6 opacity-100">

 
  <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
    <li class="w-1/5 flex-1 text-gray-600 text-center">Item</li>
    <li class="w-1/5 flex-1 text-gray-600 text-center">Price</li>
    <li class="w-1/5 flex-1 text-gray-600 text-center">Rarity</li>
    <li class="w-1/5 flex-1 text-gray-600 text-center">Quantity</li>
    <li class="w-1/5 flex-1 text-gray-600 text-center">From</li>
    <li class="w-1/5 flex-1 text-gray-600 text-center">To</li>
    <li class="w-1/5 flex-1 text-gray-600 text-center">Time</li>
  </ul>
 
  <ul id="table-content" class="flex flex-col space-y-2">
      
  <li className="flex flex-row hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
    <div class="flex-1 text-black text-center">Waifu #1275</div>
    <div class="flex-1 text-black text-center">1.520 SOL</div>
    <div class="flex-1 text-black text-center">--</div>
    <div class="flex-1 text-black text-center">1</div>
    <div class="flex-1 text-black text-center">899933</div>
    <div class="flex-1 text-black text-center">BitroxHot</div>
    <div class="flex-1 text-black text-center">11h ago</div>
  </li>
  
  <li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
    <div class="flex-1 text-black text-center">Waifu #9721</div>
    <div class="flex-1 text-black text-center">1.850 SOL</div>
    <div class="flex-1 text-black text-center">--</div>
    <div class="flex-1 text-black text-center">1</div>
    <div class="flex-1 text-black text-center">DFAE67</div>
    <div class="flex-1 text-black text-center">B231AF</div>
    <div class="flex-1 text-black text-center">18h ago</div>
  </li>
 
  <li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
    <div class="flex-1 text-black text-center">Waifu #2723</div>
    <div class="flex-1 text-black text-center">1.500 SOL</div>
    <div class="flex-1 text-black text-center">--</div>
    <div class="flex-1 text-black text-center">1</div>
    <div class="flex-1 text-black text-center">CRYPTO_San</div>
    <div class="flex-1 text-black text-center">Makrillen</div>
    <div class="flex-1 text-black text-center">1d ago</div>
  </li>
  
  <li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
    <div class="flex-1 text-black text-center">Waifu #4180</div>
    <div class="flex-1 text-black text-center">1.750 SOL</div>
    <div class="flex-1 text-black text-center">--</div>
    <div class="flex-1 text-black text-center">1</div>
    <div class="flex-1 text-black text-center">47D4DA</div>
    <div class="flex-1 text-black text-center">7E9C7A</div>
    <div class="flex-1 text-black text-center">2d ago</div>
  </li>
  
  <li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
    <div class="flex-1 text-black text-center">Waifu #3150</div>
    <div class="flex-1 text-black text-center">1.625 SOL</div>
    <div class="flex-1 text-black text-center">--</div>
    <div class="flex-1 text-black text-center">1</div>
    <div class="flex-1 text-black text-center">A3B3AC</div>
    <div class="flex-1 text-black text-center">899933</div>
    <div class="flex-1 text-black text-center">3d ago</div>
  </li>
  
  <li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">  
    <div class="flex-1 text-black text-center">Waifu #2112</div>
    <div class="flex-1 text-black text-center">1.480 SOL</div>
    <div class="flex-1 text-black text-center">--</div>
    <div class="flex-1 text-black text-center">1</div>
    <div class="flex-1 text-black text-center">B1TROX22</div>
    <div class="flex-1 text-black text-center">HotDealz</div>
    <div class="flex-1 text-black text-center">4d ago</div>
  </li>

  <li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
  <div class="flex-1 text-black text-center">Waifu #5284</div>
  <div class="flex-1 text-black text-center">1.742 SOL</div>
  <div class="flex-1 text-black text-center">--</div>
  <div class="flex-1 text-black text-center">1</div>
  <div class="flex-1 text-black text-center">C4D2E9</div>
  <div class="flex-1 text-black text-center">RareFindz</div>
  <div class="flex-1 text-black text-center">2d ago</div>
  </li>

  <li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
  <div class="flex-1 text-black text-center">Waifu #3079</div>
  <div class="flex-1 text-black text-center">2.110 SOL</div>
  <div class="flex-1 text-black text-center">--</div>
  <div class="flex-1 text-black text-center">1</div>
  <div class="flex-1 text-black text-center">98B2C4</div>
  <div class="flex-1 text-black text-center">CryptoCritters</div>
  <div class="flex-1 text-black text-center">1d ago</div>
</li>

<li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
  <div class="flex-1 text-black text-center">Waifu #2233</div>
  <div class="flex-1 text-black text-center">1.657 SOL</div>
  <div class="flex-1 text-black text-center">--</div>
  <div class="flex-1 text-black text-center">1</div>
  <div class="flex-1 text-black text-center">A5C663</div>
  <div class="flex-1 text-black text-center">NiftyNuggets</div>
  <div class="flex-1 text-black text-center">3d ago</div>
</li>

<li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
  <div class="flex-1 text-black text-center">Waifu #1568</div>
  <div class="flex-1 text-black text-center">1.375 SOL</div>
  <div class="flex-1 text-black text-center">--</div>
  <div class="flex-1 text-black text-center">1</div>
  <div class="flex-1 text-black text-center">D3E2F4</div>
  <div class="flex-1 text-black text-center">EtherGems</div>
  <div class="flex-1 text-black text-center">6d ago</div>
</li>

<li className="flex flex-row   hover:bg-blue-100 transition duration-150 ease-in-out transform hover:-translate-y-1">
  <div class="flex-1 text-black text-center">Waifu #2490</div>
  <div class="flex-1 text-black text-center">1.823 SOL</div>
  <div class="flex-1 text-black text-center">--</div>
  <div class="flex-1 text-black text-center">1</div>
  <div class="flex-1 text-black text-center">B9A1C5</div>
  <div class="flex-1 text-black text-center">DigitalDragons</div>
  <div class="flex-1 text-black text-center">2d ago</div>
</li>


</ul>


</div>

    );
  };

const TimelineExample = function () {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};
