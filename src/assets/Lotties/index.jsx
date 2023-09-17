import React, { useRef } from "react";
import Styles from "./style.module.scss";
export default function Rainman() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      id={Styles.headLottie}
      src="https://lottie.host/3b10e530-bf10-4f67-aac0-af63cfc7c6da/OsXHNs17Gf.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
  );
}
