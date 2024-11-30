import React from "react";
import {
  faEnvelope,
  faHome,
  faProjectDiagram,
  faInfoCircle,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuCircle = () => {
  return (
    <>
      <div className="absolute top-7 left-14 z-50">
        <div className="logo">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="menu-item flex flex-col text-white">
          <a className="flex flex-col items-center" href="/">
            <FontAwesomeIcon icon={faProjectDiagram} />
            Home
          </a>
          <a className="flex flex-col items-center" href="/about">
            <FontAwesomeIcon icon={faInfoCircle} />
            About
          </a>
          <a className="flex flex-col items-center" href="/services">
            <FontAwesomeIcon icon={faAddressBook} />
            Services
          </a>
          <a className="flex flex-col items-center" href="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuCircle;

// import React, { useState } from "react";
// import "./MenuCircle.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEnvelope,
//   faHome,
//   faProjectDiagram,
//   faInfoCircle,
//   faAddressBook,
// } from "@fortawesome/free-solid-svg-icons";

// // Import the circular menu
// import { CircleMenu, CircleMenuItem } from "react-circular-menu";

// export default function MenuCircle() {

//     const [position, setPosition] = useState({ x: "20%", y: "-30% "});
//     const [offset, setOffset] = useState({ x: 0, y: 0 });

//     const handleDragStart = (e) => {
//       // Calculate the offset of the mouse position relative to the menu's top-left corner
//       const rect = e.target.getBoundingClientRect();
//       setOffset({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//       e.dataTransfer.setData("text/plain", ""); // Prevent default drag image
//       e.dataTransfer.setDragImage(new Image(), 0, 0);
//     };

//     const handleDrag = (e) => {
//       if (e.clientX !== 0 && e.clientY !== 0) {
//         setPosition({
//           x: e.clientX - offset.x,
//           y: e.clientY - offset.y,
//         });
//       }
//     };

//   return (
//     <>
//     <div
//     style={{
//       position: "fixed",
//       left: `${position.x}px`,
//       top: `${position.y}px`,
//       cursor: "grab",
//       zIndex: 100
//     }}
//     draggable
//     onDragStart={handleDragStart}
//     onDrag={handleDrag}
//   >

//     <div className="" style={{ marginTop: "100px", marginLeft: "100px" }}>
//       <CircleMenu
//         startAngle={90}
//         rotationAngle={270}
//         itemSize={2}
//         radius={5}
//         rotationAngleInclusive={false}
//         renderToggle={({ isOpen, toggle }) => (
//           <button
//             onClick={toggle}
//             style={{
//               backgroundColor: "transparent",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//            <FontAwesomeIcon icon="fa-solid fa-house" style={{color: "#ffffff",}} />
//           </button>
//         )}
//       >
//         <CircleMenuItem
//           onClick={() => alert("Clicked the Email icon")}
//           tooltip="Email"
//           tooltipPlacement="right"
//         >
//           <FontAwesomeIcon icon={faHome} />
//         </CircleMenuItem>
//         <CircleMenuItem
//           onClick={() => alert("Clicked the Help icon")}
//           tooltip="Help"
//         >
//           <FontAwesomeIcon icon={faInfoCircle} />
//         </CircleMenuItem>
//         <CircleMenuItem
//           onClick={() => alert("Clicked the Location icon")}
//           tooltip="Location"
//           tooltipPlacement="top"
//         >
//           <FontAwesomeIcon icon={faProjectDiagram} />
//         </CircleMenuItem>
//         <CircleMenuItem
//           onClick={() => alert("Clicked the Location icon")}
//           tooltip="Location"
//           tooltipPlacement="top"
//         >
//           <FontAwesomeIcon icon={faAddressBook} />
//         </CircleMenuItem>
//       </CircleMenu>
//     </div>
//     </div>
//     </>
//   );
//   };
