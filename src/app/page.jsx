import Header from "@/components/Header";
import Product from "@/components/Product";
import Quotas from "@/components/Quotas";
import ToParticipate from "@/components/ToParticipate";
import Image from "next/image";

export default function Home() {
  return (
    <main className="justify-center flex flex-col">
      <Header />
      <section class="product-card self-center flex flex-col items-center mt-2 bg-neutral p-12 rounded-md mb-32 w-[32rem]">
        <Product />
        <h4 class="mt-6 text-center">
          POR APENAS <span class="bg-base-100 p-1 rounded-md">R$ 0,80</span>
        </h4>
        <h5 class="bg-base-100 text-center rounded-md p-2 mt-4">
          10 BILHETES PREMIADOS DE MIL REAIS
        </h5>
        <h6 class=" text-center self-center mt-4">
          Sorteio <time class="badge badge-accent"> 24/05/2026</time>
        </h6>
        <Quotas />
        <ToParticipate/>
      </section>
    </main>
  );
}
