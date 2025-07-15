import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router";
import { useNavigate } from "react-router";


function Login() {

    const navigate = useNavigate();

    const api = import.meta.env.VITE_API_URL;

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required").email(),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: async (values) => {
      console.log("Login form values:", values);

      try {
        const res = await axios.post(
          `${api}/api/auth/login`,
          values
        );

        // ✅ Log and store the token
        console.log(res.data.message);
        alert(res.data.message);
        const token = res.data.token;
         

        // Save token to localStorage (optional)
        localStorage.setItem("token", token);

         navigate("/Home");

      } catch (error) {
        console.error(
          "Error while logging in:",
          error.response?.data || error.message
        );
        alert(error.response?.data?.message || "Login failed");
      }
    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100  ">
      <div className="bg-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-xl my-4 text-center">Login</h4>
        <form onSubmit={formik.handleSubmit} className="flex flex-col  gap-4">
          <label htmlFor="username" className="text-sm">
            Username
          </label>
          <input
            type="email"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="enter email."
            id="username"
            className="bg-gray-50 h-8 w-60 rounded-md  shadow-lg border-2 border-gray-600"
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 text-sm">{formik.errors.username}</p>
          )}

          <label htmlFor="password " className="text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="enter Password."
            className="bg-gray-50 h-8 w-60 rounded-md  shadow-lg border-2 border-gray-600"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}

          <Link to="/Forgot-password"><p className="text-sm my-2">☹️forgot password?</p></Link>

          <input
            type="submit"
            value="Login"
            className="bg-orange-400 my-6 text-white  h-8 text-center rounded-xl "
          />
        </form>
        <p className="">
          Don't have an account <Link to='/Signup' className="text-orange-400">.Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
