import React from "react";

const Informacion = () => {
  return (
    <>
      <footer
        className="flexCenter w-full bg-[#2e569b] pb-5 overflow-y-auto scroll-smooth"
        id="Informacion"
      >
        <div className="padding-container flex w-full flex-col gap-14 pt-10 px-30 mx-10">
          <div className="flex flex-col items-start justify-center md:flex-row">
            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 text-[#ffff]">
              <div className="flex flex-col gap-5">
                <h4 className="bold-18 whitespace-nowrap">Aprende más</h4>
                <div className="regular-14 flex flex-col">
                  <a
                    className="text-white cursor-pointer pb-1.5 transition-all hover:font-bold text-start text-[14px]"
                    href="#Inicio"
                  >
                    Inicio
                  </a>
                  <a
                    className="text-white cursor-pointer pb-1.5 transition-all hover:font-bold text-start text-[14px]"
                    href="#Servicios"
                  >
                    Nuestros Servicios
                  </a>
                  <a
                    className="text-white cursor-pointer pb-1.5 transition-all hover:font-bold text-start text-[14px]"
                    href="#Quienes Somos"
                  >
                    ¿Quienes Somos?
                  </a>
                  <a
                    className="text-white cursor-pointer pb-1.5 transition-all hover:font-bold text-start text-[14px]"
                    href="#NuestroPerfil"
                  >
                    Nuestro Perfil
                  </a>
                  <a
                    className="text-white cursor-pointer pb-1.5 transition-all hover:font-bold text-start text-[14px]"
                    href="#Infraestructura"
                  >
                    Infraestructura Fisica
                  </a>
                  <a
                    className="text-white cursor-pointer pb-1.5 transition-all hover:font-bold text-start text-[14px]"
                    href="#Proteccion"
                  >
                    Protección
                  </a>
                  <a
                    className="text-white cursor-pointer pb-1.5 transition-all hover:font-bold text-start text-[14px]"
                    href="#Informacion"
                  >
                    Informacion
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                  <h4 className="bold-18 whitespace-nowrap">Contactanos</h4>
                  <p className="medium-14 whitespace-nowrap">
                    Calle 60 No. 15 - 17
                  </p>
                  <p className="medium-14 whitespace-nowrap">(605)3279417</p>
                  <p className="medium-14 whitespace-nowrap">3226637825</p>
                  <p className="medium-14 whitespace-nowrap">
                    lablandsteiner@hotmail.com
                  </p>
                  <p className="medium-14 whitespace-nowrap">Barranquilla</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                  <h4 className="bold-18 whitespace-nowrap">Redes Sociales</h4>
                  <img
                    alt="logo"
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg="1"
                    className="regular-14 flex gap-4"
                    style={{ color: "transparent", filter: "invert(1)" }}
                    src="/facebook.svg"
                  />
                  <img
                    alt="logo"
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg="1"
                    className="regular-14 flex gap-4"
                    style={{ color: "transparent", filter: "invert(1)" }}
                    src="/instagram.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="flexCenter w-full overflow-y-auto scroll-smooth">
        <div className="padding-container bg-[#ffff] flex w-full flex-col pt-5">
          <div className="border text-[#000000]"></div>
          <div className="flex flex-col -center justify-center pt-5 items-center">
            <p className="text-[#000000] text-[11px] text-center">
              Como es de su conocimiento la secretaria de salud exige ciertos
              estándares para la prestación de servicio de salud, por tanto, es
              de vital importancia en nuestra entidad estar sujetos a ello,
              dando como resultado la satisfacción de nuestros usuarios. El
              LABORATORIO CLINICO LANDSTEINER IPS SAS. Se compromete en caso de
              una posible contrata- ción con su entidad, poner a su disposición
              toda la documentación exigida por la normatividad, insu- mos y/o
              equipos necesarios para la obtención de las muestras y el
              procesamiento de ellas.
            </p>
            <div className="overflow-hidden">
              <img
                alt="logo"
                loading="lazy"
                width={274}
                height={229}
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/logo.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Informacion;
