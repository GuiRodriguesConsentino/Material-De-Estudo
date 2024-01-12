export default function RootLayout() {
   return (
      <>
         <header>
            <Link to="/" className="logo">REACT STOCK</Link>
            <nav>
               <Link to="/">Inicio</Link>
               <Link to="/items">Items</Link>
            </nav>
         </header>
         <div>
            <Outlet />
         </div>
         <footer>
            Feito com React e React Router! =D
         </footer>
      </>
   )
}