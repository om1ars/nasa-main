import React from 'react';
import { useScroll } from '../../../utils/useScroll';

export default function SmmBlog() {
    const [element, controls] = useScroll();
    const blogsData = [
      {
        title: "Summer trip to mountains",
        type: "Adeventure",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores deleniti rem delectus optio harum omnis veniam adipisci ducimus deserunt repudiandae?",
      },
      {
        title: "Flowers purple from sky",
        type: "Personal",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis consectetur ex tempora voluptatum deleniti, officiis dicta eos illo adipisci!",
      },
      {
        title: "Rock conert main stage",
        type: "Music",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea est repudiandae nesciunt mollitia ad molestias dignissimos praesentium fugit reiciendis quis?",
      },
    ];
  return <div></div>;
}
