'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'
import Image from 'next/image'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className='flex gap-x-3'>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className=''
            >
              <Image src={Boolean(locale === 'en') ? "https://i.imgur.com/zUSSj3B.png" : "https://i.imgur.com/hgTegHx.png"} alt={locale} height={45} width={45} className='rounded-full zoom'/>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}