import EggVisual from "./components/EggVisual";
import ProgressBar from "./components/ProgressBar";
import { useEggTimer } from "./hooks/useEggTimer";
import { Icon } from "@iconify/react";
import "./styles/pixel.css";
import { useState } from "react";

export default function App() {
  const { totalTime, timeLeft, isRunning, start, pause, reset, setTimer } =
    useEggTimer();

  const [customMin, setCustomMin] = useState("");
  const [customSec, setCustomSec] = useState("");

  const applyCustomTime = (m, s) => {
    const minutes = parseInt(m) || 0;
    const seconds = parseInt(s) || 0;

    if (minutes === 0 && seconds === 0) return;

    setTimer(minutes * 60 + seconds);
  };

  const cracked = totalTime > 0 && timeLeft === 0;

  const format = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")} : ${String(s % 60).padStart(
      2,
      "0"
    )}`;

  return (
    <div className="flex items-center justify-center h-200 w-150 mx-auto drag-region bg-opacity-0.5 ">
      <div className="flex flex-col items-center justify-center gap-6 w-full h-full p-4">
        <div className="flex justify-between items-center w-full border-b border-stone-100 pb-2">
          <div className="flex items-center gap-2">
            <Icon icon="solar:clock-square-outline" width={20} />
            <span className="text-sm tracking-widest font-bold relative top-0.5 text-[#5C4D44]">
              Cute Egg timer ^^
            </span>
          </div>
          <Icon icon="solar:battery-full-linear" width={20} className="opacity-30" />
        </div>

        <EggVisual
          running={isRunning}
          cracked={cracked}
          timeLeft={timeLeft}
          totalTime={totalTime}
        />

        <div className="text-center">
          <div className="text-6xl font-bold tracking-tighter tabular-nums text-[#5C4D44] ">
            {format(timeLeft)}
          </div>
          <div className="text-[20px] tracking-[0.2em] font-bold uppercase">
            {cracked ? "ENJOY YOUR EGG!" : "READY"}
          </div>
        </div>

        <ProgressBar total={totalTime} left={timeLeft} />

        <div className="grid grid-cols-3 gap-3 w-full">
          <button
            onClick={() => setTimer(180)}
            className="btn-retro no-drag flex-col bg-[#DDE2D5] p-5 text-[10px] flex items-center justify-center gap-1"
          >
            <Icon icon="solar:stopwatch-linear" width={14} />
            SOFT
          </button>
          <button
            onClick={() => setTimer(300)}
            className="btn-retro no-drag flex-col bg-[#F5E6D3] p-3 text-[10px] flex items-center justify-center gap-1"
          >
            <Icon icon="solar:stopwatch-linear" width={14} />
            MED
          </button>
          <button
            onClick={() => setTimer(420)}
            className="btn-retro no-drag flex-col bg-[#E6CCB2] p-3 text-[10px] flex items-center justify-center gap-1"
          >
            <Icon icon="solar:stopwatch-linear" width={14} />
            HARD
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 text-[10px] font-bold no-drag">
          <span className="text-[#FAF7F2] tracking-widest">CUSTOM:</span>

          <div className="flex items-center gap-2 text-[#FAF7F2] ">
            <input
              type="number"
              min="0"
              max="99"
              placeholder="MM"
              value={customMin}
              onChange={(e) => {
                setCustomMin(e.target.value);
                applyCustomTime(e.target.value, customSec);
              }}
              className="w-10 text-center text-[#FAF7F2]  border-2 border-ink bg-transparent rounded px-1 py-1 focus:outline-none placeholder:text-[#FAF7F2] "
            />
            <span>:</span>
            <input
              type="number"
              min="0"
              max="59"
              placeholder="SS"
              value={customSec}
              onChange={(e) => {
                setCustomSec(e.target.value);
                applyCustomTime(customMin, e.target.value);
              }}
              className="w-10 text-center text-[#FAF7F2] border-2 border-ink bg-transparent rounded px-1 py-1 focus:outline-none placeholder:text-[#FAF7F2]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full no-drag">
          <button
            onClick={isRunning ? pause : start}
            className="btn-retro bg-[#C88D6A] text-white py-4 rounded-xl text-xs flex items-center justify-center gap-1"
          >
            <Icon
              icon={isRunning ? "solar:pause-bold" : "solar:play-bold"}
              width={16}
            />
            {isRunning ? "PAUSE" : "START"}
          </button>

          <button
            onClick={reset}
            className="btn-retro bg-white py-4 rounded-xl text-xs flex items-center justify-center gap-1"
          >
            <Icon icon="solar:restart-bold" width={16} />
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
