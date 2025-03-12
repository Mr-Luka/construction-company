import { FaBarsStaggered } from "react-icons/fa6";

export default function NavBar(){
    return (
        <>
            <header>
                <div className='navBar-container'>
                    <nav>
                        <div className='logo'>
                            <h2>logo image</h2>
                        </div>
                        <ul className="nav-link">
                            <li><a href='#' className='active'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>Portfolio</a></li>
                            <li><a href='#'>Contact Me</a></li>
                        </ul>
                        <div className='sideBar-icon'>
                           <FaBarsStaggered color='white'/> 
                        </div>
                    </nav>
                </div>
            </header>
            <section>
                <div className='navBar-container'>
                    <div className='responsive-navBar-content'>
                        <h2>EcoRise</h2>
                        <h3>construction</h3>
                    </div>

                </div>
            </section>
        </>
    )
}