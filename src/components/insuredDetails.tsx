import classes from "./insuredDetails.module.css";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { Attributes } from "@/utils/types";


type Props = {
  data:Attributes
}
// type Props = {
//   id:number,
// }

export default function InsuredDetails({data}:Props) {
  //  const { data } = useQuery({
  //   queryKey: ["insuredDetails", id],
  //   queryFn: () => fetchInsuredDetails(id),
  // });

  // console.log(data);
  // if (!data) return <LoadingIndicator />;

  // const { attributes } = data.data;

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
        <span className={data.state ? classes.active : classes.inactive}>
          {data.firstName} {data.lastName}
        </span>
      </section>

      <section className={classes.detail}>
        <div className={classes.top}>
          <img src="./images/malePic.jpg" alt="profile pic" />
          <div>
            <h3>
              بیمه شده سرپرست : {data.firstName} {data.lastName}
            </h3>
            <p>کد ملی : <span>{data.nationalCode}</span></p>
            <p>نسبت : <span>{data.relation}</span></p>
            <p>آدرس : <span>{data.address}</span></p>
          </div>
        </div>
        <hr className={classes.hr} />
        <div className={classes.grid}>
          <p>نام و نام خانوادگی : <span>{data.firstName} {data.lastName}</span></p>
          <p>وضعیت : <span>{data.state ? "فعال" : "غیر فعال"}</span></p>
          <p>وضعیت سرپرستی : <span>{data.relation}</span></p>
          
          <p>مکان : <span>{data.place}</span></p>
          <p>شماره تماس : <span>{data.phone}</span></p>
          <p>کد ملی : <span>{data.nationalCode}</span></p>
          <p>کد : <span>{data.code}</span></p>
          <p>کد پرسنلی : <span>{data.personalCode}</span></p>
          <p>تاریخ شروع پوشش : <span><time dateTime={data.CoverageStartDate}>{data.CoverageStartDate}</time></span></p>
          <p>تاریخ پایان پوشش : <span><time dateTime={data.CoverageEndDate}>{data.CoverageEndDate}</time></span></p>
        </div>
      </section>
    </div>
  );
}
