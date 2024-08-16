import classes from "./insuredDetails.module.css";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { Attributes } from "./searchInsured";

type InsuredDetailsProps = Attributes

export default function InsuredDetails({ data }:InsuredDetailsProps) {
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
        <span className={data.status === "false" ? classes.inactive : classes.active}>
          {data.firstName} {data.lastName}
        </span>
      </section>

      <section className={classes.detail}>
        <div className={classes.top}>
          <img src="./images/male00.jpg" alt="profile pic" />
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
          <p>وضعیت : <span>{data.status === "false" ? "غیر فعال" : "فعال"}</span></p>
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
