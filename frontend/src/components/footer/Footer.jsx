import React from "react";

function Footer() {
  return (
    <div className="footer w-full flex justify-center mx-auto bg-customNavy-80">
      <div className="innerWrapper w-4/5 flex  mx-auto">
        <div className="footerContent text-center lg:text-left py-5 w-full flex flex-col md:flex-col lg:flex-row justify-between gap-5 md:gap-5 lg:gap-10">
          <div className="left  text-white">
            &copy; All Rights Reserved{" "}
            <span className="text-yellow-100">
              Landrich Integrated Company Limited.
            </span>
          </div>
          <div className="right text-gray-400">
            <p>Developed by Inspireme Media Networks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
