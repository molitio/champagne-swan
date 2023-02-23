import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "../../generated/client";

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, secretHash } = req?.body;
  const result = register({
    data: {
      name: name,
      email: email,
      secretHash: secretHash,
    },
  });

  res.status(200).json({ result });
};

const register = async (data: {}) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: { ...data },
  });

  console.log("user", user);
  return { ...user };
};

export default registerUser;
