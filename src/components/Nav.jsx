import 'bootstrap/dist/css/bootstrap.min.css'
import Stack from 'react-bootstrap/Stack'
import './nav.scss'

const Nav = ({ setPage, allPages }) => {
    const [About, Resume, Portfolio] = allPages;
    return (
            <Stack direction="horizontal" gap={2}>
                <h1>Mauricio's Portfolio</h1>
                <button
                    className='nav btn btn-success ms-auto'
                    onClick={() => { setPage('About') }}>
                    {About}
                </button>
                <button
                    className='nav btn btn-success'
                    onClick={() => { setPage('Resume') }}>
                    {Resume}
                </button>
                <button
                    className='nav btn btn-success'
                    onClick={() => { setPage('Portfolio') }}>
                    {Portfolio}
                </button>
            </Stack>
    )
};

export default Nav;