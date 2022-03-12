import { loginDto } from "../dtos/request/login.dto.js";
import { AuthAdminService } from "../services/authAdmin.service.js";
export async function login(req, res) {
  try {
    const { correo, password } = loginDto(req.body);

    const result = await AuthAdminService.login({ correo, password });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "error al hacer el login",
    });
  }
}
