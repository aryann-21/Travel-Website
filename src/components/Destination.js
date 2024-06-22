import classes from "./Destination.module.css";
import DestinationData from "./DestinationData";
import udaipur1 from "../assets/udaipur1.avif";
import udaipur2 from "../assets/udaipur2.avif";
import Jaisalmer1 from "../assets/jaisalmer1.avif";
import jaisalmer2 from "../assets/jaisalmer2.avif";
import jodhpur1 from "../assets/jodhpur1.avif";
import jodhpur2 from "../assets/jodhpur2.avif";
import bikaner1 from "../assets/bikaner1.avif";
import bikaner2 from "../assets/bikaner2.avif";
import jaipur1 from "../assets/jaipur1.avif";
import jaipur2 from "../assets/jaipur2.avif";

const Destination = () => {
  return (
    <div className={classes.destination}>
      <h1>Must Visit Destinations</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '100px' }}>
        Explore Rajasthan’s royal heritage, vibrant culture, and stunning beauty with unforgettable experiences</p>
      <DestinationData
        cName="first-description"
        heading="Udaipur, The City of Lakes"
        text='Udaipur, often called the "City of Lakes," is renowned for its picturesque lakes, grand palaces, and vibrant culture. The shimmering Lake Pichola with the iconic Lake Palace creates a mesmerizing backdrop. The City Palace, overlooking the lake, showcases exquisite architecture and houses a museum displaying royal artifacts. Udaipur is a hub of traditional art and craft, with lively markets offering colorful textiles, intricate jewelry, and handicrafts'
        img1={udaipur1}
        img2={udaipur2}
      />
      <DestinationData
        cName="first-description-reverse"
        heading="Jaisalmer, The Golden City"
        text='Jaisalmer, known as the "Golden City," stands amidst the Thar Desert, characterized by its golden sandstone architecture that glows with a honey-gold hue at sunset. The imposing Jaisalmer Fort, a UNESCO World Heritage Site, rises majestically from the desert. Explore the narrow alleys adorned with intricately carved havelis (mansions) like Patwon ki Haveli and Salim Singh ki Haveli. The desert around Jaisalmer offers camel safaris, camping under the stars, and a glimpse into Rajasthan’s nomadic culture.'
        img1={Jaisalmer1}
        img2={jaisalmer2}
      />
      <DestinationData
        cName="first-description"
        heading="Jodhpur, The Blue City"
        text='Jodhpur, the "Blue City," captivates with its azure-painted houses that give it a distinctive charm. Dominating the city skyline is the formidable Mehrangarh Fort, one of India`s largest forts, offering panoramic views of the blue cityscape below. The city’s bustling markets, narrow lanes, and vibrant bazaars brim with textiles, handicrafts, and spices. Visit the Umaid Bhawan Palace, a grand architectural marvel blending Rajput and European styles, now partially a museum and a luxury hotel.'
        img1={jodhpur1}
        img2={jodhpur2}
      />
      <DestinationData
        cName="first-description-reverse"
        heading="Jaipur, The Pink City"
        text='Jaipur, the "Pink City," is Rajasthan`s bustling capital and a gateway to the state’s rich heritage. Explore the City Palace complex, a magnificent blend of Rajput, Mughal, and European architectural styles. The Hawa Mahal (Palace of Winds), with its intricate facade and honeycomb design, is an iconic symbol of Jaipur. Discover the astronomical wonders at Jantar Mantar, an ancient observatory, and shop for vibrant textiles, gemstones, and handicrafts at Jaipur’s bustling markets'
        img1={jaipur1}
        img2={jaipur2}
      />
      <DestinationData
        cName="first-description"
        heading="Bikaner, The Camel Country"
        text='Bikaner, nestled in the northern part of Rajasthan, is famous for its impressive Junagarh Fort, a formidable structure adorned with intricate stone carvings and ornate balconies. The city is renowned for its culinary delights, including the famous Bikaneri bhujia and traditional sweets. The Karni Mata Temple in Deshnok, known for its resident rats considered sacred, attracts visitors seeking spiritual experiences unique to Rajasthan.'
        img1={bikaner1}
        img2={bikaner2}
      />
    </div>

  );
};

export default Destination;
