export default function ProgressBar({ total, left }) {
  const width =
    total > 0 ? `${(left / total) * 100}%` : '0%';

  return (
    <div className="w-full h-5 border-[3px] border-ink bg-white p-0.5">
      <div
        className="h-full bg-ink transition-all duration-300"
        style={{ width }}
      />
    </div>
  );
}
