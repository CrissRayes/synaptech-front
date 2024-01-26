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

  // Define logo according to screen size
  // const [logo, setLogo] = useState('');
  // const handleLogo = () => {
  //   if (window.innerWidth > 768) {
  //     setLogo('/img/logoipsum.svg');
  //   } else {
  //     setLogo('/img/logo.svg');
  //   }
  // };
  // useEffect(() => {
  //   handleLogo();
  //   window.addEventListener('resize', handleLogo);
  // }, []);

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
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          sapiente architecto exercitationem nisi sit, ipsum enim ad quos et
          veniam officiis amet ipsa cupiditate, ab consequatur inventore sunt
          possimus aperiam! Eaque a ducimus repudiandae inventore rem
          architecto, quia pariatur animi. Amet, nulla! Aut sed cupiditate
          expedita ab blanditiis, repellat tenetur consequuntur aspernatur
          doloribus. Maiores laboriosam, id temporibus quod distinctio ullam.
          Laboriosam quo expedita a nisi iusto omnis reprehenderit accusantium
          numquam necessitatibus maiores hic, similique adipisci labore,
          facilis, consectetur optio eveniet et voluptatum cumque tempore
          quisquam quaerat nihil. Veniam, corrupti dolores! Asperiores
          exercitationem tempore vitae dolorum doloremque totam laborum, nisi
          natus veritatis laboriosam, eius minima. Id sit soluta in architecto
          exercitationem necessitatibus nulla incidunt, quia placeat! Quaerat
          exercitationem facilis repellat quo? Nostrum nihil eligendi velit
          laudantium quae expedita ducimus, labore maiores at numquam amet?
          Voluptatem nisi numquam minus cumque porro repellat, quasi sit cum
          expedita magnam, nobis rem aliquam, dignissimos dolorum. Vel dolorem
          laboriosam mollitia a? Sed itaque quae repellendus, minima explicabo
          enim! Blanditiis accusamus doloribus ipsa beatae et asperiores
          provident, facilis reprehenderit quasi? Molestiae quis ullam minus
          eligendi quidem architecto. Ea fugiat enim dicta impedit fuga repellat
          quasi ad reiciendis quia! Voluptas impedit suscipit, nam consequuntur
          sint ducimus deleniti repellat. Vero porro laudantium, quibusdam
          officiis est libero ad facere voluptates? Accusantium at adipisci
          illo, architecto reiciendis voluptate porro quam mollitia
          voluptatibus. Cum, nobis. Nulla, nisi error illum dolore alias
          officiis, nesciunt magnam, odio dolor quaerat provident. Laboriosam
          repellat voluptate magni. Nobis itaque id labore cupiditate quidem
          amet velit nam, dolore quam quis numquam impedit, reiciendis
          dignissimos suscipit explicabo alias. Suscipit dolor voluptate
          dignissimos quia veniam accusamus ullam fugiat dolores at. Esse
          voluptatem dolore dolorum eveniet aut architecto, quisquam, neque
          dolores praesentium, dolor minus. Cupiditate quis reprehenderit
          quibusdam, quasi optio, quo quod repudiandae porro consectetur
          inventore fugiat! Neque ipsum ducimus fugit?
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
