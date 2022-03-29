import './Header.css';

function Header() { 
    
    return (
        <div className="header">
            <h2>Header</h2>
            <h3>{new Date().toDateString()}</h3>

        </div>

    )
}


export default Header;