import './Layout.css'
import Navbar from '../Navbar/Navbar';

const Layout = ({children}) => {
  return (
    <div className="Layout">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;