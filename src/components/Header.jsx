import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
  console.log();
  return (
    <header>
      <div>
        <img src="/logo-f.png" alt="" />
        <h2>Uçuş Radarı</h2>
      </div>

      <h4>
        {store.isLoading
          ? "Uçuşlar Hesaplanıyor..."
          : `${store.flight.length} Uçuş Bulundu`}
      </h4>
    </header>
  );
};

export default Header;
