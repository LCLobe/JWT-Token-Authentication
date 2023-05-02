// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>LoginMate</h2>
            <p>
              LoginMate es una plataforma que facilita la autenticación segura y
              rápida para aplicaciones web y móviles. Nuestra misión es proteger
              la información y la privacidad de nuestros usuarios.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Enlaces útiles</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white">Acerca de</a>
              </li>
              <li>
                <a href="/privacy" className="text-white">Política de privacidad</a>
              </li>
              <li>
                <a href="/terms" className="text-white">Términos y condiciones</a>
              </li>
              <li>
                <a href="/contact" className="text-white">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <small>&copy; {new Date().getFullYear()} LoginMate. Todos los derechos reservados.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;