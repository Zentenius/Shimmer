import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type Props = {}

const BestSellers = (props: Props) => {
  return (
    <div className="min-h-screen flex justify-center space-y-10  flex-col">
      <div className=' ml-24 space-y-6'>
        <h1 className=" uppercase text-5xl font-bold  ">Best Sellers</h1>
        <Button className="py-3 px-16 uppercase hover:bg-[#f8f4f4]  bg-transparent border-black border text-black">View All</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-full mx-auto px-4  py-12">
        {/* Card 1 */}
        <Card className="w-[350px] bg-transparent border-transparent shadow-none">
            <div className="grid grid-cols-1 gap-4">
            <div className="relative">
                <img
                alt="Product Image"
                className="aspect-[4/5] object-cover w-full rounded-md "
                height={350}
                src="https://media.discordapp.net/attachments/940015000267919401/1243609586464718848/image_2024-05-24_115820595-removebg-preview.png?ex=6652192e&is=6650c7ae&hm=0750cff60529e28f5d4e6e667c2ac484bd2e9bcbab0c6f94ba60b4398f8d9f3f&=&format=webp&quality=lossless&width=567&height=686"
                width={350}
                />
                <div className="absolute font-bold top-2 left-2 bg-[#7bdad3] text-black px-2 py-1 rounded-md text-xs ">
                On Sale
                </div>
            </div>
            <div className=" py-3">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                Available in sizes S, M, L, XL
                </p>
                <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Slim Fit Chinos</h3>
                <span className="text-2xl font-bold">$49.99</span>
                </div>
                <div className="mt-4">
                <Button className="w-full bg-transparent h-12 border-black border hover:bg-[#f8f4f4] text-black">
                    Add to Cart
                </Button>
                </div>
            </div>
            </div>
        </Card>
        {/* Card 2 */}
        <Card className="w-[350px] bg-transparent border-transparent shadow-none">
            <div className="grid grid-cols-1 gap-4">
            <div className="relative">
                <img
                alt="Product Image"
                className="aspect-[4/5] object-cover w-full rounded-md "
                height={350}
                src="https://media.discordapp.net/attachments/940015000267919401/1243609586464718848/image_2024-05-24_115820595-removebg-preview.png?ex=6652192e&is=6650c7ae&hm=0750cff60529e28f5d4e6e667c2ac484bd2e9bcbab0c6f94ba60b4398f8d9f3f&=&format=webp&quality=lossless&width=567&height=686"
                width={350}
                />
                <div className="absolute font-bold top-2 left-2 bg-[#7bdad3] text-black px-2 py-1 rounded-md text-xs ">
                On Sale
                </div>
            </div>
            <div className=" py-3">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                Available in sizes S, M, L, XL
                </p>
                <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Slim Fit Chinos</h3>
                <span className="text-2xl font-bold">$49.99</span>
                </div>
                <div className="mt-4">
                <Button className="w-full hover:bg-[#f8f4f4] bg-transparent h-12 border-black border text-black">
                    Add to Cart
                </Button>
                </div>
            </div>
            </div>
        </Card>
        {/* Card 3 */}
        <Card className="w-[350px] bg-transparent border-transparent shadow-none">
            <div className="grid grid-cols-1 gap-4">
            <div className="relative">
                <img
                alt="Product Image"
                className="aspect-[4/5] object-cover w-full rounded-md "
                height={350}
                src="https://media.discordapp.net/attachments/940015000267919401/1243609586464718848/image_2024-05-24_115820595-removebg-preview.png?ex=6652192e&is=6650c7ae&hm=0750cff60529e28f5d4e6e667c2ac484bd2e9bcbab0c6f94ba60b4398f8d9f3f&=&format=webp&quality=lossless&width=567&height=686"
                width={350}
                />
                <div className="absolute font-bold top-2 left-2 bg-[#7bdad3] text-black px-2 py-1 rounded-md text-xs ">
                On Sale
                </div>
            </div>
            <div className=" py-3">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                Available in sizes S, M, L, XL
                </p>
                <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Slim Fit Chinos</h3>
                <span className="text-2xl font-bold">$49.99</span>
                </div>
                <div className="mt-4">
                <Button className="w-full hover:bg-[#f8f4f4] bg-transparent h-12 border-black border text-black">
                    Add to Cart
                </Button>
                </div>
            </div>
            </div>
        </Card>
        {/* Card 4 */}
        <Card className="w-[350px] bg-transparent border-transparent shadow-none">
            <div className="grid grid-cols-1 gap-4">
            <div className="relative">
                <img
                alt="Product Image"
                className="aspect-[4/5] object-cover w-full rounded-md "
                height={350}
                src="https://media.discordapp.net/attachments/940015000267919401/1243609586464718848/image_2024-05-24_115820595-removebg-preview.png?ex=6652192e&is=6650c7ae&hm=0750cff60529e28f5d4e6e667c2ac484bd2e9bcbab0c6f94ba60b4398f8d9f3f&=&format=webp&quality=lossless&width=567&height=686"
                width={350}
                />
                <div className="absolute font-bold top-2 left-2 bg-[#7bdad3] text-black px-2 py-1 rounded-md text-xs ">
                On Sale
                </div>
            </div>
            <div className=" py-3">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                Available in sizes S, M, L, XL
                </p>
                <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Slim Fit Chinos</h3>
                <span className="text-2xl font-bold">$49.99</span>
                </div>
                <div className="mt-4">
                <Button className="w-full hover:bg-[#f8f4f4] bg-transparent h-12 border-black border text-black">
                    Add to Cart
                </Button>
                </div>
            </div>
            </div>
        </Card>
    
      </div>
    </div>
  );
}

export default BestSellers