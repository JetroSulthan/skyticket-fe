import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../../Elements/Logo/Logo";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";
import { requestResetPassword } from "../../../services/auth.service";

const ResetPasswordRequestForm = (showLogoOnMobile = false) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await requestResetPassword(data.email);

      if (response.status === "Success") {
        toast.success(response.message || "Email berhasil dikirim.", {
          style: {
            textAlign: "center",
          },
        });
      } else {
        toast.error(response.message || "Terjadi kesalahan.");
      }
    } catch (error) {
      console.error("Error saat submit:", error);

      const errorMessage =
        error.response?.data?.message || "Terjadi kesalahan.";
      toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      {showLogoOnMobile && (
        <div className="mb-20 lg:hidden">
          <Logo className="size-24" />
        </div>
      )}

      <h2 className="mb-6 text-2xl font-bold text-black">
        Reset Password Request
      </h2>

      <Input
        label="Email"
        type="email"
        placeholder="Masukkan email Anda"
        error={errors.email?.message}
        {...register("email", {
          required: "Email tidak boleh kosong",
          validate: {
            notEmpty: (value) =>
              value.trim() !== "" || "Email tidak boleh kosong",
            validFormat: (value) =>
              /\S+@\S+\.\S+/.test(value) || "Format email tidak valid",
          },
        })}
      />

      <Button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        className={`mt-14 w-full rounded-2xl font-medium ${
          Object.keys(errors).length > 0 ? "bg-gray-400" : "bg-[#7126B5]"
        }`}
      >
        Kirim
      </Button>

      <p className="mt-10 text-center text-black">
        Sudah ingat kata sandi Anda?{" "}
        <Link to="/login">
          <a
            href="#"
            className="font-bold text-[#7126B5] hover:text-purple-600"
          >
            Masuk
          </a>
        </Link>
      </p>
    </form>
  );
};

export default ResetPasswordRequestForm;
