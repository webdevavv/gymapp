import { FC } from "react";
import Header from "./modules/Header/Header";

import Quote from "./components/Quote/Quote";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Quote
        mainText="Тренируйся правильно и эффективно"
        secondText="Используй это приложение чтобы лучше видеть свой прогресс"
      />
    </div>
  );
};

export default App;
