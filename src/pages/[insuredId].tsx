import InsuredDetails from "@/components/insuredDetails";
import LoadingIndicator from "@/components/loading";
import { fetchInsuredDetails } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";

export default function InsuredDetail() {
  const router = useRouter();

  const id = router.query.insuredId;

  const { data, isLoading } = useQuery({
    queryKey: ["insuredDetails", id],
    queryFn: () => fetchInsuredDetails(id),
  });


  if (isLoading) return <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}><LoadingIndicator /></div>;

  const { attributes } = data.data;

  return (
    <>
      <Head>
        <title>{attributes.firstName} {attributes.lastName}</title>
        <meta name="description" content="اطلاعات بیمه شده" />
      </Head>
      <InsuredDetails data={attributes} />
    </>
  );
}
