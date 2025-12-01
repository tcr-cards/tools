// To parse this data:
//
//   import { Convert } from "./file";
//
//   const cardSlim = Convert.toCardSlim(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CardSlim {
  artist: string;
  avgPrice: number;
  cardId: string;
  collectionId: CardSlimCollectionID;
  collectionName: CardSlimCollectionName;
  created: Date;
  energyTypes: EnergyType[];
  id: string;
  image: string;
  marketPrices: MarketPrice[] | null;
  name: string;
  number: string;
  pokemons: string[];
  position: number;
  rarity: Rarity;
  regulationMark: RegulationMark;
  reprints: string[];
  set: Set;
  supertype: Supertype;
  thumbnail: string;
  trainerType: TrainerType;
  updated: Date;
  variants: VariantElement[] | null;
}

export enum CardSlimCollectionID {
  Kh2Yw2Oaypvi7Uh = "kh2yw2oaypvi7uh",
}

export enum CardSlimCollectionName {
  Cards = "cards",
}

export enum EnergyType {
  Colorless = "Colorless",
  Darkness = "Darkness",
  Dragon = "Dragon",
  Fairy = "Fairy",
  Fighting = "Fighting",
  Fire = "Fire",
  Grass = "Grass",
  Lightning = "Lightning",
  Metal = "Metal",
  Psychic = "Psychic",
  Water = "Water",
}

export interface MarketPrice {
  collectionId: MarketPriceCollectionID;
  collectionName: MarketPriceCollectionName;
  created: Date;
  id: string;
  market: Market;
  prices: Price[];
  updated: Date;
}

export enum MarketPriceCollectionID {
  Y5Afe1R6A7Ei4Ub = "y5afe1r6a7ei4ub",
}

export enum MarketPriceCollectionName {
  MarketPrices = "marketPrices",
}

export interface Market {
  collectionId: MarketCollectionID;
  collectionName: MarketCollectionName;
  created: Date;
  id: MarketID;
  logo: string;
  logoDark: string;
  marketId: MarketIDEnum;
  name: Name;
  updated: Date;
}

export enum MarketCollectionID {
  B7Bvb75La91N2Hb = "b7bvb75la91n2hb",
}

export enum MarketCollectionName {
  Markets = "markets",
}

export enum MarketID {
  Hleizngb69Cspxr = "hleizngb69cspxr",
  R50Knjxb3M2Tqax = "r50knjxb3m2tqax",
  The01Mr3Ggdsfrdt2Q = "01mr3ggdsfrdt2q",
  The1Clashd6Ur54Hyd = "1clashd6ur54hyd",
  The1No0Mnx73Wmozen = "1no0mnx73wmozen",
  The8Xjchahhminxksk = "8xjchahhminxksk",
  Tiq399Nygtuygu8 = "tiq399nygtuygu8",
}

export enum MarketIDEnum {
  Cardmarket = "cardmarket",
  Cardrush = "cardrush",
  Clabo = "clabo",
  Ebay = "ebay",
  Fullcomp = "fullcomp",
  TcgPlayer = "tcgPlayer",
  YuyuTei = "yuyu-tei",
}

export enum Name {
  CLabo = "C-labo",
  Cardmarket = "Cardmarket",
  Cardrush = "Cardrush",
  EBay = "eBay",
  Fullcomp = "Fullcomp",
  TCGPlayer = "TCGPlayer",
  YuyuTei = "Yuyu-tei",
}

export interface Price {
  collectionId: PriceCollectionID;
  collectionName: PriceCollectionName;
  created: Date;
  id: string;
  max: string;
  min: string;
  updated: Date;
  url: string;
  variant: VariantEnum;
}

export enum PriceCollectionID {
  Bkj3U54Xed161U3 = "bkj3u54xed161u3",
}

export enum PriceCollectionName {
  Prices = "prices",
}

