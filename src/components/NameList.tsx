import * as React from 'react';
import { getNames } from './getNames';

export const NameList: React.FunctionComponent = () => {
  const [nameCollection, setNameCollection] = React.useState([]);

  React.useEffect(() => {
    getNames().then((names: any) => {
      setNameCollection(names);
    });
  }, []);

  return (
    <ul>
      {nameCollection.map(name => (
        <li key={name} data-testid="name">
            {name}
        </li>
      ))}
    </ul>
  );
};