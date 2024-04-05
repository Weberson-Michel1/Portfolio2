import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" >
                <p className="blue-gradient_text w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">WM</p>
            </NavLink>
                <nav className="flex text-lg gap-7 font-medium">
                    <NavLink to="/about" className= {({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
                        A propos
                    </NavLink>
                    <NavLink to="/projects" className= {({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
                        Projets
                    </NavLink>
                </nav>
        
        </header>
    )
}

export default Navbar