export enum VariantEnum {
  Ae2Ubpjem7T516K = "ae2ubpjem7t516k",
  B2Heau5Mlyywl5H = "b2heau5mlyywl5h",
  B7E5Qh63Rguekrm = "b7e5qh63rguekrm",
  Bahjn48N613Yl7U = "bahjn48n613yl7u",
  Bix7Wa1V2Xwou8V = "bix7wa1v2xwou8v",
  Btnzcf2Y8Bla103 = "btnzcf2y8bla103",
  Cjo21Fm4H3C8Gz0 = "cjo21fm4h3c8gz0",
  Cxvz7Q4Kx1Ekuwl = "cxvz7q4kx1ekuwl",
  Dci69Tmo2Jdw838 = "dci69tmo2jdw838",
  Dfkp0Bpgt5Fu010 = "dfkp0bpgt5fu010",
  Ecrd4Cwsazzuhba = "ecrd4cwsazzuhba",
  Ej3Ly949Rby38Qd = "ej3ly949rby38qd",
  Eooaol8Q8Crq7NS = "eooaol8q8crq7ns",
  Eusujoa8Cx3Mq3Q = "eusujoa8cx3mq3q",
  F4Ebzv1F87Ejqwi = "f4ebzv1f87ejqwi",
  Fh2Yvh77G7Nf4Df = "fh2yvh77g7nf4df",
  Fl6X4Driyddd0Bp = "fl6x4driyddd0bp",
  Foli5Jpk7Fg8Ilh = "foli5jpk7fg8ilh",
  Fqchxglhptdm5Uf = "fqchxglhptdm5uf",
  Fsqf9Fprjt7Qvua = "fsqf9fprjt7qvua",
  Fvkl0Qkmoqham2S = "fvkl0qkmoqham2s",
  G16Hcailtgh4Uty = "g16hcailtgh4uty",
  G7Nlm25Cfy0Mdw2 = "g7nlm25cfy0mdw2",
  Gnf05Fhgnbszxgp = "gnf05fhgnbszxgp",
  H4Cym1A5U5Gwdhj = "h4cym1a5u5gwdhj",
  Hhqizp54Zyoc1Vy = "hhqizp54zyoc1vy",
  Ifxg55El6Jqse88 = "ifxg55el6jqse88",
  Ig7Doqve28Mjlpr = "ig7doqve28mjlpr",
  J23Eprg7Wy06Ns0 = "j23eprg7wy06ns0",
  J437Igms1W8D0Kq = "j437igms1w8d0kq",
  Ju2Iy0V0Epmhc8T = "ju2iy0v0epmhc8t",
  Juh7F5Vltnx4Zm6 = "juh7f5vltnx4zm6",
  Jz7Cdv0Qs42Uqrl = "jz7cdv0qs42uqrl",
  K0N5Mo7Gcbiz3E1 = "k0n5mo7gcbiz3e1",
  Kbfphx53S00Fkzn = "kbfphx53s00fkzn",
  Kdp9Dj0Sbexz31C = "kdp9dj0sbexz31c",
  Kg0M0Q608C1Ctix = "kg0m0q608c1ctix",
  Kpeo07Wyw6B1C5S = "kpeo07wyw6b1c5s",
  Kuq8J2Bdt8Bpmrr = "kuq8j2bdt8bpmrr",
  Kvw72Asj94Zqjqo = "kvw72asj94zqjqo",
  L1D9T58Kx44D586 = "l1d9t58kx44d586",
  Li4Mw0Yjlvbnpwv = "li4mw0yjlvbnpwv",
  Lod59N1G6Wbm50Z = "lod59n1g6wbm50z",
  Lpnsoma5Iow5I8O = "lpnsoma5iow5i8o",
  M0Rx5Xhg1Bve8V1 = "m0rx5xhg1bve8v1",
  Mhm71B7Qp0T7Lx6 = "mhm71b7qp0t7lx6",
  Mjyw7M5Z7Wcq8N6 = "mjyw7m5z7wcq8n6",
  Mpgvr1Ytd3Bh7Jn = "mpgvr1ytd3bh7jn",
  N2Zw1Tzsu23Zlgi = "n2zw1tzsu23zlgi",
  N449Vm73Fgeyxk9 = "n449vm73fgeyxk9",
  N4Hh2Ogzfxsn7Q6 = "n4hh2ogzfxsn7q6",
  N86Iu716Jt7596C = "n86iu716jt7596c",
  N8E0Wzh91L5Ngn9 = "n8e0wzh91l5ngn9",
  Nekzbrkq4Wc9Lq1 = "nekzbrkq4wc9lq1",
  Ng5Rsb9Iaiff3V7 = "ng5rsb9iaiff3v7",
  Niv6Djrq8Emnnns = "niv6djrq8emnnns",
  Nnnk8O9Gsyjinvq = "nnnk8o9gsyjinvq",
  O9Mdc9Ekffb2Qq8 = "o9mdc9ekffb2qq8",
  Oairixmtz2Lap8P = "oairixmtz2lap8p",
  Owdj63Xak40Nosk = "owdj63xak40nosk",
  P8A52Pj0Pujo8Xv = "p8a52pj0pujo8xv",
  Phl0V3095Hr5Jop = "phl0v3095hr5jop",
  Praqmqbe2R75Oof = "praqmqbe2r75oof",
  Ptz8Q838Q7D7L69 = "ptz8q838q7d7l69",
  Pwz8Wntem6Ywgdt = "pwz8wntem6ywgdt",
  Qb5Jcoc7P0Fj0Sq = "qb5jcoc7p0fj0sq",
  Qe1Hswvmxukdrfp = "qe1hswvmxukdrfp",
  Qtrjb09Ge5Rb7Dk = "qtrjb09ge5rb7dk",
  Qv1Tquemboc17Bu = "qv1tquemboc17bu",
  R9J1Ezgv444Jkla = "r9j1ezgv444jkla",
  Rzlcvcyizu7Anu8 = "rzlcvcyizu7anu8",
  Sn433O7Ig0Kvkw5 = "sn433o7ig0kvkw5",
  Sr9V4Tzy5Gsqzzm = "sr9v4tzy5gsqzzm",
  The00K41W57Pi7A0RF = "00k41w57pi7a0rf",
  The0Nn1R8C35D3M8Ss = "0nn1r8c35d3m8ss",
  The0Ssea7Lxqj46Qxa = "0ssea7lxqj46qxa",
  The11Megzm9Dphzk5K = "11megzm9dphzk5k",
  The14Zhkbs6Qqjryyr = "14zhkbs6qqjryyr",
  The1Kd0Wx4Dari8Uw4 = "1kd0wx4dari8uw4",
  The1Vixbjibneqzbsr = "1vixbjibneqzbsr",
  The23Qgujql7Gtgrix = "23qgujql7gtgrix",
  The2Dq9M9B2A21Nyaf = "2dq9m9b2a21nyaf",
  The2Ek5Ir2Gfgc1Vvs = "2ek5ir2gfgc1vvs",
  The2Ess9O1Oec09Yb7 = "2ess9o1oec09yb7",
  The2Z6Doyvimk72W9B = "2z6doyvimk72w9b",
  The3Gb1Suqze7N8Cwh = "3gb1suqze7n8cwh",
  The3Xh95Xfeihr7Yl8 = "3xh95xfeihr7yl8",
  The404S3We42Zrmlha = "404s3we42zrmlha",
  The4Blokh8Uo34Fzbj = "4blokh8uo34fzbj",
  The4Osql6Qaemgq6Nf = "4osql6qaemgq6nf",
  The51Vlu9Vcek1Bzlb = "51vlu9vcek1bzlb",
  The55Brh1Jzenle0Kk = "55brh1jzenle0kk",
  The5D91Aoex532Wvu5 = "5d91aoex532wvu5",
  The5Fwimeuhipzh1Bs = "5fwimeuhipzh1bs",
  The5Hkl89Qm7Rfhbom = "5hkl89qm7rfhbom",
  The5N2V5Y9Gnv6Ojzm = "5n2v5y9gnv6ojzm",
  The68W2M03K3Prnu0G = "68w2m03k3prnu0g",
  The6Ebs6138Rebmzx9 = "6ebs6138rebmzx9",
  The6Iwvfmjlo8Fs1Cq = "6iwvfmjlo8fs1cq",
  The6J8Bdkw6Zpqiz8M = "6j8bdkw6zpqiz8m",
  The6Mw1Rk7M5Hc80H4 = "6mw1rk7m5hc80h4",
  The6Upyqxx056Slct1 = "6upyqxx056slct1",
  The6Y2C0D2Vc9N3C2B = "6y2c0d2vc9n3c2b",
  The71S95Yhndetwh0E = "71s95yhndetwh0e",
  The7Ez682Kipbzo8PE = "7ez682kipbzo8pe",
  The7Q3R8Yfekrtwzbr = "7q3r8yfekrtwzbr",
  The85Dxe1Jzi26Glkx = "85dxe1jzi26glkx",
  The88T39M8W7E22K65 = "88t39m8w7e22k65",
  The89Mcstoe0Fyvvcl = "89mcstoe0fyvvcl",
  The8S6Medeucstvziu = "8s6medeucstvziu",
  The8Td9Lbizh5Qoua8 = "8td9lbizh5qoua8",
  The8Trsw391Gplsl0T = "8trsw391gplsl0t",
  The8Za1Kd0L2Xdd3J2 = "8za1kd0l2xdd3j2",
  The9Pljy9Bkrm14Vjo = "9pljy9bkrm14vjo",
  Ti8Qtl8Opejysqt = "ti8qtl8opejysqt",
  Tlizvizypfg4Qzs = "tlizvizypfg4qzs",
  Tndo98Qdkpy7A47 = "tndo98qdkpy7a47",
  Ubirj2E1Np5Yp0M = "ubirj2e1np5yp0m",
  Uf4J9Uni5Iwym3N = "uf4j9uni5iwym3n",
  Up1Ihwicbum6C51 = "up1ihwicbum6c51",
  Uz83Hpl2Lnci8CR = "uz83hpl2lnci8cr",
  V48O81Yej21Bxpr = "v48o81yej21bxpr",
  Vfysz6Hyp446Kfe = "vfysz6hyp446kfe",
  Vjub9Pnivg7C4Ev = "vjub9pnivg7c4ev",
  Vrx7Ano9E3Luzp1 = "vrx7ano9e3luzp1",
  W6Pwlfoxjyzzdi6 = "w6pwlfoxjyzzdi6",
  Wbpub1Ymv7Kh6CF = "wbpub1ymv7kh6cf",
  Wj914Vo1I0Deijh = "wj914vo1i0deijh",
  Wntugxz8Wq330M5 = "wntugxz8wq330m5",
  Xhmxa1Kvnwhh1At = "xhmxa1kvnwhh1at",
  Xhnexrwbmh71Ans = "xhnexrwbmh71ans",
  Xnjbqrvnlm6Mlod = "xnjbqrvnlm6mlod",
  Ye4S48T5R69Okef = "ye4s48t5r69okef",
  Ypv4Yctgy3Dz1Yc = "ypv4yctgy3dz1yc",
  Yz5Dxkggizv8Acv = "yz5dxkggizv8acv",
  Z2Uwwoic1Gvx2S2 = "z2uwwoic1gvx2s2",
  Z5Nv99U91Rwmc1H = "z5nv99u91rwmc1h",
  Zcg2D4Iom4Vg0D5 = "zcg2d4iom4vg0d5",
  Zvmuve43Pn5Mlab = "zvmuve43pn5mlab",
}

export enum Rarity {
  Bi1Ehska0Rgi8Bu = "bi1ehska0rgi8bu",
  D3Izrpjpspf6Xwd = "d3izrpjpspf6xwd",
  Dep2N33M1Labbk0 = "dep2n33m1labbk0",
  Drvmrxhuhulon7Z = "drvmrxhuhulon7z",
  El2T77Gd3458Aid = "el2t77gd3458aid",
  Empty = "",
  F9S580152Stlg7Q = "f9s580152stlg7q",
  G3Gnqa6Mm7Gbrq3 = "g3gnqa6mm7gbrq3",
  Hwhh50Taudzc7Xw = "hwhh50taudzc7xw",
  Iir85Skllzjcuxy = "iir85skllzjcuxy",
  Kki7Eksbq09Nxjj = "kki7eksbq09nxjj",
  Mmnfd2Obfeixa30 = "mmnfd2obfeixa30",
  N5Pt7W0N2Bwkos6 = "n5pt7w0n2bwkos6",
  Niej9L7Srr6K4CA = "niej9l7srr6k4ca",
  O9Z7Ohpk6Ba0Imf = "o9z7ohpk6ba0imf",
  P7Px9Mjsaho56Yu = "p7px9mjsaho56yu",
  Pa5Zwd0Ka6Q2B7S = "pa5zwd0ka6q2b7s",
  Pv2O3Gmnt046Nl0 = "pv2o3gmnt046nl0",
  Ryul5971Os1Zr13 = "ryul5971os1zr13",
  The0Eli1Z13Nolbcbw = "0eli1z13nolbcbw",
  The1R21R25E9Xcnqf8 = "1r21r25e9xcnqf8",
  The1Ttipifedpb977N = "1ttipifedpb977n",
  The25578Gk07Vil6Yu = "25578gk07vil6yu",
  The2Py5Rxloknh4Cdj = "2py5rxloknh4cdj",
  The343V2Nrc2Etg5Ot = "343v2nrc2etg5ot",
  The3Ufjf7Guleqmun6 = "3ufjf7guleqmun6",
  The9Qw8Ysscf50L0W1 = "9qw8ysscf50l0w1",
  Tlmh2Giczvv8V9I = "tlmh2giczvv8v9i",
  Uii7W86Csae8Nea = "uii7w86csae8nea",
  Uyo7Vea38Rjl3De = "uyo7vea38rjl3de",
  Xphita2Kxadiady = "xphita2kxadiady",
  Zz8Ftpmtsv78Yjw = "zz8ftpmtsv78yjw",
}

