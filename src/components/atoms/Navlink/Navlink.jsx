 const NavLink = ({ href, children, isActive = false }) => {
   return (
     <a 
       href={href} 
       className={`nav-link ${isActive ? 'active' : ''}`}
     >
       {children}
     </a>
   );
 };
 
 export default NavLink;