import { React } from "react";
import { useForm } from "react-hook-form";
import "./Formulario.css";

const Formulario = ({ title, setFilters }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFilters(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
        <div className="contTitulo">
          <h1>{title}</h1>
        </div>
        <label>Marca</label>
        <select
          name="select"
          id="selectBrand"
          className="register"
          {...register("brand")}
        >
          <option value="">Todas las marcas</option>
          <option value="seat">seat</option>
          <option value="audi">audi</option>
          <option value="volkswagen">volkswagen</option>
          <option value="porsche">porsche</option>
          <option value="bmw">bmw</option>
        </select>

        <br />

        <label>Color</label>
        <select
          name="select"
          id="selectColor"
          className="register"
          {...register("color")}
        >
          <option value="">Todos los colores</option>
          <option value="blue">azul</option>
          <option value="red">rojo</option>
          <option value="yellow">amarillo</option>
          <option value="black">negro</option>
        </select>

        <br />

        <label>Precio máximo</label>
        <input
          type="number"
          name="price"
          id="inputPrice"
          className="register"
          placeholder="Insert Price"
          {...register("price")}
        />

        <br />
        <input id="button" type="submit" value="Buscar" />
      </form>
    </>
  );
};

export default Formulario;
