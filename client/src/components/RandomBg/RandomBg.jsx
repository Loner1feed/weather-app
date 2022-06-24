import { Box } from "@mui/material";
import React, { useState } from "react";
import { style } from "./style/style";

export const RandomBg = () => {
  const [load, setLoad] = useState(false);

  return (
    <Box sx={style.bg}>
      {/* <img src={"https://bing.ioliu.cn/v1/rand?w=1280&h=720"} /> */}
      <img
        style={{ opacity: load ? 1 : 0 }}
        src="https://unsplash.it/1600/900?random"
        onLoad={() => {
          setLoad(true);
        }}
        alt=""
      />
    </Box>
  );
};
