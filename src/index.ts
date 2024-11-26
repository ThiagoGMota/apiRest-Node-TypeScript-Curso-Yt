import { server } from "./server/server";
const PORT:number = 3000;
server.listen(PORT, () => {console.log(`servidor online na porta ${PORT}`);
})