"use client";

import {
  Accordion,
  Alert,
  Avatar,
  Badge,
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
  Table,
  TextInput,
  Timeline,
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
          <h1 className="mb-6 mt-2 text-5xl font-bold dark:text-white text-black">
            Dashboard
          </h1>
        </header>
      </section>
      <section>
        <header>
          <h2 className="mb-3 text-lg font-medium text-black dark:text-gray-200">
            Welcome back to Waifu Haven
          </h2>
        </header>
        {/* <AlertsExample /> */}
      </section>

      <section>
        <header>
          <h2 className="mb-3 mt-9 text-3xl font-bold dark:text-gray-200 text-black">
            Trending Topics 🔥
          </h2>
        </header>
        <div className="mb-4 font-medium text-black dark:text-gray-200">
          Follow more to understand how businesses are using Sol-EcoWaifu.
        </div>
        <CarouselExample />
      </section>
      <section>
        <header>
          <h2 className="mb-3 mt-9 text-3xl font-bold dark:text-gray-200 text-black">
            Discover more
          </h2>
        </header>
        <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            class="text-gray-700 hover:text-white border border-gray-600 bg-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-500 dark:bg-gray-900 dark:focus:ring-gray-800">
            All categories
          </button>
          <button
            type="button"
            class="text-gray-700 hover:text-white border border-gray-600 bg-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-500 dark:bg-gray-900 dark:focus:ring-gray-800">
            Shoes
          </button>
          <button
            type="button"
            class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">
            Bags
          </button>
          <button
            type="button"
            class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">
            Electronics
          </button>
          <button
            type="button"
            class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">
            Gaming
          </button>
        </div>
        <div className="flex flex-row">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full">
            <div className="grid grid-rows-2 gap-2 w-full ">
              <div className="text-left py-6 px-8 bg-gray-900 rounded-xl dark:bg-gray-200">
                <h2 className="pt-6 pb-2 font-bold text-3xl text-white dark:text-black">
                  ✨ Trending Products ✨
                </h2>
                <h2 className="font-medium text-md text-white dark:text-black">
                  Loved by eco-friendly enthusiasts.
                </h2>
              </div>
              <div className="p-12 bg-gray-700 rounded-xl dark:bg-gray-200">
                <h2 className="pt-3 font-bold text-4xl text-white">
                  Get Up to 80% Off! 🏷️
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <img
                  class="max-w-full rounded-lg object-cover"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="max-w-full rounded-lg object-cover"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h2 className="mb-3 mt-9 text-4xl font-bold dark:text-gray-200">
            List group
          </h2>
        </header>
        <ListGroupExample />
      </section>

      <section>
        <header>
          <h2 className="mb-3 mt-9 text-4xl font-bold dark:text-gray-200">
            Tables
          </h2>
        </header>
        <div className="max-w-full overflow-x-scroll">
          <TablesExample />
        </div>
      </section>
      <section>
        <header>
          <h2 className="mb-3 mt-9 text-4xl text-black font-bold dark:text-gray-200">
            Timeline
          </h2>
        </header>
        <TimelineExample />
      </section>
      <section>
        <FooterExample />
      </section>
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

const ImageCard = function ({imgsrc, title, description}) {
  return (
    <div className="w-full">
      <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-12 pt-36 w-full">
        <img
          src={imgsrc}
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 class="z-10 mt-3 ml-8 text-3xl font-bold text-white">{title}</h3>
        <div class="z-10 ml-8 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          {description}
        </div>
      </div>
    </div>
  );
};

const CarouselExample = function () {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <ImageCard
          imgsrc="https://image.winudf.com/v2/image1/Y29tLnZpdmlkZ2FtZXMucmlnaHQuc3dpcGVzLmhvdC5kYXRlc19iYW5uZXJfMTY2NzE1Njc5OV8wOTM/banner.jpg?fakeurl=1&w=600"
          title="Waifu World"
          description="Collect unique waifus"
        />
        <ImageCard
          imgsrc="https://as2.ftcdn.net/v2/jpg/05/91/59/03/1000_F_591590377_LfCWqoLku8pipcwrzOMpXHMqm4tXMz7V.jpg"
          title="Eco-friendly products"
          description="Safe the earth one waifu at a time"
        />
        <ImageCard
          imgsrc="https://w0.peakpx.com/wallpaper/437/587/HD-wallpaper-anime-girl-uniform-nature-background-jellyfish-anime-girl.jpg"
          title="Waifu World"
          description="Collect unique waifus"
        />
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

const FooterExample = function () {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="font-medium text-xl mt-16 font-style: italic">
            Sol-EcoWaifu . Love your Waifu
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Sol-EcoWaifu</Footer.Link>
                <Footer.Link href="#">The Team</Footer.Link>
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
          <Footer.Copyright href="#" by="Sol-EcoWaifu™" year={2024} />
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