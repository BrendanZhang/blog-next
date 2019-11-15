const scrollEvent = (event, order, updateOrder) => {
  const throttle = (event, gapTime, callBack) => {
    let timer = null;
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        callBack(event);
      }, gapTime);
    };
  };
  const log = event => {
    console.log(order);
    if (event.deltaY < 0 && order > 0) {
      console.log("为什么不减一");
      let newOrder = order - 1;
      updateOrder(newOrder);
    } else if (event.deltaY > 0 && order >= 0) {
      console.log("为什么不加一");
      let newOrder = order + 1;
      updateOrder(newOrder);
    }
  };
  const handler = function(event) {
    throttle(event, 300, log)();
  };
  handler(event);
};

export default scrollEvent;
