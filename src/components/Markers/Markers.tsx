import { Marker, Popup } from "react-leaflet";
import iconMap from "../../assets/placeholder.png";
import { Icon, IconOptions } from "leaflet";

const iconClip = new Icon<IconOptions>({
  iconUrl: iconMap,
  iconSize: [24, 24],
});

const Markers = () => {
  return (
    <>
      <Marker
        position={[41.48258619792916, 1.6043544530247325]}
        icon={iconClip}
      >
        <Popup>
          Fabrica <br /> Can Xombo.
        </Popup>
      </Marker>
      <Marker position={[41.474609793784985, 1.6104897425357874]}>
        <Popup>
          Rentadors <br /> Zona verde.
        </Popup>
      </Marker>
    </>
  );
};

export default Markers;
