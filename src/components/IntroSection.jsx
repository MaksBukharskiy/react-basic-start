import React from "react";

// export default function IntroSection(){
//     return(
//         <section>
//             <h1 className="centered">Result Unversity</h1>
//             <h3 className="cetered" style={{color: '#666'}}>
//                 Университет Frontend разработки, который насыщает IT сферу квалифицированными программистам.
//             </h3>
//         </section>
//     )
// }

const e = React.createElement

export default function IntroSection() {
  return e("section", null, [
    e("h1", { className: "centered", key:1 }, "Result University"),
    e(
      "h3",
      { className: "centered", style: { color: "#666" }, key:2 },
      "Университет Frontend разработки, который насыщает IT сферу квалифицированными программистам."
    ),
  ]);
}
