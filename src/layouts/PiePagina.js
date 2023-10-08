import logofescIcontecISO from "../images/logofescIcontecISO.png";

const PiePagina = () => {
  return (
    <footer className="bg-red-600 text-white mt-8">
      <div className="flex justify-between p-4">
        <div className="w-1/6 pr-4">
          <div className="flex justify-center">
            <img src={logofescIcontecISO} alt="Logo" className="w-48" />
          </div>
        </div>
        <div className="w-1/4 pr-4 text-center border-l border-r">
          <div>
            <h2 className="font-bold">Sede Cúcuta:</h2>
            <p className="mt-4">Av 5 # 15-27, Centro.</p>
            <p>PBX 5784878 ext 101 102 103</p>
            <p>312 354 1578 / 313 386 0356</p>
          </div>
          <div className="mt-6">
            <h2 className="font-bold">Sede Ocaña:</h2>
            <p className="mt-4">Kdx 194-785,</p>
            <p> Via Universitaria</p>
            <p>313 386 1614</p>
          </div>
        </div>
        <div className="w-1/2 pr-4">
          <h2 className="font-bold">
            Fundación de Estudios Superiores de Comfanorte
          </h2>
          <p className="mt-4">
            Institución de Educación Superior de carácter Tecnológico de derecho
            privado, de utilidad común y sin ánimo de lucro, redefinida mediante
            Resolución del MEN 747 del 19 de febrero de 2009, para ofertar
            programas Técnicos, Tecnológicos, Profesionales y Especializaciones.
          </p>
          <p className="mt-4">
            Su oferta académica se desarrolla en el Departamento Norte de
            Santander, específicamente en los municipios de San José de Cúcuta y
            en la Provincia de Ocaña.
          </p>
        </div>
      </div>
      <div className="bg-red-800 p-4">
        <p className="text-center">
          © 2023 Fundación de Estudios Superiores de Comfanorte - Todos los
          derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default PiePagina;
