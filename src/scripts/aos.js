import AOS from "aos";
import { useDebug } from "./useDebug";

const [log, logError] = useDebug(false, "[aos.js]");

const aos = () => {
  log(AOS);

  AOS.init();
};

export { aos };
