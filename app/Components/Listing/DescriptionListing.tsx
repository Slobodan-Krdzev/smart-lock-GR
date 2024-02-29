"use client"
import { SingleDescItem } from '@/app/Types/types'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

type DescriptionListingProps = {
    items: SingleDescItem[],
    lang: any
}

const DescriptionListing = ({items, lang}: DescriptionListingProps) => {

    const pathname = usePathname().split('/')[1]

    console.log(pathname.split('/')[1]);
    

  return (
    <div>
        {items.map((item, idx) => <div key={item.title} className='flex items-center gap-6 mb-4 last:mb-0'>
            <Image src={item.icon} alt={item.title} width={35} height={35}/>
            <p className='text-lg font-medium text-custom'>{Boolean(pathname === 'mk') ? item.title : item.titleEng}</p>
        </div>)}
    </div>
  )
}

export default DescriptionListing