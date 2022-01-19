import React, { useCallback, useState } from "react";
import axios from "axios";
import useThrottle from "../utils/useThrottle";

const Throttling = () => {
  // console.log("THROTTLING");
  // const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleChange = async (e) => {
    console.log(e.target.value);
    const {
      data: {
        data: { items },
      },
    } = await axios.get(
      `https://demo.dataverse.org/api/search?q=${e.target.value}`
    );
    console.log(items);
    setData(items);
  };

  const throttledFunc = useThrottle(handleChange, 5000);

  // function useThrottle(func, delay) {
  //   const [timeout, saveTimeout] = useState(null);

  //   const throttledFunc = function () {
  //     if (timeout) {
  //       clearTimeout(timeout);
  //     }

  //     const newTimeout = setTimeout(() => {
  //       func(...arguments);
  //       if (newTimeout === timeout) {
  //         saveTimeout(null);
  //       }
  //     }, delay);

  //     saveTimeout(newTimeout);
  //   };

  //   return throttledFunc;
  // }
  // const throttledFunc = useThrottle(handleChange, 1000);
  // const optimize = useCallback(throttle(handleChange), []);

  return (
    <div>
      <input
        className="border border-black"
        // value={text}
        onChange={throttledFunc}
        type="text"
      />
      <div>
        {data.length !== 0 &&
          data.map(({ name }, index) => (
            <>
              <p key={index}>{name}</p>
            </>
          ))}
      </div>
    </div>
  );
};

export default Throttling;
