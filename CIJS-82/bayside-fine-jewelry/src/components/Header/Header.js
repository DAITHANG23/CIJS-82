import './Header.css';

const Header = () => {
    return <div className="header">
        <h2 style={{color:"#0D5EBA"}}>{"Bayside fine jewelry".toUpperCase()}</h2>
        <nav>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <img className="img-header" src="./images/shopping.png" />
        </nav>
    </div>;
}

export default Header;