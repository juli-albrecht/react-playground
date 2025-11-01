import { useState } from "react";

const USERS = [{ name: "Lukas" }, { name: "Juli" }, { name: "Roxy" }];

function App() {
  const [user, setUser] = useState();
  if (user !== undefined) {
    return <WelcomeMessage name={user.name} />;
  }
  return (
    <>
      <Login setUser={setUser} />
    </>
  );
}

export default App;

function Login({ setUser }) {
  const [input, setInput] = useState("");

  return (
    <>
      <h1>You are not logged in!</h1>
      <input
        type="text"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const filteredUserByName = USERS.filter((user) => {
            return user.name === input;
          });
          if (filteredUserByName.length === 1) {
            setUser(filteredUserByName[0]);
          }
        }}
      >
        Login
      </button>
    </>
  );
}

function WelcomeMessage({ name }) {
  return <h1>Hello {name}!</h1>;
}
