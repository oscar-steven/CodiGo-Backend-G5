import { preferences } from "mercadopago";

export class PagoService {
  static async generarPreferenciaDePago() {
    try {
      // https://www.mercadopago.com.pe/developers/es/reference/preferences/_checkout_preferences/post
      preferences.create({
        payer: {
          name: "Oscar", // obligatorio
          surname: "Perez", //  obligatorio
          address: {
            zip_code: "04002",
            street_name: "Calle Los Platanitos 123",
            street_number: "123",
          },
          email: "ophuaman@gmail.com",
          identification: {
            type: "DNI",
            number: "48074339",
          },
        },
        items: [
          {
            id: "1234",
            title: "zapatillas de running",
            quantity: 1,
            unit_price: 115.0,
            currency_id: "PEN",
          },
        ],
        auto_return: "approved",
      });
    } catch (error) {
      console.log(error);
    }
  }
}
