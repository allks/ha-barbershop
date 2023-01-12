import Block from "../../utils/block";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Features from "../../components/features/features";
import News from "../../components/news/news";
import Gallery from "../../components/gallery/gallery";
import Contacts from "../../components/contacts/contacts";
import Appointment from "../../components/appointment/appointment";
// import Popup from "../../components/popup/popup";

import home from "./home.tml";
import "./home.scss";
// import router from "../../utils/router";
// import Link from "../../components/link/link";

class Home extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const features = new Features();
    const news = new News();
    const gallery = new Gallery();
    const contacts = new Contacts();
    const appointment = new Appointment();
    const footer = new Footer();
    // const popup = new Popup();

    super("div", {
      header,
      features,
      news,
      gallery,
      contacts,
      appointment,
      footer,
      ...props
    });
  }

  render() {
    return this.setTemplate(home, this.props);
  }
}

export default Home;
