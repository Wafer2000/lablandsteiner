"use client";

import React, { useState } from "react";

const Paquetes = () => {
  const [mostrarContenido1, setMostrarContenido1] = useState(false);
  const [mostrarContenido2, setMostrarContenido2] = useState(false);
  const [mostrarContenido3, setMostrarContenido3] = useState(false);
  const [mostrarContenido4, setMostrarContenido4] = useState(false);
  const [mostrarContenido5, setMostrarContenido5] = useState(false);
  const [mostrarContenido6, setMostrarContenido6] = useState(false);
  const [mostrarContenido7, setMostrarContenido7] = useState(false);
  const [mostrarContenido8, setMostrarContenido8] = useState(false);
  const [mostrarContenido9, setMostrarContenido9] = useState(false);
  const [mostrarContenido10, setMostrarContenido10] = useState(false);

  const handleMostrarContenido1 = () => {
    setMostrarContenido1(!mostrarContenido1);
  };
  const handleMostrarContenido2 = () => {
    setMostrarContenido2(!mostrarContenido2);
  };
  const handleMostrarContenido3 = () => {
    setMostrarContenido3(!mostrarContenido3);
  };
  const handleMostrarContenido4 = () => {
    setMostrarContenido4(!mostrarContenido4);
  };
  const handleMostrarContenido5 = () => {
    setMostrarContenido5(!mostrarContenido5);
  };
  const handleMostrarContenido6 = () => {
    setMostrarContenido6(!mostrarContenido6);
  };
  const handleMostrarContenido7 = () => {
    setMostrarContenido7(!mostrarContenido7);
  };
  const handleMostrarContenido8 = () => {
    setMostrarContenido8(!mostrarContenido8);
  };
  const handleMostrarContenido9 = () => {
    setMostrarContenido9(!mostrarContenido9);
  };
  const handleMostrarContenido10 = () => {
    setMostrarContenido10(!mostrarContenido10);
  };

  return (
    <section
      className="flex overflow-hidden py-24 min-h-screen overflow-y-auto scroll-smooth"
      id="Paquetes"
    >
      <div className="relative items-center w-full flex flex-col">
        <div className="z-20 flex w-full flex-col">
          <div className="relative">
            <h2 className="bold-40 pb-5 lg:bold-64 text-[#2e569b] uppercase text-center">
              Paquetes
            </h2>
          </div>
          <ul className="p-5 grid gap-2 justify-items-center">
            {/*CONTROL DE CRECIMIENTO*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  Control de Crecimiento
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido1}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido1 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido1 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">1. CUADRO HEMATICO</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      hemograma, CH, hemoleucograma, HLG, Hemograma+FD, CBC,
                      hemograma tipo IV.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El hemograma es una prueba que sirve para orientar hacia
                      el diagnóstico de diversas enfermedades que se han
                      sospechado por la historia clínica y la exploración
                      física.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">2. COPROLÓGICO</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Examen de materia fecal, examen de heces, copro
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Permitir la detección de parasitismo intestinal o
                      hepático, siempre y cuando los parásitos empleen la vía
                      fecal del hospedador para eliminar huevos o partes de su
                      organismo con fines de diseminación natural. Se basa en la
                      identificación microscópica, de los elementos parasitarios
                      presentes en muestras fecales.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">3. PARCIAL DE ORINA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Parcial de orina, PO, orina citoquimico, examen de orina,
                      sedimento y densidad urinario.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Recoger la primera orina de la mañana, a partir de la
                      segunda parte de la micción (chorro medio).
                      <p className="pt-1">
                        Realizar aseo genital previo a la recolección de la
                        muestra con agua y jabón.
                      </p>
                      <p className="pt-1">
                        No tener el periodo menstrual y no tener relaciones
                        sexuales el día previo y el día de recolección de la
                        muestra.
                      </p>
                      <p className="pt-1">
                        Para recolección de muestras pediátricas, pedir al
                        laboratorio la bolsa recolectora pediátrica, lavar los
                        genitales con abundante agua y jabón, se recomienda no
                        aplicar crema antipañalitis la noche anterior.
                      </p>
                    </div>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Proporciona información temprana sobre la integridad
                      anatómica del riñón, la existencia y grado del daño renal.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">4. PROTEINOGRAMA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>PT,
                      proeinograma, proteinas diferenciadas, proteinas, relacion
                      albumina globulina.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Útil en la detección de hiperproteinemia debido a
                      hemoconcentración, como en las deshidrataciones y varias
                      condiciones de hiperglobulinemia con mieloma múltiple,
                      infecciones y ciertas enfermedades hepáticas, así como en
                      estados patológicos asociados a un incremento de una o más
                      de las proteínas encontradas en el suero. También para la
                      detección de hipoproteinemia observada en malnutrición,
                      enfermedades renales asociadas con pérdidas de proteínas,
                      edema, hemorragias y procesos malignos.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      5. HORMONA DE CRECIMIENTO
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>HGH,
                      GH, HG, somatotropina, somatotropica, hormona
                      somatotropica.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas, sin haber realizado ejercicio o
                      actividad física.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La hormona del crecimiento es sintetizada en la hipófisis
                      y su deficiencia puede estar presente al nacer (congénita)
                      o como resultado de una lesión cerebral grave, por tumores
                      que comprometen la hipófisis o hipotálamo y tratamientos
                      de radiación para cáncer en el cerebro, incremento del
                      nivel normal mayores o iguales a 10 ng/ml en cualquiera de
                      los tiempos, incluido el nivel basal, antes de la
                      administración del glucagón, son considerados positivos.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">6. SOMATOMEDINA C</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      IGF-1, factor I de crecimiento similar a la insulina.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Indicada en el diagnóstico de gigantismo y acromegalia.
                      Los niveles bajos de IGF-1 son útiles en el diagnóstico de
                      la deficiencia de la hormona de crecimiento.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/*CONTROL DE CRECIMIENTO*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M4.22,11.29L11.29,4.22C13.64,1.88 17.43,1.88 19.78,4.22C22.12,6.56 22.12,10.36 19.78,12.71L12.71,19.78C10.36,22.12 6.56,22.12 4.22,19.78C1.88,17.43 1.88,13.64 4.22,11.29M5.64,12.71C4.59,13.75 4.24,15.24 4.6,16.57L10.59,10.59L14.83,14.83L18.36,11.29C19.93,9.73 19.93,7.2 18.36,5.64C16.8,4.07 14.27,4.07 12.71,5.64L5.64,12.71Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  CONTROL DE DIABETES
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido2}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido2 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido2 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">1. HEMOGLOBINA GLICOSILADA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      HBA1C, HBA1.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Suministra un estimativo del buen manejo de la diabetes a
                      través del tiempo al estar correlacionada con niveles de
                      hiperglicemia a mediano y largo plazo.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">2. FRUCTOSAMINA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Albúmina Glicada.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>7
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Estar en ayunas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La fructosamina es el resultado de la fusión entre la
                      glucosa y un grupo específico de aminoácidos y cetoaminas
                      que puede reducir y determinar albúmina glicosilada
                      conjuntamente con otras glicoproteínas.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">3. GLUCOSA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Glucosa, glisemia basal, glisemia A, glusemia.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Ayuno mínimo de 8 horas, máximo de 12 horas. Si es un niño
                      menor de 2 años, el ayuno debe ser mínimo de 4 horas.
                      <p className="pt-1">
                        No ingerir bebidas alcohólicas 3 días antes, no realizar
                        ejercicio físico el día de la toma de la muestra.
                      </p>
                      <p className="pt-1">
                        No tomar ni aplicar el medicamento para la diabetes
                        antes de la tomarse la muestra.
                      </p>
                    </div>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La glucosa es la concentración de azúcar en sangre por
                      ingesta de carbohidratos, es convertida en glucógeno por
                      el hígado para almacenamiento y las hormonas insulina y
                      glucagón regulan sus niveles.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      4. CURVA DE GLICEMIA DE TRES HORAS
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Prueba de tolerancia a la glucosa 3 horas o 5 muestras.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Ayuno mínimo de 8 horas, máximo de 12 horas. Si es un niño
                      menor de 2 años, el ayuno debe ser mínimo de 4 horas.
                      <p className="pt-1">
                        No ingerir bebidas alcohólicas 3 días antes, no realizar
                        ejercicio físico el día de la toma de la muestra.
                      </p>
                      <p className="pt-1">
                        Para pacientes diabéticos se . No tomar ni aplicar el
                        medicamento para la diabetes antes de la tomarse la
                        muestra.
                      </p>
                      <p className="pt-1">
                        Deberá permanecer en el laboratorio durante el
                        procedimiento.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Niveles elevados de glucosa se encuentran en: enfermedad
                      de cushing, excitaciones psíquicas, infarto del miocardio,
                      convulsiones, y accidente cerebrovascular, feocromocitoma,
                      adenoma pituitaria, hemocromatosis, glucagonoma,
                      pancreatitis aguda o crónica, enfermedades hepáticas,
                      enfermedad renal crónica, deficiencia de vitamina b,
                      embarazo, esfuerzos musculares, baños calientes
                      prolongados, alteraciones traumáticas.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">5. INSULINA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Insulina basal, niveles de insulina, insulinemia.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Ayuno mínimo de 8 horas, máximo de 12 horas. Si es un niño
                      menor de 2 años, el ayuno debe ser mínimo de 4 horas.
                      <p className="pt-1">
                        No ingerir bebidas alcohólicas en las 72 horas previas
                        al examen. Para pacientes diabéticos se recomienda no
                        tener fiebre o algún proceso viral o infeccioso.
                      </p>
                      <p className="pt-1">
                        No tomar ni aplicar el medicamento para la diabetes
                        antes de la tomarse la muestra. Se recomienda realizar
                        la toma de la muestra en horas de la mañana, antes de
                        las 10:00 a.m.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La insulina es una hormona proteínica sintetizada,
                      almacenada y secretada por las células beta de los islotes
                      de langerhans del páncreas.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      6. CURVA DE GLUCOSA Y/O INSULINA
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>Curva
                      de insulina, curva de insulina 5 muestras, Insulina basal
                      y pos carga tomar a la hora, 2 horas y 3 horas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Ayuno mínimo de 8 horas, máximo de 12 horas. Si es un niño
                      menor de 2 años, el ayuno debe ser mínimo de 4 horas.
                      <p className="pt-1">
                        No ingerir bebidas alcohólicas en las 72 horas previas
                        al examen.
                      </p>
                      <p className="pt-1">
                        Deberá permanecer en el laboratorio durante el
                        procedimiento, para lo cual deberá tener disponibilidad
                        de mínimo 4 horas.
                      </p>
                      <p className="pt-1">
                        Para pacientes diabéticos se recomienda no tener fiebre
                        o algún proceso viral o infeccioso. No tomar ni aplicar
                        el medicamento para la diabetes antes de la tomarse la
                        muestra. Se recomienda realizar la toma de la muestra en
                        horas de la mañana, antes de las 10:00 a.m.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La resistencia a la insulina se define como la disminución
                      de la respuesta biológica a la actividad de la hormona.
                      Esta alteración se agrega a la lista de entidades
                      endocrinológicas caracterizadas por la aparición de signos
                      metabólicos y clínicos de carencia hormonal (parcial o
                      absoluta) que tiene lugar en presencia de cantidades
                      normales (o aumentadas) de la hormona.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/*CONTROL DE MENOPAUSIA*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  CONTROL DE MENOPAUSIA
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido3}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido3 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido3 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">
                      1. HORMONA FOLÍCULO ESTIMULANTE
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>FSH.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Se debe seguir las recomendaciones médicas si las hay, si
                      no se puede tomar bajo cualquier circunstancia.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La hormona foliculoestimulante (fsh) es una hormona
                      glucoproteica con dos subunidades.
                      <p className="pt-1">
                        La subunidad alfa es similar a las de la hormona
                        luteinizante (lh), la gonadotropina coriónica humana
                        (hcg) y la tirotropina (tsh).
                      </p>
                      <p className="pt-1">
                        La subunidad beta es diferente de las de las otras
                        hormonas glucoproteínicas, y le confiere su
                        especificidad bioquímica. La fsh es secretada por la
                        hipófisis anterior en respuesta a la hormona liberadora
                        de gonadotropinas (gnrh) secretada por el hipotálamo.
                      </p>
                      <p className="pt-1">
                        La subunidad beta es diferente de las de las otras
                        hormonas glucoproteínicas, y le confiere su
                        especificidad bioquímica. La fsh es secretada por la
                        hipófisis anterior en respuesta a la hormona liberadora
                        de gonadotropinas (gnrh) secretada por el hipotálamo.
                      </p>
                      <p className="pt-1">
                        Tanto en los individuos de sexo masculino como femenino,
                        la secreción de fsh está regulada por un equilibrio de
                        mecanismos de retroalimentación positiva y negativa en
                        los que participan el eje hipotálamo-hipófisis, los
                        órganos reproductores, la hipófisis y las hormonas
                        esteroideas sexuales.
                      </p>
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      2. HORMONA LUTEINIZANTE
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>LH.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones salvo que haya indicaciones
                      médicas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La hormona luteinizante (también conocida como lutropina y
                      abreviada como lh) es una hormona gonadotropina producida
                      por la glándula pituitaria anterior. Los niveles normales
                      de lh son bajos durante la infancia. Tanto en los hombres
                      como en las mujeres, la lh es una hormona esencial para la
                      reproducción. En las mujeres en el momento de la
                      menstruación, la hormona estimulante del folículo (fsh)
                      inicia el crecimiento folicular, que afecta
                      específicamente a las células granulosas.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">3. PROGESTERONA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>PGN,
                      PGR, PRG, P4.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales, solo en los casos que
                      el médico ordene alguna condición o fecha específica del
                      ciclo.
                      <p className="pt-1">
                        La muestra puede ser tomada a cualquier hora del día.
                      </p>
                    </div>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La progesterona, en combinación con los estrógenos, regula
                      las funciones del aparato reproductor durante el ciclo
                      menstrual. La progesterona es fundamental para preparar el
                      endometrio para la implantación del blastocisto y para el
                      mantenimiento de la gestación. Las fuentes más importantes
                      de progesterona son el cuerpo lúteo y la placenta en la
                      mujer. La corteza suprarrenal en el varón y la mujer y los
                      testículos en el varón son fuentes secundarias de
                      progesterona.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">4. PROLACTINA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>PRL,
                      prolactina basal, luteotropina.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Es indispensable que el paciente haya dormido toda la
                      noche, no haber trasnochado.
                      <p className="pt-1">
                        La primera muestra debe tomarse mínimo 2 horas después
                        de haberse levantado (El paciente se levanta de la cama
                        y no vuelve a acostarse) y máximo 4 horas después de
                        levantarse, máximo hasta las 10:00 a.m.
                      </p>
                      <p className="pt-1">
                        No se debe haber realizado ejercicio o actividad física,
                        no haber tenido relaciones sexuales ni manipulación de
                        los senos la noche anterior ni el día de la toma de la
                        muestra.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La prolactina es una hormona polipeptídica monocatenaria
                      secretada por la hipófisis anterior bajo el control de los
                      factores de inhibición y de liberación de la prolactina.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">5. ESTRADIOL</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      E2,estrogenos,estiradiol 17 beta.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                      <p className="pt-1">
                        Se recomienda realizar la toma de la muestra en horas de
                        la mañana, antes de las 10:00 a.m. Informar fecha de
                        última menstruación.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El estradiol (e2) es la forma más importante de estrógeno,
                      la mayor parte es sintetizada y secretado por ovarios,
                      corteza suprarrenal y placenta, la cual se forma durante
                      el embarazo para alimentar el embrión en desarrollo. Es
                      responsable del crecimiento del útero, trompas de falopio,
                      vagina, mamas y órganos genitales externos, en las
                      mujeres.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">6. ESTRIOL</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>E3,
                      estrógenos, estriol libre, estriol no conjugado.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>8
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El estriol no conjugado (e3) es una hormona que forma
                      parte de las tres fracciones de los estrógenos, junto con
                      estradiol y estrona, es sintetizado en la placenta. La
                      concentración se eleva desde la semana 16 de gestación
                      hasta el alumbramiento. Su determinación se realiza en
                      suero y orina, siendo la muestra de orina de 24 horas de
                      mayor valor clínico.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      7. VITAMINA D25 TOTAL
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Vitamina D, vitamina D25 hidroxi, Vitamina D25 , Vitamina
                      D, 25 – OH, total, fraccionada.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales, notificar el consumo
                      de vitamina D.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La vitamina d es una hormona esteroidea que interviene en
                      la absorción intestinal del calcio así como también en la
                      regulación de la homeostasia del calcio. La vitamina D es
                      fundamental para la formación y el mantenimiento de huesos
                      fuertes y sanos.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/*PERFIL ANEMIA*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M21,7C20,7 20,6 20,6V5H18V7H16V6C16,4.27 14.75,1 10,1C5.25,1 4,4.27 4,6V19C4,19.33 3.9,21 2,21V23C4.93,23 6,20.61 6,19V6C6,5.88 6.05,3 10,3C13.83,3 14,5.7 14,6V7H12V5H10V6C10,6 10,7 9,7C8,7 8,8 8,8V20C8,20 8,22 13,22C13.24,22 14.13,22 17,22C22,22 22,20 22,20V8C22,8 22,7 21,7M15,19.4A3,3 0 0,1 12,16.4C12,14.4 15,11 15,11C15,11 18,14.4 18,16.4A3,3 0 0,1 15,19.4Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  PERFIL ANEMIA
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido4}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido4 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido4 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">1. FERRITINA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Perfil de hierro.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No se requiere ayuno estricto, se sugiere mínimo 2 horas
                      sin haber consumido alimentos altos en grasas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La ferritina es una proteína de alto peso molecular por su
                      alto contenido de hierro (20%), permanece almacenado en
                      hígado, médula ósea y bazo, y constituye la principal
                      forma de depósito del metal, con función en la
                      eritropoyesis.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">2. FOLATO</p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El ácido fólico también conocido como folato, es una
                      vitamina hidrosoluble del complejo b (b9) que actúa como
                      coenzima (con la vitamina b-12 y la vitamina c) en el
                      metabolismo y síntesis proteica. El 80% del folato es
                      sintetizado por la flora gastrointestinal y el 20%
                      restante es absorbido diariamente de la dieta, está
                      recomendado el suplemento dietético continuo en madres
                      gestantes para evitar defectos de cierre del tubo neural
                      en los embriones.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">3. VITAMINA B12</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>Vit
                      B12, Cianocobalamina, Cobalamina.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere previo ayuno.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Resulta indispensable para la formación de glóbulos rojos
                      y para el crecimiento corporal y regeneración de los
                      tejidos.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">4. HEMOGRAMA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Hemograma, CH, hemoleucograma, HLG, hemograma + FD, CBC,
                      Hemograma tipo IV.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El hemograma es una prueba que sirve para orientar hacia
                      el diagnóstico de diversas enfermedades que se han
                      sospechado por la historia clínica y la exploración
                      física.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">5. HIERRO SÉRICO</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>FE,
                      hierro serico, ferremia, FE++
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Diagnóstico de anemia ferropénica.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      6. CAPACIDAD DE FIJACIÓN DEL HIERRO
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>TIBC,
                      capacidad de combinación del hierro.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>8
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condición.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El hierro es un metal indispensable para la formación del
                      grupo hemo, es transportado en la sangre por la
                      transferrina (beta-globulina), cada molécula de
                      transferrina transporta 2 átomos de iones fe3+, en
                      condiciones fisiológicas la transferrina se encuentra
                      saturada en el 30%, dejando libre el 70% de los sitios de
                      unión al hierro.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">7. % DE SATURACIÓN</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Indice de saturacion, saturacion del hierro.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Los valores del porcentaje de saturación de la
                      transferrina menores de 15% son congruentes con la anemia
                      ferropenica, aunque no confirman su presencia.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/*PERFIL HORMONAL MASCULINO*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  PERFIL HORMONAL MASCULINO
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido5}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido5 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido5 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">
                      1. ANTIGENO ESPECIFICO DE PROSTATA ULTRA SENSIBLE
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>PSA,
                      APS, APE, ANTIGENO PROSTATICO, PSA TOTAL.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere estricto ayuno.
                      <p className="pt-1">
                        3 días antes de la toma de la muestra no tener
                        relaciones sexuales, no realizar ejercicio físico.
                      </p>
                      <p className="pt-1">
                        Si le realizaron tacto rectal o masaje prostático que
                        hayan transcurrido 8 días mínimos, no haberse realizado
                        colonoscopias o biopsias prostáticas recientemente.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El antígeno prostático específico (psa) es una
                      glucoproteína de cadena única que se encuentra normalmente
                      en el citoplasma de las células epiteliales que recubren
                      los acinos y los conductos de la glándula prostática.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      2. TESTOSTERONA TOTAL
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Testosterona, androgenos.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales
                      <p className="pt-1">
                        Se recomienda realizar la toma de la muestra en horas de
                        la mañana, antes de las 10:00 a.m.
                      </p>
                      <p className="pt-1">
                        Informar fecha de última menstruación.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Evalúa hirsutismo y masculinización en mujeres o
                      funcionamiento testicular en estados clínicos donde las
                      proteínas fijadoras de testosterona pueden estar alteradas
                      (obesidad, cirrosis, desórdenes tiroideos).
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      3. TESTOSTERONA LIBRE
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Testosterona L, androgenos.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>8
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales, tener en cuenta fecha
                      de montaje de la prueba.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Evalúa hirsutismo y masculinización en mujeres o
                      funcionamiento testicular en estados clínicos donde las
                      proteínas fijadoras de testosterona pueden estar
                      alteradas(obesidad, cirrosis, desórdenes tiroideos).
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">4. PSA LIBRE</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      ANTIGENO ESPECIFICO DE PROSTATA FRACCION LIBRE, PSAL.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Abstinencia sexual mínimo de 3 días, no haber realizado
                      ejercicio físico3 días antes del examen.
                      <p className="pt-1">
                        Si le realizaron tacto rectal, masaje prostático,
                        colonoscopia debe haber transcurrido mínimo 8 días
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/*PERFIL REUMÁTICO*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M8,14A3,3 0 0,1 5,17A3,3 0 0,1 2,14C2,13.23 2.29,12.53 2.76,12C2.29,11.47 2,10.77 2,10A3,3 0 0,1 5,7A3,3 0 0,1 8,10C9.33,10.08 10.67,10.17 12,10.17C13.33,10.17 14.67,10.08 16,10A3,3 0 0,1 19,7A3,3 0 0,1 22,10C22,10.77 21.71,11.47 21.24,12C21.71,12.53 22,13.23 22,14A3,3 0 0,1 19,17A3,3 0 0,1 16,14C14.67,13.92 13.33,13.83 12,13.83C10.67,13.83 9.33,13.92 8,14Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  PERFIL REUMÁTICO
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido6}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido6 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido6 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">1. ANTIESTREPTOLISINA O</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>ASTO,
                      ASO, ASTOS.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La antiestreptolisina o es un anticuerpo en respuesta al
                      antígeno bacteriano de naturaleza enzimática eliminado por
                      el estreptococo beta hemolítico del grupo A, al medio
                      extracelular durante los procesos infecciosos, que tienen
                      la capacidad de desarrollar serias complicaciones no
                      purulentas como fiebre reumática y glomerulonefritis,
                      posterior a un período de latencia, durante el cual el
                      paciente es asintomático y tiene duración entre 10 y 20
                      días.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">2. PCR CUANTITATIVA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>PCR,
                      CRP.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La pcr es usada como indicio de inflamación, es un
                      reactante de la fase aguda, se incrementa a las 6 horas y
                      llega a un máximo a las 48, además de un fallo hepático
                      hay pocos factores que modifiquen sus niveles de
                      producción. Es útil para determinar la efectividad de un
                      tratamiento.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      3. FACTOR REUMATOIDEO
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>RF,
                      RHF, RA TEST, AR.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas, preferiblemente.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Niveles elevados de fr están asociados con mayor
                      probabilidad de enfermedad articular destructiva, en
                      pacientes con artritis reumatoidea, algunos casos de lupus
                      eritematoso generalizado, esclerodermia, dermatomiositis y
                      otras enfermedades de infección crónica como rubeola,
                      lepra y malaria que indican la aparición de actividad
                      autoinmune y en algunos individuos normales.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      4. ANTICUERPOS ANTINUCLEARES
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>ANAS,
                      ANAS POR IFI, anti-nucleares patrón y titulo.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>5
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                      <p className="pt-1">
                        Al obtener un resultado positivo en el primer montaje la
                        cuantificación se realiza en el próximo día de
                        procesamiento asignado para esta prueba.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Los antinucleares, anticuerpos (ANAS) son autoanticuerpos
                      que tienen como blanco el contenido del núcleo celular.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">5. ANTICUERPOS SM</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>ANTI
                      SM, ANTI SMITH, ENAS.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Criterio diagnóstico para lupus eritematoso sistémico.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      6. ANTICUERPOS LA/SSB
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>Anti
                      LA, anti SSB, enas, anticuerpos nucleares extractables.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día, Los resultados se entregan únicamente los viernes.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Presente en pacientes con lupus, pacientes con síndrome de
                      Sjögreny lupus neonatal.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      7. ANTICUERPOS RO/SSA
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>ANTI
                      RO, ANTI SSA, ENAS.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día, Los resultados se entregan únicamente los viernes.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Presente en pacientes con lupus, pacientes con síndrome de
                      sjogren (70 – 100%) y lupus neonatal.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">8. ANTICUERPOS RNP</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>ANTI
                      RNP, RNP ANTICUERPOS, ENAS.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día, solamente se entrega los días viernes.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Presente en enfermedades autoinmunes.
                      <p className="pt-1">
                        Títulos altos correlacionan con enfermedad mixta del
                        tejido conectivo.
                      </p>
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">9. ANTI DNA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>DNA
                      nativo de doble cadena, anticuerpos anti DNA.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Los anticuerpos contra adn de doble cadena es el método
                      más utilizado para detectar su presencia es la
                      inmunofluorescencia indirecta sobre el hemoflagelado
                      chritidia luciliae (ifi), con una especificidad de
                      99-100%.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      10. ANTICUERPOS CÍCLICOS CITRULINADOS
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Citrulina, Anti CCP, antipeptidos cíclicos citrulinados
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>5
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere ayuno estricto, es recomendado.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El anticuerpo antipéptido cíclico citrulinado (anti-ccp),
                      presenta especificidad del 99.6% y se encuentra en
                      pacientes con artritis reumatoidea temprana, antes de la
                      positivización del factor reumatoideo (fr); generalmente 2
                      años antes de la aparición de los síntomas clínicos.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      11. ERITROSEDIMENTACIÓN
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>VSG,
                      velocidad de sedimentacion globular.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La velocidad de sedimentación globular es la precipitación
                      de los eritrocitos (glóbulos rojos) en un tiempo
                      determinado, que se relaciona directamente con la
                      tendencia de los glóbulos rojos hacia la formación de
                      acúmulos (pilas de monedas) así como a la concentración
                      plasmática de proteínas (globulinas y fibrinógeno).
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">12. ÁCIDO ÚRICO</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>AU,
                      URICEMIA, URATO.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El ácido úrico es el producto final del metabolismo de las
                      purinas, su fuente principal es la ingesta de
                      nucleoproteínas en la dieta consistente en carne roja,
                      mariscos, sardinas, anchoas, vísceras y bebidas
                      alcohólicas.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/*PRUEBAS DE ALERGIAS*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M19.75 5.33A1.25 1.25 0 0 0 18.5 6.58V11.17H17.67V4.08A1.25 1.25 0 0 0 15.17 4.08V11.17H14.33V3.25A1.25 1.25 0 1 0 11.83 3.25V11.17H11V5.33A1.25 1.25 0 0 0 8.5 5.33V15.26L4.91 13.26A1 1 0 0 0 4.41 13.12A1 1 0 0 0 3.75 13.37L2.67 14.37L9.21 21A3.29 3.29 0 0 0 11.58 22H17.67A3.33 3.33 0 0 0 21 18.67V6.58A1.25 1.25 0 0 0 19.75 5.33M11 15A1 1 0 1 1 12 14A1 1 0 0 1 11 15M13 18A1 1 0 1 1 14 17A1 1 0 0 1 13 18M18 16A1 1 0 1 1 19 15A1 1 0 0 1 18 16M17 19A1 1 0 1 1 18 18A1 1 0 0 1 17 19M15 15A1 1 0 1 1 16 14A1 1 0 0 1 15 15Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  PRUEBAS DE ALERGIAS
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido7}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido7 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido7 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">1. CUADRO HEMÁTICO</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Hemograma, CH, hemoleucograma, HLG, hemograma + FD, CBC,
                      hemograma tipo IV.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El hemograma es una prueba que sirve para orientar hacia
                      el diagnóstico de diversas enfermedades que se han
                      sospechado por la historia clínica y la exploración
                      física.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">2. INMUNOGLOBULINA E</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>IGE,
                      IGE SERICA, niveles de IGE, IGE total.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La inmunoglobulina e (ige) está firmemente ligada a los
                      mastocitos y sólo se halla libre en suero en cantidades
                      pequeñas.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">3. INMUNOGLOBULINA A</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>IGA.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Diagnóstico de metabolismo anormal de proteínas y de la
                      incapacidad del cuerpo para resistir agentes infecciosos.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">4. INMUNOGLOBULINA G</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>IGG.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Diagnóstico de enfermedades autoinmunes, sarcoidosis,
                      enfermedad hepática crónica, infecciones crónicas
                      recurrentes, enfermedades malignas linfoides, mieloma
                      múltiple e inmunodeficiencias graves combinadas y
                      variables.
                    </div>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">5. INMUNOGLOBULINA M</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>IGM.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Evaluación de inmunidad humoral; diagnóstico y monitoreo
                      de terapia en casos de macroglobulinemia de waldenstrom o
                      mieloma de células plasmáticas.
                      <p className="pt-1">
                        Evaluar posibilidad de infecciones en útero y su
                        agudeza.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/*PRUEBAS DE TIROIDE*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M10,3L8,5V7H5C3.85,7 3.12,8 3,9L2,19C1.88,20 2.54,21 4,21H20C21.46,21 22.12,20 22,19L21,9C20.88,8 20.06,7 19,7H16V5L14,3H10M10,5H14V7H10V5M11,10H13V13H16V15H13V18H11V15H8V13H11V10Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  PRUEBAS DE TIROIDE
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido8}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido8 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido8 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">1. TSH ULTRASENSIBLE</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>TSH,
                      hormona estimulante de tiroides, tirotropina.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente sin haber realizado ejercicio o actividad física.
                      <p className="pt-1">
                        Si se encuentra en tratamiento para la tiroides la
                        suspensión o no del tratamiento es solo criterio médico.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La hormona estimulante del tiroides, o tirotropina, es una
                      glucoproteína con dos subunidades unidas de forma no
                      covalente.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">2. T4 LIBRE</p>
                    <p className="pt-3">
                      <span className="font-bold">Cups: </span>90.4.9.21
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>T4L,
                      tiroxina libre, T4 fracción libre, hormonas tiroideas
                      libres.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere estricto ayuno, solo es recomendado.
                      <p className="pt-1">
                        Si se encuentra en tratamiento para la tiroides no
                        tomarse el medicamento antes de la toma de la muestra.
                      </p>
                      <p className="pt-1">
                        Informar el consumo de fármaco antiepiléptico fenitoína,
                        dado que este puede interferir en los niveles de T4
                        libre.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Evalúa función tiroidea independientemente del estado de
                      fijación a proteínas.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">3. T3 TOTAL</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>T3T,
                      triyodotironina total.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere estricto ayuno, solo es recomendable.
                      <p className="pt-1">
                        Si se encuentra en tratamiento para la tiroides no
                        tomarse el medicamento antes de la toma de la muestra.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Evalúa función tiroidea, particularmente útil en el
                      diagnóstico de tirotoxicosis y confirmación de
                      hipertiroidismo necesario en pacientes con evidencia
                      clínica de hipertiroidismo, en quienes el perfil tiroideo
                      es normal o limítrofe.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">4. T4 TOTAL</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>T4,
                      T4T, tiroxina total.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere estricto ayuno, solo es recomendable.
                      <p className="pt-1">
                        Si se encuentra en tratamiento para la tiroides no
                        tomarse el medicamento antes de la toma de la muestra.
                      </p>
                      <p className="pt-1">
                        Informar el consumo de fármaco antiepiléptico fenitoína,
                        dado que este puede interferir en los niveles de T4.
                      </p>
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Evalúa la función tiroidea, independientemente del estado
                      de fijación de la proteína. La tiroxina (3, 5, 3’,
                      5’-l-tetrayodotironina, t4) es una hormona sintetizada y
                      secretada por el tiroides que desempeña un papel
                      importante en la regulación del metabolismo.
                    </div>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">5. T3 LIBRE</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>T3L,
                      triyodotironina libre, T3F.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere estricto ayuno, solo es recomendable.
                      <p className="pt-1">
                        Si se encuentra en tratamiento para la tiroides no
                        tomarse el medicamento antes de la toma de la muestra.
                      </p>
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Evalúa función tiroidea y estado de fijación de proteínas.
                    </div>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">6. TIROGLOBULINA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Marcador de Ca de tiroides, TG,TGB
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>8
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Es un marcador utilizado para detectar recidiva de cáncer
                      diferenciado de tiroides (cdt), tratado con tiroidectomía
                      total y radioyodo.
                      <p className="pt-1">
                        Esto se debe a que el tejido tiroideo ya sea normal o
                        neoplásico, es el único capaz de sintetizar y secretar
                        tiroglobulina. Si la tiroidectomía total es exitosa y
                        además se completó la eliminación de todo remanente
                        tiroideo con dosis ablasivas de radioyodo, la
                        concentración de tiroglobulina debe ser indetectable.
                        Concentraciones elevadas de tiroglobulina sugieren
                        recidiva tumoral.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">7. PARATOHORMONA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>PTH,
                      PTHI, hormona paratiriodea, paratohormona molecula
                      intacta, <span className="font-bold">paratina</span>.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La paratohormona, también denominada hormona paratiroidea,
                      pth o paratirina, es una hormona proteica secretada por la
                      glándula paratiroides que interviene en la regulación del
                      metabolismo del calcio y del fósforo regula la
                      concentración de iones calcio en el líquido extracelular,
                      aumentando la resorción ósea y estimulando a los
                      osteoclastos para degradar el hueso, lo que libera más
                      calcio al torrente sanguíneo.
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/*CUADRO HEMÁTICO*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  CUADRO HEMÁTICO
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido9}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido9 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido9 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">1. CUADRO HEMÁTICO</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Hemograma, CH, hemoleucograma, HLG, hemograma + FD, CBC,
                      Hemograma tipo IV.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No tiene condiciones previas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El hemograma es una prueba que sirve para orientar hacia
                      el diagnóstico de diversas enfermedades que se han
                      sospechado por la historia clínica y la exploración
                      física.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">2. UROANÁLISIS</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Parcial de orina, PO, orina citoquímico, examen de orina,
                      sedimento o densidad urinario.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Recoger la primera orina de la mañana, a partir de la
                      segunda parte de la micción (chorro medio).
                      <p className="pt-1">
                        Realizar aseo genital previo a la recolección de la
                        muestra con agua y jabón.
                      </p>
                      <p className="pt-1">
                        No tener el periodo menstrual y no tener relaciones
                        sexuales el día previo y el día de recolección de la
                        muestra.
                      </p>
                      <p className="pt-1">
                        Para recolección de muestras pediátricas, pedir al
                        laboratorio la bolsa recolectora pediátrica, lavar los
                        genitales con abundante agua y jabón, se recomienda no
                        aplicar crema antipañalitis la noche anterior.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Proporciona información temprana sobre la integridad
                      anatómica del riñón, la existencia y grado del daño renal.
                      detecta alteraciones de las vías urinarias, y evidencia la
                      existencia de problemas metabólicos de índole general,
                      detectables por la eliminación aumentada, disminuida o
                      anormal de metabolitos en la orina.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">3. VIH</p>
                    <p className="pt-3">
                      <span className="font-bold">Cups: </span>90.6.2.49
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>VIH,
                      prueba de elisa, prueba de cuarta generacion para HIV.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      El paciente debe presentarse al laboratorio con documento
                      de identidad con foto original.
                      <p className="pt-1">
                        La entrega de resultados es personal con documento de
                        identificación con foto original.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El virus de la inmunodeficiencia humana (vih) es un
                      retrovirus trasmitido principalmente por vía sexual,
                      parenteral, perinatal y trasplacentaria.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">4. VDRL</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>VDRL,
                      RPR, sífilis.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Tamizaje para sífilis; útil para la valoración de eficacia
                      del tratamiento.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      5. GRUPO SANGUÍNEO Y RH
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>Grupo
                      sanguíneo, ABO, Rh, Clasificación sanguínea.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Determinar grupo sanguíneo y factor Rh de un individuo.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">6. Glicemia</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Glucosa, glicemia basal, glicemia A, Glusemia.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Ayuno mínimo de 8 horas, máximo de 12 horas. Si es un niño
                      menor de 2 años, el ayuno debe ser mínimo de 4 horas.
                      <p className="pt-1">
                        No ingerir bebidas alcohólicas 3 días antes, no realizar
                        ejercicio físico el día de la toma de la muestra.
                      </p>
                      <p className="pt-1">
                        No tomar ni aplicar el medicamento para la diabetes
                        antes de la tomarse la muestra.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La glucosa es la concentración de azúcar en sangre por
                      ingesta de carbohidratos, es convertida en glucógeno por
                      el hígado para almacenamiento y las hormonas insulina y
                      glucagón regulan sus niveles. El glucagón acelera la
                      glucogénesis elevando los niveles sanguíneos de glucosa.
                      La insulina aumenta la permeabilidad celular a la glucosa,
                      y la transporta hacia el interior de las células para su
                      conversión en energía; también, estimula la formación de
                      glucógeno y disminuye los niveles sanguíneos de glucosa.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      7. Hemoglobina glicosilada
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      HBA1C, HBA1, hemoglobina glicada.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Suministra un estimativo del buen manejo de la diabetes a
                      través del tiempo, al estar correlacionada con niveles de
                      hiperglicemia a mediano y largo plazo.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">8. Nitrógeno ureico</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>BUN.
                      NU, azoados, uremia.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El nitrógeno ureico (bun) es el principal producto
                      nitrogenado del catabolismo de las proteínas y sólo se
                      sintetiza en el hígado.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">9. Creatinina</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>CREA,
                      creatinina en sangre, creatinina serica, azoados.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere ayuno, es importante que no haya realizado
                      ejercicio 24 horas previo a la toma de la muestra.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La creatinina se sintetiza en los músculos a partir de la
                      creatina hidrolizada por acción del fostato de creatina,
                      como resultado del proceso de contracción muscular. Es
                      excretada principalmente por los riñones y una pequeña
                      parte con las heces, la eliminación depende de la masa
                      muscular y de la función renal.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">10. Toxoplasma IgG</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>Toxo
                      G, anticuerpos contra toxoplasma, Torch IgG, toxoplasma
                      anticuerpos IgG, toxoplasma gondii IgG.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La toxoplasmosis es una enfermedad infecciosa ocasionada
                      por un parásito llamado toxoplasma gondii. La
                      toxoplasmosis puede causar infecciones leves y
                      asintomáticas en individuos sanos, así como infecciones
                      mortales durante el embarazo que afectan principalmente al
                      feto, ocasionando la llamada toxoplasmosis congénita.
                      También puede ser grave cuando afecta al recién nacido,
                      ancianos y personas con inmunodeficiencia grave.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">11. Toxoplasma IGM</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>Toxo
                      IgM, Toxo M, Anticuerpos IgM contra Toxoplasma, TORCH IgM.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La toxoplasmosis es una enfermedad infecciosa ocasionada
                      por un parásito llamado toxoplasma gondii.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">12. Rubeola IgG</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Rubeola G, anticuerpos contra rubeola, torch IGG.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La rubeola es una enfermedad vírica que generalmente
                      afecta a los niños; se caracteriza por una erupción en la
                      piel, la inflamación de las glándulas y especialmente en
                      los adultos dolores en las articulaciones.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">13. Rubeola IGM</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Rubeola anticuerpos IGM, torch IGM, rubeola M.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La rubeola es una enfermedad vírica que generalmente
                      afecta a los niños; se caracteriza por una erupción en la
                      piel, la inflamación de las glándulas y especialmente en
                      los adultos dolores en las articulaciones. Por lo general
                      la erupción en la piel dura unos tres días y puede
                      presentarse acompañada de una ligera fiebre.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      14. Citomegalovirus IgG
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>Cito
                      G, torch IgG, anticuerpos IgG contra citomegalovirus,
                      CMVIgG.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El citomegalovirus (cmv) es un virus adn que pertenece a
                      la familia herpetoviridae, ocasiona infecciones endémicas
                      especialmente en bebés y niños de forma congénita, con
                      menor frecuencia en adultos y mujeres embarazadas.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      15. Citomegalovirus IGM
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>Cito
                      IgM, CMVIgM, Anticuerpos IgM contra citomegalovirus, torch
                      IgM.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El citomegalovirus (cmv) es un virus adn que pertenece a
                      la familia herpetoviridae, ocasiona infecciones endémicas
                      especialmente en bebés y niños de forma congénita, con
                      menor frecuencia en adultos y mujeres embarazadas.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">16. Herpes II IgG</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Herpes simple tipo II IgG, HVS II IgG, torch IgG.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>5
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El herpes simplex tipo II es un virus perteneciente a la
                      familia herpes viridae. Se caracterizan por su facilidad
                      para transmitirse de persona a persona y recurrencia
                      crónica. Es la causa más frecuente de úlcera genital;
                      dentro de las complicaciones más importantes de esta
                      virosis se encuentra la meningitis linfocitaria y el
                      herpes neonatal, generalmente transmitido por la madre en
                      el parto
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">17. Herpes II IGM</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Herpes tipo II IgM, HVS II IgM, herpes simple IgM.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>5
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El herpes simplex tipo ii es un virus perteneciente a la
                      familia herpesviridae. Se caracterizan por su facilidad
                      para transmitirse de persona a persona y recurrencia
                      crónica. Es la causa más frecuente de úlcera genital;
                      dentro de las complicaciones más importantes de esta
                      virosis se encuentra la meningitis linfocitaria y el
                      herpes neonatal, generalmente transmitido por la madre en
                      el parto.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      18. Hepatitis B antígeno de superficie
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Hepatitis B ags, Hepatitis B antígeno de
                      superficie,HVBAGS.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El antígeno de superficie de la hepatitis b (hbsag), es
                      uno de los antígenos que integran el virus de la hepatitis
                      b, por su aparición temprana es considerado el primer
                      marcador inmunológico de la enfermedad.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      19. Maternit 21 plus (Opcional según el caso)
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Prueba prenatal no invasiva.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>10
                      días.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Paciente en ayunas, a partir de la 9 semanas de gestación
                      cumplidas.
                      <p className="pt-1">
                        Presentarse en el laboratorio de LUNES a MIÉRCOLES antes
                        de 9 am.
                      </p>
                      <p className="pt-1">
                        Suministrar el nombre del médico al cual se le van a
                        enviar directamente los resultados.
                      </p>
                    </div>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      Detección de trisomías 13-16-18-21-22 además del síndrome
                      de di george, cri-du-chat, angelman, prader-willi,
                      microdelecion 1p36 y determinación del sexo fetal, basada
                      en el secuenciamiento del dna fetal presente en la sangre
                      materna, por medio de prueba prenatal no invasiva.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/*SEGUIMIENTO HORMONAL FEMENINO*/}
            <div className="bg-[#2e569b] rounded-tl-[2rem] rounded-br-[2rem] w-full lg:w-[1000px]">
              <div className="p-2 flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce]">
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    role="presentation"
                  >
                    <path
                      d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z"
                      style={{ fill: "#ffffff" }}
                    ></path>
                  </svg>
                </div>
                <h2 className="text-center uppercase text-white text-[14px] md:text-2x1 md:font-bold">
                  SEGUIMIENTO HORMONAL FEMENINO
                </h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#88a4ce] text-white"
                  type="button"
                  onClick={handleMostrarContenido10}
                >
                  <label className="bold-16">
                    <p className="font-bold text-[30px]">
                      {mostrarContenido10 ? "-" : "+"}
                    </p>
                  </label>
                </button>
              </div>
              {mostrarContenido10 && (
                <div className="p-5 text-white">
                  <div>
                    <p className="pl-8 font-bold">
                      1. HORMONA FOLÍCULO ESTIMULANTE
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>FSH.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Se debe seguir las recomendaciones médicas si las hay, si
                      no se puede tomar bajo cualquier circunstancia.
                    </p>
                    <div className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La hormona foliculoestimulante (fsh) es una hormona
                      glucoproteica con dos subunidades.
                      <p className="pt-1">
                        La subunidad alfa es similar a las de la hormona
                        luteinizante (lh), la gonadotropina coriónica humana
                        (hcg) y la tirotropina (tsh).
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      2. HORMONA LUTEINIZANTE
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>LH
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones salvo que haya indicaciones
                      médicas.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La hormona luteinizante (también conocida como lutropina y
                      abreviada como lh) es una hormona gonadotropina producida
                      por la glándula pituitaria anterior. Los niveles normales
                      de lh son bajos durante la infancia. Tanto en los hombres
                      como en las mujeres, la lh es una hormona esencial para la
                      reproducción. En las mujeres en el momento de la
                      menstruación, la hormona estimulante del folículo (fsh)
                      inicia el crecimiento folicular, que afecta
                      específicamente a las células granulosas.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">3. PROGESTERONA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>PGN,
                      PGR, PRG, P4.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      No requiere condiciones especiales, solo en los casos que
                      el médico ordene alguna condición o fecha específica del
                      ciclo.
                      <p className="pt-1">
                        La muestra puede ser tomada a cualquier hora del día.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La progesterona, en combinación con los estrógenos, regula
                      las funciones del aparato reproductor durante el ciclo
                      menstrual. La progesterona es fundamental para preparar el
                      endometrio para la implantación del blastocisto y para el
                      mantenimiento de la gestación. Las fuentes más importantes
                      de progesterona son el cuerpo lúteo y la placenta en la
                      mujer. La corteza suprarrenal en el varón y la mujer y los
                      testículos en el varón son fuentes secundarias de
                      progesterona.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">4. PROLACTINA</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>PRL,
                      prolactina basal, luteotropina.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Es indispensable que el paciente haya dormido toda la
                      noche, no haber trasnochado.
                      <p className="pt-1">
                        La primera muestra debe tomarse mínimo 2 horas después
                        de haberse levantado (El paciente se levanta de la cama
                        y no vuelve a acostarse) y máximo 4 horas después de
                        levantarse, máximo hasta las 10:00 a.m.
                      </p>
                      <p className="pt-1">
                        No se debe haber realizado ejercicio o actividad física,
                        no haber tenido relaciones sexuales ni manipulación de
                        los senos la noche anterior ni el día de la toma de la
                        muestra.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La prolactina es una hormona polipeptídica monocatenaria
                      secretada por la hipófisis anterior bajo el control de los
                      factores de inhibición y de liberación de la prolactina.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">5. ESTRADIOL</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      E2,estrogenos,estiradiol 17 beta.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Requisitos Paciente: </span>No
                      requiere condiciones especiales.
                      <p className="pt-1">
                        Se recomienda realizar la toma de la muestra en horas de
                        la mañana, antes de las 10:00 a.m. informar fecha de
                        última menstruación.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El estradiol (e2) es la forma más importante de estrógeno,
                      la mayor parte es sintetizada y secretado por ovarios,
                      corteza suprarrenal y placenta, la cual se forma durante
                      el embarazo para alimentar el embrión en desarrollo. Es
                      responsable del crecimiento del útero, trompas de falopio,
                      vagina, mamas y órganos genitales externos, en las
                      mujeres.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">
                      6. CITOLOGIA DE CAPA FINA
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      Estudio de coloración básica en citología de líquido.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>5
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Abstinencia sexual mínimo de 3 días, no aplicar óvulos,
                      cremas o duchas vaginales, no tener el periodo menstrual
                      (3 días antes o 3 días después del periodo), previo aseo
                      de la zona genital.
                      <p className="pt-1">
                        No tomar ni aplicar el medicamento para la diabetes
                        antes de la tomarse la muestra.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      La citología vaginal consiste en la toma de muestra de las
                      células epiteliales que recubren el cuello del útero, para
                      su posterior estudio al microscopio, con el propósito de
                      observar precozmente cambios en la forma de las células
                      que permita el diagnóstico oportuno de displasia,
                      impidiendo el carcinoma invasor.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">7. VPH</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>Test
                      de vph, adn para virus de papiloma, virus de papiloma
                      humano por reacción en cadena de polimerasa.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>5
                      días.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Obligatorio presentar documento de identidad.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      El virus del papiloma humano o vph (en inglés hpv), es un
                      virus adn que pertenece a la familia papillomaviridae,
                      ocasiona una enfermedad de transmisión sexual generalmente
                      asintomática sin embargo, algunos tipos de vph causan
                      verrugas o condilomas e infecciones subclínicas, que
                      pueden progresar a cáncer.
                    </p>
                  </div>
                  <div>
                    <p className="pl-8 pt-10 font-bold">8. CORTISOL</p>
                    <p className="pt-3">
                      <span className="font-bold">Nombres alternos: </span>
                      CORTISOL AM, CORTISOL PLASMATICO.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">Tiempo de entrega: </span>1
                      día.
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Preparación del paciente:{" "}
                      </span>
                      Para la realización del examen es indispensable que el
                      paciente haya dormido toda la noche, y se presente en el
                      laboratorio antes de 8:00 am, para que la toma de muestra
                      se realice a las 8: 00 am sin excepción.
                      <p className="pt-1">
                        El consumo de corticoides solo se suspende por orden
                        médica. Paciente en ayunas.
                      </p>
                    </p>
                    <p className="pt-3">
                      <span className="font-bold">
                        Por qué realizar este examen:{" "}
                      </span>
                      <p className="pt-1">Ayuda al cuerpo a:</p>
                      <p className="pt-1">
                        Responder al estrés (a veces al cortisol se le llama la
                        “hormona del estrés”).
                      </p>
                      <p className="pt-1">Reducir la inflamación.</p>
                      <p className="pt-1">
                        Regular el nivel de azúcar en la sangre y el
                        metabolismos (cómo el cuerpo utiliza la comida para
                        obtener energía).
                      </p>
                      <p className="pt-1">Controlar la presión arterial.</p>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Paquetes;
