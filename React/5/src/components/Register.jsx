import React, { useState } from 'react';

const Register = ({ setToogle, setUsers }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, formData]);

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    // Optional: Switch to login page after registration
    // setToogle(true);
  };

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="p-2 border border-gray-400 rounded"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>

      <p className="text-center">
        Have an Account?{" "}
        <span
          onClick={() => setToogle((prev) => !prev)}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;