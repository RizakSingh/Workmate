export default function PageWrapper({ children }) {
  return (
    <div className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br
      from-slate-900 via-slate-800 to-black
      text-white
      px-4
    ">
      {children}
    </div>
  );
}
