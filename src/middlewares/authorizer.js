import User from "../models/user-models";

export default (role) => (req, res, next) => {
  try {
    const user = User.body.role;
    if (user) {
      req.user = user;
      next();
    } else {
      throw new Error("");
    }
  } catch (error) {
    res.sendStatus(401);
  }
};

import jwt from "jsonwebtoken";
import User from "../models/user-models";

export default (requiredRole) => async (req, res, next) => {
  try {
    // Obtenção do token dos cabeçalhos de autorização
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Acesso negado, token ausente." });
    }

    // Verificação do token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Obtenção do usuário a partir do token decodificado
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado." });
    }

    // Verificação do papel do usuário
    if (user.role !== requiredRole) {
      return res.status(403).json({ message: "Acesso negado, permissões insuficientes." });
    }

    // Anexar o usuário à requisição para uso posterior
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Acesso negado, token inválido." });
  }
};

