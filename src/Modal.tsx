// import React, { useRef } from 'react';

// interface ModalProps {
//   children?: React.ReactNode;
//   onClose?: () => void;
//   isOpen?: boolean;
// }

// export const Modal = ({children, isOpen = false, onClose = () => null}) => {
//   const node = useRef<HTMLDivElement>(null);

//   handleClickOutside = (event: React.MouseEvent) => {
//     !node.current?.contains(event.target as Node) && onClose();
//   };

//   return (
//     <section className={`modal ${isOpen}`} onClick={handleClickOutside}>
//       <div>
//         <button onClose={onClose}>Close Modal</button>
//         {children}
//       </div>
//     </section>
//   );
// };
