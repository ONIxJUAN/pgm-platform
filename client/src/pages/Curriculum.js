import React from "react";
import { useEffect } from "react";

export default function Curriculum() {
  useEffect(() => {
    document.title = "curriculum";
  }, []);
  return (
    <section className="curriculum">
      <h1>Curriculum</h1>
      <h2>Eerste jaar</h2>
      <table>
        <tr>
          <th colSpan={2}>Semester 1</th>
          <th colSpan={2}>STUDIEPUNTEN</th>
        </tr>
        <tr>
          <th colSpan={2}>traject 1</th>
          <th colSpan={2}>14</th>
        </tr>
        <tr>
          <td colSpan={2}>Web 1: Essentials</td>
          <td colSpan={2}>4</td>
        </tr>
        <tr>
          <td colSpan={2}>Programming 1: Essentials</td>
          <td colSpan={2}>5</td>
        </tr>
        <tr>
          <td colSpan={2}>IT professional</td>
          <td colSpan={2}>2</td>
        </tr>
        <tr>
          <td colSpan={2}>Data Management 1</td>
          <td colSpan={2}>3</td>
        </tr>
        <tr>
          <th colSpan={2}>traject 2</th>
          <th colSpan={2}>17</th>
        </tr>
        <tr>
          <td colSpan={2}>@Work 1 Static Web Projects</td>
          <td colSpan={2}>6</td>
        </tr>
        <tr>
          <td colSpan={2}>Programming 2: Intermediate</td>
          <td colSpan={2}>5</td>
        </tr>
        <tr>
          <td colSpan={2}>Web 2: Intermediate</td>
          <td colSpan={2}>4</td>
        </tr>
        <tr>
          <td colSpan={2}>It professional</td>
          <td colSpan={2}>2</td>
        </tr>
        <tr>
          <th colSpan={2}>TOTAAL</th>
          <th colSpan={2}>31</th>
        </tr>
        <tr className="table--space"></tr>
        <tr>
          <th colSpan={2}>Cloud Application Development</th>
          <th colSpan={2}>Interactive Media Development</th>
        </tr>
        <tr>
          <th>Semester 2</th>
          <th>STUDIEPUNTEN</th>
          <th>Semester 2</th>
          <th>STUDIEPUNTEN</th>
        </tr>
        <tr>
          <th>traject 1</th>
          <th>14</th>
          <th>traject 1</th>
          <th>14</th>
        </tr>
        <tr>
          <td>Programming 3: Advanced</td>
          <td>5</td>
          <td>Programming 3: Advanced</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Web 3: Advanced</td>
          <td>4</td>
          <td>Web 3: Advanced</td>
          <td>4</td>
        </tr>
        <tr>
          <td>IT Portfolio</td>
          <td>2</td>
          <td>IT Portfolio</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Data Management 2</td>
          <td>3</td>
          <td>Data Management 2</td>
          <td>3</td>
        </tr>
        <tr>
          <th>traject 2</th>
          <th>15</th>
          <th>traject 2</th>
          <th>15</th>
        </tr>
        <tr>
          <td>@Work 2: Dynamic Web Projects</td>
          <td>6</td>
          <td>@Work 2: Dynamic Web Projects</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Programming 4: JAMstack</td>
          <td>6</td>
          <td>Web 4: Web Aninmations & Interactions</td>
          <td>6</td>
        </tr>
        <tr>
          <td>IT Portfolio</td>
          <td>3</td>
          <td>IT Portfolio</td>
          <td>3</td>
        </tr>
        <tr>
          <th>TOTAAL</th>
          <th>30</th>
          <th>TOTAAL</th>
          <th>30</th>
        </tr>
        <tr>
          <th colSpan={2}>TOTAAL EERSTE JAAR:</th>
          <th colSpan={2}>60</th>
        </tr>
      </table>
      <h2>Tweede jaar</h2>
      <table>
        <tr>
          <th colSpan={2}>Cloud Application Development</th>
          <th colSpan={2}>Interactive Media Development</th>
        </tr>
        <tr>
          <th>Semester 1</th>
          <th>STUDIEPUNTEN</th>
          <th>Semester 1</th>
          <th>STUDIEPUNTEN</th>
        </tr>
        <tr>
          <th>traject 1</th>
          <th>15</th>
          <th>traject 1</th>
          <th>15</th>
        </tr>
        <tr>
          <td>Programming 5: Full-stack</td>
          <td>6</td>
          <td>Web 5: Web Frameworks</td>
          <td>6</td>
        </tr>
        <tr>
          <td>IT Exploration</td>
          <td>3</td>
          <td>IT Exploration</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Data Management 3</td>
          <td>6</td>
          <td>Data Management 3</td>
          <td>6</td>
        </tr>
        <tr>
          <th>traject 2</th>
          <th>18</th>
          <th>traject 2</th>
          <th>18</th>
        </tr>
        <tr>
          <td>Programming 6: Mobile</td>
          <td>6</td>
          <td>Web 6: Creative Coding</td>
          <td>6</td>
        </tr>
        <tr>
          <td>IT Exploration</td>
          <td>3</td>
          <td>IT Exploration</td>
          <td>3</td>
        </tr>
        <tr>
          <td>@Work 3: Multidiciplinary Web Projects</td>
          <td>9</td>
          <td>@Work 3: Multidiciplinary Web Projects</td>
          <td>9</td>
        </tr>
        <tr>
          <th>TOTAAL</th>
          <th>33</th>
          <th>TOTAAL</th>
          <th>33</th>
        </tr>
        <tr className="table--space"></tr>
        <tr>
          <th>Semester 2</th>
          <th>STUDIEPUNTEN</th>
          <th>Semester 2</th>
          <th>STUDIEPUNTEN</th>
        </tr>
        <tr>
          <th>traject 1</th>
          <th>9</th>
          <th>traject 1</th>
          <th>9</th>
        </tr>
        <tr>
          <td>@Work 4: Graduation Project</td>
          <td>9</td>
          <td>@Work 4: Graduation Project</td>
          <td>9</td>
        </tr>
        <tr>
          <th>traject 2</th>
          <th>18</th>
          <th>traject 2</th>
          <th>18</th>
        </tr>
        <tr>
          <td>@Work 5: Internship</td>
          <td>18</td>
          <td>@Work 5: Internship</td>
          <td>18</td>
        </tr>
        <tr>
          <th>TOTAAL</th>
          <th>27</th>
          <th>TOTAAL</th>
          <th>27</th>
        </tr>
        <tr>
          <th colSpan={2}>TOTAAL TWEEDE JAAR:</th>
          <th colSpan={2}>60</th>
        </tr>
        <tr>
          <th colSpan={2}>TOTAAL OPLEIDING:</th>
          <th colSpan={2}>120</th>
        </tr>
      </table>
    </section>
  );
}
