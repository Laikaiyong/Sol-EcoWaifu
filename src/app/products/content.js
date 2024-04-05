"use client";

import Link from "next/link";
import { generateWaifuPic } from "../../services/huggingfaceservice";
import { Dropdown } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { ProductCardList } from "../../component/Products/ProductCardList";

export const HomePageContent = function () {
  const image = "/logo.png";
  const [src, setSrc] = useState(""); // initial src will be empty

  useEffect(() => {
    generateWaifuPic(setSrc);
  }, []);

  return (
    <div className="p-6">
      <section class="my-4">
        <h1 class="py-6 text-4xl font-bold text-gray-900 dark:text-white">
          Sol-EcoWaifu Marketplace 🧺{" "}
        </h1>
        {/* search bar */}
        <form class="w-full mx-auto">
          <div class="flex">
            <label
              for="search-dropdown"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <Dropdown label="Categories">
              <p className="px-4 py-2 text-md font-bold">Apparels</p>
              <Dropdown.Item>Blouse</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Divider />
              <p className="px-4 py-2 text-md font-bold">Electronics</p>
              <Dropdown.Item>Laptops</Dropdown.Item>
              <Dropdown.Item>Speakers</Dropdown.Item>
              <Dropdown.Item>Earphones</Dropdown.Item>
            </Dropdown>
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search for clothes, tools, devices, ..."
                required
              />
              <button
                type="submit"
                class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </section>
      <section>
        <h2 class="py-3 text-2xl font-bold text-gray-900 dark:text-white">
          Daily Hot Items 🔥
        </h2>
        <ProductCardList />
      </section>
      <div>
        <img src={src} />
      </div>
    </div>
  );
};
