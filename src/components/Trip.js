import classes from "./Trip.module.css";
import TripData from "./TripData";
import Trip1 from "../assets/beach-service.jpg";
import Trip2 from "../assets/12.jpg";
import Trip3 from "../assets/8.jpg";
import mountAbu from "../assets/mountAbu.avif"
import ranthambore from "../assets/ranthambore.avif"
import palace from "../assets/palace.jpg"
import sheeshMahal from "../assets/sheeshMahal.avif"
import bhangarh from "../assets/bhangarh.avif"
import elefant from "../assets/elefant.avif"

function Trip() {
  return (
    <div className={classes.trip}>
      <h1>Popular Attractions</h1>
      <p>Uncover Rajasthan’s iconic attractions and hidden treasures</p>
      <div className={classes.tripcard}>
        <TripData
          image={mountAbu}
          heading="Mount Abu"
          text="Nestled amidst the Aravalli Range, Mount Abu beckons with its serene Nakki Lake reflecting the lush greenery, while the intricate marble carvings of Dilwara Temples whisper tales of ancient craftsmanship and spiritual devotion."
        />

        <TripData
          image={ranthambore}
          heading="Ranthambore"
          text="In the heart of Rajasthan lies Ranthambore National Park, where the raw beauty of nature unfolds with every tiger's roar echoing through ancient ruins, inviting wildlife enthusiasts to witness the majestic Bengal tiger in its natural habitat."
        />

        <TripData
          image={palace}
          heading="Palace on Wheels"
          text="Step aboard the Palace on Wheels, where luxurious interiors adorned with royal splendor whisk travelers back to Rajasthan’s regal era. From Jaipur's pink hues to Udaipur's lakeside opulence, this train journey offers a grand odyssey through palaces, forts, and vibrant bazaars."
        />

        <TripData
          image={sheeshMahal}
          heading="Sheesh Mahal"
          text="Enter the enchanting Sheesh Mahal, the Hall of Mirrors within Amber Fort, where a thousand reflections dance in intricate patterns across walls and ceilings, reflecting the opulence and artistic finesse of Jaipur's royal heritage."
        />

        <TripData
          image={bhangarh}
          heading="Bhangarh Fort"
          text="Perched amidst the Aravalli hills, Bhangarh Fort stands as a haunting reminder of Rajasthan's mystical past. Explore its eerie corridors and crumbling ruins, where legends of curses and ghostly encounters add an air of intrigue to its ancient stones."
        />

        <TripData
          image={elefant}
          heading="Elefantastic"
          text="At Elefantastic in Jaipur, immerse yourself in a heartwarming journey of human-elephant connection. Engage in activities like feeding and painting these gentle giants, fostering a deeper appreciation for their intelligence and role in Rajasthan's cultural heritage."
        />

      </div>
    </div>
  );
}

export default Trip;
