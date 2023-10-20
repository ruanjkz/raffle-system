import Header from '@/components/Header'
import Product from '@/components/Product'
import Image from 'next/image'
import { SlEnergy } from "react-icons/sl"

export default function Home() {
  return (
    <main className="justify-center flex flex-col">
      <Header/>
      <div className='self-center mt-20 bg-neutral p-12 rounded-md mb-32'>
        <Product/>
        <h4 className='mt-6 text-center'>POR APENAS <span className='bg-base-100 p-1 rounded-md'>R$ 0,80</span></h4>
        <h5 className='bg-base-100 text-center rounded-md p-2 mt-4'>10 BILHETES PREMIADOS DE MIL REAIS</h5>
        <h6 className=' text-center self-center mt-4'>Sorteio <div className='badge badge-accent'> 24/05/2026</div></h6>

        <div className='flex flex-col'>
          <div className='flex items-center justify-center gap-20  mt-8'>
            <h6 className='flex items-center gap-2'><SlEnergy className='text-accent' size={20}/> Cotas</h6>
            <span className='font-bold'>FAÇA SUA FÉZINHA!</span>
          </div>
          <button className="btn btn-success self-center w-full mt-6 text-neutral">VER MEUS NÚMEROS</button>
          <div className='w-full h-60 bg-base-100 rounded-md mt-6'>

          </div>
        </div>
      </div>
    </main>
  )
}
