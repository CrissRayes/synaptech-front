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

  // make pointer follow mouse position and pointer-outer follow pointer with a delay
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

    // when reach the position of the element, the parallax effect starts
    if (window.scrollY > 900) {
      parallax.forEach((item) => {
        item.style.transform = `translateY(-${
          window.scrollY * item.dataset.speed
        }px)`;
      });
    }
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
        <div className='services'>
          <div>Descripcion del lado izquierdo</div>
          <div className='parallax-container'>
            <div
              className='parallax-card'
              data-speed='0.1'
            >
              <div className='card'>
                <h2>Tarjeta 1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
              <div className='card'>
                <h2>Tarjeta 1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
            </div>
            <div
              className='parallax-card'
              data-speed='0.06'
            >
              <div className='card'>
                <h2>Tarjeta 2</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
              <div className='card'>
                <h2>Tarjeta 2</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Lorem */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          aspernatur ab dolor earum dolores amet animi deserunt veritatis in,
          totam rem non modi nobis facere, ipsam recusandae nam velit eius!
          Officia soluta, dicta iure tenetur deserunt repellendus ullam expedita
          earum, rerum non ad reiciendis nisi vitae dolorum nobis atque aperiam
          id dolores omnis et facilis nesciunt, saepe rem dolorem. Iste?
          Molestias deserunt quia deleniti labore voluptatibus exercitationem
          laborum pariatur libero? Odio temporibus maxime, ad necessitatibus
          quasi enim consectetur odit non accusamus vero dignissimos autem quam
          pariatur repellendus quo quibusdam explicabo. Atque necessitatibus
          doloribus laboriosam nostrum a beatae qui velit laudantium
          perspiciatis quod sed nobis, praesentium, quaerat voluptate expedita
          delectus itaque consequatur sit! Doloremque eos maiores sunt quia
          exercitationem et omnis. Et sit quis adipisci repudiandae quia ea
          fugiat assumenda at totam magnam sunt magni illo porro provident
          voluptatum quibusdam necessitatibus itaque, iusto unde! Ipsum
          perferendis molestias totam placeat esse molestiae! Eum dolorum atque
          ipsum fugiat architecto itaque aperiam similique cum aspernatur
          numquam amet officiis recusandae rem suscipit, necessitatibus alias
          magnam ab eos debitis excepturi consequuntur dicta sit odit. Nemo,
          dignissimos. Vero aperiam corrupti consectetur adipisci totam
          deleniti, ex nesciunt asperiores incidunt itaque modi! Quidem
          accusamus mollitia dolorem impedit doloribus? Illo distinctio odit eos
          ratione corrupti hic magni est aliquid laborum. Veritatis tempora
          beatae itaque dicta eaque consequuntur accusantium illo nemo nam
          tenetur vel, molestiae aliquam blanditiis similique cupiditate quos
          dolore quidem nostrum rem incidunt! At laboriosam ad fugit doloribus
          officia! Laudantium labore rerum provident iure ipsa quidem
          perferendis, facilis nulla ratione qui non veritatis doloribus
          accusamus ipsam a aperiam id nihil tempore veniam fugit et! Libero
          culpa nihil aliquid repellat? Culpa perspiciatis corrupti facilis cum
          dicta! Veritatis eum corporis accusamus dolorum iste voluptas cum
          corrupti qui nisi, consequatur, deleniti ipsum at minima dignissimos
          quibusdam perferendis! Voluptatum corporis expedita autem iure!
        </p>
      </section>
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
