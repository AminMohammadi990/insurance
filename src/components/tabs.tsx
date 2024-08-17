import { HiChevronDown } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi2";
import classes from "./tabs.module.css";
import { Data } from "@/utils/types";

type Props = {
  active:Data | null;
  onClose:() => void
}

export default function Tabs({active, onClose}:Props) {
  if (!active) {
    return (
      <div className={classes.nav}>
        <button>
          <HiChevronDown />
        </button>
        <span className={classes.active}>
          جستجوی بیمه شده <HiOutlineXMark />
        </span>

        <button>
          <HiPlus />
        </button>
      </div>
    );
  }

  const fullName = `${active.attributes.firstName} ${active.attributes.lastName}`

  return (
    <div className={classes.nav}>
      <button>
        <HiChevronDown />
      </button>
      <span className={classes.inactive}>
        جستجوی بیمه شده <HiOutlineXMark />
      </span>
      <span
        className={active ? classes.active : classes.inactive}
      >
        بیمه شده  {fullName}<button onClick={onClose}><HiOutlineXMark /></button>
      </span>
      <button>
        <HiPlus />
      </button>
    </div>
  );
}
