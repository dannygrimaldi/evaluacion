import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Layout from '../../hocs/layouts/Layout.js';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {SearchIcon} from "./SearchIcon.jsx";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Layout>

            <div class="dark dark:bg-gray-800 dark:text-white bg-white text-black">
  ...
  <div>Text color changes based on theme</div>
</div>

<div class="light light:bg-gray-100 light:text-black bg-black text-white">
  ...
  <div>Text color changes based on theme</div>
</div>

            <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>

    <div className="flex-container">
  
  <div className="item1">
      <div className="flex-profile">

      <div className="box1">aqui va algun texto</div>
      <div className="box2">
      <Card
    isFooterBlurred
    radius="lg"
    className="border-none"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover"
      height={200}
      src="src\assets\img\img-profile.jpg"
      width={200}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">Available soon.</p>
      <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        Notify me
      </Button>
    </CardFooter>
  </Card>


      </div>
      <div className="box3">algo para atras</div>

      </div>
 
 
 
  </div>
  <div className="item2">
      <div className="flex-list">
          <div className="flex-buscar">
          <div className="flex-item-buscar1">


          <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to searcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah.................."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        /> </div>
          <div className="flex-item-buscar2">a</div>



      </div>



          <div className="list2">
              <div>LISTA DE ASESORES</div>
              
              </div>

</div>

 
 
      </div>

</div>

    
            </Layout>
            <Footer />
        </div>
    );
}

export default Home;