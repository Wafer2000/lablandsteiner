import { Servicios } from "@/constants";
import React from "react";

const NuestrosServicios = () => {
  return (
    <section
      className="flex flex-col overflow-hidden pt-[96px] min-h-screen overflow-y-auto scroll-smooth"
      id="Nuestros Servicios"
    >
      <div className="relative w-full flex flex-col">
        <div className="z-20 flex w-full flex-col">
          <div className="relative text-center items-center">
            <h2 className="bold-40 lg:bold-60 text-[#2e569b] uppercase">
              Nuestros Servicios
            </h2>
            <h2 className="p-5 text-gray-30 lg:text-[20px]">
              La función principal del Laboratorio Clínico Landsteiner, es el
              analisis de las diferentes muestras de especímenes biológicos de
              origen humano, como:
            </h2>
          </div>
          <ul className="p-5 mt-10 grid gap-10 w-full md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
            {Servicios.map((servicio) => (
              <FeatureItem
                key={servicio.title}
                title={servicio.title}
                description={servicio.description}
                bg={servicio.bg}
                bg_icon={servicio.bg_icon}
                icon={servicio.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  description: string;
  bg: string;
  bg_icon: string;
  icon: string;
};

const FeatureItem = ({
  title,
  description,
  bg,
  bg_icon,
  icon,
}: FeatureItem) => {
  return (
    <li className="flex flex-1 flex-col items-start lg:items-center lg:text-center">
      <div
        style={{ backgroundColor: bg }}
        className="rounded-tl-[2rem] rounded-br-[2rem] shadow-md"
      >
        <div className="p-4 flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
          <div
            style={{ backgroundColor: bg_icon }}
            className="rounded-full p-4 lg:p-7"
          >
            {
              <svg
                viewBox="0 0 24 24"
                style={{ width: "1.5rem", height: "1.5rem" }}
                role="presentation"
              >
                <path d={icon} style={{ fill: "#ffffff" }}></path>
              </svg>
            }
          </div>
          <h2 className="bold-20 lg:bold-32 uppercase text-white">{title}</h2>
        </div>
        <div className="p-5">
          <p className="border-[2px] border-gray-200 rounded-[1.5rem] p-5 text-start text-white lg:mt-[30px] lg:bg-none">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default NuestrosServicios;
