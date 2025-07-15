
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router';
import axios from 'axios';

function ForgotPassword() {
  
  const api = import.meta.env.VITE_API_URL;
  
    const formik = useFormik({
      initialValues: {
        username: ""
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Username is required").email(),
      }),
      onSubmit: async (values) => {
        console.log("Forgotpassword values:", values);

         try {
        const res = await axios.post(
          `${api}/api/auth/Forgot-password`,
          values
        );

        // ✅ Log and store the token
        console.log(res.data.message);
        alert(res.data.message);
        

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
        <h4 className="text-xl my-4 text-center">ForgotPassword</h4>
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
            placeholder='Enter your email here.'
            className="bg-gray-50 h-8 w-60 rounded-md  shadow-lg border-2 border-gray-600"
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 text-sm">{formik.errors.username}</p>
          )}

          <input
            type="submit"
            value="Submmit"
            className="bg-orange-400 my-6 text-white  h-8 text-center rounded-xl "
          />
        </form>
        <p className="">
          Don't have an account <Link to='/Signup' className="text-orange-400">.Register</Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
