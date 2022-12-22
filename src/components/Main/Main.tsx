import { FC } from 'react';

type MainProps = {
  text: string;
};

const Main: FC<MainProps> = ({ text }) => (
  <div>
    <p>{text}</p>
  </div>
);

export default Main
