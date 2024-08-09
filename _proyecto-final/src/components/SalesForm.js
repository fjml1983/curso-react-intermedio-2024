import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles.css";

//esquema de valiadacion usando yup
const schema = yup.object().shape({
  id: yup.number().required("ID requerdo"),
  product: yup.string().required("Product name"),
  quantity: yup.number().required("Quantity product sales"),
  price: yup.number().required("Price product"),
  date: yup.date().required("Date Sale"),
});

const SalesForm = ({ sales, setSales }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    alert("Registro exitoso");
    setSales([
      ...sales,
      {
        id: data.id,
        product: data.product,
        quantity: data.quantity,
        price: data.price,
        date: data.date.toLocaleDateString(),
      },
    ]);
  };

  return (
    <div className="form-container">
      <h2>Register New Sale 💵</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input id="id" {...register("id")} type="number" />
          {errors.id && <p className="error-message">{errors.id.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="product">Product Name</label>
          <input id="product" {...register("product")} />
          {errors.product && (
            <p className="error-message">{errors.product.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity Product</label>
          <input id="quantity" {...register("quantity")} type="number" />
          {errors.quantity && (
            <p className="error-message">{errors.quantity.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input id="price" type="number" {...register("price")} />
          {errors.price && (
            <p className="error-message">{errors.price.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date Sale</label>
          <input id="date" type="date" {...register("date")} />
          {errors.date && (
            <p className="error-message">{errors.date.message}</p>
          )}
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default SalesForm;
