import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const CheckoutHook = () => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const finalizarCompra = (data) => {
    setLoading(true);
    let order = {
      comprador: {
        name: data.name,
        lastname: data.lastname,
        address: data.address,
        email: data.email,
      },
      compras: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    const ventas = collection(db, "orders");
    //agregar un doc
    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id);
        cart.forEach((element) => {
          const prod = doc(db, "products", element.id);
          let nuevo_stock = element.stock - element.cantidad;
          if (nuevo_stock < 0) {
            //en caso de que justo 2 personas esten haciendo la misma compra y se agote el stock
            Swal.fire({
              title: "Stock insuficiente",
              text: "No hay stock suficiente para completar la compra",
              icon: "error",
            });
            return;
          }
          updateDoc(prod, {
            stock: nuevo_stock,
          });
        });
        clearCart();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : orderId ? (
        <div className="center-column mt-2">
          <h1>Realizaste la compra correctamente! 🥳 🙌🏼</h1>
          <h2>Tu número de orden es: {orderId}</h2>
          <a className="btn btn-error mt-2" href="/">
            Volver al inicio
          </a>
        </div>
      ) : cart.length === 0 ? (
        <div className="center-column mt-2">
          <h1>No hay productos en el carrito</h1>
          <Link to="/" className="btn mt-2">
            Volver al inicio
          </Link>
        </div>
      ) : (
        <div className="center-column mt-2">
          <h1>Complete sus datos</h1>
          <form
            onSubmit={handleSubmit(finalizarCompra)}
            style={{ width: "60%" }}
          >
            <FormField
              label="Nombre"
              name="name"
              placeholder="Ingrese su nombre"
              register={register}
              validation={{ required: true, minLength: 3 }}
              errors={errors}
              errorMessages={{
                required: "Por favor complete este campo",
                minLength:
                  "El campo nombre debe contener 3 caracteres como mínimo",
              }}
            />

            <FormField
              label="Apellido"
              name="lastname"
              placeholder="Ingrese su apellido"
              register={register}
              validation={{ required: true, minLength: 2 }}
              errors={errors}
              errorMessages={{
                required: "Por favor complete este campo",
                minLength:
                  "El campo apellido debe contener 2 caracteres como mínimo",
              }}
            />

            <FormField
              label="Dirección"
              name="address"
              placeholder="Ingrese su dirección"
              register={register}
              validation={{ required: true, minLength: 10, maxLength: 35 }}
              errors={errors}
              errorMessages={{
                required: "Por favor complete este campo",
                minLength:
                  "El campo dirección debe contener 10 caracteres como mínimo",
                maxLength: "El campo dirección es demasiado largo",
              }}
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="Ingrese su correo"
              register={register}
              validation={{ required: true }}
              errors={errors}
              errorMessages={{
                required: "Por favor complete este campo",
              }}
            />

            <FormField
              label="Confirmar mail"
              name="secondemail"
              type="email"
              placeholder="Repita su correo"
              register={register}
              validation={{
                required: true,
                validate: {
                  equalsMails: (mail2) => mail2 === getValues().email,
                },
              }}
              errors={errors}
              errorMessages={{
                required: "Por favor complete este campo",
                equalsMails: "Los mails deben ser iguales",
              }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn btn-success"
                type="submit"
                disabled={!cart.length}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default CheckoutHook;
