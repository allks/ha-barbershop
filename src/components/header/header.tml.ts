import Handlebars from "handlebars";

const header = Handlebars.compile(
  `<header class="header">
    <nav class="header__nav">
      <div class="header__nav-wrapper">
        <div class="container">
          <ul class="header__items">
            <li class="header__item">
              {{{infoLink}}}
            </li>
            <li class="header__item">
              {{{newsLink}}}
            </li>
            <li class="header__item">
              {{{priceLink}}}
            </li>
            <li class="header__item">
              {{{storeLink}}}
            </li>
            <li class="header__item">
              {{{contactsLink}}}
            </li>
          </ul>
          <ul class="header__btns">
            <li><a class="header__login" href="login.html">Вход</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>`
);

export default header;
