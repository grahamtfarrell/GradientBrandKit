"use client";

import { FormEvent, useState } from "react";

export function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(false);
    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        setError(true);
        setPending(false);
        return;
      }
      window.location.reload();
    } catch {
      setError(true);
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <form
        onSubmit={onSubmit}
        className="nav-helvetica nav-thin w-full max-w-[280px] border border-black bg-white px-6 py-7"
      >
        <label htmlFor="password" className="block text-[15px] text-black">
          Enter password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            if (error) setError(false);
          }}
          className="mt-4 w-full border border-black bg-white px-3 py-2 text-[15px] text-black outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          className="mt-4 w-full border border-black py-2 text-[15px] text-black disabled:opacity-50"
        >
          Enter
        </button>
        {error ? (
          <p className="mt-3 text-[13px] text-black">Incorrect password</p>
        ) : null}
      </form>
    </div>
  );
}
