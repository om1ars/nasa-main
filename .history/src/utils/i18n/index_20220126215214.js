import en from "./en.json";
import uz from "./uz.json";
import ru from "./ru.json";

export const translate = (key, language) => {
  let langData = {};

  if (language === "EN") {
    langData = en;
  } else if (language === "RU") {
    langData = ru;
  } else if (language === "UZ") {
    langData = uz;
  }
  reut
};
