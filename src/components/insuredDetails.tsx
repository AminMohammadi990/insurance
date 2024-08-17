import classes from "./insuredDetails.module.css";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { Attributes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { fetchInsuredDetails } from "@/lib/axios";
import LoadingIndicator from "./loading";


type Props = {
  id:number,
}

export default function InsuredDetails({id}:Props) {
   const { data, isLoading } = useQuery({
    queryKey: ["insuredDetails", id],
    queryFn: () => fetchInsuredDetails(id),
  });

  if (!data) return null;

  if (isLoading) return <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}><LoadingIndicator /></div>;

  const { attributes } = data.data;

  return (
    <div className={classes.container}>
      <section className={classes.nav}>
        <span>
          {" "}
          صدور بیمه نامه <HiMiniChevronLeft />
        </span>
        <span>
          بیمه شده <HiMiniChevronLeft />
        </span>
        <span className={attributes.state ? classes.active : classes.inactive}>
          {attributes.firstName} {attributes.lastName}
        </span>
      </section>

      <section className={classes.detail}>
        <div className={classes.top}>
          <img src="./images/malePic.jpg" alt="profile pic" />
          <div>
            <h3>
              بیمه شده سرپرست : {attributes.firstName} {attributes.lastName}
            </h3>
            <p>کد ملی : <span>{attributes.nationalCode}</span></p>
            <p>نسبت : <span>{attributes.relation}</span></p>
            <p>آدرس : <span>{attributes.address}</span></p>
          </div>
        </div>
        <hr className={classes.hr} />
        <div className={classes.grid}>
          <p>نام و نام خانوادگی : <span>{attributes.firstName} {attributes.lastName}</span></p>
          <p>وضعیت : <span>{attributes.state ? "فعال" : "غیر فعال"}</span></p>
          <p>وضعیت سرپرستی : <span>{attributes.relation}</span></p>
          
          <p>مکان : <span>{attributes.place}</span></p>
          <p>شماره تماس : <span>{attributes.phone}</span></p>
          <p>کد ملی : <span>{attributes.nationalCode}</span></p>
          <p>کد : <span>{attributes.code}</span></p>
          <p>کد پرسنلی : <span>{attributes.personalCode}</span></p>
          <p>تاریخ شروع پوشش : <span><time dateTime={attributes.CoverageStartDate}>{attributes.CoverageStartDate}</time></span></p>
          <p>تاریخ پایان پوشش : <span><time dateTime={attributes.CoverageEndDate}>{attributes.CoverageEndDate}</time></span></p>
        </div>
      </section>
    </div>
  );
}
