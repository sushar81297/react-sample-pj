import React, { useRef, ChangeEvent, KeyboardEvent } from "react";
import { Input, Space } from "antd";
import type { InputRef } from "antd";

interface OTPInputProps {
  length?: number;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 6 }) => {
  const inputsRef = useRef<(InputRef | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, ""); // only digits
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <Space>
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          maxLength={1}
          type="text"
          inputMode="numeric"
          className="otp-input"
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </Space>
  );
};

export default OTPInput;
