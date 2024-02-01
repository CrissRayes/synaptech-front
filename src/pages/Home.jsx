import { NavLink } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaRegTimesCircle } from 'react-icons/fa';
import { FaCloud, FaArrowUpRightDots } from 'react-icons/fa6';

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
    const parallax = document.querySelectorAll('.card-group');

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
                to='/software'
                className={activeLink}
              >
                software
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
                to='/contact'
                className={activeLink}
              >
                Contacto
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
            desarrollo de software & diseño web a medida
          </h1>
          <p className='hero-text'>
            Haz crecer tu negocio y ahorra tiempo con un software y/o una web
            personalizada que brinde resultados excepcionales.
          </p>
        </div>
      </section>
      {/* Sección destacar software */}
      <section className='section-software'>
        <div className='section-software-content container'>
          <div className='section-software-info'>
            <h2>Toma el control de tus procesos de negocio</h2>
            <p>
              Aporta el máximo valor a tu negocio y define tu marca a través del
              desarrollo personalizado de aplicaciones a la medida.
            </p>
          </div>
          <div className='section-software-parallax'>
            {/* Left cards */}
            <div
              className='card-group'
              data-speed='0.08'
            >
              <div className='card'>
                <h2>Software a medida</h2>
                <p>
                  Disfruta de soluciones de software personalizadas diseñadas
                  teniendo en cuenta tus necesidades únicas y planes futuros.
                </p>
              </div>
              <div className='card'>
                <h2>Uso Eficiente de Recursos</h2>
                <p>
                  No dejes que nada se desperdicie, ya que tu solución de
                  software personalizada te ayuda a gestionar los activos de tu
                  empresa.
                </p>
              </div>
            </div>
            {/* End left cards */}
            {/* Right Cards */}
            <div
              className='card-group'
              data-speed='0.12'
            >
              <div className='card'>
                <h2>Procesos Optimizados</h2>
                <p>
                  Aumenta la productividad de los empleados proporcionando
                  herramientas de gestión efectivas para las operaciones de tu
                  negocio.
                </p>
              </div>
              <div className='card'>
                <h2>Automatización de Procesos</h2>
                <p>
                  Automatiza tareas repetitivas y dirige la atención de tu
                  equipo hacia lo realmente crucial para tu negocio.
                </p>
              </div>
            </div>
            {/* End right cards */}
          </div>
        </div>
      </section>
      {/* Sección qué hacemos por ti */}
      <section className='services'>
        <div className='container'>
          <h2>¿Cómo te apoyamos?</h2>
          <p>
            Desarrollamos soluciones digitales que te brindan una ventaja
            competitiva utilizando las últimas tecnologías.
          </p>
          <div className='services-cards'>
            {/* Card 1 */}
            <div className='card-green'>
              <FaCode size={50} />
              <h4>Aplicaciones Web & Mobile</h4>
              <p>
                Proporciona el máximo valor a tu negocio con un software
                personalizado para web o móviles.
              </p>
            </div>
            {/* Card 2 */}
            <div className='card-green'>
              <FaLaptopCode size={50} />
              <h4>Desarrollo Web</h4>
              <p>
                Diseños atractivos y que generan ventas. Langing pages,
                corporativos, tiendas online.
              </p>
            </div>
            {/* Card 2 */}
            <div className='card-green'>
              <FaCloud size={50} />
              <h4>Desarrollo basado en la nube</h4>
              <p>
                Acelera el desarrollo, mejora la calidad del producto final y
                aumenta la productividad.
              </p>
            </div>
            {/* Card 3 */}
            <div className='card-green'>
              <FaArrowUpRightDots size={50} />
              <h4>Data Analytics</h4>
              <p>
                Transforma los procesos de toma de decisiones y define
                estrategias empresariales basadas en datos precisos.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/***** Sección Testimonials *****/}
      <section className='testimonials'>
        <div className='container'>
          <h2>
            Clientes Felices con <span className='green-text'>Synaptech</span>
          </h2>
          <div className='testimonials-content'>
            {/* Testimonial Card 1 */}
            <div className='testimonials-card'>
              <img
                src='/img/clients/client_logo_1.svg'
                alt='client logo'
                className='client-logo'
              />
              <p className='client-comment'>
                ¡Increíble! Mi web de cosmética es perfecta. Gracias por captar
                mi visión y crear una plataforma que refleja la esencia de mi
                marca. ¡Totalmente satisfecha!
              </p>
              <div className='author'>
                <img
                  src='/img/clients/client_5.jpeg'
                  alt='author'
                  className='author-img'
                />
                <div>
                  <p className='author-name'>Valentina Cárdenas</p>
                  <p className='author-position'>Emprendedora</p>
                </div>
              </div>
            </div>
            {/* End Testimonials Card 1 */}
            {/* Testimonials Card 2 */}
            <div className='testimonials-card'>
              <img
                src='/img/clients/client_logo_2.svg'
                alt='client logo'
                className='client-logo'
              />
              <p className='client-comment'>
                La web para mi foodtruck superó mis expectativas. Diseño único y
                sus funcionalidades son ideales. Mis clientes aman la
                experiencia online. ¡Gracias por hacerlo posible!
              </p>
              <div className='author'>
                <img
                  src='/img/clients/client_2.jpeg'
                  alt='author'
                  className='author-img'
                />
                <div>
                  <p className='author-name'>Pedro Orellana</p>
                  <p className='author-position'>Emprendedor</p>
                </div>
              </div>
            </div>
            {/* End Testimonials Card 2 */}
            {/* Testimonials Card 3 */}
            <div className='testimonials-card'>
              <img
                src='/img/clients/client_logo_3.svg'
                alt='client logo'
                className='client-logo'
              />
              <p className='client-comment'>
                Su software para corretaje de propiedades ha revolucionado mi
                negocio. Eficiente, fácil de usar y ha potenciado nuestras
                operaciones. ¡Un éxito total! Gracias por su dedicación.
              </p>
              <div className='author'>
                <img
                  src='/img/clients/client_4.jpeg'
                  alt='author'
                  className='author-img'
                />
                <div>
                  <p className='author-name'>Jorge Fuenzalida</p>
                  <p className='author-position'>Corredor de Propiedades</p>
                </div>
              </div>
            </div>
            {/* End Testimonials Card 3 */}
          </div>
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
