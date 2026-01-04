import Link from "next/link";

export default function BottomBookNow() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <Link
        href="/book"
        className={[
          "wl-ui inline-flex items-center justify-center",
          "rounded-full border border-white/40 bg-black/20 px-6 py-3",
          "text-sm font-bold text-white shadow-sm",
          "hover:bg-black/30",
        ].join(" ")}
      >
        Book Now
      </Link>
    </div>
  );
}

