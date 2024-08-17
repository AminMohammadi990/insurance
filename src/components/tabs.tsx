import { HiChevronDown } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi2";
import classes from "./tabs.module.css";

export default function Tabs() {
  return (
    <div className={classes.nav}>
      <button>
        <HiChevronDown />
      </button>
      <span>
        جستجوی بیمه شده <HiOutlineXMark />
      </span>
      <button>
        <HiPlus />
      </button>
    </div>
  );
}
