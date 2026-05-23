"use client";

import Image from "next/image";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511954997799"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Image
        src="/images/WhatsApp_icon.png"
        alt="WhatsApp"
        width={36}
        height={36}
        className="drop-shadow-lg"
      />
    </a>
  );
}
