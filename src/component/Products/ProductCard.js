"use client";

import { Button, Modal } from "flowbite-react";
import { Star } from "./Star";
import Link from "next/link";
import { useState } from "react";
import { interactWithContract } from "../../services/solanaservice";

export const ProductCard = ({
  img_src,
  product_id,
  product_title,
  product_category,
  product_description,
  star_num,
  product_price,
}) => {
  const renderStars = (star_num) => {
    const stars = [];
    for (let i = 0; i < star_num; i++) {
      stars.push(<Star key={i} filled={true} />);
    }
    for (let i = 0; i < 5 - star_num; i++) {
      stars.push(<Star key={i} filled={false} />);
    }
    return stars;
  };

  return (
    <div className="min-w-80 max-w-sm bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out hover:shadow-lg hover:border-teal-500 hover:border-2 w-full">
      <Link href={`/products/${product_id}`}>
        <div className="flex flex-col justify-between">
          <div className="w-full overflow-hidden" style={{ height: "280px" }}>
            <img
              className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
              src={img_src}
              alt={product_title}
            />
          </div>
          <div className="p-4 min-h-40 ">
            <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
              {product_title}
            </h5>
            <h5 className="text-sm tracking-tight text-gray-900 dark:text-white">
              {product_description}
            </h5>
          </div>
          <div className="p-4">
            <div className="mb-5 mt-2.5 flex items-center">
              {renderStars(star_num)}
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {star_num}.0
              </span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {product_price} SOL
              </span>
              <AddToCart />
              {/* <a
            href="#"
            className="rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
            Add to cart
          </a> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const AddToCart = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button size="sm" onClick={() => setOpen(true)}>
        Add To Cart
      </Button>
      <Modal show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header>
          Are you sure you want to add this item to your cart?????
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Some stuff
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center align-middle">
          <Button onClick={() => {
            interactWithContract();
            setOpen(false)
          }}>Yast</Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
