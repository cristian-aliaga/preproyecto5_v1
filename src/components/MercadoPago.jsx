import axios from "axios";
import productos from "../productos.json";

export const MercadoPago = () => {
  const FuncionComprar = async (producto) => {
    const response = await axios.post(
      "https://preproyecto5-mp.onrender.com/Mercado_Pago",
      producto
    );
      console.log(producto)
    window.location.href = response.data;
  };
  
  return (
    <div className="ContainerSuperior">
      {productos.map((e) => (
        <div className="ContainerProducto">
          <p>{e.nombre}</p>
          <p>{`$ ${e.precio}`}</p>

          <button onClick={() => FuncionComprar(e)}>Comprar</button>
        </div>
      ))}
    </div>
  );
}

export default MercadoPago;
