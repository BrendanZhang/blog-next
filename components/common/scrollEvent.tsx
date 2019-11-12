import Router from "next/router";
const scrollEvent = () => {
  document.body.onwheel = event => {
    if (event.deltaY > 0) {
      console.log("往下滚");
      Router.push("/about");
    } else {
      console.log("往上滚");
      Router.push("/");
    }
  };
};

export default scrollEvent;
