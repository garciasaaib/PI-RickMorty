import Sidebar from "../../components/Sidebar";

const Layout = ({children}) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}

export default Layout;