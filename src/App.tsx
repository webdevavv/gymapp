import { FC } from "react";
import Header from "./modules/Header/Header";

import Citate from "./components/Citate";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Citate mainText="Тренируйся правильно и эффективно" secondText="Используй это приложение чтобы лучше видеть свой прогресс"/>
    </div>
  );
};

export default App;
