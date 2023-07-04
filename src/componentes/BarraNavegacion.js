import "./BarraNavegacion.css";

export default function BarraNavegacion() {
return (
<header>
    <div className="logo">
    <img src="./assets/cheff/facha.png" alt="logo" />
    </div>
    <input type="checkbox" id="nav_check" hidden />
    <nav>
    <div className="logo">
        <img src="./assets/cheff/facha.png" alt="logo" />
    </div>
    <ul>
        <li>
        <a href="#" className="active">Home</a>
        </li>
        <li>
        <a href="./pages/españa.html">España</a>
        </li>
        <li>
        <a href="./pages/francia.html">Francia</a>
        </li>
        <li>
        <a href="./pages/italia.html">Italia</a>
        </li>
        <li>
        <a href="./pages/nosotros.html">Nosotros</a>
        </li>
        <li>
        <a href="./pages/Contacto.html">Contacto</a>
        </li>
    </ul>
    </nav>
    <label for="nav_check" className="hamburger">
    <div></div>
    <div></div>
    <div></div>
    </label>
</header>
);
}
