import Image from "next/image";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

type Props = {
  params: {locale: string};
};

export default  function Home({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
 const t= useTranslations('Index')


  
  return (
    <main>
      <div>
        hi every body  {t('title')}
      </div>
      

    </main>
  );
}
