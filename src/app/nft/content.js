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
          <h2 className="mb-3 text-4xl font-bold dark:text-gray-200">NFTs earned</h2>
        </header>
        <AlertsExample />
        <header>
          <h2 className="mb-3 mt-9 text-xl dark:text-gray-200">
            EcoWaifu Level
          </h2>
        </header>
        <ProgressExample />
      </section>
      
      <section className="mt-8">
        <CardList />
      </section>
    </div>
  );
};

const AlertsExample = function () {
  return (
    <Alert
      color="success"
      rounded={false}
      withBorderAccent
      onDismiss={console.log}
      additionalContent={
        <React.Fragment>
          <div className="mb-4 mt-2 text-sm text-green-700 dark:text-green-800">
            More info about this info alert goes here. This example text is
            going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </div>
          <div className="flex">
            <button
              type="button"
              className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
            >
              <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
              View more
            </button>
            <button
              type="button"
              className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
            >
              Dismiss
            </button>
          </div>
        </React.Fragment>
      }
    >
      <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
        This is a info alert
      </h3>
    </Alert>
  );
};

const cardsData = [
  {
    imgSrc: 'https://i.pinimg.com/736x/97/0c/8e/970c8ed0f317b620347e6549086daf88.jpg',
    title: 'AG Special Edition #20',
    edition: 'x1999',
    price: '0.0005 ETH',
    lastSale: '<0.01 ETH',
  },
  {
    imgSrc: 'https://i.pinimg.com/236x/c3/14/ba/c314ba982fefb5e3d95e60ba436e51f3.jpg',
    title: 'AG Special Edition #20',
    edition: 'x1000',
    price: '0.0008 ETH',
    lastSale: '<0.01 ETH',
  },
 
];

const CardNFT = ({ imgSrc, title, edition, price, lastSale }) => (
  <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out hover:shadow-lg">
    <div className="w-full overflow-hidden" style={{ height: '260px' }}>
      <img className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110" src={imgSrc} alt={title} />
    </div>
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">Last sale: {lastSale}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm bg-gray-200 text-gray-800 font-semibold py-1 px-3 rounded-full">{edition}</span>
        <span className="text-sm bg-blue-200 text-blue-800 font-semibold py-1 px-3 rounded-full">{price}</span>
      </div>
    </div>
  </div>
);

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <CardNFT key={index} {...card} />
      ))}
    </div>
  );
};

const ProgressExample = function () {
  return (
    <Progress
      labelProgress
      progress={45}
      textLabel="Flowbite"
      textLabelPosition="outside"
      size="lg"
      color="lime"
    />
  );
};
