import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let datenow = new Date();

const products = [
  { title: "Капуста", isFruit: false, id: 1 },
  { title: "Чеснок", isFruit: false, id: 2 },
  { title: "Яблоко", isFruit: true, id: 3 },
];

const listItems = products.map((product) => (
  <li
    key={product.id}
    style={{ color: product.isFruit ? "magneta" : "darkgreen" }}>
    {product.title}
  </li>
));

function App() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function MyButton(props) {
    return <button onClick={props.onClick}>Кликнули {props.count} раз</button>;
  }

  function MyUser() {
    return (
      <>
        <h2>{user.name}</h2>
        <img className="avatar" src={user.imageUrl} />
      </>
    );
  }

  return (
    <>
      <MyUser />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <ul>{listItems}</ul>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
