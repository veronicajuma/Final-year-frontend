import nc from "next-connect";
import { getAllMissing } from "../../../controller/missing/missing";
const handler = nc();
handler.get(getAllMissing);
export default handler;