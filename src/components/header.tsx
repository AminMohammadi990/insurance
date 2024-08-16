import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiOutlineBolt } from "react-icons/hi2";
import { HiCalendar } from "react-icons/hi2";

import classes from "./header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>logo</div>

      <div className={classes.icons}>
        <div className={classes.red}>
          <HiOutlineBolt />
        </div>
        <div className={classes.green}>
          <HiOutlineBellAlert />
        </div>
        <div className={classes.blue}>
      <HiCalendar />
    </div>
        <div className={classes.orange}>
          <HiOutlineEnvelope />
        </div>
      </div>

      <div className={classes.profile}>
        مجید رنجکش
        <div className={classes["avatar-container"]}>
          <img
            src="https://avatar.iran.liara.run/public/23"
            alt="profile pic"
          />
          <span className={classes.status}></span>
        </div>
      </div>
    </header>
  );
}
