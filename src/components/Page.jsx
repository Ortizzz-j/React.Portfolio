import Resume from '../pages/Resume'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'


const Page = ({ currentPage }) => {
    switch (currentPage) {
        case 'About':
            return <About />;
        case 'Resume':
            return <Resume />;
        case 'Contact':
            return <Contact />;
        case 'Portfolio':
            return <Portfolio />;
        default:
            return <About />;
    }
};

export default Page;