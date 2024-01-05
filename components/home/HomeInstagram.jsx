import SectionTitle from "../SectionTitle";
import InstagramModal from "../InstagramModal";
import { FaInstagram } from "react-icons/fa";

const data = [
  {image: "/homepage/insta1.png", description : "Hayat dönüştürünce güzel! İleri dönüştürülmüş kağıt hamurundan tepsi. Toksik olmayan doğa dostu boya ve cila kullanılarak elde üretilmiştir. Recycling is out, upcycling is in… Upcycled and hand-made papier-maché tray. Coloured and varnished with non-toxic materials.", hash: "#upcycle #papiermache #papiermaché #homedecor #gift #ecofriendly"},
  {image: "/homepage/insta2.png", description: "Atık kumaşlardan elde üretilmiş yastık kılıfları. Pillow cases made out of waste fabrics.", hash: "#handmade #pillowcase #homedecor #gift #ileridönüşüm #elyapımı #evdekorasyonu #yastık #hediye"},
  {image: "/homepage/insta3.png", description : "Atık kumaşlardan elde üretilmiş espadril. Hand-made espadrilles made out of waste fabrics.", hash: "#upcycle #ecofriendly #design #handmade #gift #giftideas #crueltyfreegifts #espadrilles #shoes #ileridönüşüm #hediye #dogadostu #espadril #ayakkabı"},
  {image: "/homepage/insta4.png", description: "Atık kağıtlardan elde ürettiğimiz kase ve çerezlikler toksik olmayan doğa dostu boya ve cilalarla renklendirilmiştir. Papier-maché bowls made out of used newspapers..", hash: " #upcyle #papier-maché #bowl #handmade #ecofriendly #nontoxic #gift #ileridönüşüm #kağıthamuru #kase #hediye"},

];

const HomeInstagram = () => {
  return (
    <section className="pb-12">
      <div className="pb-2 sm:pb-2 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle
          first={<FaInstagram fill="#674B24" size={24} />}
          second={"FOLLOW US"}
          third={false}
          classes={"xl:ps-8"}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 pt-4 gap-1">
        {data.map((imageItem, i) => (
          <div key={i}>
            <InstagramModal imageItem={imageItem} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default HomeInstagram;
