import React from "react";
import Link from "next/link";

const TiendaLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>
        <ul>
          <li>
            <Link href="/tienda/categories">Categories</Link>
          </li>
          <li>
            <Link href="/tienda/categories/computers">Computers</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default TiendaLayout;
