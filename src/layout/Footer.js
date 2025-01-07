import React from "react";
const date = new Date();
const dateObj = {
  startYear: date.getFullYear() - 5,
  currentYear: date.getFullYear(),
};

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <p>
          @{dateObj.startYear}-{dateObj.currentYear}, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
