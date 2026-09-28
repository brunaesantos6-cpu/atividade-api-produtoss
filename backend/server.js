const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
{
nome: "mouse",
categoria: "eletrônico",
preco: 100,
imagem: "https://images.tcdn.com.br/img/img_prod/993134/mouse_gamer_usb_led_rgb_1200dpi_ms_62_exbom_1752_1_0520c878ca60e3f4c145d09d0a67d0fc.jpg"
   },
      {
         nome: "pc_gamer",
         categoria: "eletrônico",
         preco: 5.0000,
         imagem: "https://m.media-amazon.com/images/I/71yKcQlBe3L._AC_UF894,1000_QL80_.jpg"
      
   
      },
      {
         nome: "ps5",
         categoria: "eletrônico",
         preco: 9.000,
         imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh32ASgewLHanNSnQvdxxQB-WMWDDqJ0ykRg7QOrgV6g&s=10"
      },
      {
         nome: "celular",
         categoria: "eletrônico",
         preco: 7.000,
         imagem: "https://www.oficinadanet.com.br/media/post/60992/1200/5-celulares-perfeitos-para-dar-de-presente-no-dia-das-maes.jpg"
      }
];
app.get("/", (req, res) =>{
   res.json(produtos);
});
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");

});
