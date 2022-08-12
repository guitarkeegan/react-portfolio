// import React, { useState } from 'react';
// import Collapse from 'react-bootstrap/Collapse';
// import Button from 'react-bootstrap/Button'

// export default function MoreInfo() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      </Button>
//       <Collapse in={open}>
//         <div id="example-collapse-text">
//           Site written with jQuery, Yelp Api, and Foodish API. User clicks a food image to see locations where the food can be found nearby.
//         </div>
//       </Collapse>
//     </>
//   );
// }

