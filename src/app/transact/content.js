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
        <TimelineExample />
      </section>
      <section className="pt-4">
        <div className="max-w-full">
          <TablesExample />
        </div>
      </section>
    </div>
  );
};


const TablesExample = function () {
  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="py-3 px-6">Signature</th>
        <th scope="col" class="py-3 px-6">Time</th>
        <th scope="col" class="py-3 px-6">Type</th>
        <th scope="col" class="py-3 px-6">From</th>
        <th scope="col" class="py-3 px-6">To</th>
        <th scope="col" class="py-3 px-6">Quantity</th>
        <th scope="col" class="py-3 px-6">Token</th>
      </tr>
    </thead>
    <tbody>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
        <td class="py-4 px-6">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">5ECXkJGLc7tXEUV1bHGYus4...</a>
        </td>
        <td class="py-4 px-6">1 minute ago</td>
        <td class="py-4 px-6">Sol-Transfer</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">7BjPAh...zrVQsx</a>
        </td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">4njwAB...85djVJ</a>
        </td>
        <td class="py-4 px-6">5</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Waifu #15</a>
        </td>
      </tr>
      
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">3NGFZRpZ2sB9ECqB1RtZpyp...</a>
        </td>
        <td class="py-4 px-6">2 minutes ago</td>
        <td class="py-4 px-6">Sol-Transfer</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">9UkRBy...ShbEMs</a>
        </td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">7BjPAh...zrVQsx</a>
        </td>
        <td class="py-4 px-6">3</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Waifu #12</a>
        </td>
      </tr>
      
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">4n5QnLqJUPMmMf5BqjXyMUT...</a>
        </td>
        <td class="py-4 px-6">3 minutes ago</td>
        <td class="py-4 px-6">Sol-Transfer</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">7BjPAh...zrVQsx</a>
        </td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Aoc912...MR7DXE</a>
        </td>
        <td class="py-4 px-6">13</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Waifu #275</a>
        </td>
      </tr>
    
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">mjkd8n1E77jzHavB3MqeaW...</a>
        </td>
        <td class="py-4 px-6">4 minutes ago</td>
        <td class="py-4 px-6">Sol-Transfer</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">9qEwpK...i93n3p</a>
        </td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">7BjPAh...zrVQsx</a>
        </td>
        <td class="py-4 px-6">3</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Waifu #25</a>
        </td>
      </tr>
      
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">5jvZot7PwKGMFMHdycfG5Snj...</a>
        </td>
        <td class="py-4 px-6">5 minutes ago</td>
        <td class="py-4 px-6">Sol-Transfer</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">7BjPAh...zrVQsx</a>
        </td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">HhDoNH...6cBddi</a>
        </td>
        <td class="py-4 px-6">5</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Waifu #69</a>
        </td>
      </tr>
      
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="py-4 px-6">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">2uaRDEpNLLW4tvC8YZeTD9d...</a>
        </td>
        <td class="py-4 px-6">6 minutes ago</td>
        <td class="py-4 px-6">Sol-Transfer</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">7VNnMf...HmekwT</a>
        </td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">7BjPAh...zrVQsx</a>
        </td>
        <td class="py-4 px-6">8</td>
        <td class="py-4 px-6">
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Waifu #88</a>
        </td>
      </tr>

    </tbody>
  </table>
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
