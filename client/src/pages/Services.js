import React, { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    document.title = "services";
  }, []);
  return (
    <div className="services">
      <h1>Services</h1>
      <h2 id="Werken-voor-echte-klanten">Werken voor echte klanten</h2>
      <h2 id="Werkplekleren">
        Werkplekleren: echte cases, gastcolleges, ... stage
      </h2>
      <h2 id="Onderzoek">Onderzoek</h2>
      <h2 id="DienstVerlening">DienstVerlening</h2>
      <h2 id="Workshop">Workshop: start-to-code</h2>
    </div>
  );
}
