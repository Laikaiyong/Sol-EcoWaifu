"use client";

import { generateWaifuPic } from "../../services/huggingfaceservice";
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
  const image = "/logo.png";
    const [src, setSrc] = useState(''); // initial src will be empty

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
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
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
                class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
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
          Hot Items 🔥
        </h2>
        <ItemCardList />
        <Card
          className="max-w-sm"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc="/images/products/apple-watch.png">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Add to cart
            </a>
          </div>
        </Card>
      </section>
      <div>
        <img src={src} />
      </div>
    </div>
  );
};




const Star = ({ filled }) => {
  return (
    <svg
      className="h-5 w-5"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"
      ></path>
    </svg>
  );
};

const ItemCard = ({ img_src, item_title, item_description, star_num, item_price }) => {
  const renderStars = (star_num) => {
    const stars = [];
    for (let i = 0; i < star_num; i++) {
      stars.push(<Star key={i} filled={true} />);
    }
    return stars;
  };

  return (
    <Card
      className="max-w-80"
      imgAlt={item_title}            
      imgSrc={img_src}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {item_title}
        </h5>
        <h5 className="text-md tracking-tight text-gray-900 dark:text-white">
          {item_description}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        {renderStars(star_num)}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {star_num}.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">RM {item_price}</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
};

const itemCardData = [
  {
    img_src: 'https://i.pinimg.com/736x/97/0c/8e/970c8ed0f317b620347e6549086daf88.jpg',
    item_title: 'AG Special Edition #20',
    item_description: 'idk what is this',
    star_num: '4',
    item_price: '300',
  },
  {
    img_src: 'https://i.pinimg.com/736x/97/0c/8e/970c8ed0f317b620347e6549086daf88.jpg',
    item_title: 'AG Special Edition #20',
    item_description: 'idk what is this',
    star_num: '3',
    item_price: '300',
  },
];

const ItemCardList = () => {
  return (
    <div className="flex flex-row gap-4">
      {itemCardData.map((card, index) => (
        <ItemCard key={index} {...card} />
      ))}
    </div>
  );
};

const AccordionExample = function () {
  return (
    <Accordion flush>
      <Accordion.Panel>
        <Accordion.Title>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              get started
            </a>
            &nbsp;and start developing websites even faster with components on
            top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the&nbsp;
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Figma design system
            </a>
            &nbsp;based on the utility classes from Tailwind CSS and components
            from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What are the differences between Flowbite and Tailwind UI?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
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

const AvatarExample = function () {
  return <Avatar bordered img="vercel.svg" rounded />;
};

const BadgesExample = function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="info" size="sm">
        Info
      </Badge>
      <Badge color="gray" size="sm">
        Gray
      </Badge>
      <Badge color="failure" size="sm">
        Failure
      </Badge>
      <Badge color="success" size="sm">
        Success
      </Badge>
      <Badge color="warning" size="sm">
        Warning
      </Badge>
      <Badge color="indigo" size="sm">
        Indigo
      </Badge>
      <Badge color="purple" size="sm">
        Purple
      </Badge>
      <Badge color="pink" size="sm">
        Pink
      </Badge>
    </div>
  );
};

const BreadcrumbExample = function () {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
      <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
    </Breadcrumb>
  );
};

const ButtonsExample = function () {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to blue
      </Button>
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to blue
      </Button>
      <Button outline gradientDuoTone="greenToBlue">
        Green to blue
      </Button>
      <Button outline gradientDuoTone="purpleToPink">
        Purple to pink
      </Button>
      <Button outline gradientDuoTone="pinkToOrange">
        Pink to orange
      </Button>
      <Button outline gradientDuoTone="tealToLime">
        Teal to lime
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to yellow
      </Button>
    </div>
  );
};

const ButtonGroupExample = function () {
  return (
    <Button.Group>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" /> Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" /> Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
      </Button>
    </Button.Group>
  );
};

const CardExample = function () {
  return (
    <div className="max-w-sm">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/vercel.svg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

const CarouselExample = function () {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/vercel.svg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/next.svg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/vercel.svg" />
      </Carousel>
    </div>
  );
};

const DropdownExample = function () {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Header>
        <span className="block text-sm">Bonnie success</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

const FormsExample = function () {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

const FooterExample = function () {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="/next.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

const ListGroupExample = function () {
  return (
    <div className="w-48">
      <ListGroup>
        <ListGroup.Item active icon={HiUserCircle}>
          Profile
        </ListGroup.Item>
        <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
        <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
        <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

const ModalExample = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Toggle modal</Button>
      <Modal show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const NavbarsExample = function () {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite.com/">
        <Image alt="Flowbite logo" height="32" src="/next.svg" width="32" />
        <span className="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar alt="User settings" img="/next.svg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

const PaginationExample = function () {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-center text-center">
      <Pagination
        currentPage={currentPage}
        layout="table"
        onPageChange={(page) => setCurrentPage(page)}
        showIcons
        totalPages={1000}
      />
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
    />
  );
};

const RatingExample = function () {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.95 out of 5
        </p>
      </Rating>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        1,745 global ratings
      </p>
      <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
      <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
      <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
      <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
      <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
    </div>
  );
};

const SidebarExample = function () {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Button color="warning" onClick={toggle}>
        Toggle sidebar
      </Button>
      <div className="my-6 h-96">
        <Sidebar aria-label="Example sidebar" collapsed={isOpen}>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiViewBoards}
                label="Pro"
                labelColor="gray"
              >
                Kanban
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox} label="3">
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};

const SpinnersExample = function () {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="info" aria-label="info spinner example" />
      <Spinner color="success" aria-label="success spinner example" />
      <Spinner color="failure" aria-label="failure spinner example" />
      <Spinner color="warning" aria-label="Yellow spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
};

const TablesExample = function () {
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17&quot;
          </Table.Cell>
          <Table.Cell>Sliver</Table.Cell>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Microsoft Surface Pro
          </Table.Cell>
          <Table.Cell>White</Table.Cell>
          <Table.Cell>Laptop PC</Table.Cell>
          <Table.Cell>$1999</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Magic Mouse 2
          </Table.Cell>
          <Table.Cell>Black</Table.Cell>
          <Table.Cell>Accessories</Table.Cell>
          <Table.Cell>$99</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Google Pixel Phone
          </Table.Cell>
          <Table.Cell>Gray</Table.Cell>
          <Table.Cell>Phone</Table.Cell>
          <Table.Cell>$799</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple Watch 5
          </Table.Cell>
          <Table.Cell>failure</Table.Cell>
          <Table.Cell>Wearables</Table.Cell>
          <Table.Cell>$999</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

const TabsExample = function () {
  return (
    <Tabs aria-label="Tabs with icons" style="underline">
      <Tabs.Item title="Profile" icon={HiUserCircle}>
        Profile content
      </Tabs.Item>
      <Tabs.Item active title="Dashboard" icon={HiDatabase}>
        Dashboard content
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        Settings content
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
        Contacts content
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
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

const ToastExample = function () {
  return (
    <div className="flex flex-col gap-4">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Improve password difficulty.
        </div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
};

const TooltipsExample = function () {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" placement="top">
        <Button>Tooltip top</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="right">
        <Button>Tooltip right</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Tooltip bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="left">
        <Button>Tooltip left</Button>
      </Tooltip>
    </div>
  );
};