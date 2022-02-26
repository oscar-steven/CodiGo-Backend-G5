import mercadopago from "mercadopago";
import { Cliente } from "../models/cliente.model.js";
import { Producto } from "../models/producto.model.js";

export class PagoService {
  static async generarPreferenciaDePago({ items, cliente }) {
    // https://www.mercadopago.com.pe/developers/es/reference/preferences/_checkout_preferences/post
    try {
      // buscar ese cliente
      const clienteEncontrado = await Cliente.findById(cliente);
      // buscar esos productos (items)

      // hacer la busqueda de los productos usando el .map()
      const productosEncontrados = await Promise.all(
        items.map(async ({ id, cantidad }) => {
          const productoEncontrado = await Producto.findById(id);

          return { item: productoEncontrado, cantidad };
        })
      );

      // early return fuction
      const itemsMP = productosEncontrados.map(({ item, cantidad }) => ({
        id: item._id,
        title: item.nombre,
        quantity: cantidad,
        unit_price: Number(item.precio),
        currency_id: "PEN",
      }));

      console.log(itemsMP);

      const preferencia = await mercadopago.preferences.create({
        payer: {
          name: clienteEncontrado.nombre, // obligatorio
          surname: clienteEncontrado.apellido, //  obligatorio
          address: {
            zip_code: clienteEncontrado.direccion.zip,
            street_name: clienteEncontrado.direccion.calle,
            street_number: clienteEncontrado.direccion.numero,
          },
          email: clienteEncontrado.correo,
          // identification: {
          //   type: "DNI",
          //   number: "48074339",
          // },
        },
        payment_methods: {
          default_installments: 2, // el numero de cuotas por defecto que aparecera en el formulario
          installments: 3, //maximo numero de cuotas que puede sacar un usuario con tarjeta de credito
          excluded_payment_methods: [
            {
              id: "diners",
            },
            {
              id: "debvisa",
            },
          ],
          excluded_payment_types: [
            // debit_card credit_card atm
            {
              id: "atm",
            },
          ],
        },
        items: itemsMP,
        // [
        //   {
        //     id: "1234",
        //     title: "zapatillas de running",
        //     quantity: 1,
        //     unit_price: 115.0,
        //     currency_id: "PEN",
        //   },
        // ],

        // Si la transaccion fue exitosa o pendiente de pago entonces nos redireccionara automaticamente a la pagina en cuestion
        auto_return: "approved",
        // Son las url que me llevaran al sitio si el pago fue:
        back_urls: {
          success: `${process.env.DOMINIO}/exito`,
          pending: `${process.env.DOMINIO}/pendiente`,
          failure: `${process.env.DOMINIO}/fallo`,
        },
        notification_url: `${process.env.DOMINIO}/notificaciones`,
      });
      return {
        resultado: preferencia,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error.message,
      };
    }
  }

  static recibirNotificacion(data) {
    console.log("la data es:"), console.log(data);
  }
}
