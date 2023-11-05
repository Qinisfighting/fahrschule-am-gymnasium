
//import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../src/assets/Logo.png";

interface ActiveStyles {
    borderBottom: string;
    borderRadius: string | number;
    boxShadow: string;
  }

  interface PendingStyles {
    borderTop: string;
    borderBottom: string;
    width: string;
  }

export default function Header() {
    const activeStyles: ActiveStyles = {
        borderBottom: "1px solid var(--rot)",
        borderRadius: 5,
        boxShadow: "1px 1px 2px gray"
      };
      const pendingStyles: PendingStyles = {
        borderTop: "",
        borderBottom: "",
        width: ""
      };

    return (
    <header>
      <Link to="/" className="site-logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav>
        
            <NavLink to="/" end 
           style={({
            isActive,
            isPending
          }: {
            isActive: boolean;
            isPending: boolean;
          }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              FAHRSCHULE
            </NavLink>
         
            <NavLink to="über" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              ÜBER UNS
            </NavLink>
        
            <NavLink to="leistungen" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              LEISTUNGEN
            </NavLink>
          
            <NavLink to="informationen" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              INFORMATIONEN
            </NavLink>
         
            <NavLink to="kontakt" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              KONTAKT
            </NavLink>
         
      </nav>
    </header>
    )

}