export enum RegulationMark {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  Empty = "",
  F = "F",
  G = "G",
  H = "H",
  I = "I",
  None = "None",
  RegulationMarkD = "d",
  RegulationMarkF = "f",
}

export interface Set {
  background: string;
  collectionId: SetCollectionID;
  collectionName: SetCollectionName;
  created: Date;
  id: string;
  logo: string;
  name: string;
  numberOfCards: number;
  releaseDate: string;
  series: Series;
  setId: string;
  symbol: string;
  updated: Date;
}

export enum SetCollectionID {
  Znoj7Lx73K0Vwkq = "znoj7lx73k0vwkq",
}

export enum SetCollectionName {
  Sets = "sets",
}

export enum Series {
  Awkgnucsn2Oe6Qy = "awkgnucsn2oe6qy",
  Bgg5Gbo9Haznst8 = "bgg5gbo9haznst8",
  Dlou7Bhaid69776 = "dlou7bhaid69776",
  E4Goste3Hmqac8N = "e4goste3hmqac8n",
  Eiyxccwaur46Pty = "eiyxccwaur46pty",
  Err32Z4Cw30H11F = "err32z4cw30h11f",
  F0Tlswfogu2Xvdb = "f0tlswfogu2xvdb",
  Fkuz7I2Gedsw3Ci = "fkuz7i2gedsw3ci",
  G1Jh757Qcxlbn18 = "g1jh757qcxlbn18",
  Gdlk96As4Yxsath = "gdlk96as4yxsath",
  H63283Gmfuaxcec = "h63283gmfuaxcec",
  Ib4Wbvbq88Qlbsb = "ib4wbvbq88qlbsb",
  K1Uhmgdeoubbhjl = "k1uhmgdeoubbhjl",
  K6Nb5Pe7Ulx0Pqf = "k6nb5pe7ulx0pqf",
  K8Uyvfb0Wmz2Sv1 = "k8uyvfb0wmz2sv1",
  Kj9Pdwnokmhsczr = "kj9pdwnokmhsczr",
  Kpmpacpfypy5X8U = "kpmpacpfypy5x8u",
  M1Muyn801Nmi70Z = "m1muyn801nmi70z",
  M5Xmx9Yskxn8Po7 = "m5xmx9yskxn8po7",
  Mnq1Dfqnmpinmpn = "mnq1dfqnmpinmpn",
  Os5H9Qmgcti78F9 = "os5h9qmgcti78f9",
  P7Zspodg9Iznko0 = "p7zspodg9iznko0",
  R360Aqsecma3Foj = "r360aqsecma3foj",
  Tdzas51Pft3Akic = "tdzas51pft3akic",
  The0Vpbmy662V5Hvvw = "0vpbmy662v5hvvw",
  The2Vgesgl7K4Ws0Yc = "2vgesgl7k4ws0yc",
  The3Nkryuaarx3Ucs4 = "3nkryuaarx3ucs4",
  The75Tdsmu0Gspk81Z = "75tdsmu0gspk81z",
  The7V1Cgqhov6R5A22 = "7v1cgqhov6r5a22",
  The9Anprrn62Jg6Ord = "9anprrn62jg6ord",
  The9K5Rwwa94M03TCP = "9k5rwwa94m03tcp",
  The9V71Cejelqhrhef = "9v71cejelqhrhef",
  U8Bveexu3Z1Mwd6 = "u8bveexu3z1mwd6",
  Ulmjs3Btpga4K0D = "ulmjs3btpga4k0d",
  Uzd9Y1O733610Zp = "uzd9y1o733610zp",
  Vbtizcun53Fafyu = "vbtizcun53fafyu",
  Vuwuxuvq2Ugdp3C = "vuwuxuvq2ugdp3c",
  W2Yl3Sderuc3Jji = "w2yl3sderuc3jji",
  W3R3D22755U9Prm = "w3r3d22755u9prm",
  Wk9Q7W4Bc31Ltf7 = "wk9q7w4bc31ltf7",
  X0Zp5I09Ucca0Zz = "x0zp5i09ucca0zz",
  Y0B6Gjpnz23Lxqa = "y0b6gjpnz23lxqa",
  Yszp8Wokqmbkcrk = "yszp8wokqmbkcrk",
  Z0Ktecp3Yo5Twym = "z0ktecp3yo5twym",
  Zf5Bamwyrpp8X5M = "zf5bamwyrpp8x5m",
  Zgfvh2Y7Piw38Lw = "zgfvh2y7piw38lw",
  Zslvsabk2U3M3N7 = "zslvsabk2u3m3n7",
}

export enum Supertype {
  Energy = "Energy",
  Pokémon = "Pokémon",
  Trainer = "Trainer",
}

export enum TrainerType {
  Empty = "",
  GoldenrodGameCorner = "Goldenrod Game Corner",
  Item = "Item",
  RocketSSecretMachine = "Rocket's Secret Machine",
  Stadium = "Stadium",
  Supporter = "Supporter",
  TechnicalMachine = "Technical Machine",
  Tool = "Tool",
}

export interface VariantElement {
  collectionId: VariantCollectionID;
  collectionName: VariantCollectionName;
  created: Date;
  group: Group;
  id: string;
  name: string;
  updated: Date;
  variantId: string;
}

export enum VariantCollectionID {
  Htg34Lz8Zl28X4R = "htg34lz8zl28x4r",
}

export enum VariantCollectionName {
  Variants = "variants",
}

export interface Group {
  alternativeLogo: string;
  collectionId: GroupCollectionID;
  collectionName: GroupCollectionName;
  created: Date;
  id: GroupID;
  logo: string;
  tintable: boolean;
  updated: Date;
  variantGroupId: VariantGroupID;
}

export enum GroupCollectionID {
  The1Z01Huyislkhh16 = "1z01huyislkhh16",
}

export enum GroupCollectionName {
  VariantGroups = "variantGroups",
}

