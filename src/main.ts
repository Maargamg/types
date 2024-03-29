interface Grupos {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
  }
  const estilonombre = "font-weight: bold; font-size: 16px; background-color: green; color: white";
  
  const grupoA: Grupos = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: "Pop Rock",
  };
  
  const grupoB: Grupos = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: "Rock",
  };
  
  const grupoC: Grupos = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: "Hard Rock",
  };
  
  const grupoD: Grupos = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: "Clásica",
  };
  
  const grupoE: Grupos = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: "Rock",
  };

  console.log(`%c${grupoA.nombre}`, estilonombre);
  console.log(grupoA.año);
  console.log(grupoA.activo);
  console.log(grupoA.genero);
  console.log("**************");
  console.log(`%c${grupoB.nombre}`, estilonombre);
  console.log(grupoB.año);
  console.log(grupoB.activo);
  console.log(grupoB.genero);
  console.log("**************");
  console.log(`%c${grupoC.nombre}`, estilonombre);
  console.log(grupoC.año);
  console.log(grupoC.activo);
  console.log(grupoC.genero);
  console.log("**************");
  console.log(`%c${grupoD.nombre}`, estilonombre);
  console.log(grupoD.año);
  console.log(grupoD.activo);
  console.log(grupoD.genero);
  console.log("**************");
  console.log(`%c${grupoE.nombre}`, estilonombre);
  console.log(grupoE.año);
  console.log(grupoE.activo);
  console.log(grupoE.genero);
  console.log("**************");

