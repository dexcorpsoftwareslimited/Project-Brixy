import React from "react";
const visit_mark_2 = () => {
  window.location.href = "https://dexcorpsoftwareslimited.github.io/Brixy-Mark--2/";
};
const visit_dexcorp = () => {
  window.location.href = "https://github.com/dexcorpsoftwareslimited";
};
const Button = ({ styles }) => (
  <button onClick={visit_mark_2} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Check Out
  </button>
);
const But = ({ styles }) => (
  <button onClick={visit_dexcorp} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Try Out
  </button>
);


export default Button;
export {But};
