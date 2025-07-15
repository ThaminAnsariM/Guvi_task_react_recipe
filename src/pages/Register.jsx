import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

function Register() {

    const navigate = useNavigate();

    const api = import.meta.env.VITE_API_URL;

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required("enter Username")
        .email("pls enter a valid email"),
      password: yup.string().required("enter Password"),
      confirm_password: yup
        .string()
        .required("enter confirm_password")
        .oneOf([yup.ref("password"), null], "password must match"),
    }),

    onSubmit: async (values) => {
      console.log("Signup form values -", values);

      try {
        const res = await axios.post(`${api}/api/auth/register`,values)
        console.log(res)
        alert(res.data.message)
        navigate("/Login")
        
      } catch (error) {

        console.error("Error while register",error.message)
        
      }


    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100  ">
      <div className="bg-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-xl my-4 text-center">SignUp</h4>
        <form onSubmit={formik.handleSubmit} className="flex flex-col  gap-4">
          <label htmlFor="username" className="text-sm">
            Username
          </label>
          <input
            type="email"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            id="username"
            placeholder="enter email."
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
            placeholder="enter password."
            className="bg-gray-50 h-8 w-60 rounded-md  shadow-lg border-2 border-gray-600"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}

          <label htmlFor="confirm_password" className="text-sm">
            Confirm_password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
            placeholder="enter password again."
            className="bg-gray-50 h-8 w-60 rounded-md  shadow-lg border-2 border-gray-600"
          />
          {formik.touched.confirm_password &&
            formik.errors.confirm_password && (
              <p className="text-red-500 text-sm">
                {formik.errors.confirm_password}
              </p>
            )}

          <input
            type="submit"
            value="SignUp"
            className="bg-orange-400 my-6 text-white h-8 text-center rounded-xl"
          />
        </form>
        <p className="">
          already have an account <Link to='/Login' className="text-orange-400">.Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
