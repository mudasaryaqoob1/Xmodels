import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-[url('/bgimg.png')] w-full bg-cover bg-center h-[1080px]">
          <div className="w-full mw-[1440px] my-auto mx-0">
            <div className="flex items-center justify-center ">
              {/* <div className="relative h-[1080px]">
          { <img src="/rs-fullwidth-wrap → rs-module-wrap → rs-module → rs-slides → rs-slide.png" alt="" />}
        </div> */}
              <div className="flex items-center flex-col pt-[185px] ">
                <div className="w-[546px] ">
                  <h1 className="font-normal font-title text-[60px] leading-[66px]">
                    ENCONTRE O QUE MAIS DESEJA
                    <span className="text-[#F895B6]"> FÁCIL</span>,
                    <span className="text-[#F895B6]">SEGURO </span>E{" "}
                    <span className="text-[#F895B6]">RÁPIDO</span>
                  </h1>
                </div>
                <div className="flex items-center bg-pink-200 w-[300px] justify-between rounded-[100px] mt-[60px]">
                  <div className="">
                    <input
                      className="bg-transparent py-[8.5px] px-[16px] outline-none"
                      type="text"
                      placeholder="Pesquisar"
                    />
                  </div>
                  <div className="p-[2px]">
                    <img src="/Link.svg" alt="" />
                  </div>
                </div>
                <div className="w-[495px] mt-[26px]">
                  <h1 className="font-open-sans text-[14px] font-normal leading-[19.07px] text-center">
                    A profissão de acompanhante é legalizada e reconhecida pelo
                    Ministério do Trabalho há mais de 20 anos. Entenda a
                    legislação. Saiba mais.
                  </h1>
                </div>
                <div className="mt-[254px] flex justify-between w-[1440px]">
                  <div className=" flex items-end group">
                    <div className="relative">
                      <img src="/Background.png" alt="" />
                    </div>
                    <div className="absolute flex justify-end items-center flex-col opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="">
                        <h1 className="text-[60px] font-normal leading-[66px] font-title  text-[white] pb-0">
                          ALICE
                        </h1>
                      </div>
                      <div className="bg-white flex flex-col gap-[17px] items-center w-[263px] h-[197px]">
                        <div className="">
                          <h1 className="text-[black] font-title text-[32px] leading-[36.58px] font-normal">
                            SANTOS
                          </h1>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              IDADE
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              22
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ALTURA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              1,83
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              OLHOS
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              AZUL
                            </h1>
                          </div>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              CABELO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              LOIRO
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ETNIA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              BRANCA
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              PESO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              66,5KG
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-end group">
                    <div className="relative ">
                      <img src="/Background (1).png" alt="" />
                    </div>
                    <div className="absolute flex justify-end items-center flex-col opacity-0 group-hover:opacity-100 transition-all duration-700 ">
                      <div className="">
                        <h1 className="text-[60px] font-normal leading-[66px] font-title  text-[white] pb-0">
                          ALICE
                        </h1>
                      </div>
                      <div className="bg-white flex flex-col gap-[17px] items-center w-[263px] h-[197px]">
                        <div className="">
                          <h1 className="text-[black] font-title text-[32px] leading-[36.58px] font-normal">
                            SANTOS
                          </h1>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              IDADE
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              22
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ALTURA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              1,83
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              OLHOS
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              AZUL
                            </h1>
                          </div>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              CABELO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              LOIRO
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ETNIA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              BRANCA
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              PESO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              66,5KG
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-end group">
                    <div className="relative">
                      <img src="/Background (2).png" alt="" />
                    </div>
                    <div className="absolute flex justify-end items-center flex-col opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="">
                        <h1 className="text-[60px] font-normal leading-[66px] font-title  text-[white] pb-0">
                          ALICE
                        </h1>
                      </div>
                      <div className="bg-white flex flex-col gap-[17px] items-center w-[263px] h-[197px]">
                        <div className="">
                          <h1 className="text-[black] font-title text-[32px] leading-[36.58px] font-normal">
                            SANTOS
                          </h1>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              IDADE
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              22
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ALTURA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              1,83
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              OLHOS
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              AZUL
                            </h1>
                          </div>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              CABELO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              LOIRO
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ETNIA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              BRANCA
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              PESO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              66,5KG
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-end group">
                    <div className="relative">
                      <img src="/Background (3).png" alt="" />
                    </div>
                    <div className="absolute flex justify-end items-center flex-col opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="">
                        <h1 className="text-[60px] font-normal leading-[66px] font-title text-[white] pb-0">
                          ALICE
                        </h1>
                      </div>
                      <div className="bg-white flex flex-col gap-[17px] items-center w-[263px] h-[197px]">
                        <div className="">
                          <h1 className="text-[black] font-title text-[32px] leading-[36.58px] font-normal">
                            SANTOS
                          </h1>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              IDADE
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              22
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ALTURA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              1,83
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              OLHOS
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              AZUL
                            </h1>
                          </div>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              CABELO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              LOIRO
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ETNIA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              BRANCA
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              PESO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              66,5KG
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-end group">
                    <div className="relative">
                      <img className="" src="/Background (4).png" alt="" />
                    </div>
                    <div className="absolute flex justify-end items-center flex-col opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="">
                        <h1 className="text-[60px] font-normal leading-[66px] font-title text-[white] pb-0">
                          ALICE
                        </h1>
                      </div>
                      <div className="bg-white flex flex-col gap-[17px] items-center w-[263px] h-[197px]">
                        <div className="">
                          <h1 className="text-[black] font-title text-[32px] leading-[36.58px] font-normal">
                            SANTOS
                          </h1>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              IDADE
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              22
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ALTURA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              1,83
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              OLHOS
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              AZUL
                            </h1>
                          </div>
                        </div>
                        <div className="flex gap-[22px]">
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              CABELO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              LOIRO
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              ETNIA
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              BRANCA
                            </h1>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-[#F895B6] font-normal text-[14px] leading-[16.1px] font-Helvetica">
                              PESO
                            </h1>
                            <h1 className="text-[#1A1A1A] font-bold text-[16px] leading-[16.1px] font-Helvetica ">
                              66,5KG
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mw-[1440px] my-auto mx-0">
          <div className="h-[576px] bg-black flex flex-col justify-center items-center ">
            <h1 className="text-[black] text-outline text-[90px] leading-[108px] font-normal font-title">PARA ELE / PARA ELA / PARA</h1>
            <h1 className="text-[black] text-outline text-[90px] leading-[108px] font-normal font-title">CASAIS / PARA MASSAGEM</h1>
          </div>
        </div>
        <div className="bgimg bg-slate-500 h-[660px]">
          <div className="w-full mw-[1440px] my-auto mx-0">
            <div className="flex flex-col items-center justify-center pt-[130px]">
              <h1 className="text-[#F895B6] text-[24px] leading-[30px] font-normal font-title">CONHECA</h1>
              <h1 className="text-[#FFFFFF] text-[50px] leading-[50px] font-normal font-Vidaloka">NOME DA EMPRESA</h1>
              <p className="text-[#989898] text-[17.86px] leading-[30px] font-normal font-Poppins w-[740.09px] text-center pt-[25px]">Lorem ipsum dolor sit amet consectetur. Turpis mattis viverra et etiam faucibus nunc id a. Montes nunc at vestibulum nisi lectus malesuada duis. Sodales est erat.</p>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
}
