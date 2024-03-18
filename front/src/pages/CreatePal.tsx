import CreatePalComponent from "../components/CreatePalComponent";
import NavBar from "../components/NavBar";


function Login() {
  return (
    <>
        <NavBar />
        <main className="flex flex-col items-center justify-center h-screen">
            <CreatePalComponent/>
        </main>
    </>
  );
}

export default Login;
