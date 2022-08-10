import axios from "axios";
import React, { useEffect, useState } from "react";
function FormScreen() {
  function handleSubmit() {}
  const [Ldata, setData] = useState();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");

        console.log("data", res.data);
        setData(res.data);
      } catch {}
    };
    getProducts();
  }, []);

  return (
    <div>
      <table>
        {/* <caption>The Three Most Popular JavaScript Libraries</caption> */}
        {Ldata &&
          Ldata.map((data) => (
            <>
              <thead>
                <tr>
                  <th>{data.title}gjhgjh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14.3%</td>
                </tr>
                <tr>
                  <td>10.5%</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </>
          ))}
      </table>
      Read more: https://html.com/tags/table/#ixzz7KVL3uial
    </div>
  );
}

export default FormScreen;
