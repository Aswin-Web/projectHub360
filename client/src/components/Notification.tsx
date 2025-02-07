import React from "react";

const Notification = ({ message }: { message: string }) => {
  alert(message);
  return <div> Message</div>;
};

export default Notification;
