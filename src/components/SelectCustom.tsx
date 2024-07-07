"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SelectCustomProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  options: string[];
}

export function SelectCustom(props: SelectCustomProps) {
  const {
    label,
    required = false,
    options,
    placeholder = "Select an option",
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);
  return (
    <>
      {isOpen && (
        <div
          className="absolute top-0 left-0 z-20 w-screen h-screen"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className="relative">
        <div
          className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between">
            <span>{selected}</span>
            <ChevronDown className=" -5 h-5 text-gray-400" />
          </div>
        </div>
        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>

        {isOpen && (
          <div
            id="dropdownUsers"
            className="absolute w-full top-[56px] z-30 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
          >
            <ul
              className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUsersButton"
            >
              {options.map((option) => (
                <li key={option}>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
