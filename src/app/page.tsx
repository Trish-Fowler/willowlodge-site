import Image from "next/image";
import {
  Car,
  Utensils,
  Wine,
  Waves,
  Trees,
  Backpack,
  Fish,
  BriefcaseBusiness,
  WashingMachine,
  Wifi,
  CookingPot,
  DoorOpen,
} from "lucide-react";

const AMENITIES = [
  { label: "Free Parking", icon: Car },
  { label: "Kitchenettes", icon: CookingPot },
  { label: "On-Site Restaurant", icon: Utensils },
  { label: "On-Site Bar", icon: Wine },
  { label: "Pool", icon: Waves },
  { label: "Courtyard", icon: Trees },
  { label: "Storage for Sporting Equipment", icon: Backpack },
  { label: "Fish Cleaning Station", icon: Fish },
  { label: "Business Center", icon: BriefcaseBusiness },
  { label: "Laundry", icon: WashingMachine },
  { label: "Free WiFi", icon: Wifi },
  { label: "Club Room", icon: DoorOpen },
];

export default function Home() {
  return (
    <main>
      {/* HERO (video-ready later; image now) */}
      <section id="wl-hero" className="relative -mt-[var(--wl-header-h)] h-screen min-h-[560px]">
        <Image
          src="/main-image.jpg"
          alt="Willow Lodge"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-black/10 to-black/18" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-12">
        </div>
      </section> 

      {/* Section 2: Book Direct */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <h2 className="wl-heading text-5xl leading-none text-[var(--wl-green)]">
              Book Direct for Best Service and Value
            </h2>
            <ul className="mt-6 space-y-2 wl-ui text-md font-semibold text-black/80 justified preserve-whitespace">
              <li>Best Rate  |  Real-Time Availability  |  Personalized Experience</li>

            </ul>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-white/40 shadow-sm">
            {/* Placeholder image; swap later */}
            <Image
              src="/book-direct.jpg"
              alt="Book direct"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Hammock Coast */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-white/40 shadow-sm md:order-1">
            {/* Placeholder image; swap later */}
            <Image
              src="/hammock-coast.jpg"
              alt="Murrells Inlet and the Hammock Coast"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:order-2">
            <h2 className="wl-heading text-5xl leading-none text-[var(--wl-green)]">
              Stay in the heart of Murrells Inlet
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-black/80 preserve-whitespace justified">
              Experience the comfort and beauty of South Carolina’s storied Hammock Coast.
              Make Willow Lodge your coastal home base for 
              enjoying the best of the Lowcountry.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="mx-auto max-w-6xl px-4 pb-28">
        <div className="rounded-3xl border border-black/10 bg-white/40 p-8 shadow-sm">
          <h3 className="wl-heading text-5xl leading-none text-[var(--wl-green)] text-center">
            Amenities
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {AMENITIES.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="h-9 w-9 text-[var(--wl-green)]" aria-hidden="true" />
                <div className="mt-3 wl-ui text-sm font-semibold leading-5 text-black/85">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
