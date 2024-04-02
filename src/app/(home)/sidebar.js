"use client"
import { useSidebarContext } from "../../context/sidebarcontext";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiStatusOnline,
  HiSparkles,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar = function () {
  const { isCollapsed } = useSidebarContext();

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      id="sidebar"
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16",
      )}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/products" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/nft" icon={HiSparkles}>
            NFTs
          </Sidebar.Item>
          <Sidebar.Item href="/transact" icon={HiInbox}>
            Transactions
          </Sidebar.Item>
          <Sidebar.Item href="/livestream" icon={HiStatusOnline}>
            Livestream
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};