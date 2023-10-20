'use client'
import { useState } from "react";
import { SlEnergy } from "react-icons/sl";

export default function Quotas() {
  const [quantity, setQuantity] = useState(0)

  function handleQuantity(value) {
    setQuantity(quantity + value)
  }

  return (
    <div class="flex flex-col">
      <div class="flex items-center justify-center gap-20  mt-8">
        <h6 class="flex items-center gap-2">
          <SlEnergy class="SlEnergy text-accent" size={20} /> Cotas
        </h6>
        <span class="font-bold">FAÇA SUA FÉZINHA!</span>
      </div>
      <button class="btn btn-success self-center w-full mt-6 text-neutral">
        VER MEUS NÚMEROS
      </button>
      <div class="w-96  bg-base-100 rounded-dm mt-6  rounded-md flex items-center justify-center gap-x-2 gap-y-4 flex-wrap py-6">
        <article onClick={() => handleQuantity(5)} class="product-option w-40 h-16 rounded-md bg-neutral flex items-center justify-center flex-col hover:bg-neutral/50 cursor-pointer">
          <h6 class="font-bold">+05</h6>
          <small class="text-white/50 font-semibold">SELECIONAR</small>
        </article>
        <article onClick={() => handleQuantity(10)} class="product-option w-40 h-16 rounded-md bg-neutral flex items-center justify-center flex-col hover:bg-neutral/50 cursor-pointer">
          <h6 class="font-bold">+10</h6>
          <small class="text-white/50 font-semibold">SELECIONAR</small>
        </article>
        <article onClick={() => handleQuantity(50)} class="product-option w-40 h-16 rounded-md bg-neutral flex items-center justify-center flex-col hover:bg-neutral/50 cursor-pointer">
          <h6 class="font-bold">+50</h6>
          <small class="text-white/50 font-semibold">SELECIONAR</small>
        </article>
        <article onClick={() => handleQuantity(100)} class="product-option w-40 h-16  rounded-md bg-neutral flex items-center justify-center flex-col hover:bg-neutral/50 cursor-pointer">
          <h6 class="font-bold">+100</h6>
          <small class="text-white/50 font-semibold">SELECIONAR</small>
        </article>
        <input type="number" min={0} placeholder={quantity} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}  className="text-center bg-neutral rounded-md p-2 font-bold text-white"/>
      </div>
    </div>
  );
}
