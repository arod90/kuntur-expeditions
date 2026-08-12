// Central image map — static imports so next/image can optimize (AVIF/WebP,
// responsive sizes, blur placeholders) and fingerprint each file. Keys mirror
// the original design's IMG object so components read the same way.
import heroAndes from "@/assets/img/hero-andes.jpg";
import heroAndesFg from "@/assets/img/hero-andes-fg.png";
import homeGalapagos from "@/assets/img/home-galapagos.jpg";
import homeGalapagosFg from "@/assets/img/home-galapagos-fg.png";
import homeCoast from "@/assets/img/home-coast.jpg";
import homeCoastFg from "@/assets/img/home-coast-fg.png";
import homeAmazon from "@/assets/img/home-amazon.jpg";
import homeAmazonFg from "@/assets/img/home-amazon-fg.png";
import alpaca from "@/assets/img/alpaca.jpg";
import monkeys from "@/assets/img/monkeys.jpg";
import tileSierra from "@/assets/img/tile-sierra.jpg";
import tileGalapagos from "@/assets/img/tile-galapagos.jpg";
import tileQuito from "@/assets/img/tile-quito.jpg";
import chimborazo from "@/assets/img/chimborazo.jpg";
import guideIce from "@/assets/img/guide-ice.jpg";
import guideKichwa from "@/assets/img/guide-kichwa.jpg";
import guideAmazon from "@/assets/img/guide-amazon.jpg";
import guideDiver from "@/assets/img/guide-diver.jpg";
import jaguar from "@/assets/img/jaguar.jpg";
import quilotoa from "@/assets/img/quilotoa.jpg";
import andesSierra from "@/assets/img/andes-sierra.jpg";
import cotopaxi from "@/assets/img/cotopaxi.jpg";
import rucu from "@/assets/img/rucu-pichincha.jpg";
import amazonCanoe from "@/assets/img/amazon-canoe.jpg";
import amazonRainbow from "@/assets/img/amazon-rainbow.jpg";
import amazonMonkey from "@/assets/img/amazon-monkey.jpg";
import amazonRiver from "@/assets/img/amazon-river.jpg";
import amazonToucan from "@/assets/img/amazon-toucan.jpg";
import galSealions from "@/assets/img/galapagos-sealions.jpg";
import galIguanas from "@/assets/img/galapagos-iguanas.jpg";
import galBartolome from "@/assets/img/galapagos-bartolome.jpg";
import galKicker from "@/assets/img/galapagos-kicker-rock.jpg";
import galTortoise from "@/assets/img/galapagos-tortoise.jpg";
import galTortoisesTrail from "@/assets/img/galapagos-tortoises-trail.jpg";
import galPup from "@/assets/img/galapagos-sealion-pup.jpg";
import quitoPanorama from "@/assets/img/quito-panorama.jpg";
import quitoCyclist from "@/assets/img/quito-cyclist.jpg";
import quitoSanFrancisco from "@/assets/img/quito-san-francisco.jpg";
import quitoBasilica from "@/assets/img/quito-basilica.jpg";
import quitoPortrait from "@/assets/img/quito-portrait.jpg";

export const IMG = {
  heroAndes, heroAndesFg,
  homeGalapagos, homeGalapagosFg,
  homeCoast, homeCoastFg,
  homeAmazon, homeAmazonFg,
  alpaca, monkeys,
  tileSierra, tileGalapagos, tileQuito,
  chimborazo, guideIce, guideKichwa, guideAmazon, guideDiver,
  jaguar, quilotoa,
  sierra: andesSierra,
  cotopaxi, rucu,
  amazonCanoe, amazonRainbow, amazonMonkey, amazonRiver, amazonToucan,
  galSealions, galIguanas, galBartolome, galKicker, galTortoise, galTortoisesTrail, galPup,
  quitoPanorama, quitoCyclist, quitoSanFrancisco, quitoBasilica, quitoPortrait,
  // back-compat alias
  plaza: quitoSanFrancisco,
};
