import { useDebug } from "./useDebug";

const [log] = useDebug(true, "[buttonTest.js]");

const buttonTest = () => {
  const button = document.querySelector(".buttonTest button");

  button.addEventListener(
    "click",
    () => {
      button.disabled = true;
    },
    {
      once: true,
    }
  );
};

export { buttonTest };
