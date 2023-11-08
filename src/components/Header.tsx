
//import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../src/assets/Logo.svg";

interface ActiveStyles {
    borderRadius: string | number;
    boxShadow: string;
    backgroundColor: string;
    color: string;
  }

  interface PendingStyles {
    color: string;
  }

export default function Header() {
    const activeStyles: ActiveStyles = {
        
        borderRadius: 2,
        boxShadow: "1px 1px 2px gray",
        backgroundColor: "var(--rot)",
        color:"white"
      };
      const pendingStyles: PendingStyles = {
        color: "var(--textColor)"
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