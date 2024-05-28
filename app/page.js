import Header from "./components/header/header";
import Image from "next/image";

export default function Home() {

  return (
    <main className="w-full h-auto bg-background flex flex-col lg:screen">
      <Header />
      <div className="w-full h-full flex flex-col p-0 gap-3 lg:gridlg:pl-20 lg:gap-10 lg:grid-rows-1 lg:grid-cols-5">
        <div className="col-span-3 relative h-56">
          <Image className="absolute w-full h-full object-cover object-center" src="/banner.jpg" alt="unity" fill={true} />
        </div>
        <div className="w-full col-span-2 flex flex-col gap-5 justify-center p-5 lg:p-0">
          <h1 className="font-extrabold text-4xl w-full h-auto flex items-center">Kithima-Kirithiria Development Association</h1>
          <p className="text-xl font-medium w-full">
            We are a vibrant Community-Based Organization (CBO) dedicated to fostering unity 
            and mutual support among its members and the broader community. Our mission is to bring people together to uplift one 
            another through collaborative efforts, shared resources, and collective action. By supporting educational initiatives, 
            economic empowerment, and social welfare programs, we aim to create a resilient, self-sustaining community where every member can thrive.
          </p>
        </div>
      </div>
    </main>
  );
}
