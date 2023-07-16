const Nav = ({ setPage, allPages }) => {
    return (
        <nav>
            {allPages.map(page => (
            <button 
                key={page}
                onClick={() =>{setPage(page)}}>
                {page}
            </button>
            ))}
        </nav>
    )
};

export default Nav;