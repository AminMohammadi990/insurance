import Link from "next/link";
import { useState, useRef, FormEvent, ChangeEvent } from "react";

import classes from "./searchInsured.module.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useDebounce } from "../../hooks/use-debounce";
import { useSerachQuery } from "../../hooks/use-searchQuery";

type Data = {
  attributes: {
    CoverageEndDate: string;
    CoverageStartDate: string;
    address: string;
    code: string;
    createdAt: string;
    fatherName: string;
    firstName: string;
    lastName: string;
    nationalCode: string;
    personalCode: string;
    phone: string;
    place: string;
    publishedAt: string;
    relation: string;
    state: boolean;
    updatedAt: string;
  };

  id: number;
};

export default function SearchInsured() {
  const [searchTerm, setSearchTerm] = useState("");

  const debounce = useDebounce(searchTerm, 300);

  const { data, isLoading } = useSerachQuery(debounce);
  

  const searchElement = useRef<HTMLInputElement>(null);

  function handleSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchTerm(searchElement.current!.value);
  }

  let content = (
    <div className={classes.content}>
      <img src="./images/box.png" alt="a box" />
      <h3>هیچ بیمه شده ای را انتخاب نکرده اید</h3>
      <p>
        برای نمایش بیمه شده گان یکی را انتخاب کنید تا جزئیات آن برای شما نمایش
        پیدا کند
      </p>
    </div>
  );

  if (isLoading) {
    content = <p>loading...</p>;
  }

  if (data) {
    console.log(data.data);
  }

  if (data) {
    content = (
      <ul className={classes.ul}>
        {data.data.map((person:Data) => (
          <li key={person.id}>
            <Link href={`/${person.id}`}>
              <div className={classes.list}>
                <img src="./images/male00.jpg" alt="profile pic" />
                <div>
                  <h3>
                    بیمه شده سرپرست : {person.attributes.firstName}{" "}
                    {person.attributes.lastName}
                  </h3>
                  <p>
                    کد ملی : <span>{person.attributes.nationalCode}</span>
                  </p>
                  <p>
                    نسبت : <span>{person.attributes.relation}</span>
                  </p>
                  <p>
                    آدرس : <span>{person.attributes.address}</span>
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="جستجو کن..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            ref={searchElement}
          />
          <button>
            <HiOutlineMagnifyingGlass />
          </button>
        </form>
        {content}
      </div>
    </>
  );
}
