// components/PasswordStrength.tsx

import { useState } from "react";

const PasswordStrength = ({ password }: { password: string }) => {
  const [strength, setStrength] = useState(0);

  const checkPasswordStrength = (password: string) => {
    let strengthLevel = 0;
    const patterns = [
      /[a-z]/, 
      /[A-Z]/, 
      /[0-9]/, 
      /[^a-zA-Z0-9]/, 
    ];

    patterns.forEach((pattern) => {
      if (pattern.test(password)) strengthLevel++;
    });

    setStrength(strengthLevel);
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => checkPasswordStrength(e.target.value)}
        placeholder="Enter password"
      />
      <div className="strength-bar">
        {["Weak", "Fair", "Good", "Strong"][strength]}
      </div>
    </div>
  );
};

export default PasswordStrength;
