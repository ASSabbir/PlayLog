import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
    return (
        <footer className="bg-zinc-900 border-t text-gray-200 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
                
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-primary font-title">PlayLog</h2>
                    <p className="text-gray-400 text-sm">The ultimate game review platform</p>
                </div>

               
                <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0 text-center md:text-left">
                    <a href="#about" className="hover:text-primary transition-colors duration-200">
                        About Us
                    </a>
                    <a href="#reviews" className="hover:text-primary transition-colors duration-200">
                        Reviews
                    </a>
                    <a href="#contact" className="hover:text-primary transition-colors duration-200">
                        Contact
                    </a>
                    <a href="#privacy" className="hover:text-primary transition-colors duration-200">
                        Privacy Policy
                    </a>
                </div>

                
                <div className="flex space-x-5">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>

            <div className="text-center mt-8 text-gray-500 text-sm">
                © 2024 GameVerse. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
