import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";
import { useSearchParams } from "react-router-dom";
import { resetPassword } from "../../../services/auth.service";
import Logo from "../../Elements/Logo/Logo";
import toast from "react-hot-toast";

const ResetPasswordForm = (showLogoOnMobile = false) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await resetPassword(token, {
        password: data.newPassword,
        confirmPassword: data.confirmPassword,
      });

      toast.success(response.message || "Password berhasil diubah.");

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Gagal mengubah password. Silakan coba lagi.",
      );
    }
  };

  const newPassword = watch("newPassword");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      {showLogoOnMobile && (
        <div className="mb-20 lg:hidden">
          <Logo className="size-24" />
        </div>
      )}
      <h2 className="mb-6 text-2xl font-bold text-black">Reset Password</h2>

      {/* New Password */}
      <label className="relative block text-black dark:text-black">
        Masukkan password baru
        <div className="relative">
          <Input
            type={showNewPassword ? "text" : "password"}
            placeholder="********"
            {...register("newPassword", {
              required: "Password harus diisi",
              minLength: {
                value: 8,
                message: "Password harus minimal 8 karakter",
              },
            })}
            error={errors.newPassword?.message}
          />
        </div>
        <div
          onClick={() => setShowNewPassword(!showNewPassword)}
          style={{
            position: "absolute",
            right: "1em",
            top: "50%",
            transform: "translateY(-0%)",
            cursor: "pointer",
            color: "#8A8A8A",
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowNewPassword(!showNewPassword);
            }
          }}
        >
          {showNewPassword ? (
            <FontAwesomeIcon icon={faEye} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} size="lg" />
          )}
        </div>
      </label>

      {/* Confirm Password */}
      <label className="relative block text-black dark:text-black">
        Konfirmasi Password Baru
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="********"
            {...register("confirmPassword", {
              required: "Konfirmasi password harus diisi",
              validate: (value) =>
                value === newPassword || "Konfirmasi password tidak sesuai",
            })}
            error={errors.confirmPassword?.message}
          />
        </div>
        <div
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          style={{
            position: "absolute",
            right: "1em",
            top: "50%",
            transform: "translateY(-0%)",
            cursor: "pointer",
            color: "#8A8A8A",
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowConfirmPassword(!showConfirmPassword);
            }
          }}
        >
          {showConfirmPassword ? (
            <FontAwesomeIcon icon={faEye} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} size="lg" />
          )}
        </div>
      </label>

      <Button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        className={`mt-14 w-full rounded-2xl font-medium ${
          Object.keys(errors).length > 0 ? "bg-gray-400" : "bg-[#7126B5]"
        }`}
      >
        Simpan
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
