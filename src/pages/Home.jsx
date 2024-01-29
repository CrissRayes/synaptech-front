import { NavLink } from 'react-router-dom';
import { FaRegTimesCircle } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);
  const activeLink = ({ isActive }) => (isActive ? 'active-link' : '');

  // Get scroll position and set state to change navbar style
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  // make pointer follow mouse position
  const handlePointer = (e) => {
    const pointer = document.getElementById('pointer');
    const pointerOuter = document.getElementById('pointer-outer');
    pointer.style.left = `${e.clientX}px`;
    pointer.style.top = `${e.clientY}px`;
    pointerOuter.style.left = `${e.clientX}px`;
    pointerOuter.style.top = `${e.clientY}px`;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handlePointer);
  }, []);

  // Parallax effect on scroll
  const handleParallax = () => {
    const parallax = document.querySelectorAll('.parallax-card');

    parallax.forEach((item) => {
      item.style.transform = `translateY(-${
        window.scrollY * item.dataset.speed
      }px)`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleParallax);
  }, []);

  return (
    <>
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className='container menu-desktop'>
          <img
            alt='logo'
            src='/img/logoipsum.svg'
            className='logo'
          />
          <ul>
            <li>
              <NavLink
                to='/'
                className={activeLink}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/web-design'
                className={activeLink}
              >
                Diseño Web
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/marketing'
                className={activeLink}
              >
                Marketing
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/analytics'
                className={activeLink}
              >
                Data Analytics
              </NavLink>
            </li>
          </ul>
          <button
            onClick={handleMenuOpen}
            className='menu-btn'
          >
            <HiBars3 className='btn-icon' />
          </button>
        </div>
        {/* Menu Mobile */}

        <div
          className={`menu-mobile
          ${isMenuOpen ? 'open' : ''}
        `}
        >
          <div>
            <button
              onClick={handleMenuOpen}
              className='close-btn'
            >
              <FaRegTimesCircle />
            </button>
          </div>
          <ul>
            <li>Opcion 1</li>
            <li>Opcion 2</li>
            <li>Opcion 3</li>
            <li>Opcion 4</li>
          </ul>
        </div>
      </nav>
      <section className='hero'>
        <div className='left-info'>
          <img
            src='/img/dotarrow.svg'
            alt='dotarrow'
            className='dotarrow'
          />
          <div className='vertical'>conocer más</div>
          <img src='/img/arrow.svg' />
        </div>
        <div className='container hero-info'>
          <h1 className='title hero-title'>
            Experiencia única en Diseño Web & Marketing Digital
          </h1>
          <p className='hero-text'>
            Somos una agencia de diseño web y marketing digital especialista en
            estrategia, diseño y experiencia de usuario.
          </p>
        </div>
      </section>
      <section className='container'>
        <div className='flex justify-between align-center mt-5'>
          <div>
            <h2>Descripcion del lado izquierdo</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              repellendus adipisci eos harum similique minus corrupti atque
              expedita dolor? Magni impedit, tempora eos commodi saepe et
              assumenda est qui soluta.
            </p>
          </div>
          <div className='parallax-container'>
            {/* Left cards */}
            <div
              className='parallax-card'
              data-speed='0.08'
            >
              <div className='card'>
                <h2>Tarjeta 1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
              <div className='card'>
                <h2>Tarjeta 3</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
            </div>
            {/* End left cards */}
            {/* Right Cards */}
            <div
              className='parallax-card'
              data-speed='0.12'
            >
              <div className='card'>
                <h2>Tarjeta 2</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
              <div className='card'>
                <h2>Tarjeta 4</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
            </div>
            {/* End right cards */}
          </div>
        </div>
      </section>
      {/* Services detail */}
      <section className='services'>
        <div className='container'>
          <h2>Titulo seccion de cards 2</h2>
          <div className='services-cards'>
            {/* Card 1 */}
            <div className='card-green'>
              <span>Card Icon</span>
              <h4>Card title</h4>
              <p>Card Text</p>
            </div>
            {/* Card 2 */}
            <div className='card-green'>
              <span>Card Icon</span>
              <h4>Card title</h4>
              <p>Card Text</p>
            </div>
            {/* Card 3 */}
            <div className='card-green'>
              <span>Card Icon</span>
              <h4>Card title</h4>
              <p>Card Text</p>
            </div>
            {/* Card 1 */}
            <div className='card-green'>
              <span>Card Icon</span>
              <h4>Card title</h4>
              <p>Card Text</p>
            </div>
            {/* Card 2 */}
            <div className='card-green'>
              <span>Card Icon</span>
              <h4>Card title</h4>
              <p>Card Text</p>
            </div>
            {/* Card 3 */}
            <div className='card-green'>
              <span>Card Icon</span>
              <h4>Card title</h4>
              <p>Card Text</p>
            </div>
          </div>
        </div>
      </section>
      {/* Sección Clientes */}
      <section>
        <div className='container'>
          <h2>Clientes Felices</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            perferendis natus aliquam sunt velit distinctio maxime eveniet
            voluptates dolores eaque tempora corporis voluptas vitae
            accusantium, in laudantium accusamus, temporibus laboriosam.
          </p>
        </div>
      </section>
      <footer>
        <div className='container'>
          <div className='footer-info'>
            <img
              src='/img/logowhite.png'
              alt='logo'
              className='logo'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
      </footer>
      {/* Pointer following mouse */}
      <span
        id='pointer'
        className='cursorMouse pointer'
      ></span>
      <span
        id='pointer-outer'
        className='cursorMouse pointer-outer'
      ></span>
      {/* End circle following mouse */}
    </>
  );
};
