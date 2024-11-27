import { server } from "./server/server";

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`servidor online na porta ${PORT}`);
});
