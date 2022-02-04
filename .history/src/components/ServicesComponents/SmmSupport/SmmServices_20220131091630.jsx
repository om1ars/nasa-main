import React from 'react';
import { useScroll } from '../../../utils/useScroll';

export default function SmmServices() {
    const [element, controls] = useScroll();
    const data = [
      {
        type: "Design",
        text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
        image: service1,
      },
      {
        type: "Code",
        text: "Global death rich in heavy with pretty stories for which is on there's little good evidencesomething incredible sea.",
        image: service2,
      },
      {
        type: "Support",
        text: "Evidence something incrediblewaiting to be known not a sunbut a galaxyrise shores of thecosmic mountian peak.",
        image: service3,
      },
    ];
  return <div></div>;
}
