import Image from "next/image";
import backgorund from "../public/tennisBall.jpg";

export default function Home() {
  return (
    <main className="container mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 relative h-[calc(100vh-96px)]">
      <div className="col-span-full md:col-span-6 md:col-start-2 md:text-start text-center flex flex-col gap-8 z-10 m-auto mx-8 md:mx-0">
        <h1 className="text-backgroundColor tracking-wider leading-tight">
          Teniso ir padelio kortų rezervacija internetu
        </h1>
        <p className="text-backgroundColor text-xl">
          Užsirezervuokite teniso arba padelio kortą laisvu laiku ir mėgaukites
          tenisu!
        </p>
        <a
          href="/reservation"
          className="button-primary m-auto md:mr-auto md:ml-0 mt-8"
        >
          Rezervuoti
        </a>
      </div>
      <Image
        src={backgorund}
        alt="Tennis court"
        width={10000}
        className="col-span-full z-0 absolute object-cover brightness-[55%] rounded-3xl h-full"
      />
    </main>
  );
}
