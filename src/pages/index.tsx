import InsuredDetails from "@/components/insuredDetails";
import SearchInsured from "@/components/searchInsured";
import Tabs from "@/components/tabs";
import { Data } from "@/utils/types";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<null | Data>(null);
  const [tabs, setTabs] = useState<Data[]>([]);
 
  const handleSelect = (item:Data) => {
   if(!tabs.find(tab => tab.id === item.id)){
     setTabs([...tabs, item])
   }
   setSelectedItem(item)
   console.log(item)
  }

  return (
    <>
      <Head>
        <title>یاری رسان</title>
        <meta
          name="description"
          content=" فعالیت های بیمه یاری رسان در حوزه های بیمه عمر، بیمه درمان و حوادث، بیمه آتش سوزی، بیمه مسافرتی، بیمه مسئولیت مدنی، بیمه باربری و بیمه مسافرتی می باشد "
        />
      </Head>

      <Tabs active={selectedItem} onClose={() => setSelectedItem(null)} />
      {!selectedItem && <SearchInsured onSelect={handleSelect} />}
      {selectedItem && <InsuredDetails id={selectedItem?.id} />}
    </>
  );
}
