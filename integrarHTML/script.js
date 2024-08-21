let perros = [
    {
      raza: "Pastor Alemán",
      origen: "Alemania",
      pelaje: "Lanudo",
      peso: "33kg",
      edad: 12,
    },
    {
      raza: "Poodle",
      origen: "Francia",
      pelaje: "Lanudo",
      peso: "20kg",
      edad: 14,
    },
    {
      raza: "Labrador Retriever",
      origen: "Canadá",
      pelaje: "Corto",
      peso: "32kg",
      edad: 10,
    },
    {
      raza: "Bulldog Inglés",
      origen: "Reino Unido",
      pelaje: "Corto",
      peso: "24kg",
      edad: 8,
    },
    {
      raza: "Beagle",
      origen: "Reino Unido",
      pelaje: "Corto",
      peso: "10kg",
      edad: 13,
    },
    {
      raza: "Husky Siberiano",
      origen: "Rusia",
      pelaje: "Espeso",
      peso: "27kg",
      edad: 11,
    },
    {
      raza: "Chihuahua",
      origen: "México",
      pelaje: "Corto",
      peso: "2kg",
      edad: 15,
    },
    {
      raza: "Golden Retriever",
      origen: "Escocia",
      pelaje: "Largo",
      peso: "30kg",
      edad: 9,
    }
  ];

  var texto ="<tr><th>Raza</th><th>Origen</th><th>Pelaje</th><th>Peso</th><th>Edad</th></tr>";

  for(let i =0; i < perros.length; i++){
    texto += `<tr>
            <td>${perros[i].raza}</td>
            <td>${perros[i].origen}</td>
            <td>${perros[i].pelaje}</td>
            <td>${perros[i].peso}</td>
            <td>${perros[i].edad}</td>
        </tr>`;
  }

  document.getElementById("cuerpo-tabla").innerHTML = texto;