export enum GroupID {
  Ac7W6Kolsa06Pdd = "ac7w6kolsa06pdd",
  Atncrmp70R21Izt = "atncrmp70r21izt",
  Awc7X2Salmsevka = "awc7x2salmsevka",
  Bhyu6Rtrz9Swgsh = "bhyu6rtrz9swgsh",
  Bzatxw3Vaxjti7V = "bzatxw3vaxjti7v",
  C040Inqpadhigxw = "c040inqpadhigxw",
  C6B6Xejatxdyqvz = "c6b6xejatxdyqvz",
  Ca3Poqsvjwytd7W = "ca3poqsvjwytd7w",
  Choxf6B9Qpzipsr = "choxf6b9qpzipsr",
  Crx1Qfrk25W8R2S = "crx1qfrk25w8r2s",
  D8Dcddx1Qjm9Z93 = "d8dcddx1qjm9z93",
  Dna5Lyc5Ju73Psh = "dna5lyc5ju73psh",
  Dnvgx5Fakz0B55I = "dnvgx5fakz0b55i",
  Ejj9Ab8Pv7Jvrc9 = "ejj9ab8pv7jvrc9",
  El9T1Gvobj7M92V = "el9t1gvobj7m92v",
  Euy22Kfnh2Ebk63 = "euy22kfnh2ebk63",
  Exz0Nn2R5Orxv4W = "exz0nn2r5orxv4w",
  F6Zg3Etklwhw8IP = "f6zg3etklwhw8ip",
  F989Fb2Ztbsk1Qh = "f989fb2ztbsk1qh",
  Fan5Is4V5Vgzq52 = "fan5is4v5vgzq52",
  Fc9Sat8569Z1Chk = "fc9sat8569z1chk",
  Fdje2P3Ycpv5Qba = "fdje2p3ycpv5qba",
  Fght47Iqlqop6Ts = "fght47iqlqop6ts",
  Fwirt3F5Sudz94F = "fwirt3f5sudz94f",
  Glh2Simkld5In4B = "glh2simkld5in4b",
  Gqorbhrtwydjh07 = "gqorbhrtwydjh07",
  Hgcwrgwo3X0Mrzu = "hgcwrgwo3x0mrzu",
  Hjd5Kfzbwrb0Djk = "hjd5kfzbwrb0djk",
  Hmcyzrwphhlkiqt = "hmcyzrwphhlkiqt",
  I453Jf6Dq779A9O = "i453jf6dq779a9o",
  Iiowq7Je154Yxdw = "iiowq7je154yxdw",
  Itezs7825Bpbtpd = "itezs7825bpbtpd",
  Iwtzmraoj54S9Hc = "iwtzmraoj54s9hc",
  Jc2Vpg86Kkz7V2C = "jc2vpg86kkz7v2c",
  Jr2Dnop3Y0Chhsl = "jr2dnop3y0chhsl",
  Jr4Ddwb6Xu06Vd6 = "jr4ddwb6xu06vd6",
  Jw6R4881L8O3Qgn = "jw6r4881l8o3qgn",
  K7F9Kphg8M20Xci = "k7f9kphg8m20xci",
  Ktirru950O0C7Yo = "ktirru950o0c7yo",
  L1Woyvjqtykw9R1 = "l1woyvjqtykw9r1",
  L3Xyxsfr7Inpdjz = "l3xyxsfr7inpdjz",
  L6E7Zp5Yl2Ququq = "l6e7zp5yl2ququq",
  Lyv91T9Vunzwzlr = "lyv91t9vunzwzlr",
  M1Gf8Jtmnv3Dmrh = "m1gf8jtmnv3dmrh",
  M6T0Dye1Xy1Mp2H = "m6t0dye1xy1mp2h",
  M9D1Mc9756Veeqa = "m9d1mc9756veeqa",
  Mzedbungpsqzesv = "mzedbungpsqzesv",
  Ne2Uim6D7M3Jgjt = "ne2uim6d7m3jgjt",
  Nf5Pp5Voj53Aytg = "nf5pp5voj53aytg",
  Np6Pkgkcoa2Gpax = "np6pkgkcoa2gpax",
  Nwwdzd52Tfefyyo = "nwwdzd52tfefyyo",
  Nxamygb5Je0Vox6 = "nxamygb5je0vox6",
  O2G0Vadj7Jljviu = "o2g0vadj7jljviu",
  O3O747Njkgikdjq = "o3o747njkgikdjq",
  Oh4750Q1Sz8Wp9S = "oh4750q1sz8wp9s",
  Onv3Kk4Ej6427Zy = "onv3kk4ej6427zy",
  Oo995Vy99Zk7Sx1 = "oo995vy99zk7sx1",
  Oti9Mo5Brbgws6J = "oti9mo5brbgws6j",
  Oxhdouloundbmip = "oxhdouloundbmip",
  Paiffqavywg56U7 = "paiffqavywg56u7",
  Pctlea4Wlnnhe40 = "pctlea4wlnnhe40",
  Po3L1Ranef8Av0E = "po3l1ranef8av0e",
  Q192V0M8A5Zpxmq = "q192v0m8a5zpxmq",
  Q4Ctv7Aqva0Jjiv = "q4ctv7aqva0jjiv",
  Q5Fgghzbaxb4CDP = "q5fgghzbaxb4cdp",
  Qki2D3Rvmx22Maw = "qki2d3rvmx22maw",
  Rt74Nym7Essxh2I = "rt74nym7essxh2i",
  S4Ss1Sepq98Aovu = "s4ss1sepq98aovu",
  S8Dunks9Q50Lsq7 = "s8dunks9q50lsq7",
  Shb58Wzw9Uz0Ml5 = "shb58wzw9uz0ml5",
  Skwen8Lz104Gget = "skwen8lz104gget",
  Sld0Mufesnpjj8J = "sld0mufesnpjj8j",
  Sm6Wjnjgn84Ytl9 = "sm6wjnjgn84ytl9",
  Sn67J0Zn3Rnbmj2 = "sn67j0zn3rnbmj2",
  Ssgx7Xguiycosxh = "ssgx7xguiycosxh",
  St6Hgq6Bpdtxw29 = "st6hgq6bpdtxw29",
  Stul554Bs413M6L = "stul554bs413m6l",
  T783Bt8Ayowugvb = "t783bt8ayowugvb",
  Tbnwv8Gi8Qsz9Nu = "tbnwv8gi8qsz9nu",
  The01U09Bm3Hg61Qus = "01u09bm3hg61qus",
  The03419Xhr8Db722Y = "03419xhr8db722y",
  The0Dph2Amm3Otplqq = "0dph2amm3otplqq",
  The0E6Rd6T1Tnh4Mp2 = "0e6rd6t1tnh4mp2",
  The0Fqkvkrny7Txruy = "0fqkvkrny7txruy",
  The19Nrojtghng0V0G = "19nrojtghng0v0g",
  The1Qqvswf1Gv4Lq10 = "1qqvswf1gv4lq10",
  The1V5Bskic95T3Kso = "1v5bskic95t3kso",
  The1Vxqcp06Xwpe8So = "1vxqcp06xwpe8so",
  The1W5U0Cgbxxx9Iz9 = "1w5u0cgbxxx9iz9",
  The27Gnrrb2J9Ag4Nm = "27gnrrb2j9ag4nm",
  The2Aoxc5Iqwq876Kf = "2aoxc5iqwq876kf",
  The2Icsuywkw2L0Yju = "2icsuywkw2l0yju",
  The32Ff7Xgr3Dlbenw = "32ff7xgr3dlbenw",
  The39Ntxkwpo41Vcyt = "39ntxkwpo41vcyt",
  The3Cs4Ryufh8A91Ej = "3cs4ryufh8a91ej",
  The3E6Q8X6W01Jl38W = "3e6q8x6w01jl38w",
  The3Fh28Kgqy468Arw = "3fh28kgqy468arw",
  The4Hfrn3Cbnyx0Pr7 = "4hfrn3cbnyx0pr7",
  The4Ipo9Idhf1Z120R = "4ipo9idhf1z120r",
  The4Jt1Axdbb5T4U76 = "4jt1axdbb5t4u76",
  The4Ym380Hhq5Yea1L = "4ym380hhq5yea1l",
  The4Z4Kzsi8U0Rbzhh = "4z4kzsi8u0rbzhh",
  The5088Myae0Wk9Dqv = "5088myae0wk9dqv",
  The5Obaiervz097C33 = "5obaiervz097c33",
  The5Rf6Bendqq30Go6 = "5rf6bendqq30go6",
  The5Vq2Y60Gwdv922F = "5vq2y60gwdv922f",
  The61Nrfvwazke2K4H = "61nrfvwazke2k4h",
  The6I4Hhfpj1Hv4Fj8 = "6i4hhfpj1hv4fj8",
  The6Iv0Qotiowphcmj = "6iv0qotiowphcmj",
  The6Pq93Ewt0Oc0T0I = "6pq93ewt0oc0t0i",
  The6Sfefdhytbvqf6Y = "6sfefdhytbvqf6y",
  The6Vg4Sqpqdtftdi6 = "6vg4sqpqdtftdi6",
  The702Qrfcnobp4Lw6 = "702qrfcnobp4lw6",
  The7Id6Ceiy0Ol228G = "7id6ceiy0ol228g",
  The84T3Wf4Eonzzo65 = "84t3wf4eonzzo65",
  The84Uhapt4Jsem8Ar = "84uhapt4jsem8ar",
  The8B8Lz54K2Du5Epz = "8b8lz54k2du5epz",
  The8Kjkwggc299Rb8E = "8kjkwggc299rb8e",
  The91D99Ilcfc56Izv = "91d99ilcfc56izv",
  The9Lnc5Wp0Tnwv69O = "9lnc5wp0tnwv69o",
  The9Oy0Qwa0V14Ee3V = "9oy0qwa0v14ee3v",
  The9Upnyfsgiu0I5Em = "9upnyfsgiu0i5em",
  Tle960Eulyi6Zme = "tle960eulyi6zme",
  Tltxw1Jnlkzf77R = "tltxw1jnlkzf77r",
  Tofpyxzorpbdq72 = "tofpyxzorpbdq72",
  Ts7M92Behbjicix = "ts7m92behbjicix",
  Ue7R2Ovbwlgz2Bc = "ue7r2ovbwlgz2bc",
  Ufci75Pjwbw0Kir = "ufci75pjwbw0kir",
  Uukhyod7Cqnprel = "uukhyod7cqnprel",
  Volqla2Oo16Cist = "volqla2oo16cist",
  W5L5Ito63Ernr9C = "w5l5ito63ernr9c",
  W9Hd7Bechp563R2 = "w9hd7bechp563r2",
  Wntlhwrho05G4L9 = "wntlhwrho05g4l9",
  Wqq3Kfysbir79J3 = "wqq3kfysbir79j3",
  Wwqqw01D2Nvicos = "wwqqw01d2nvicos",
  Xfh2Q5Jcwef7Xxe = "xfh2q5jcwef7xxe",
  Yfj0Czrohwezv57 = "yfj0czrohwezv57",
  Ym58U4Ngbk43Ip1 = "ym58u4ngbk43ip1",
  Zgsdhiue9Ztm1Vc = "zgsdhiue9ztm1vc",
}

