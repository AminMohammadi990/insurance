import SearchInsured from "@/components/searchInsured";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>یاری رسان</title>
        <meta
          name="description"
          content=" فعالیت های بیمه یاری رسان در حوزه های بیمه عمر، بیمه درمان و حوادث، بیمه آتش سوزی، بیمه مسافرتی، بیمه مسئولیت مدنی، بیمه باربری و بیمه مسافرتی می باشد "

        />
      </Head>
      <SearchInsured />;
    </>
  );
}
