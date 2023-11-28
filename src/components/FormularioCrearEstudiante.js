import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import { crearEstudiantes_POST_ENDPOINT } from "../connections/helpers/endpoinst";

const FormularioCrearEstudiante = ({}) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");

    const estudianteDatos = {
      identicationCard: data.identificationCard,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: "1234567",
      phone: data.phone,
      rolId: 2,
      genderId: parseInt(data.gender, 10),
    };

    try {
      // Realizar la solicitud POST con el JSON construido
      const response = await fetch(crearEstudiantes_POST_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(estudianteDatos),
      });

      if (response.ok) {
        console.log("estudiante guardado con éxito.");
        const responseData = await response.json();
        navigate("/dashboard")
      } else {
        console.error("Error al guardar el estudiante:", await response.json());
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-10 mb-10">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 space-y-4">
        <div>
          <label className="block">identificacion</label>
          <input
            {...register("identificationCard", { required: true, min: 0 })}
            type="text"
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.identificationCard && (
            <span className="text-red-500">*Este campo es requerido</span>
          )}
        </div>
        <div>
          <label className="block">nombre</label>
          <input
            {...register("name", { required: true, min: 0 })}
            type="text"
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.name && (
            <span className="text-red-500">*Este campo es requerido</span>
          )}
        </div>
        <div>
          <label className="block">Apelllido</label>
          <input
            {...register("lastName", { required: true, min: 0 })}
            type="text"
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.lastName && (
            <span className="text-red-500">*Este campo es requerido</span>
          )}
        </div>
        <div>
          <label className="block">correo electronico</label>
          <input
            {...register("email", { required: true, min: 0 })}
            type="text"
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && (
            <span className="text-red-500">*Este campo es requerido</span>
          )}
        </div>
        <div>
          <label className="block">Telefono</label>
          <input
            {...register("phone", { required: true, min: 0 })}
            type="text"
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.phone && (
            <span className="text-red-500">*Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block">Género</label>
          <select
            {...register("gender", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="1">Hombre</option>
            <option value="2">Mujer</option>
            <option value="3">No binario</option>
            <option value="4">Género fluido</option>
            <option value="5">Otro</option>
          </select>
          {errors.gender && (
            <span className="text-red-500">*Este campo es requerido</span>
          )}
        </div>

        <div className="flex justify-center space-x-4">
          <input
            type="submit"
            value="Crear"
            className="px-4 py-2 bg-custom-button-bgColor text-white rounded-md cursor-pointer hover:bg-blue-700"
          />
          <Link to="/dashboard">
            <button className="px-4 py-2 bg-gray-600 text-white rounded-md cursor-pointer hover:bg-gray-700">
              Volver
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormularioCrearEstudiante;
