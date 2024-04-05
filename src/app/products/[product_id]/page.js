"use client";

import { products } from "../../../provider/productprovider";
import { Badge, Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function ProductDetails({ params }) {
  const product = products.find(
    (product) => product.product_id === params.product_id
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-6">
      <section className="mb-6">
        <h1 className="py-4 text-4xl font-bold text-gray-900 dark:text-white">
          {product.product_title}
        </h1>
        <div className="flex flex-row gap-4">
          <Badge color="info" size="md">
            Special Edition
          </Badge>
          <Badge color="warning" size="md">
            Sale
          </Badge>
        </div>
      </section>
      <section>
        <div className="grid grid-col-1 sm:grid-cols-5 gap-6">
          <div className="col-span-2 max-w-md">
            <img
              className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110 rounded-xl"
              src={product.img_src}
              alt={product.product_title}
            />
          </div>
          <div className="col-span-3 p-8 bg-white rounded-xl shadow-lg">
            <div className="min-w-min">{product.product_description}</div>
            <h2 className="text-2xl font-bold mt-4">
              ${product.product_price}
            </h2>
            <div className="mt-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                className="border rounded-md p-2"
              />
            </div>
            <div className="my-4">
              <AddToCart />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const AddToCart = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add To Cart</Button>
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
          <Button onClick={() => setOpen(false)}>Yast</Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
