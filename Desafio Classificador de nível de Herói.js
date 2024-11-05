console.log("Sejam bem vindos ao Jogo")
let nomes = ["Jefferson" , "Marlene" , 
"Patrick" , "Nick" , "Ken" , "Ryu" , "chunli" , "Bison"]
let time = [
  ["Jefferson", 7.982     ,"Ouro"      ],
  ["Marlene"  , 2.180     ,"Bronze"    ],
  ["Patrick"  , 5.654     ,"Prata"     ],
  ["Nick"     , 11.152    ,"Radiante"  ],
  ["Ken"      , 9.456     ,"Ascendente"],
  ["Ryu"      , 1.152     ,"Ferro"     ],
  ["chunli"   , 8.321     , "Platina"  ],
  ["Bison"    , 11.123    , "Imortal"  ]
  ]
//BASTA TROCAR O NOME DO JOGADOR E AS INFORMÇÕES SERAM TROCADAS.
let jogador = "Bison"
let xp = ""
let ranking = ""

switch(jogador){
case "Jefferson":
         xp = time[0][1]
    ranking = time[0][2]
    
break;
case "Marlene":
         xp = time[1][1]
    ranking = time[1][2]
break;
case "Patrick":
         xp = time[2][1]
    ranking = time[2][2]
break;
case "Nick":
         xp = time[3][1]
    ranking = time[3][2]
break;
case "Ken":
         xp = time[4][1]
    ranking = time[4][2]
break;
case "Ryu":
         xp = time[5][1]
    ranking = time[5][2]
break;
case "Chunli":
         xp = time[6][1]
    ranking = time[6][2]
break;
case "Bison":
         xp = time[7][1]
    ranking = time[7][2]
break;
}
console.log("Dados do jogador\nNome " + jogador)
console.log("O herói " + jogador + " está com " + xp + " pontos"+ " no Nível " + ranking)
