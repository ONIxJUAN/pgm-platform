import React, { useEffect } from "react";
import Card from "../components/Card";

export default function Team({ team }) {
  useEffect(() => {
    document.title = "team";
  }, []);
  console.log(team);
  return (
    <section className="team">
      <div className="team--cards">
        <Card type={"team"} amount={team.length} data={team} />
      </div>
    </section>
  );
}
