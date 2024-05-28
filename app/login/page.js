import LoginForm from "../components/forms/login";
const Page = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-96 h-80 bg-white rounded-md shadow-md p-5">
                <LoginForm />
            </div>
        </div>
    )
}

export default Page;