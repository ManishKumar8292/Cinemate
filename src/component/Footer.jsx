import { Link } from 'react-router-dom';

export const Footer = () => {
    return (


        <footer className="bg-white  shadow mt-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-100">© 2030
                    <Link to="/" className="hover:underline"> Cinemate™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-100 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/manishv1_2" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/manish-kumar-bb579a192" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/ManishKumar8292" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
