import { useEffect } from "react";

const useCustomHook = (count) => {
  useEffect(() => {
    console.log("i am frst one");

    if (count >= 1) {
      document.title = `Chats(${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]);
};

export default useCustomHook;
