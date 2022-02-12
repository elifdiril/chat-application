import React from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

function Container() {
  return (
    <div>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
