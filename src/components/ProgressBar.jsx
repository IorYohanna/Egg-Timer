export default function ProgressBar({ total, left }) {
  const progress = total > 0 ? ((total - left) / total) * 100 : 0;

  return (
    <div className="w-full h-6 border-[3px] border-[#5C4D44] p-1 bg-white rounded-sm">
      <div
        className="h-full bg-[#5C4D44] transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
