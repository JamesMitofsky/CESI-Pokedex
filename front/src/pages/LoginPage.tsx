import LoginComponent from "@/components/LoginComponent";
import NavBar from "../components/NavBar";


function Login() {
  return (
    <>
        <NavBar />
        <main className="flex flex-col items-center justify-center h-screen">
            <LoginComponent/>
        </main>
    </>
  );
}

export default Login;
