import { useFormik } from "formik";
import * as yup from "yup";
import {  useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

function Resetpassword() {

    const {token} = useParams();

    const navigate = useNavigate();

    const api = import.meta.env.VITE_API_URL;

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: yup.object({
     
      password: yup.string().required("enter Password"),
      confirm_password: yup
        .string()
        .required("enter confirm_password")
        .oneOf([yup.ref("password"), null], "password must match"),
    }),

    onSubmit: async (values) => {
      console.log("Signup form values -", values);

      try {
        const res = await axios.post(`${api}/api/auth/reset-password/${token}`,values)

        console.log(res)
        alert(res.data.message)



        navigate("/Login")
        
      } catch (error) {

        console.error("Error while reseting password",error.message)
        
      }


    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100  ">
      <div className="bg-white p-12 rounded-2xl shadow-xl">
        <h4 className="text-xl my-4 text-center">Reset Password</h4>
        <form onSubmit={formik.handleSubmit} className="flex flex-col  gap-4">
          <label htmlFor="password " className="text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter Password."
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
            placeholder="Enter Password again."
            value={formik.values.confirm_password}
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
            value="Reset"
            className="bg-orange-400 my-6 text-white h-8 text-center rounded-xl"
          />
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;
