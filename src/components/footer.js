import { useTheme } from 'next-themes';

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className={`${theme === 'dark' ? 'from-gray-800 via-blue-800 to-gray-800 bg-gradient-to-r text-white' : 'bg-white text-black'}  transition duration-400  py-4 bottom-0 w-full overlay-footer opacity-90`}>
      <div className="container mx-auto  text-center">
        <p>&copy; {new Date().getFullYear()} RPA Management</p>
      </div>
    </footer>
  );
}
export default Footer;

