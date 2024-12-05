import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email tidak boleh kosong";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!password) {
      newErrors.password = "Password tidak boleh kosong";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login berhasil:", { email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="mb-6 text-2xl font-bold text-black">Masuk</h2>

      <Input
        label="Email/No Telepon"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Contoh: johndoe@gmail.com"
        error={errors.email}
      />

      <div className="mb-6">
        <div className="mb-1 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <Link to="/reset-password">
            <a href="#" className="text-sm text-[#7126B5] hover:text-purple-600">
              Lupa Kata Sandi
            </a>
          </Link>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password"
            error={errors.password}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-1 right-5 flex cursor-pointer items-center text-[#8A8A8A] hover:text-gray-500"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowPassword(!showPassword);
              }
            }}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} className="size-6" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="size-6" />
            )}
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full rounded-2xl font-medium">
        Masuk
      </Button>

      <p className="mt-10 text-center text-sm text-black">
        Belum punya akun?{" "}
        <Link to="/register">
          <a href="#" className="font-bold text-[#7126B5] hover:text-purple-600">
            Daftar di sini
          </a>
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;