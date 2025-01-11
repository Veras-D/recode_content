import SayHello from './components/SayHello';


interface UserInfo {
  name: string;
  email: string;
  password: string;
  age: number;
  gender: "male" | "female" | "other";
}


function App() {
  const userInfo: UserInfo = {
    name: "Vivi",
    email: "vivi@example.com",
    password: "123456",
    age: 25,
    gender: "female",  };

    
  return (
    <main>
      <div>
        <SayHello name={userInfo.name} />
      </div>
    </main>
  )
}

export default App
