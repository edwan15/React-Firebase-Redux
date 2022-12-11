import React from "react";
import Comercio from "../../asset/Comercio.png";
import {FaFileSignature} from "react-icons/fa"
import Fire from "../../asset/firebase.webp"
const About = () => {
  return (
    <div className=" mx-auto md:mt-32  ">
      <div className=" p-2  md:grid grid-cols-2 gap-2">
        <div className=" p-4 ">
          <div className="">
            <h1 className=" text-5xl md:text-7xl font-bold text-blue-900 mb-8">
              Contruyendo un Mundo Mejor
            </h1>
            <div className="md:grid grid-cols-2">
              <div className="flex items-center text-xl justify-center">
                <p>
                  Esta Aplicacion representa productos dentro de un estado
                  global para ella utilizare Redux , y tambien aplicar
                  autenticacion por medio de firebase
                </p>
              </div>

              <div className="flex items-center">
                <img
                  src={Comercio}
                  alt="Comercio"
                  className="object-contain rounded-md"
                />
              </div>
              <button className="p-1 px-2 rounded-md bg-boton col-span-2 mt-8">
                Leer Mas ...
              </button>
            </div>
          </div>
        </div>
        <div className=" p-4 flex justify-center items-center">
          <iframe
            className="aspect-video w-full hover:aspect-square"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QEsukdXFxxs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="p-4 py-16">
        <h1 className="text-5xl text-blue-900 font-bold">
          Acerca de RUDUX y FIREBASE
        </h1>
        <p className="mt-10 text-xl">
          Redux es una herramienta para la gestión de estado en apps Javascript
          , lo cierto es que es una librería framework que merece ser estudiada
          aunque no vayas a trabajar con React , En esta Ocacion estare
          utilizando Redux-ToolKit para manejar El estado global y mostrar en un
          carrito de compras ...
        </p>
        <a
          without
          rel="noreferrer"
          target="_blank"
          href="https://redux-toolkit.js.org/tutorials/quick-start"
          className="mt-5  max-w-[180px] text-xl text-blue-500 flex gap-3"
        >
          {" "}
          Documentacion <FaFileSignature /> ...
        </a>

        <div className="mt-8 grid  grid-cols-3">
          <div className="col-span-2 text-xl">
            {" "}
            <h1 className="mb-5">
              FIREBASE de Google es una plataforma en la nube para el desarrollo
              de aplicaciones web y móvil. Está disponible para distintas
              plataformas (iOS, Android y web), con lo que es más rápido
              trabajar en el desarrollo.
            </h1>
            <a
              without
              rel="noreferrer"
              href="https://firebase.google.com/?gclid=Cj0KCQiAm5ycBhCXARIsAPldzoW9bY3cID2Y-qhVYWPhdai3UD1LV17RWhLkRet8p6P_AR0Omu2wisEaAnnQEALw_wcB&gclsrc=aw.ds"
              target="_blank"
              className="mt-5  max-w-[180px] text-xl text-blue-500 flex gap-3 "
            >
              Documentacion <FaFileSignature /> ...
            </a>
          </div>
          <div>
            <img src={Fire} alt="fire" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
