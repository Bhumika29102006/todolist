"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {

  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = async () => {

    try {

      await axios.post(
        "/api/signup",
        {
          name,
          email,
          password,
        }
      );

      alert("Signup Successful");

      router.push("/");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="authContainer">

      <h1>Signup</h1>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={handleSignup}>
        Signup
      </button>

      <p>
        Already have an account?

        <Link href="/login">
          Login
        </Link>
      </p>

    </div>
  );
}