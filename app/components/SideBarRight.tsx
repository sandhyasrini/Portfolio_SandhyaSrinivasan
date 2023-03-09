import React from "react";

function SideBarRight() {
  return (
    // <div className='[writing-mode:vertical-rl] after:content-[""] after:inline-block after:h-[4rem] after:border-t-[4rem] after:my-0 after:mx-[1rem] after:bg-white'>
    <div className="[writing-mode:vertical-rl] tracking-wide fixed bottom-0 left-auto right-[10px]">
      <a href="mailto:sandhya_srinivasan@outlook.com" className="invisible lg:visible email-id tracking-[0.1rem] relative text-sm text-white hover:text-[#009d68]">sandhya_srinivasan@outlook.com </a>
    </div>
    // </div>
  );
}

export default SideBarRight;
