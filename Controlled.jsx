import React, { useCallback, useState, useRef, useEffect } from "react";
import axios from "axios";

const Controlled = () => {
  const timerRef = useRef(null); // Store the previous timeout
  // const [value, setValue] = useState();
  // const [user, setUser] = useState();

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const fetchUserDetails = useCallback(async () => {
    console.log("fetchUserDetails");
    try {
      const {
        data: {
          data: { items },
        },
      } = await axios.get(`https://demo.dataverse.org/api/search?q=${text}`);
      console.log("controlled", items);
      setData(items);
    } catch (error) {
      console.log(error);
    }
  }, [text]);

  // Producing the same behaviour as the 'inner function' from the debounce function
  useEffect(() => {
    clearTimeout(timerRef.current); // clear previous timeout

    timerRef.current = setTimeout(() => {
      timerRef.current = null; // Reset timerRef when timer finally ends
      fetchUserDetails();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [fetchUserDetails]);

  function handleChange(e) {
    setText(e.target.value);
    // setValue(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <div>
      <input
        className="border border-black"
        value={text}
        onChange={handleChange}
        type="text"
      />
      <div>
        {data.length !== 0 &&
          data.map(({ name }, index) => (
            <div key={index}>
              <p>{name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Controlled;
