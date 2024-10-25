import { registerFormSchema } from "@/libs/validations/zod";
import zod from "zod";

export type TRegisterForm = zod.infer<typeof registerFormSchema>;
