import { useState, useEffect } from "react";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { CryptoState } from "../../../context/CryptoContext";
import { Select, MenuItem } from "@mui/material";

function Header() {
  const { currency, setCurrency } = CryptoState();

  return (
    <>
      <div className="text-black  flex justify-between text-center items-center  mt-1">
        <div className="text-2xl font-sans">Crypto</div>
        <div className="flex gap-5 mr-8">
          <div className="">
            <div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                label="Age"
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </div>
          </div>
          <button className="px-6 py-3 rounded bg-blue-600">Login</button>
        </div>
      </div>
    </>
  );
}

export default Header;
