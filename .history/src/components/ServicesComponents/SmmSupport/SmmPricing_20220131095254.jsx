import React from 'react';
import { useScroll } from '../../../utils/useScroll';

export default function SmmPricing() {
    const [element, controls] = useScroll();

    const plans = [
      {
        name: "Basic",
        price: 9,
      },
      {
        name: "Pro",
        price: 29,
      },
      {
        name: "Expert",
        price: 49,
      },
    ];
    const data = [
      {
        value: "25 Users per Project",
        type: "Basic",
      },
      {
        value: "100 Projects",
        type: "Basic",
      },
      {
        value: "10 TB Cloud Storage",
        type: "Basic",
      },
      {
        value: "50 Reports",
        type: "Basic",
      },
      {
        value: "100 GB Bandwidth",
        type: "Basic",
      },
      {
        value: "50 Support Tickets",
        type: "Basic",
      },
      {
        value: "Online Support",
        type: "Pro",
      },
      {
        value: "Daily Backup",
        type: "Pro",
      },
      {
        value: "Priority Assistance",
        type: "Expert",
      },
      {
        value: "One Click Setup",
        type: "Expert",
      },
    ];
  return <div></div>;
}
