import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiX, FiMenu } from 'react-icons/fi';
import './MegaMenu.css';

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuData = [
    {
      title: "L'ÉVÉNEMENT",
      submenus: [
        { title: "Concept", to: "/concept" },
        { title: "Galerie", to: "/gallery" }
      ]
    },
    {
      title: "EXPERIENCE",
      submenus: [
        { title: "Ateliers", to: "/workshops" },
        { title: "Networking", to: "/networking" }
      ]
    }
  ];

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <header className="mega-menu-wrapper">
      {/* Version Desktop */}
      <nav className="desktop-menu">
        {menuData.map((menu, index) => (
          <div key={`desktop-${index}`} className="menu-item">
            <button 
              className="menu-title"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
              onClick={() => toggleMenu(index)}
            >
              {menu.title}
              <FiChevronDown className={`icon ${activeMenu === index ? 'active' : ''}`} />
            </button>
            
            {activeMenu === index && (
              <div className="submenu">
                {menu.submenus.map((sub, i) => (
                  <Link 
                    key={`sub-${i}`} 
                    to={sub.to} 
                    className="submenu-link"
                    onClick={() => setActiveMenu(null)}
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Version Mobile */}
      <button 
        className="mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {mobileOpen && (
        <div className="mobile-menu">
          {menuData.map((menu, index) => (
            <div key={`mobile-${index}`} className="mobile-item">
              <button 
                className="mobile-title"
                onClick={() => toggleMenu(index)}
              >
                {menu.title}
                <FiChevronDown className={`icon ${activeMenu === index ? 'active' : ''}`} />
              </button>
              
              {activeMenu === index && (
                <div className="mobile-submenu">
                  {menu.submenus.map((sub, i) => (
                    <Link
                      key={`mobile-sub-${i}`}
                      to={sub.to}
                      className="mobile-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default MegaMenu;