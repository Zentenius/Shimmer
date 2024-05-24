"use client"
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Filter from "@/components/Filter";

type Props = {}

const ShopPage = (props: Props) => {
  return (
    <div>
      <h1 className='uppercase font-[900] text-center text-4xl border-b-2 border-black p-10'>Best Sellers</h1>
    <div className="flex p-20 ">
      {/* Main content area. */ }
      <Filter/>
      <div className="w-3/4 grid grid-cols-4 gap-4 ml-auto">
        {/* Card 1*/}
        <Card className="w-full bg-transparent border-transparent shadow-none">
          <div className="relative">
            <Badge className="absolute left-3 top-3 rounded-md bg-[#7bdad3]" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto rounded-sm aspect-[4/4.5] "
              height="100"
              src="https://media.discordapp.net/attachments/940015000267919401/1243609586464718848/image_2024-05-24_115820595-removebg-preview.png?ex=6652192e&is=6650c7ae&hm=0750cff60529e28f5d4e6e667c2ac484bd2e9bcbab0c6f94ba60b4398f8d9f3f&=&format=webp&quality=lossless&width=567&height=686"
              style={{
                
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent className='p-0 space-y-1'>
          
          <p className="text-gray-500 dark:text-gray-400 text-[12px]">
                Available in sizes S, M, L, XL
                </p>
            <div className="flex justify-between items-center">
            <h5 className="font-semibold">THE SACK PACK</h5>
              <span className="text-xl font-bold">$40.00</span>
              
            </div> 
            <span className="text-sm line-through justify-end flex">$50.00</span>
            <Button className="w-full bg-transparent h-10 border-black border hover:bg-[#f8f4f4] text-black">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 2 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 3 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 4 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 5 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 6 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 7 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 8 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 9 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 10 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 11 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
        {/* Card 12 */}
        <Card className="w-full">
          <div className="relative">
            <Badge className="absolute right-0" variant="secondary">
              Save $10.00
            </Badge>
            <img
              alt="Product"
              className="w-full h-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <CardContent>
            <h5 className="font-semibold">THE SACK PACK</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold">$40.00</span>
              <span className="text-sm line-through">$50.00</span>
            </div>
            <Button className="mt-4">ADD TO CART</Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default ShopPage