export enum VariantGroupID {
  ArenaCup = "arenaCup",
  AsiaChampionshipSeries = "asiaChampionshipSeries",
  AsiaGreatBallLeague = "asiaGreatBallLeague",
  AsiaMasterBallLeague = "asiaMasterBallLeague",
  AsiaPremierBallLeague = "asiaPremierBallLeague",
  AsiaUltraBallLeague = "asiaUltraBallLeague",
  BattleAcademy2024Armarouge = "battleAcademy2024Armarouge",
  BattleAcademy2024Darkrai = "battleAcademy2024Darkrai",
  BattleAcademy2024Pikachu = "battleAcademy2024Pikachu",
  BattleRoadAutumn = "battleRoadAutumn",
  BattleRoadSpring = "battleRoadSpring",
  BeginnersSession = "beginnersSession",
  BlackStarPromo = "blackStarPromo",
  BuildABear = "buildABear",
  BurgerKing = "burgerKing",
  ChampionsLeague = "championsLeague",
  ChampionsLeague2017 = "championsLeague2017",
  CityChampionships = "cityChampionships",
  ComicCon = "comicCon",
  CoroCoroComic = "coroCoroComic",
  CoroCoroIchiban = "coroCoroIchiban",
  DaiichiPan = "daiichiPan",
  DistributorMeeting = "distributorMeeting",
  DominosPizza = "dominosPizza",
  DonaldDuckMagazine = "donaldDuckMagazine",
  E3 = "e3",
  EbGames = "ebGames",
  EventOrganizer = "eventOrganizer",
  ExtraBattleDay = "extraBattleDay",
  FirstEdition = "firstEdition",
  GameStamp = "gameStamp",
  GameStop = "gameStop",
  GamesExpo = "gamesExpo",
  GenCon = "genCon",
  GymChallenge = "gymChallenge",
  GymChallengePack = "gymChallengePack",
  HolidayCalendar = "holidayCalendar",
  Holo = "holo",
  HongKongNationalChampionships = "hongKongNationalChampionships",
  HongKongRegionalLeague = "hongKongRegionalLeague",
  IllustrationContest2022 = "illustrationContest2022",
  InQuest = "inQuest",
  InternationalChallenge = "internationalChallenge",
  InternationalChampionships = "internationalChampionships",
  IonoZone = "ionoZone",
  Jumbo = "jumbo",
  KamexMegaBattle = "kamexMegaBattle",
  KrazeClub = "krazeClub",
  Lawson = "lawson",
  LegendaryPokemon = "legendaryPokemon",
  LizardonMegaBattle = "lizardonMegaBattle",
  MalaysiaNationalChampionships = "malaysiaNationalChampionships",
  MalaysiaRegionalLeague = "malaysiaRegionalLeague",
  Marumiya = "marumiya",
  MasterBallHolo = "masterBallHolo",
  Mcdonalds = "mcdonalds",
  Meiji = "meiji",
  MovieStamp = "movieStamp",
  NationalChampionships = "nationalChampionships",
  NbaRainCityShowcase = "nbaRainCityShowcase",
  NoEreader = "noEreader",
  Normal = "normal",
  Origins = "origins",
  Other = "other",
  PhilippinesNationalChampionships = "philippinesNationalChampionships",
  PhilippinesRegionalLeague = "philippinesRegionalLeague",
  PikachuRedCheeks = "pikachuRedCheeks",
  PikachuWorldCollection = "pikachuWorldCollection",
  PlayPokemon = "playPokemon",
  PokeBallHolo = "pokeBallHolo",
  PokemonCardClassroom = "pokemonCardClassroom",
  PokemonCardFesta2017 = "pokemonCardFesta2017",
  PokemonCardFriendlyShop = "pokemonCardFriendlyShop",
  PokemonCardGym = "pokemonCardGym",
  PokemonCardStation = "pokemonCardStation",
  PokemonCenter = "pokemonCenter",
  PokemonDaisukiClub = "pokemonDaisukiClub",
  PokemonDay = "pokemonDay",
  PokemonHorizons = "pokemonHorizons",
  PokemonRocksAmerica = "pokemonRocksAmerica",
  Poketour = "poketour",
  ProfessorProgram = "professorProgram",
  QuickStarterGiftSet = "quickStarterGiftSet",
  RegionalChampionships = "regionalChampionships",
  ReverseHolo = "reverseHolo",
  SampleSet = "sampleSet",
  SchoolFesta2017 = "schoolFesta2017",
  SealedBattle = "sealedBattle",
  SevenEleven = "sevenEleven",
  Shadowless = "shadowless",
  SingaporeNationalChampionships = "singaporeNationalChampionships",
  SingaporeRegionalLeague = "singaporeRegionalLeague",
  StadiumChallenge = "stadiumChallenge",
  Stamped = "stamped",
  StateChampionships = "stateChampionships",
  TenthAnniversary = "tenthAnniversary",
  TogedemaruDeck = "togedemaruDeck",
  ToysRus = "toysRus",
  TrainerDeckA = "trainerDeckA",
  TrainerDeckB = "trainerDeckB",
  TrickOrTrade = "trickOrTrade",
  TropicalMegaBattle2001 = "tropicalMegaBattle2001",
  TurtonatorDeck = "turtonatorDeck",
  TwentiethAnniversary = "twentiethAnniversary",
  TwentyFifthAnniversary = "twentyFifthAnniversary",
  TwentyFifthAnniversaryCreaturesDeck = "twentyFifthAnniversaryCreaturesDeck",
  Uniqlo = "uniqlo",
  UnpeeledDitto = "unpeeledDitto",
  VivillonContinentalPattern = "vivillonContinentalPattern",
  VivillonElegantPattern = "vivillonElegantPattern",
  VivillonHighPlainsPattern = "vivillonHighPlainsPattern",
  VivillonIcySnowPattern = "vivillonIcySnowPattern",
  VivillonMarinePattern = "vivillonMarinePattern",
  VivillonSavannaPattern = "vivillonSavannaPattern",
  Vjump = "vjump",
  Winner = "winner",
  WizardWorld = "wizardWorld",
  WorldChampionships = "worldChampionships",
  WorldChampionshipsDeck2004 = "worldChampionshipsDeck2004",
  WorldChampionshipsDeck2005 = "worldChampionshipsDeck2005",
  WorldChampionshipsDeck2006 = "worldChampionshipsDeck2006",
  WorldChampionshipsDeck2007 = "worldChampionshipsDeck2007",
  WorldChampionshipsDeck2008 = "worldChampionshipsDeck2008",
  WorldChampionshipsDeck2009 = "worldChampionshipsDeck2009",
  WorldChampionshipsDeck2010 = "worldChampionshipsDeck2010",
  WorldChampionshipsDeck2011 = "worldChampionshipsDeck2011",
  WorldChampionshipsDeck2012 = "worldChampionshipsDeck2012",
  WorldChampionshipsDeck2013 = "worldChampionshipsDeck2013",
  WorldChampionshipsDeck2014 = "worldChampionshipsDeck2014",
  WorldChampionshipsDeck2015 = "worldChampionshipsDeck2015",
  WorldChampionshipsDeck2016 = "worldChampionshipsDeck2016",
  WorldChampionshipsDeck2017 = "worldChampionshipsDeck2017",
  WorldChampionshipsDeck2018 = "worldChampionshipsDeck2018",
  WorldChampionshipsDeck2019 = "worldChampionshipsDeck2019",
  WorldChampionshipsDeck2022 = "worldChampionshipsDeck2022",
  WorldChampionshipsDeck2023 = "worldChampionshipsDeck2023",
  WorldHobbyFair = "worldHobbyFair",
  WotcStamp = "wotcStamp",
  YuNagabaXPokemon = "yuNagabaXPokemon",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toCardSlim(json: string): CardSlim[] {
    return cast(JSON.parse(json), a(r("CardSlim")));
  }

