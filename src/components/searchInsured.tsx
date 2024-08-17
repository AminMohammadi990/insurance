import { useState, useRef, FormEvent, ChangeEvent } from "react";

import classes from "./searchInsured.module.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useDebounce } from "../hooks/use-debounce";
import { useSerachQuery } from "../hooks/use-searchQuery";
import LoadingIndicator from "./loading";
import { Data } from "@/utils/types";

type Props = {
  onSelect: (item: Data) => void;
};

export default function SearchInsured({ onSelect }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchElement = useRef<HTMLInputElement>(null);

  const debounce = useDebounce(searchTerm, 300);

  const { data, isLoading } = useSerachQuery(debounce);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
    content = <LoadingIndicator />;
  }

  if (data) {
    console.log(data.data);
  }

  if (data) {
    content = (
      <ul className={classes.ul}>
        {data.data.map((person: Data) => (
          <li key={person.id} onClick={() => onSelect(person)}>
            {/* <Link href={`/${person.id}`}> */}
            <div className={classes.list}>
              <img src="./images/malePic.jpg" alt="profile pic" />
              <div>
                <h4>
                  بیمه شده سرپرست : {person.attributes.firstName}{" "}
                  {person.attributes.lastName}
                </h4>
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
            {/* </Link> */}
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
            onChange={handleChange}
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
