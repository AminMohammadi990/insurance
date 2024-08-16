import InsuredDetails from "@/components/insuredDetails";
import LoadingIndicator from "@/components/loading";
import { Attributes } from "@/components/searchInsured";
import { fetchInsuredDetails } from "@/lib/axios"; 
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function InsuredDetail() {
  const router = useRouter();

  const id = router.query.insuredId;

  const { data } = useQuery({
    queryKey: ["insuredDetails", id],
    queryFn: () => fetchInsuredDetails(id),
  });

  console.log(data);
  if (!data) return <LoadingIndicator />;

  const { attributes } = data.data as Attributes;

  return <InsuredDetails data={attributes} />;
}
