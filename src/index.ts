import { app } from "./App.config";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Conectado a API na porta ${port}`);
});
