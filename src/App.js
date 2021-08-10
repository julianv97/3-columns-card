import React from "react";
import Card from "./components/Card";
import { ReactComponent as IconSedan } from "./assets/icon-sedans.svg";
import { ReactComponent as IconSuvs } from "./assets/icon-suvs.svg";
import { ReactComponent as IconLuxury } from "./assets/icon-luxury.svg";

function App() {
  //properties debería ser un array de objetos
  const classes = [
    ["bg-yellow-500", "text-yellow-500"],
    ["bg-blue-600", "text-blue-600"],
    ["bg-green-800", "text-green-800"],
  ];
  const paragraph = [
    "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    "Take an SUV for its spacious interior, power and versatility. Perfect for you next family vacation and off-road adventures.",
    "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  ];

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full lg:h-screen   lg:items-center lg:justify-arround">
      <div className="flex flex-col mb-8 w-4/5 mt-8 rounded-md overflow-hidden lg:flex-row lg:w-4/5">
        <Card
          title={"SEDANS"}
          Icon={IconSedan}
          paragraph={paragraph[0]}
          classes={classes[0]}
        />
        <Card
          title={"SUVS"}
          Icon={IconSuvs}
          paragraph={paragraph[0]}
          classes={classes[1]}
        />
        <Card
          title={"LUXURY"}
          Icon={IconLuxury}
          paragraph={paragraph[0]}
          classes={classes[2]}
        />
      </div>

      <footer className="mx-auto p-8 h-1 ">by Julián Vicente</footer>
    </div>
  );
}

export default App;
