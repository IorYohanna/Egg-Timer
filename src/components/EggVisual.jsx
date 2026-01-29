import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const EggVisual = ({ running, cracked }) => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (cracked) {
      setShake(true);
      const timeout = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [cracked]);

  return (
    <div className="w-full h-70 flex justify-center items-center relative bg-[#FAF7F2] rounded-xl overflow-hidden">
      <Icon
        icon="emojione-v1:cloud"
        className="absolute top-4 left-6 opacity-30"
        width={40}
      />
      <Icon
        icon="emojione-v1:cloud"
        className="absolute top-20 right-8 opacity-20"
        width={30}
      />
      <Icon
        icon="emojione-v1:cloud"
        className="absolute bottom-8 left-20 opacity-25"
        width={35}
      />

      <div
        className={`relative w-20 h-28 transition-transform duration-300
          ${running ? "animate-bounce-slight" : ""}
          ${shake ? "animate-shake" : ""}
          ${cracked ? "egg-cracked" : ""}`}
      >
        <div
          className={`absolute top-10 left-1/2 -translate-x-1/2 w-10 h-10 bg-yellow-400 rounded-full border-2 border-[#1c1917] z-0
            transition-all duration-500 ease-in-out
            ${cracked ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        ></div>

        <div className="absolute bottom-0 w-20 h-14 bg-white border-[3px] border-[#1c1917] rounded-b-full z-10 overflow-hidden flex items-end justify-center">
          <div className="w-full h-1.5 bg-stone-100 opacity-50 mb-1.5"></div>
        </div>

        <div
          className={`egg-shell-top absolute top-0 w-20 h-14 bg-white border-[3px] border-[#1c1917] rounded-t-full z-20 origin-bottom-right
            transition-transform duration-500 ease-in-out
            ${cracked ? "-rotate-12 -translate-y-2" : ""}`}
        >
          <div className="w-3 h-3 bg-white rounded-full absolute top-2.5 right-3 opacity-50"></div>
        </div>

        {!cracked && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            <div className="w-1.5 h-1.5 bg-[#1c1917] rounded-full animate-blink"></div>
            <div
              className="w-1.5 h-1.5 bg-[#1c1917] rounded-full animate-blink"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EggVisual;
