import React from "react";

let EmailBody = (props) => {
  console.log(props);
  return (
    <>
      <div>HI, {props.RecieverName}</div>
      <content>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </content>
      <div>Regards,{props.SenderName}</div>
    </>
  );
};

EmailBody.defaultProps = {
  RecieverName: "Sir",
  SenderName: "Anonymous",
};
export default EmailBody;
