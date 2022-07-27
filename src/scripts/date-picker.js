import { Datepicker } from "vanillajs-datepicker";
import ru from "vanillajs-datepicker/locales/ru";

document.addEventListener("DOMContentLoaded", () => {
  const picker = document.querySelector("[data-date-picker]");

  if (picker) {
    Object.assign(Datepicker.locales, ru);

    new Datepicker(picker, {
      autohide: true,
      format: 'mm.dd.yyyy',
      language: "ru",
      prevArrow: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.4697 3.46967L8.88388 10.0555L9.94454 11.1161L16.5303 4.53033L15.4697 3.46967ZM8.88388 13.9445L15.4697 20.5303L16.5303 19.4697L9.94454 12.8839L8.88388 13.9445ZM8.88388 10.0555C7.80994 11.1294 7.80994 12.8706 8.88388 13.9445L9.94454 12.8839C9.45639 12.3957 9.45639 11.6043 9.94454 11.1161L8.88388 10.0555Z" fill="#191A1C"/>
      </svg>`,
      nextArrow: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.53033 20.5303L15.1161 13.9445L14.0555 12.8839L7.46967 19.4697L8.53033 20.5303ZM15.1161 10.0555L8.53033 3.46967L7.46967 4.53033L14.0555 11.1161L15.1161 10.0555ZM15.1161 13.9445C16.1901 12.8706 16.1901 11.1294 15.1161 10.0555L14.0555 11.1161C14.5436 11.6043 14.5436 12.3957 14.0555 12.8839L15.1161 13.9445Z" fill="#191A1C"/>
      </svg>`,
    });
  }
});
