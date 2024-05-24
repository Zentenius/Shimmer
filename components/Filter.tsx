import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

type Props = {}
{/*


export function AccordionDemo() {
  return (
    
  )
}


*/}
const Filter = (props: Props) => {
  return (
    <aside className="w-[20%] font-bold pr-4 sticky top-56">
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-[#e4e3dc]">
        <AccordionTrigger className="font-bold text-[13px]">CATEGORY</AccordionTrigger>
        <AccordionContent>
        <div className="mt-2 space-y-2 flex flex-col">
              <div className='space-x-2'>
              <Checkbox id="category-balls" />
              <label className="text-sm" htmlFor="category-balls">
                Balls
              </label>
              </div>
              <div className='space-x-2'>
              <Checkbox id="category-balls" />
              <label className="text-sm" htmlFor="category-balls">
                Balls
              </label>
              </div>
              <div className='space-x-2'>
              <Checkbox id="category-balls" />
              <label className="text-sm" htmlFor="category-balls">
                Balls
              </label>
              </div>
              
            </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-[#e4e3dc]">
        <AccordionTrigger className="font-bold text-[13px]">SIZE</AccordionTrigger>
        <AccordionContent>
        <Select>
              <SelectTrigger aria-label="Select size" id="size" className="bg-transparent border-[#e4e3dc]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-[#e4e3dc]">
        <AccordionTrigger className="font-bold text-[13px]">PRICE</AccordionTrigger>
        <AccordionContent>
        <Input className="w-full" type="range" />
        </AccordionContent>
      </AccordionItem>
      <div className='flex items-center space-x-2 mt-2 border-b border-[#e4e3dc] justify-between py-3'>
            <Label htmlFor="in-stock" className="font-bold text-[13px]">IN STOCK ONLY</Label>
            <Switch id="in-stock" />
    </div>
    </Accordion>
       
      </aside>
  )
}

export default Filter