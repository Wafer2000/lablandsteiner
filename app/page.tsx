import NuestrosServicios from "@/components/NuestrosServicios";
import Inicio from "@/components/Inicio";
import Paquetes from "@/components/Paquetes";
import QuienesSomos from "@/components/QuienesSomos";
import SaludOcupacional from "@/components/SaludOcupacional";
import NuestroPerfil from "@/components/NuestroPerfil";
import Infraestructura from "@/components/Infraestructura";
import Proteccion from "@/components/Proteccion";
import Informacion from "@/components/Informacion";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <html lang="es">
      <head></head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          <Inicio />
          <div className="flex flex-wrap justify-center">
            <Carousel />
            <NuestrosServicios />
          </div>
          <Paquetes />
          <SaludOcupacional />
          <QuienesSomos />
          <NuestroPerfil />
          <Infraestructura />
          <Proteccion />
          <Informacion />
        </main>
      </body>
    </html>
  );
}
