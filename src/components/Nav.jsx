import './nav.scss'

const Nav = ({ setPage, allPages }) => {
    const [About, Resume, Contact, Portfolio] = allPages;
    return (
        <div className='navbtn'>
            <h1>Mauricio's Portfolio</h1>
        <span>
            <button
                className='nav'
                onClick={() => { setPage('About') }}>
                {About}
            </button>

            <button
                className='nav'
                onClick={() => { setPage('Resume') }}>
                {Resume}
            </button>

            <button
                className='nav'
                onClick={() => { setPage('Contact') }}>
                {Contact}
            </button>

            <button
                className='nav'
                onClick={() => { setPage('Portfolio') }}>
                {Portfolio}
            </button>
            </span>
        </div>
    )
};

export default Nav;