import React, { useCallback, useState } from "react";
import axios from "axios";

const Debounce = () => {
  // const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleChange = async (e) => {
    const {
      data: {
        data: { items },
      },
    } = await axios.get(
      `https://demo.dataverse.org/api/search?q=${e.target.value}`
    );
    setData(items);
  };

  const debouncer = (func) => {
    let debouncing;
    return function () {
      debouncing && clearTimeout(debouncing);
      debouncing = setTimeout(() => {
        func.apply(this, arguments);
      }, 500);
    };
  };

  const optimize = useCallback(debouncer(handleChange), []);

  return (
    <div>
      <input
        className="border border-black"
        // value={text}
        onChange={optimize}
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

export default Debounce;
