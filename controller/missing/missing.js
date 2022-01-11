import {executeQuery} from "../../config/dbconnect";
const getAllMissing = async (req, res) => {
    let childData = await executeQuery("select * from profile", []);
res.send(childData);
};
export {getAllMissing};