
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.svg";
import car from "../../public/car.svg";

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
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);


    const activeStyles: ActiveStyles = {
        
        borderRadius: 0,
        boxShadow: "1px 1px 2px gray",
        backgroundColor: "var(--rot)",
        color:"white"
      };
      const pendingStyles: PendingStyles = {
        color: "var(--textColor)"
      };

      useEffect(() => {
        const handler = (e: MouseEvent) => {
          if (
            menuRef.current != null &&
            !menuRef.current.contains(e.target as Node)
          ) {
            setIsMenu(false);
            //  console.log(menuRef.current);
          }
        };
    
        document.addEventListener("mousedown", handler);
    
        return;
        () => {
          document.removeEventListener("mousedown", handler);
        };
      });

    return (
    <header>
      <Link to="/" className="site-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div ref={menuRef}>
        <img
          src={car}
          alt="menu"
          className="menu"
          onClick={() => setIsMenu(true)}
        />
      </div>
      {isMenu ? (
         <div className="menuNav" ref={menuRef} >
              <NavLink to="/" end 
           style={({
            isActive,
            isPending
          }: {
            isActive: boolean;
            isPending: boolean;
          }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              <div onClick={() => setIsMenu(false)}>FAHRSCHULE</div>
            </NavLink>
         
            <NavLink to="über" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
            <div onClick={() => setIsMenu(false)}>ÜBER UNS</div>
              
            </NavLink>
        
            <NavLink to="leistungen" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              <div onClick={() => setIsMenu(false)}>LEISTUNGEN</div>
              
            </NavLink>
          
           

            <NavLink to="anmelden" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              <div onClick={() => setIsMenu(false)}>ANMELDEN</div>
              
            </NavLink>
         
            <NavLink to="kontakt" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              <div onClick={() => setIsMenu(false)}>KONTAKT</div>
              
            </NavLink>
             <NavLink to="informationen" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              <div onClick={() => setIsMenu(false)}>LINKS</div>
              
            </NavLink>

         </div>

      ) : (
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
      
       
     
        <NavLink to="anmelden" 
             style={({
                isActive,
                isPending
              }: {
                isActive: boolean;
                isPending: boolean;
              }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
              <div onClick={() => setIsMenu(false)}>ANMELDEN</div>
              
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
        <NavLink to="informationen" 
         style={({
            isActive,
            isPending
          }: {
            isActive: boolean;
            isPending: boolean;
          }) => (isActive && !isPending ? activeStyles : pendingStyles)}>
          LINKS
        </NavLink>
     
  </nav>
      )
        
    
    
    }
      
    </header>
    )

}