import Link from "next/link";
import React from "react";
import Button from "./Button";

const Proteccion = () => {
  return (
    <section
      className="flexCenter flex-col relative px-10 overflow-y-auto scroll-smooth pt-10"
      id="Proteccion"
    >
      <div className="proteccion">
        <div className="flex flex-1 items-center justify-end">
          <div className="overflow-hidden top-0">
            <img
              alt="phones"
              loading="lazy"
              width={550}
              height={870}
              decoding="async"
              data-nimg="1"
              className="w-full h-full object-cover object-center"
              style={{ color: "transparent" }}
              src="/LABORATIO CLINICO.png"
            />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col text-center items-center justify-center gap-3">
          Realizate tus examenes desde la comodidad de tu hogar u oficina
          <h1 className="text-[#000000] font-bold">
            ¡TOMA DE MUESTRAS A DOMICILIO!
          </h1>
          <div className="flex flex-col w-full sm:flex-row items-center justify-center pb-10">
            <Link href="https://wa.me/573226637825">
              <Button type="button" title="Agenda Aqui" variant="btn_blue" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proteccion;
