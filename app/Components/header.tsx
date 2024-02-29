import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./locale-switcher";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-2">
      <nav className="m-auto w-11/12 md:w-9/12 flex items-center justify-between text-white">
        <p className=" font-black uppercase p-4 textColor-bg text-color2 rounded-3xl">LOGO</p>
        {/* <ul className='flex gap-x-8'>
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
        </ul> */}
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
