'use client'
import { SearchIcon, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  


type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='mx-14 p-6'>
        <div className='flex items-center justify-between'>
            <div className='flex space-x-8'>
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem className=''>
                    <NavigationMenuTrigger className='text-[17px] bg-[#f8f4ec]'>Shop</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-[17px] bg-[#f8f4ec]'>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-[17px] bg-[#f8f4ec]'>Best Sellers</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
            <Image src='https://ballwash.com/cdn/shop/files/Logo.png?v=1682702091&width=123' width={150} height={150} alt='logo' />
            <div className='flex space-x-10'>
                <SearchIcon/>
                <span>Login/Signup</span>
                <span>Account</span>
                <ShoppingCart/>
            </div>
        </div>
    </div>
  )
}

export default Navbar