  public static cardSlimToJson(value: CardSlim[]): string {
    return JSON.stringify(uncast(value, a(r("CardSlim"))), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : "";
  const keyText = key ? ` for key "${key}"` : "";
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a);
        })
        .join(", ")}]`;
    }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = "",
  parent: any = ""
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l("Date"), val, key, parent);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty("props")
          ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  CardSlim: o(
    [
      { json: "artist", js: "artist", typ: "" },
      { json: "avgPrice", js: "avgPrice", typ: 3.14 },
      { json: "cardId", js: "cardId", typ: "" },
      {
        json: "collectionId",
        js: "collectionId",
        typ: r("CardSlimCollectionID"),
      },
      {
        json: "collectionName",
        js: "collectionName",
        typ: r("CardSlimCollectionName"),
      },
      { json: "created", js: "created", typ: Date },
      { json: "energyTypes", js: "energyTypes", typ: a(r("EnergyType")) },
      { json: "id", js: "id", typ: "" },
      { json: "image", js: "image", typ: "" },
      {
        json: "marketPrices",
        js: "marketPrices",
        typ: u(a(r("MarketPrice")), null),
      },
      { json: "name", js: "name", typ: "" },
      { json: "number", js: "number", typ: "" },
      { json: "pokemons", js: "pokemons", typ: a("") },
      { json: "position", js: "position", typ: 0 },
      { json: "rarity", js: "rarity", typ: r("Rarity") },
      {
        json: "regulationMark",
        js: "regulationMark",
        typ: r("RegulationMark"),
      },
      { json: "reprints", js: "reprints", typ: a("") },
      { json: "set", js: "set", typ: r("Set") },
      { json: "supertype", js: "supertype", typ: r("Supertype") },
      { json: "thumbnail", js: "thumbnail", typ: "" },
      { json: "trainerType", js: "trainerType", typ: r("TrainerType") },
      { json: "updated", js: "updated", typ: Date },
      {
        json: "variants",
        js: "variants",
        typ: u(a(r("VariantElement")), null),
      },
    ],
    false
  ),
  MarketPrice: o(
    [
      {
        json: "collectionId",
        js: "collectionId",
        typ: r("MarketPriceCollectionID"),
      },
      {
        json: "collectionName",
        js: "collectionName",
        typ: r("MarketPriceCollectionName"),
      },
      { json: "created", js: "created", typ: Date },
      { json: "id", js: "id", typ: "" },
      { json: "market", js: "market", typ: r("Market") },
      { json: "prices", js: "prices", typ: a(r("Price")) },
      { json: "updated", js: "updated", typ: Date },
    ],
    false
  ),
  Market: o(
    [
      {
        json: "collectionId",
        js: "collectionId",
        typ: r("MarketCollectionID"),
      },
      {
        json: "collectionName",
        js: "collectionName",
        typ: r("MarketCollectionName"),
      },
      { json: "created", js: "created", typ: Date },
      { json: "id", js: "id", typ: r("MarketID") },
      { json: "logo", js: "logo", typ: "" },
      { json: "logoDark", js: "logoDark", typ: "" },
      { json: "marketId", js: "marketId", typ: r("MarketIDEnum") },
      { json: "name", js: "name", typ: r("Name") },
      { json: "updated", js: "updated", typ: Date },
    ],
    false
  ),
  Price: o(
    [
      { json: "collectionId", js: "collectionId", typ: r("PriceCollectionID") },
      {
        json: "collectionName",
        js: "collectionName",
        typ: r("PriceCollectionName"),
      },
      { json: "created", js: "created", typ: Date },
      { json: "id", js: "id", typ: "" },
      { json: "max", js: "max", typ: "" },
      { json: "min", js: "min", typ: "" },
      { json: "updated", js: "updated", typ: Date },
      { json: "url", js: "url", typ: "" },
      { json: "variant", js: "variant", typ: r("VariantEnum") },
    ],
    false
  ),
  Set: o(
    [
      { json: "background", js: "background", typ: "" },
      { json: "collectionId", js: "collectionId", typ: r("SetCollectionID") },
      {
        json: "collectionName",
        js: "collectionName",
        typ: r("SetCollectionName"),
      },
      { json: "created", js: "created", typ: Date },
      { json: "id", js: "id", typ: "" },
      { json: "logo", js: "logo", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "numberOfCards", js: "numberOfCards", typ: 0 },
      { json: "releaseDate", js: "releaseDate", typ: "" },
      { json: "series", js: "series", typ: r("Series") },
      { json: "setId", js: "setId", typ: "" },
      { json: "symbol", js: "symbol", typ: "" },
      { json: "updated", js: "updated", typ: Date },
    ],
    false
  ),
  VariantElement: o(
    [
      {
        json: "collectionId",
        js: "collectionId",
        typ: r("VariantCollectionID"),
      },
      {
        json: "collectionName",
        js: "collectionName",
        typ: r("VariantCollectionName"),
      },
      { json: "created", js: "created", typ: Date },
      { json: "group", js: "group", typ: r("Group") },
      { json: "id", js: "id", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "updated", js: "updated", typ: Date },
      { json: "variantId", js: "variantId", typ: "" },
    ],
    false
  ),
  Group: o(
    [
      { json: "alternativeLogo", js: "alternativeLogo", typ: "" },
      { json: "collectionId", js: "collectionId", typ: r("GroupCollectionID") },
      {
        json: "collectionName",
        js: "collectionName",
        typ: r("GroupCollectionName"),
      },
      { json: "created", js: "created", typ: Date },
      { json: "id", js: "id", typ: r("GroupID") },
      { json: "logo", js: "logo", typ: "" },
      { json: "tintable", js: "tintable", typ: true },
      { json: "updated", js: "updated", typ: Date },
      {
        json: "variantGroupId",
        js: "variantGroupId",
        typ: r("VariantGroupID"),
      },
    ],
    false
  ),
  CardSlimCollectionID: ["kh2yw2oaypvi7uh"],
  CardSlimCollectionName: ["cards"],
  EnergyType: [
    "Colorless",
    "Darkness",
    "Dragon",
    "Fairy",
    "Fighting",
    "Fire",
    "Grass",
    "Lightning",
    "Metal",
    "Psychic",
    "Water",
  ],
  MarketPriceCollectionID: ["y5afe1r6a7ei4ub"],
  MarketPriceCollectionName: ["marketPrices"],
  MarketCollectionID: ["b7bvb75la91n2hb"],
  MarketCollectionName: ["markets"],
  MarketID: [
    "hleizngb69cspxr",
    "r50knjxb3m2tqax",
    "01mr3ggdsfrdt2q",
    "1clashd6ur54hyd",
    "1no0mnx73wmozen",
    "8xjchahhminxksk",
    "tiq399nygtuygu8",
  ],
  MarketIDEnum: [
    "cardmarket",
    "cardrush",
    "clabo",
    "ebay",
    "fullcomp",
    "tcgPlayer",
    "yuyu-tei",
  ],
  Name: [
    "C-labo",
    "Cardmarket",
    "Cardrush",
    "eBay",
    "Fullcomp",
    "TCGPlayer",
    "Yuyu-tei",
  ],
  PriceCollectionID: ["bkj3u54xed161u3"],
  PriceCollectionName: ["prices"],
  VariantEnum: [
    "ae2ubpjem7t516k",
    "b2heau5mlyywl5h",
    "b7e5qh63rguekrm",
    "bahjn48n613yl7u",
    "bix7wa1v2xwou8v",
    "btnzcf2y8bla103",
    "cjo21fm4h3c8gz0",
    "cxvz7q4kx1ekuwl",
    "dci69tmo2jdw838",
    "dfkp0bpgt5fu010",
    "ecrd4cwsazzuhba",
    "ej3ly949rby38qd",
    "eooaol8q8crq7ns",
    "eusujoa8cx3mq3q",
    "f4ebzv1f87ejqwi",
    "fh2yvh77g7nf4df",
    "fl6x4driyddd0bp",
    "foli5jpk7fg8ilh",
    "fqchxglhptdm5uf",
    "fsqf9fprjt7qvua",
    "fvkl0qkmoqham2s",
    "g16hcailtgh4uty",
    "g7nlm25cfy0mdw2",
    "gnf05fhgnbszxgp",
    "h4cym1a5u5gwdhj",
    "hhqizp54zyoc1vy",
    "ifxg55el6jqse88",
    "ig7doqve28mjlpr",
    "j23eprg7wy06ns0",
    "j437igms1w8d0kq",
    "ju2iy0v0epmhc8t",
    "juh7f5vltnx4zm6",
    "jz7cdv0qs42uqrl",
    "k0n5mo7gcbiz3e1",
    "kbfphx53s00fkzn",
    "kdp9dj0sbexz31c",
    "kg0m0q608c1ctix",
    "kpeo07wyw6b1c5s",
    "kuq8j2bdt8bpmrr",
    "kvw72asj94zqjqo",
    "l1d9t58kx44d586",
    "li4mw0yjlvbnpwv",
    "lod59n1g6wbm50z",
    "lpnsoma5iow5i8o",
    "m0rx5xhg1bve8v1",
    "mhm71b7qp0t7lx6",
    "mjyw7m5z7wcq8n6",
    "mpgvr1ytd3bh7jn",
    "n2zw1tzsu23zlgi",
    "n449vm73fgeyxk9",
    "n4hh2ogzfxsn7q6",
    "n86iu716jt7596c",
    "n8e0wzh91l5ngn9",
    "nekzbrkq4wc9lq1",
    "ng5rsb9iaiff3v7",
    "niv6djrq8emnnns",
    "nnnk8o9gsyjinvq",
    "o9mdc9ekffb2qq8",
    "oairixmtz2lap8p",
    "owdj63xak40nosk",
    "p8a52pj0pujo8xv",
    "phl0v3095hr5jop",
    "praqmqbe2r75oof",
    "ptz8q838q7d7l69",
    "pwz8wntem6ywgdt",
    "qb5jcoc7p0fj0sq",
    "qe1hswvmxukdrfp",
    "qtrjb09ge5rb7dk",
    "qv1tquemboc17bu",
    "r9j1ezgv444jkla",
    "rzlcvcyizu7anu8",
    "sn433o7ig0kvkw5",
    "sr9v4tzy5gsqzzm",
    "00k41w57pi7a0rf",
    "0nn1r8c35d3m8ss",
    "0ssea7lxqj46qxa",
    "11megzm9dphzk5k",
    "14zhkbs6qqjryyr",
    "1kd0wx4dari8uw4",
    "1vixbjibneqzbsr",
    "23qgujql7gtgrix",
    "2dq9m9b2a21nyaf",
    "2ek5ir2gfgc1vvs",
    "2ess9o1oec09yb7",
    "2z6doyvimk72w9b",
    "3gb1suqze7n8cwh",
    "3xh95xfeihr7yl8",
    "404s3we42zrmlha",
    "4blokh8uo34fzbj",
    "4osql6qaemgq6nf",
    "51vlu9vcek1bzlb",
    "55brh1jzenle0kk",
    "5d91aoex532wvu5",
    "5fwimeuhipzh1bs",
    "5hkl89qm7rfhbom",
    "5n2v5y9gnv6ojzm",
    "68w2m03k3prnu0g",
    "6ebs6138rebmzx9",
    "6iwvfmjlo8fs1cq",
    "6j8bdkw6zpqiz8m",
    "6mw1rk7m5hc80h4",
    "6upyqxx056slct1",
    "6y2c0d2vc9n3c2b",
    "71s95yhndetwh0e",
    "7ez682kipbzo8pe",
    "7q3r8yfekrtwzbr",
    "85dxe1jzi26glkx",
    "88t39m8w7e22k65",
    "89mcstoe0fyvvcl",
    "8s6medeucstvziu",
    "8td9lbizh5qoua8",
    "8trsw391gplsl0t",
    "8za1kd0l2xdd3j2",
    "9pljy9bkrm14vjo",
    "ti8qtl8opejysqt",
    "tlizvizypfg4qzs",
    "tndo98qdkpy7a47",
    "ubirj2e1np5yp0m",
    "uf4j9uni5iwym3n",
    "up1ihwicbum6c51",
    "uz83hpl2lnci8cr",
    "v48o81yej21bxpr",
    "vfysz6hyp446kfe",
    "vjub9pnivg7c4ev",
    "vrx7ano9e3luzp1",
    "w6pwlfoxjyzzdi6",
    "wbpub1ymv7kh6cf",
    "wj914vo1i0deijh",
    "wntugxz8wq330m5",
    "xhmxa1kvnwhh1at",
    "xhnexrwbmh71ans",
    "xnjbqrvnlm6mlod",
    "ye4s48t5r69okef",
    "ypv4yctgy3dz1yc",
    "yz5dxkggizv8acv",
    "z2uwwoic1gvx2s2",
    "z5nv99u91rwmc1h",
    "zcg2d4iom4vg0d5",
    "zvmuve43pn5mlab",
  ],
  Rarity: [
    "bi1ehska0rgi8bu",
    "d3izrpjpspf6xwd",
    "dep2n33m1labbk0",
    "drvmrxhuhulon7z",
    "el2t77gd3458aid",
    "",
    "f9s580152stlg7q",
    "g3gnqa6mm7gbrq3",
    "hwhh50taudzc7xw",
    "iir85skllzjcuxy",
    "kki7eksbq09nxjj",
    "mmnfd2obfeixa30",
    "n5pt7w0n2bwkos6",
    "niej9l7srr6k4ca",
    "o9z7ohpk6ba0imf",
    "p7px9mjsaho56yu",
    "pa5zwd0ka6q2b7s",
    "pv2o3gmnt046nl0",
    "ryul5971os1zr13",
    "0eli1z13nolbcbw",
    "1r21r25e9xcnqf8",
    "1ttipifedpb977n",
    "25578gk07vil6yu",
    "2py5rxloknh4cdj",
    "343v2nrc2etg5ot",
    "3ufjf7guleqmun6",
    "9qw8ysscf50l0w1",
    "tlmh2giczvv8v9i",
    "uii7w86csae8nea",
    "uyo7vea38rjl3de",
    "xphita2kxadiady",
    "zz8ftpmtsv78yjw",
  ],
  RegulationMark: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "",
    "F",
    "G",
    "H",
    "I",
    "None",
    "d",
    "f",
  ],
  SetCollectionID: ["znoj7lx73k0vwkq"],
  SetCollectionName: ["sets"],
  Series: [
    "awkgnucsn2oe6qy",
    "bgg5gbo9haznst8",
    "dlou7bhaid69776",
    "e4goste3hmqac8n",
    "eiyxccwaur46pty",
    "err32z4cw30h11f",
    "f0tlswfogu2xvdb",
    "fkuz7i2gedsw3ci",
    "g1jh757qcxlbn18",
    "gdlk96as4yxsath",
    "h63283gmfuaxcec",
    "ib4wbvbq88qlbsb",
    "k1uhmgdeoubbhjl",
    "k6nb5pe7ulx0pqf",
    "k8uyvfb0wmz2sv1",
    "kj9pdwnokmhsczr",
    "kpmpacpfypy5x8u",
    "m1muyn801nmi70z",
    "m5xmx9yskxn8po7",
    "mnq1dfqnmpinmpn",
    "os5h9qmgcti78f9",
    "p7zspodg9iznko0",
    "r360aqsecma3foj",
    "tdzas51pft3akic",
    "0vpbmy662v5hvvw",
    "2vgesgl7k4ws0yc",
    "3nkryuaarx3ucs4",
    "75tdsmu0gspk81z",
    "7v1cgqhov6r5a22",
    "9anprrn62jg6ord",
    "9k5rwwa94m03tcp",
    "9v71cejelqhrhef",
    "u8bveexu3z1mwd6",
    "ulmjs3btpga4k0d",
    "uzd9y1o733610zp",
    "vbtizcun53fafyu",
    "vuwuxuvq2ugdp3c",
    "w2yl3sderuc3jji",
    "w3r3d22755u9prm",
    "wk9q7w4bc31ltf7",
    "x0zp5i09ucca0zz",
    "y0b6gjpnz23lxqa",
    "yszp8wokqmbkcrk",
    "z0ktecp3yo5twym",
    "zf5bamwyrpp8x5m",
    "zgfvh2y7piw38lw",
    "zslvsabk2u3m3n7",
  ],
  Supertype: ["Energy", "Pokémon", "Trainer"],
  TrainerType: [
    "",
    "Goldenrod Game Corner",
    "Item",
    "Rocket's Secret Machine",
    "Stadium",
    "Supporter",
    "Technical Machine",
    "Tool",
  ],
  VariantCollectionID: ["htg34lz8zl28x4r"],
  VariantCollectionName: ["variants"],
  GroupCollectionID: ["1z01huyislkhh16"],
  GroupCollectionName: ["variantGroups"],
  GroupID: [
    "ac7w6kolsa06pdd",
    "atncrmp70r21izt",
    "awc7x2salmsevka",
    "bhyu6rtrz9swgsh",
    "bzatxw3vaxjti7v",
    "c040inqpadhigxw",
    "c6b6xejatxdyqvz",
    "ca3poqsvjwytd7w",
    "choxf6b9qpzipsr",
    "crx1qfrk25w8r2s",
    "d8dcddx1qjm9z93",
    "dna5lyc5ju73psh",
    "dnvgx5fakz0b55i",
    "ejj9ab8pv7jvrc9",
    "el9t1gvobj7m92v",
    "euy22kfnh2ebk63",
    "exz0nn2r5orxv4w",
    "f6zg3etklwhw8ip",
    "f989fb2ztbsk1qh",
    "fan5is4v5vgzq52",
    "fc9sat8569z1chk",
    "fdje2p3ycpv5qba",
    "fght47iqlqop6ts",
    "fwirt3f5sudz94f",
    "glh2simkld5in4b",
    "gqorbhrtwydjh07",
    "hgcwrgwo3x0mrzu",
    "hjd5kfzbwrb0djk",
    "hmcyzrwphhlkiqt",
    "i453jf6dq779a9o",
    "iiowq7je154yxdw",
    "itezs7825bpbtpd",
    "iwtzmraoj54s9hc",
    "jc2vpg86kkz7v2c",
    "jr2dnop3y0chhsl",
    "jr4ddwb6xu06vd6",
    "jw6r4881l8o3qgn",
    "k7f9kphg8m20xci",
    "ktirru950o0c7yo",
    "l1woyvjqtykw9r1",
    "l3xyxsfr7inpdjz",
    "l6e7zp5yl2ququq",
    "lyv91t9vunzwzlr",
    "m1gf8jtmnv3dmrh",
    "m6t0dye1xy1mp2h",
    "m9d1mc9756veeqa",
    "mzedbungpsqzesv",
    "ne2uim6d7m3jgjt",
    "nf5pp5voj53aytg",
    "np6pkgkcoa2gpax",
    "nwwdzd52tfefyyo",
    "nxamygb5je0vox6",
    "o2g0vadj7jljviu",
    "o3o747njkgikdjq",
    "oh4750q1sz8wp9s",
    "onv3kk4ej6427zy",
    "oo995vy99zk7sx1",
    "oti9mo5brbgws6j",
    "oxhdouloundbmip",
    "paiffqavywg56u7",
    "pctlea4wlnnhe40",
    "po3l1ranef8av0e",
    "q192v0m8a5zpxmq",
    "q4ctv7aqva0jjiv",
    "q5fgghzbaxb4cdp",
    "qki2d3rvmx22maw",
    "rt74nym7essxh2i",
    "s4ss1sepq98aovu",
    "s8dunks9q50lsq7",
    "shb58wzw9uz0ml5",
    "skwen8lz104gget",
    "sld0mufesnpjj8j",
    "sm6wjnjgn84ytl9",
    "sn67j0zn3rnbmj2",
    "ssgx7xguiycosxh",
    "st6hgq6bpdtxw29",
    "stul554bs413m6l",
    "t783bt8ayowugvb",
    "tbnwv8gi8qsz9nu",
    "01u09bm3hg61qus",
    "03419xhr8db722y",
    "0dph2amm3otplqq",
    "0e6rd6t1tnh4mp2",
    "0fqkvkrny7txruy",
    "19nrojtghng0v0g",
    "1qqvswf1gv4lq10",
    "1v5bskic95t3kso",
    "1vxqcp06xwpe8so",
    "1w5u0cgbxxx9iz9",
    "27gnrrb2j9ag4nm",
    "2aoxc5iqwq876kf",
    "2icsuywkw2l0yju",
    "32ff7xgr3dlbenw",
    "39ntxkwpo41vcyt",
    "3cs4ryufh8a91ej",
    "3e6q8x6w01jl38w",
    "3fh28kgqy468arw",
    "4hfrn3cbnyx0pr7",
    "4ipo9idhf1z120r",
    "4jt1axdbb5t4u76",
    "4ym380hhq5yea1l",
    "4z4kzsi8u0rbzhh",
    "5088myae0wk9dqv",
    "5obaiervz097c33",
    "5rf6bendqq30go6",
    "5vq2y60gwdv922f",
    "61nrfvwazke2k4h",
    "6i4hhfpj1hv4fj8",
    "6iv0qotiowphcmj",
    "6pq93ewt0oc0t0i",
    "6sfefdhytbvqf6y",
    "6vg4sqpqdtftdi6",
    "702qrfcnobp4lw6",
    "7id6ceiy0ol228g",
    "84t3wf4eonzzo65",
    "84uhapt4jsem8ar",
    "8b8lz54k2du5epz",
    "8kjkwggc299rb8e",
    "91d99ilcfc56izv",
    "9lnc5wp0tnwv69o",
    "9oy0qwa0v14ee3v",
    "9upnyfsgiu0i5em",
    "tle960eulyi6zme",
    "tltxw1jnlkzf77r",
    "tofpyxzorpbdq72",
    "ts7m92behbjicix",
    "ue7r2ovbwlgz2bc",
    "ufci75pjwbw0kir",
    "uukhyod7cqnprel",
    "volqla2oo16cist",
    "w5l5ito63ernr9c",
    "w9hd7bechp563r2",
    "wntlhwrho05g4l9",
    "wqq3kfysbir79j3",
    "wwqqw01d2nvicos",
    "xfh2q5jcwef7xxe",
    "yfj0czrohwezv57",
    "ym58u4ngbk43ip1",
    "zgsdhiue9ztm1vc",
  ],
  VariantGroupID: [
    "arenaCup",
    "asiaChampionshipSeries",
    "asiaGreatBallLeague",
    "asiaMasterBallLeague",
    "asiaPremierBallLeague",
    "asiaUltraBallLeague",
    "battleAcademy2024Armarouge",
    "battleAcademy2024Darkrai",
    "battleAcademy2024Pikachu",
    "battleRoadAutumn",
    "battleRoadSpring",
    "beginnersSession",
    "blackStarPromo",
    "buildABear",
    "burgerKing",
    "championsLeague",
    "championsLeague2017",
    "cityChampionships",
    "comicCon",
    "coroCoroComic",
    "coroCoroIchiban",
    "daiichiPan",
    "distributorMeeting",
    "dominosPizza",
    "donaldDuckMagazine",
    "e3",
    "ebGames",
    "eventOrganizer",
    "extraBattleDay",
    "firstEdition",
    "gameStamp",
    "gameStop",
    "gamesExpo",
    "genCon",
    "gymChallenge",
    "gymChallengePack",
    "holidayCalendar",
    "holo",
    "hongKongNationalChampionships",
    "hongKongRegionalLeague",
    "illustrationContest2022",
    "inQuest",
    "internationalChallenge",
    "internationalChampionships",
    "ionoZone",
    "jumbo",
    "kamexMegaBattle",
    "krazeClub",
    "lawson",
    "legendaryPokemon",
    "lizardonMegaBattle",
    "malaysiaNationalChampionships",
    "malaysiaRegionalLeague",
    "marumiya",
    "masterBallHolo",
    "mcdonalds",
    "meiji",
    "movieStamp",
    "nationalChampionships",
    "nbaRainCityShowcase",
    "noEreader",
    "normal",
    "origins",
    "other",
    "philippinesNationalChampionships",
    "philippinesRegionalLeague",
    "pikachuRedCheeks",
    "pikachuWorldCollection",
    "playPokemon",
    "pokeBallHolo",
    "pokemonCardClassroom",
    "pokemonCardFesta2017",
    "pokemonCardFriendlyShop",
    "pokemonCardGym",
    "pokemonCardStation",
    "pokemonCenter",
    "pokemonDaisukiClub",
    "pokemonDay",
    "pokemonHorizons",
    "pokemonRocksAmerica",
    "poketour",
    "professorProgram",
    "quickStarterGiftSet",
    "regionalChampionships",
    "reverseHolo",
    "sampleSet",
    "schoolFesta2017",
    "sealedBattle",
    "sevenEleven",
    "shadowless",
    "singaporeNationalChampionships",
    "singaporeRegionalLeague",
    "stadiumChallenge",
    "stamped",
    "stateChampionships",
    "tenthAnniversary",
    "togedemaruDeck",
    "toysRus",
    "trainerDeckA",
    "trainerDeckB",
    "trickOrTrade",
    "tropicalMegaBattle2001",
    "turtonatorDeck",
    "twentiethAnniversary",
    "twentyFifthAnniversary",
    "twentyFifthAnniversaryCreaturesDeck",
    "uniqlo",
    "unpeeledDitto",
    "vivillonContinentalPattern",
    "vivillonElegantPattern",
    "vivillonHighPlainsPattern",
    "vivillonIcySnowPattern",
    "vivillonMarinePattern",
    "vivillonSavannaPattern",
    "vjump",
    "winner",
    "wizardWorld",
    "worldChampionships",
    "worldChampionshipsDeck2004",
    "worldChampionshipsDeck2005",
    "worldChampionshipsDeck2006",
    "worldChampionshipsDeck2007",
    "worldChampionshipsDeck2008",
    "worldChampionshipsDeck2009",
    "worldChampionshipsDeck2010",
    "worldChampionshipsDeck2011",
    "worldChampionshipsDeck2012",
    "worldChampionshipsDeck2013",
    "worldChampionshipsDeck2014",
    "worldChampionshipsDeck2015",
    "worldChampionshipsDeck2016",
    "worldChampionshipsDeck2017",
    "worldChampionshipsDeck2018",
    "worldChampionshipsDeck2019",
    "worldChampionshipsDeck2022",
    "worldChampionshipsDeck2023",
    "worldHobbyFair",
    "wotcStamp",
    "yuNagabaXPokemon",
  ],
};
