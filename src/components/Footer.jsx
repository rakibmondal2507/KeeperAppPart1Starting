import React from "react";

const myDate = new Date();
const currentYear = myDate.getFullYear();
// console.log(currentYear);

function Footer() {
  return (
    <footer>
      <p>Copyright ©{currentYear}</p>
    </footer>
  );
}

export default Footer;
