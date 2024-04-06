"use client";
import { waifu } from "../../provider/waifuprovider.js";
import { transactions } from "../../provider/transactionprovider.js";
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
  const tableValues = transactions;

  const addressFormatter = (value, transactionHash = true) => {
    if (!transactionHash) {
      return value.slice(0, 5) + "..." + value.slice(-6, -1)
    }
    return value.slice(0, 10) + "...";
  }


  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">Signature</th>
            <th scope="col" className="py-3 px-6">Time</th>
            <th scope="col" className="py-3 px-6">Type</th>
            <th scope="col" className="py-3 px-6">From</th>
            <th scope="col" className="py-3 px-6">To</th>
            <th scope="col" className="py-3 px-6">Quantity</th>
            <th scope="col" className="py-3 px-6">Token</th>
          </tr>
        </thead>
        <tbody>
          {tableValues.map((item) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.address}>
              <td className="py-4 px-6 flex items-center">
                <img src={item.imgaddress} alt="Logo" style={{width: '40px', height: '40px', marginRight: '10px'}} />
                <a href={"https://solscan.io/tx/" + item.address} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  {addressFormatter(item.address)}
                </a>
              </td>
              <td className="py-4 px-6">{item.timestamp}</td>
              <td className="py-4 px-6">{item.transferType}</td>
              <td className="py-4 px-6">
                <a href={"https://solscan.io/account/" + item.from} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">
                  {addressFormatter(item.from, false)}
                </a>
              </td>
              <td className="py-4 px-6">
                <a href={"https://solscan.io/account/" + item.to} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">
                  {addressFormatter(item.to, false)}
                </a>
              </td>
              <td className="py-4 px-6">{item.quantity}</td>
              <td className="py-4 px-6">
                {item.token}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TimelineExample = function () {
  const tableValues = transactions;
  const waifuInfo = waifu;

  const addressFormatter = (value, transactionHash = true) => {
    if (!transactionHash) {
      return value.slice(0, 5) + "..." + value.slice(-6, -1)
    }
    return value.slice(0, 10) + "...";
  }


  return (
    <Timeline>
      {tableValues.slice(0, 3).map((item, index) => (
        <Timeline.Item key={index}>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>{item.timestamp}</Timeline.Time>
            <Timeline.Title>{addressFormatter(item.address)}</Timeline.Title>
            <Timeline.Body>
              <div className="flex flex-row gap-4">
                <img src={item.imgaddress} alt="Your Image" className="shadow-md rounded-lg object-cover overflow-hidden w-[170px] h-[200px] relative" />
                <div className="flex-grow">
                  <div className="flex flex-col justify-around">
                    
                    <h3 className="text-lg font-semibold">From: {addressFormatter(item.from)}</h3>  
                    <h3 className="text-lg font-semibold">To: {addressFormatter(item.to)}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-200">Transfer Type: {item.transferType}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-200">Quantity: {item.quantity}</p>
                  </div>
                </div>        
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};
