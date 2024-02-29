import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Listing from "../Components/Listing/Listing";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <>

      <Listing lang={page}/>
    </>
  );
}
