import { NavLink } from 'react-router-dom';
import { FaBars, FaRegTimesCircle } from 'react-icons/fa';
import { useState } from 'react';

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header>
        <nav>
          <div className='container'>
            <img
              alt='logo'
              src='/img/Logoipsum.svg'
            />
            <button onClick={handleMenuOpen}>
              {isMenuOpen ? <FaRegTimesCircle /> : <FaBars />}
            </button>
            <ul>
              <li>
                <NavLink>Home</NavLink>
                <NavLink>Diseño Web</NavLink>
                <NavLink>Software</NavLink>
                <NavLink>Data Analytics</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quibusdam, quae, autem voluptatum quos nemo dolorum
          excepturi voluptatem quia laborum? Quibusdam, quia. Quisquam
          voluptates, quibusdam, quae, autem voluptatum quos nemo dolorum
          excepturi voluptatem quia laborum? Quibusdam, quia.
        </p>
      </section>
    </>
  );
};
