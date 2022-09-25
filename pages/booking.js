import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <>
      <InlineWidget
        url="https://calendly.com/joecurtis2006/"
        pageSettings={{ hideGdprBanner: true }}
      ></InlineWidget>
    </>
  );
}
