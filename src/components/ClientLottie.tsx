"use client";
import { Lottie } from "lottie-react";
import namasteData from "../../public/namaste.json";

export default function ClientLottie() {
  return <Lottie src={namasteData} loop autoplay style={{ width: "100%", height: "100%" }} />;
}
