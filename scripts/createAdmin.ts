import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";
import logger from "../src/config/logger";
const prisma = new PrismaClient();

async function main() {
	const adminExists = await prisma.user.findFirst({
		where: { role: "ADMIN" },
	});

	if (adminExists) {
		logger.error("Admin user already exists:", adminExists.full_name);
		return;
	}

	const password = "Admin@123"; // you can change it
	const hashedPassword = await bcrypt.hash(password, 10);

	const admin = await prisma.user.create({
		data: {
			email: "admin@dam.com",
			full_name: "Admin",
			role: "ADMIN",
			password: hashedPassword,
		},
	});

	logger.info("Admin created successfully!");
	logger.info(`Email: ${admin.email}`);
	logger.info(`Password: ${password}`);
}

main()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
