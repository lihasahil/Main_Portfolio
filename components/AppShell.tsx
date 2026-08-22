"use client";

import { useState, useEffect } from "react";
import { Home, FolderOpen, PenLine } from "lucide-react";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import ContactFormPopup from "@/components/ContactPop";
import OnekoCat from "@/components/OnekoCat";
import Loader from "@/components/Loader/Loader";
import PwaInit from "./pwa-init";

export default function AppShell({ children }: { children: ReactNode }) {
  const navLinks = [
    { link: "#home", name: "Home", icon: <Home size={16} /> },
    { link: "#projects", name: "Projects", icon: <FolderOpen size={16} /> },
    { link: "/blog", name: "Blog", icon: <PenLine size={16} /> },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("hasLoaded")) {
      setIsLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      sessionStorage.setItem("hasLoaded", "true");
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Splash overlay — covers everything until loader finishes.
          Stays in the HTML on the server so there is no content flash. */}
      {isLoading && (
        <div className="fixed inset-0 z-9999 bg-(--bg)">
          <Loader />
        </div>
      )}

      <PwaInit />
      <OnekoCat />
      <NavBar navLinks={navLinks} onContactClick={() => setShowPopup(true)} />
      <ContactFormPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
      {children}
    </>
  );
}
