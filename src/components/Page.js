import Resume from '../pages/Resume'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'


const Page = ({ currentPage }) => {
    switch (currentPage) {
        case 'About':
            return <About />;
        case 'Resume':
            return <Resume />;
        case 'Portfolio':
            return <Portfolio />;
        default:
            return <About />;
    }
};

export default Page;