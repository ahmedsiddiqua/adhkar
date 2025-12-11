import { useState } from "react";
import TerminalLayout from "../components/TerminalLayout";
import AdhkarBox from "../components/AdhkarBox";
import data from "../data/night.json";

export default function Night() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState("");

  const next = () => {
    setAnimate("slide-left");
    setTimeout(() => {
      setIndex((i) => (i + 1) % data.length);
      setAnimate("");
    }, 220);
  };

  const prev = () => {
    setAnimate("slide-right");
    setTimeout(() => {
      setIndex((i) => (i - 1 + data.length) % data.length);
      setAnimate("");
    }, 220);
  };

  return (
    <TerminalLayout title="Sleep Adhkar">
      <AdhkarBox
        arabic={data[index].arabic}
        translation={data[index].translation}
        animate={animate}
      />

      <div className="controls">
        <button onClick={prev}>⬅ Previous</button>
        <span>{index + 1} / {data.length}</span>
        <button onClick={next}>Next ➡</button>
      </div>

      <div className="footer">Made with ❤️ by Aster.-</div>
    </TerminalLayout>
  );
}
