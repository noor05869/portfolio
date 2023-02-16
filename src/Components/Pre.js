import React from "react";
import { Watch } from "react-loader-spinner";
function Pre(props) {


  return (
    <>
      {props.load &&
        <div id="preloader">
          <Watch
            height="80"
            width="80"
            radius="48"
            color="#199FB1"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      }
    </>
  )
}

export default Pre;
