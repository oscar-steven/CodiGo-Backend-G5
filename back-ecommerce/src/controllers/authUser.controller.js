import { AuthUserService } from "../services/authUser.service.js";
import { loginDto, singupDto } from "../dtos/request/login.dto.js";
export async function login(req, res) {
  try {
    const { correo, password } = loginDto(req.body);

    const result = await AuthUserService.login({ correo, password });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "error al hacer el login",
    });
  }
}
export async function singup(req, res) {
  try {
    const { correo, password, nombre } = singupDto(req.body);
    console.log(correo);
    const result = await AuthUserService.singup({ correo, password, nombre });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
      message: "error al registrarse",
    });
  }
}
