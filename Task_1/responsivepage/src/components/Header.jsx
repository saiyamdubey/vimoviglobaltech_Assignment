const Header = () => (
    <header className="bg-green-700 text-white p-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <nav className="flex-1 flex justify-between items-center">
                <ul className="flex space-x-6 mx-10">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="https://www.hackerrank.com/profile/22015001973_sd" className="hover:underline">HackerRank</a></li>
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="https://leetcode.com/Saiyam_Dubey_/" className="hover:underline">Leetocde</a></li>
                </ul>
                <img
                    src="https://vimoviglobaltech.com/images/logo-light.png"
                    alt="Logo"
                    className="h-20 w-32 mx-10"
                />
                <ul className="flex space-x-6 mx-10">
                    <li><a href="https://codeforces.com/profile/Saiyam_Dubey_" className="hover:underline">CodeForces</a></li>
                    <li><a href="https://github.com/saiyamdubey" className="hover:underline">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/saiyam-dubey-77a5371b8/" className="hover:underline">LinkedIn</a></li>
                    <li><a href="mailto:saiyamdubey8787@gmail.com" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;