/* ============================================================
   MILITARY TYCOON SIMULATOR v2.0 - script.js
   ============================================================ */

// ===== COUNTRY DATA (with land area in km²) =====
const ALL_COUNTRIES = [
  {name:"United States",flag:"🇺🇸",pop:331000000,econ:2.5,diff:1.8,area:9833517},
  {name:"China",flag:"🇨🇳",pop:1400000000,econ:2.2,diff:1.9,area:9596960},
  {name:"Russia",flag:"🇷🇺",pop:144000000,econ:1.6,diff:1.7,area:17098242},
  {name:"Germany",flag:"🇩🇪",pop:83000000,econ:1.8,diff:1.4,area:357114},
  {name:"United Kingdom",flag:"🇬🇧",pop:67000000,econ:1.7,diff:1.4,area:242495},
  {name:"France",flag:"🇫🇷",pop:67000000,econ:1.6,diff:1.3,area:643801},
  {name:"India",flag:"🇮🇳",pop:1380000000,econ:1.5,diff:1.6,area:3287263},
  {name:"Japan",flag:"🇯🇵",pop:126000000,econ:1.9,diff:1.3,area:377975},
  {name:"South Korea",flag:"🇰🇷",pop:51000000,econ:1.7,diff:1.3,area:100210},
  {name:"Israel",flag:"🇮🇱",pop:9000000,econ:1.5,diff:1.6,area:20770},
  {name:"Turkey",flag:"🇹🇷",pop:84000000,econ:1.2,diff:1.4,area:783562},
  {name:"Brazil",flag:"🇧🇷",pop:213000000,econ:1.2,diff:1.2,area:8515767},
  {name:"Saudi Arabia",flag:"🇸🇦",pop:34000000,econ:2.0,diff:1.5,area:2149690},
  {name:"Italy",flag:"🇮🇹",pop:60000000,econ:1.5,diff:1.2,area:301340},
  {name:"Spain",flag:"🇪🇸",pop:47000000,econ:1.4,diff:1.1,area:505990},
  {name:"Canada",flag:"🇨🇦",pop:38000000,econ:1.7,diff:1.2,area:9984670},
  {name:"Australia",flag:"🇦🇺",pop:26000000,econ:1.6,diff:1.2,area:7692024},
  {name:"Netherlands",flag:"🇳🇱",pop:17000000,econ:1.7,diff:1.1,area:41543},
  {name:"Poland",flag:"🇵🇱",pop:38000000,econ:1.3,diff:1.2,area:312696},
  {name:"Ukraine",flag:"🇺🇦",pop:44000000,econ:0.9,diff:1.3,area:603550},
  {name:"Pakistan",flag:"🇵🇰",pop:220000000,econ:0.8,diff:1.2,area:881913},
  {name:"North Korea",flag:"🇰🇵",pop:25000000,econ:0.5,diff:1.5,area:120538},
  {name:"Iran",flag:"🇮🇷",pop:85000000,econ:0.9,diff:1.4,area:1648195},
  {name:"Egypt",flag:"🇪🇬",pop:102000000,econ:0.9,diff:1.1,area:1002450},
  {name:"Mexico",flag:"🇲🇽",pop:130000000,econ:1.1,diff:1.0,area:1964375},
  {name:"Argentina",flag:"🇦🇷",pop:45000000,econ:1.0,diff:0.9,area:2780400},
  {name:"Indonesia",flag:"🇮🇩",pop:274000000,econ:1.0,diff:1.0,area:1904569},
  {name:"Nigeria",flag:"🇳🇬",pop:211000000,econ:0.7,diff:0.8,area:923768},
  {name:"South Africa",flag:"🇿🇦",pop:60000000,econ:0.9,diff:0.8,area:1219090},
  {name:"Thailand",flag:"🇹🇭",pop:70000000,econ:1.1,diff:1.0,area:513120},
  {name:"Vietnam",flag:"🇻🇳",pop:97000000,econ:0.9,diff:1.0,area:331212},
  {name:"Sweden",flag:"🇸🇪",pop:10000000,econ:1.7,diff:1.1,area:450295},
  {name:"Norway",flag:"🇳🇴",pop:5000000,econ:2.0,diff:1.0,area:385207},
  {name:"Switzerland",flag:"🇨🇭",pop:8600000,econ:2.1,diff:1.0,area:41285},
  {name:"Belgium",flag:"🇧🇪",pop:11000000,econ:1.6,diff:1.0,area:30528},
  {name:"Portugal",flag:"🇵🇹",pop:10000000,econ:1.2,diff:0.9,area:92212},
  {name:"Greece",flag:"🇬🇷",pop:11000000,econ:1.0,diff:0.9,area:131957},
  {name:"Romania",flag:"🇷🇴",pop:19000000,econ:1.0,diff:0.9,area:238397},
  {name:"Czech Republic",flag:"🇨🇿",pop:11000000,econ:1.3,diff:1.0,area:78866},
  {name:"Hungary",flag:"🇭🇺",pop:10000000,econ:1.1,diff:0.9,area:93028},
  {name:"Finland",flag:"🇫🇮",pop:5500000,econ:1.6,diff:1.0,area:338145},
  {name:"Denmark",flag:"🇩🇰",pop:5800000,econ:1.7,diff:1.0,area:43094},
  {name:"Austria",flag:"🇦🇹",pop:9000000,econ:1.6,diff:0.9,area:83871},
  {name:"Singapore",flag:"🇸🇬",pop:5900000,econ:2.2,diff:1.1,area:728},
  {name:"Malaysia",flag:"🇲🇾",pop:32000000,econ:1.1,diff:1.0,area:329847},
  {name:"Philippines",flag:"🇵🇭",pop:110000000,econ:0.8,diff:0.9,area:300000},
  {name:"Bangladesh",flag:"🇧🇩",pop:166000000,econ:0.7,diff:0.8,area:147570},
  {name:"Ethiopia",flag:"🇪🇹",pop:116000000,econ:0.5,diff:0.7,area:1104300},
  {name:"Kenya",flag:"🇰🇪",pop:54000000,econ:0.6,diff:0.7,area:580367},
  {name:"Morocco",flag:"🇲🇦",pop:37000000,econ:0.8,diff:0.8,area:710850},
  {name:"Algeria",flag:"🇩🇿",pop:44000000,econ:0.8,diff:0.9,area:2381741},
  {name:"Colombia",flag:"🇨🇴",pop:51000000,econ:0.9,diff:0.8,area:1141748},
  {name:"Venezuela",flag:"🇻🇪",pop:32000000,econ:0.5,diff:0.7,area:916445},
  {name:"Chile",flag:"🇨🇱",pop:19000000,econ:1.2,diff:0.9,area:756102},
  {name:"Peru",flag:"🇵🇪",pop:33000000,econ:0.9,diff:0.8,area:1285216},
  {name:"New Zealand",flag:"🇳🇿",pop:5000000,econ:1.5,diff:0.9,area:268021},
  {name:"Iraq",flag:"🇮🇶",pop:40000000,econ:0.8,diff:1.0,area:438317},
  {name:"Syria",flag:"🇸🇾",pop:21000000,econ:0.4,diff:0.8,area:185180},
  {name:"Afghanistan",flag:"🇦🇫",pop:39000000,econ:0.3,diff:0.6,area:652230},
  {name:"United Arab Emirates",flag:"🇦🇪",pop:10000000,econ:2.0,diff:1.3,area:83600},
  {name:"Qatar",flag:"🇶🇦",pop:2900000,econ:2.5,diff:1.2,area:11586},
  {name:"Kuwait",flag:"🇰🇼",pop:4300000,econ:2.0,diff:1.0,area:17818},
  {name:"Oman",flag:"🇴🇲",pop:4600000,econ:1.5,diff:0.9,area:309500},
  {name:"Jordan",flag:"🇯🇴",pop:10000000,econ:0.9,diff:0.9,area:89342},
  {name:"Lebanon",flag:"🇱🇧",pop:6800000,econ:0.6,diff:0.8,area:10452},
  {name:"Libya",flag:"🇱🇾",pop:6900000,econ:0.7,diff:0.8,area:1759541},
  {name:"Tunisia",flag:"🇹🇳",pop:12000000,econ:0.8,diff:0.8,area:163610},
  {name:"Sudan",flag:"🇸🇩",pop:44000000,econ:0.4,diff:0.6,area:1861484},
  {name:"Somalia",flag:"🇸🇴",pop:16000000,econ:0.2,diff:0.4,area:637657},
  {name:"Tanzania",flag:"🇹🇿",pop:61000000,econ:0.5,diff:0.6,area:945087},
  {name:"Ghana",flag:"🇬🇭",pop:32000000,econ:0.6,diff:0.7,area:238533},
  {name:"Ivory Coast",flag:"🇨🇮",pop:26000000,econ:0.6,diff:0.6,area:322463},
  {name:"Cameroon",flag:"🇨🇲",pop:27000000,econ:0.5,diff:0.6,area:475442},
  {name:"Angola",flag:"🇦🇴",pop:33000000,econ:0.7,diff:0.7,area:1246700},
  {name:"Mozambique",flag:"🇲🇿",pop:32000000,econ:0.4,diff:0.5,area:801590},
  {name:"Madagascar",flag:"🇲🇬",pop:28000000,econ:0.3,diff:0.4,area:587041},
  {name:"Myanmar",flag:"🇲🇲",pop:54000000,econ:0.6,diff:0.9,area:676578},
  {name:"Sri Lanka",flag:"🇱🇰",pop:22000000,econ:0.8,diff:0.8,area:65610},
  {name:"Nepal",flag:"🇳🇵",pop:29000000,econ:0.5,diff:0.6,area:147181},
  {name:"Cambodia",flag:"🇰🇭",pop:17000000,econ:0.6,diff:0.7,area:181035},
  {name:"Laos",flag:"🇱🇦",pop:7300000,econ:0.5,diff:0.6,area:236800},
  {name:"Mongolia",flag:"🇲🇳",pop:3300000,econ:0.6,diff:0.7,area:1564116},
  {name:"Kazakhstan",flag:"🇰🇿",pop:19000000,econ:1.0,diff:1.0,area:2724900},
  {name:"Uzbekistan",flag:"🇺🇿",pop:35000000,econ:0.6,diff:0.8,area:447400},
  {name:"Armenia",flag:"🇦🇲",pop:2900000,econ:0.9,diff:0.9,area:29743},
  {name:"Georgia",flag:"🇬🇪",pop:4000000,econ:0.8,diff:0.8,area:69700},
  {name:"Azerbaijan",flag:"🇦🇿",pop:10000000,econ:1.0,diff:1.0,area:86600},
  {name:"Belarus",flag:"🇧🇾",pop:9400000,econ:0.9,diff:1.1,area:207600},
  {name:"Serbia",flag:"🇷🇸",pop:7000000,econ:0.9,diff:1.0,area:77474},
  {name:"Croatia",flag:"🇭🇷",pop:4000000,econ:1.1,diff:0.9,area:56594},
  {name:"Slovakia",flag:"🇸🇰",pop:5500000,econ:1.2,diff:0.9,area:49035},
  {name:"Bulgaria",flag:"🇧🇬",pop:7000000,econ:1.0,diff:0.9,area:110879},
  {name:"Lithuania",flag:"🇱🇹",pop:2900000,econ:1.2,diff:1.0,area:65300},
  {name:"Latvia",flag:"🇱🇻",pop:1900000,econ:1.2,diff:0.9,area:64589},
  {name:"Estonia",flag:"🇪🇪",pop:1300000,econ:1.3,diff:1.0,area:45228},
  {name:"Slovenia",flag:"🇸🇮",pop:2100000,econ:1.4,diff:0.9,area:20273},
  {name:"Bosnia",flag:"🇧🇦",pop:3300000,econ:0.8,diff:0.8,area:51197},
  {name:"Albania",flag:"🇦🇱",pop:2900000,econ:0.8,diff:0.8,area:28748},
  {name:"North Macedonia",flag:"🇲🇰",pop:2100000,econ:0.8,diff:0.8,area:25713},
  {name:"Moldova",flag:"🇲🇩",pop:2600000,econ:0.6,diff:0.7,area:33851},
  {name:"Iceland",flag:"🇮🇸",pop:370000,econ:1.8,diff:0.7,area:103000},
  {name:"Luxembourg",flag:"🇱🇺",pop:640000,econ:2.3,diff:0.8,area:2586},
  {name:"Malta",flag:"🇲🇹",pop:520000,econ:1.4,diff:0.7,area:316},
  {name:"Cyprus",flag:"🇨🇾",pop:1200000,econ:1.3,diff:0.8,area:9251},
  {name:"Cuba",flag:"🇨🇺",pop:11000000,econ:0.6,diff:0.9,area:109884},
  {name:"Haiti",flag:"🇭🇹",pop:11000000,econ:0.3,diff:0.4,area:27750},
  {name:"Dominican Republic",flag:"🇩🇴",pop:11000000,econ:0.9,diff:0.8,area:48442},
  {name:"Guatemala",flag:"🇬🇹",pop:17000000,econ:0.7,diff:0.7,area:108889},
  {name:"Honduras",flag:"🇭🇳",pop:10000000,econ:0.6,diff:0.6,area:112492},
  {name:"El Salvador",flag:"🇸🇻",pop:6500000,econ:0.7,diff:0.7,area:21041},
  {name:"Nicaragua",flag:"🇳🇮",pop:6600000,econ:0.6,diff:0.7,area:130373},
  {name:"Costa Rica",flag:"🇨🇷",pop:5200000,econ:1.0,diff:0.7,area:51100},
  {name:"Panama",flag:"🇵🇦",pop:4400000,econ:1.1,diff:0.8,area:75417},
  {name:"Ecuador",flag:"🇪🇨",pop:18000000,econ:0.9,diff:0.8,area:283561},
  {name:"Bolivia",flag:"🇧🇴",pop:12000000,econ:0.7,diff:0.7,area:1098581},
  {name:"Paraguay",flag:"🇵🇾",pop:7400000,econ:0.8,diff:0.7,area:406752},
  {name:"Uruguay",flag:"🇺🇾",pop:3500000,econ:1.2,diff:0.8,area:176215},
  {name:"Senegal",flag:"🇸🇳",pop:17000000,econ:0.5,diff:0.6,area:196722},
  {name:"Mali",flag:"🇲🇱",pop:22000000,econ:0.3,diff:0.5,area:1240192},
  {name:"Niger",flag:"🇳🇪",pop:24000000,econ:0.3,diff:0.4,area:1267000},
  {name:"Chad",flag:"🇹🇩",pop:17000000,econ:0.3,diff:0.5,area:1284000},
  {name:"Rwanda",flag:"🇷🇼",pop:13000000,econ:0.5,diff:0.6,area:26338},
  {name:"Uganda",flag:"🇺🇬",pop:47000000,econ:0.4,diff:0.6,area:241551},
  {name:"Zimbabwe",flag:"🇿🇼",pop:15000000,econ:0.4,diff:0.6,area:390757},
  {name:"Zambia",flag:"🇿🇲",pop:18000000,econ:0.5,diff:0.6,area:752618},
  {name:"Botswana",flag:"🇧🇼",pop:2600000,econ:0.9,diff:0.7,area:581730},
  {name:"Namibia",flag:"🇳🇦",pop:2600000,econ:0.8,diff:0.7,area:824292},
  {name:"Congo",flag:"🇨🇩",pop:95000000,econ:0.3,diff:0.5,area:2344858},
  {name:"Gabon",flag:"🇬🇦",pop:2300000,econ:0.9,diff:0.7,area:267668},
  {name:"Eritrea",flag:"🇪🇷",pop:3500000,econ:0.3,diff:0.6,area:117600},
  {name:"Djibouti",flag:"🇩🇯",pop:990000,econ:0.7,diff:0.7,area:23200},
  {name:"Papua New Guinea",flag:"🇵🇬",pop:9100000,econ:0.5,diff:0.6,area:462840},
  {name:"Fiji",flag:"🇫🇯",pop:930000,econ:0.7,diff:0.6,area:18274},
  {name:"Timor-Leste",flag:"🇹🇱",pop:1300000,econ:0.4,diff:0.5,area:14919},
  {name:"Brunei",flag:"🇧🇳",pop:450000,econ:1.8,diff:0.8,area:5765},
  {name:"Maldives",flag:"🇲🇻",pop:530000,econ:1.0,diff:0.6,area:298},
  {name:"Bhutan",flag:"🇧🇹",pop:770000,econ:0.7,diff:0.6,area:38394},
  {name:"Kyrgyzstan",flag:"🇰🇬",pop:6700000,econ:0.5,diff:0.7,area:199951},
  {name:"Tajikistan",flag:"🇹🇯",pop:9900000,econ:0.4,diff:0.7,area:143100},
  {name:"Turkmenistan",flag:"🇹🇲",pop:6100000,econ:0.7,diff:0.8,area:488100},
  {name:"Yemen",flag:"🇾🇪",pop:33000000,econ:0.3,diff:0.7,area:527968},
  {name:"Bahrain",flag:"🇧🇭",pop:1700000,econ:1.7,diff:0.9,area:765},
];

// ===== BUILDING DEFINITIONS (18 types, max level 50) =====
const BUILDING_DEFS = [
  // Tier 1 – Economy
  {id:"market",         name:"Market District",      icon:"🏪",baseCost:300,   baseIncome:8,   basePower:0,  maxLevel:50, incomeScale:1.12, desc:"Basic commerce hub"},
  {id:"civilian_factory",name:"Civilian Factory",    icon:"🏭",baseCost:2000,   baseIncome:18,  basePower:0,  maxLevel:50, incomeScale:1.14, desc:"Steady manufacturing income"},
  {id:"farm",           name:"Agricultural Complex", icon:"🌾",baseCost:42000,   baseIncome:10,  basePower:0,  maxLevel:50, incomeScale:1.10, desc:"Food production, population growth bonus"},
  // Tier 2 – Industry
  {id:"oil_refinery",   name:"Oil Refinery",         icon:"🛢️",baseCost:760000, baseIncome:625,  basePower:0,  maxLevel:40, incomeScale:1.16, desc:"High-value energy exports"},
  {id:"steel_mill",     name:"Steel Mill",           icon:"⚙️",baseCost:1800, baseIncome:30,  basePower:10, maxLevel:40, incomeScale:1.15, desc:"Industrial backbone, factory boost"},
  {id:"bank",           name:"Central Bank",         icon:"🏦",baseCost:4000, baseIncome:70,  basePower:0,  maxLevel:30, incomeScale:1.18, desc:"Major financial multiplier"},
  {id:"stock_exchange", name:"Stock Exchange",       icon:"📈",baseCost:8000, baseIncome:120, basePower:0,  maxLevel:25, incomeScale:1.20, desc:"Premium income, volatile but powerful"},
  // Tier 3 – Military
  {id:"military_factory",name:"Military Factory",   icon:"🏗️",baseCost:1500, baseIncome:10,  basePower:25, maxLevel:40, incomeScale:1.13, desc:"Production boost + military power"},
  {id:"recruitment_center",name:"Recruitment Center",icon:"🎖️",baseCost:1800,baseIncome:0,   basePower:35, maxLevel:35, incomeScale:1.10, desc:"Unlocks elite recruitment tiers"},
  {id:"weapons_depot",  name:"Weapons Depot",        icon:"🔫",baseCost:3000, baseIncome:5,   basePower:50, maxLevel:30, incomeScale:1.14, desc:"Arsenal storage boosts army power"},
  {id:"bunker_complex", name:"Bunker Complex",       icon:"🛡️",baseCost:5000, baseIncome:0,   basePower:80, maxLevel:25, incomeScale:1.12, desc:"Fortification, war defense bonus +30%"},
  // Tier 4 – Advanced
  {id:"tech_center",    name:"Technology Center",    icon:"🔬",baseCost:6000, baseIncome:25,  basePower:60, maxLevel:30, incomeScale:1.15, desc:"Research speed +20%, power boost"},
  {id:"space_agency",   name:"Space Agency",         icon:"🚀",baseCost:25000,baseIncome:80,  basePower:200,maxLevel:15, incomeScale:1.22, desc:"Satellite intel, massive power"},
  {id:"cyber_center",   name:"Cyber Command",        icon:"💻",baseCost:12000,baseIncome:40,  basePower:100,maxLevel:20, incomeScale:1.18, desc:"Cyber warfare, spy effectiveness"},
  // Tier 5 – Naval / Air
  {id:"naval_dockyard", name:"Naval Dockyard",       icon:"⚓",baseCost:9000, baseIncome:30,  basePower:90, maxLevel:25, incomeScale:1.14, desc:"Naval production, sea trade income"},
  {id:"air_base",       name:"Air Force Base",       icon:"✈️",baseCost:7000, baseIncome:20,  basePower:75, maxLevel:25, incomeScale:1.14, desc:"Air superiority, bombing accuracy"},
  {id:"missile_silo",   name:"Missile Silo",         icon:"🎯",baseCost:20000,baseIncome:0,   basePower:300,maxLevel:10, incomeScale:1.10, desc:"Conventional missile capability, intimidation"},
  {id:"nuclear_plant",  name:"Nuclear Power Plant",  icon:"☢️",baseCost:6000000,baseIncome:150, basePower:50, maxLevel:10, incomeScale:1.25, desc:"Massive income + unlocks nuclear program"},
];

// ===== TROOP TYPES =====
const TROOP_TYPES = [
  {id:"infantry",   name:"Infantry",       icon:"🪖",cost:12,   power:1,   reqCenter:0},
  {id:"motorized",  name:"Motorized",      icon:"🚗",cost:35,   power:4,   reqCenter:1},
  {id:"elite",      name:"Elite Troops",   icon:"🎖️",cost:60,  power:8,   reqCenter:2},
  {id:"special",    name:"Special Forces", icon:"⚡",cost:250,  power:30,  reqCenter:3},
  {id:"cyber",      name:"Cyber Warriors", icon:"💻",cost:500,  power:60,  reqCenter:5},
];

// ===== NUCLEAR WEAPON TYPES =====
const NUCLEAR_DEFS = [
  {id:"tactical_nuke",name:"Tactical Nuclear Warhead",icon:"💣",desc:"Short-range battlefield nuke. Devastating in war, limited diplomatic fallout.",
   reqPlant:1,cost:100000,buildTime:300,power:5000,areaDestroy:0.15,dipFallout:20},
  {id:"icbm",name:"ICBM",icon:"🚀",desc:"Intercontinental Ballistic Missile. Can strike anywhere. Massive diplomatic consequences.",
   reqPlant:3,cost:500000,buildTime:600,power:20000,areaDestroy:0.4,dipFallout:50},
  {id:"hydrogen_bomb",name:"Hydrogen Bomb",icon:"☢️",desc:"Thermonuclear device. Can obliterate a nation. Global diplomatic crisis.",
   reqPlant:5,cost:2000000,buildTime:1200,power:80000,areaDestroy:0.85,dipFallout:80},
];

// ===== RESEARCH TREE =====
const RESEARCH_DEFS = [
  {id:"advanced_materials",name:"Advanced Materials",icon:"🔩",desc:"Troop power +20%, weapon power +10%",cost:8000,time:60,effect:{troopPowerMult:1.2,weaponPowerMult:1.1}},
  {id:"logistics",name:"Logistics Network",icon:"🚛",desc:"Income +15%, factory speed +10%",cost:6000,time:50,effect:{incomeMult:1.15,factorySpeedMult:0.9}},
  {id:"cyber_warfare",name:"Cyber Warfare",icon:"💻",desc:"Spy effectiveness +50%",cost:10000,time:70,effect:{spyMult:1.5}},
  {id:"stealth_tech",name:"Stealth Technology",icon:"👻",desc:"Drone & air weapon power +30%",cost:15000,time:80,effect:{stealthMult:1.3}},
  {id:"nuclear_deterrent",name:"Nuclear Deterrent",icon:"☢️",desc:"Army strength +1000, war intimidation +60%",cost:80000,time:200,effect:{nuclearStrength:1000,warIntimidation:1.6}},
  {id:"heavy_industry",name:"Heavy Industry",icon:"⚒️",desc:"Factory capacity ×2, building income +25%",cost:18000,time:90,effect:{factoryCapacityMult:2,buildingIncomeMult:1.25}},
  {id:"drone_systems",name:"Advanced Drone Systems",icon:"🤖",desc:"Drone power ×2.5",cost:20000,time:85,effect:{droneMult:2.5}},
  {id:"naval_supremacy",name:"Naval Supremacy",icon:"⚓",desc:"Naval weapons power ×2",cost:25000,time:100,effect:{navalMult:2}},
  {id:"air_superiority",name:"Air Superiority",icon:"🛩️",desc:"Air weapons power +60%",cost:22000,time:95,effect:{airMult:1.6}},
  {id:"economy_reform",name:"Economic Reform",icon:"📈",desc:"All income +30%",cost:12000,time:75,effect:{incomeMult:1.3}},
  {id:"rapid_deployment",name:"Rapid Deployment",icon:"🚁",desc:"Troop recruitment cost -25%",cost:9000,time:60,effect:{troopCostMult:0.75}},
  {id:"propaganda",name:"State Propaganda",icon:"📣",desc:"Diplomacy faster, war morale +25%",cost:5000,time:40,effect:{diplomacyMult:1.3,warMorale:1.25}},
  {id:"scorched_earth",name:"Scorched Earth Protocol",icon:"🔥",desc:"War losses dealt to enemies +40%",cost:30000,time:120,effect:{warDamageMult:1.4}},
  {id:"occupation_doctrine",name:"Occupation Doctrine",icon:"🗺️",desc:"Occupied territory income +50%",cost:20000,time:90,effect:{occupyIncomeMult:1.5}},
];

// ===== FACTORY UPGRADE DEFS =====
const FACTORY_UPGRADES = [
  {id:"speed",      name:"Speed Upgrade",      icon:"⚡",desc:"Production time -15% per level", baseCost:2000,maxLevel:15},
  {id:"capacity",   name:"Capacity Upgrade",   icon:"📦",desc:"Queue slots +1 per level",        baseCost:3500,maxLevel:8},
  {id:"technology", name:"Technology Upgrade", icon:"💡",desc:"Weapon power limit +200 per level",baseCost:6000,maxLevel:12},
  {id:"automation", name:"Automation Upgrade", icon:"🤖",desc:"Production cost -10% per level",  baseCost:5000,maxLevel:10},
];

const WEAPON_CATEGORY_ICONS = {
  "Tank":"🛡️","IFV":"🚗","Artillery":"💣","Missile Launcher":"🚀",
  "Fighter":"✈️","Bomber":"💥","Attack Helicopter":"🚁",
  "Destroyer":"🚢","Frigate":"⛵","Aircraft Carrier":"🛳️","Submarine":"🤿",
  "Recon Drone":"🤖","Attack Drone":"💫","Strategic Drone":"🛸",
  "SAM":"🎯","Long Range SAM":"🏹","Anti Ballistic System":"🛡"
};

// ===== GAME STATE =====
let G = {};

function defaultState() {
  return {
    playerCountry:null, money:25000, troops:0,
    weapons:{}, buildings:{},
    research:{}, researchQueue:null,
    factoryUpgrades:{speed:0,capacity:0,technology:0,automation:0},
    productionQueue:[],
    nuclearWeapons:{},       // id -> qty
    nuclearQueue:null,       // {id, progress, totalTime}
    occupiedCountries:{},    // countryName -> {since, income, area, pop}
    destroyedCountries:{},   // countryName -> true
    relations:{},
    events:[], aiCountries:{},
    stats:{earned:0,recruited:0,wars:0,victories:0,defeats:0,peakStrength:0,bestWeapon:"",bestWeaponPower:0,territoriesOccupied:0,totalArea:0,nukesUsed:0},
    tick:0, gameTime:0,
    worldSort:'rank',
  };
}

// ===== SAVE / LOAD =====
const SAVE_KEY = 'mts_v2_save';
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(G)); } catch(e){} }
function load() { const r=localStorage.getItem(SAVE_KEY); if(r){G=JSON.parse(r);return true;} return false; }

function newGame() {
  if (!confirm("Start a new game? All progress will be lost.")) return;
  localStorage.removeItem(SAVE_KEY);
  G = defaultState();
  showScreen('country-select-screen');
  initCountrySelect();
}

// ===== INIT =====
let selectedCountry = null;

window.addEventListener('DOMContentLoaded', () => {
  if (load() && G.playerCountry) startGame();
  else { G=defaultState(); showScreen('country-select-screen'); initCountrySelect(); }
});

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function initCountrySelect() {
  selectedCountry=null;
  document.getElementById('selected-preview').classList.add('hidden');
  renderCountryList('');
  document.getElementById('country-search').addEventListener('input',e=>renderCountryList(e.target.value));
}

function renderCountryList(filter) {
  const f=filter.toLowerCase();
  const list=document.getElementById('country-list');
  list.innerHTML = ALL_COUNTRIES.filter(c=>c.name.toLowerCase().includes(f)).map(c=>`
    <div class="country-item${selectedCountry?.name===c.name?' selected':''}" onclick="selectCountry('${c.name.replace(/'/g,"\\'")}')">
      <span class="flag">${c.flag}</span>
      <span class="cname">${c.name}</span>
      <span class="cpop">${fmtPop(c.pop)} · ${fmtArea(c.area)}</span>
    </div>
  `).join('');
}

function selectCountry(name) {
  selectedCountry=ALL_COUNTRIES.find(c=>c.name===name);
  renderCountryList(document.getElementById('country-search').value);
  document.getElementById('selected-preview').classList.remove('hidden');
  document.getElementById('preview-flag').textContent=selectedCountry.flag;
  document.getElementById('preview-name').textContent=selectedCountry.name;
  document.getElementById('preview-stats').textContent=
    `Pop: ${fmtPop(selectedCountry.pop)} · Area: ${fmtArea(selectedCountry.area)} · Economy: ${selectedCountry.econ}x`;
  document.getElementById('start-game-btn').onclick=()=>beginGame(selectedCountry);
}

function beginGame(country) {
  G=defaultState();
  G.playerCountry=country;
  G.money=Math.round(30000*country.econ);
  G.stats.totalArea=country.area;
  G.relations={};
  ALL_COUNTRIES.forEach(c=>{if(c.name!==country.name) G.relations[c.name]=20;});
  G.aiCountries={};
  ALL_COUNTRIES.forEach(c=>{
    if(c.name!==country.name) {
      G.aiCountries[c.name]={
        money:12000*c.econ, troops:Math.floor(800*c.diff),
        strength:Math.floor(400*c.diff), buildings:1, weapons:Math.floor(2*c.diff),
        research:0, incomePerSec:40*c.econ*c.diff, atWar:false,
        area:c.area, destroyed:false,
      };
    }
  });
  save(); startGame();
}

let gameLoop;
function startGame() {
  showScreen('game-screen');
  renderBuildings(); renderTroops(); renderFactory();
  renderNuclear(); renderResearch(); renderDiplomacy();
  renderTerritory(); renderWorld(); updateHUD(); renderDashboard();
  clearInterval(gameLoop);
  gameLoop=setInterval(tick,1000);
}

// ===== TICK =====
function tick() {
  G.tick++; G.gameTime++;
  const income=calcIncome();
  G.money+=income; G.stats.earned+=income;
  advanceProductionQueue();
  advanceNuclearQueue();
  advanceResearch();
  if(G.tick%4===0) aiTick();
  updateHUD();
  if(G.tick%2===0){renderDashboard();updateQueueDisplay();}
  if(G.tick%6===0){renderWorld();renderDiplomacy();renderTerritory();}
  if(G.tick%10===0) save();
}

// ===== ECONOMY =====
function calcBuildingIncome(id, level) {
  if(level<=0) return 0;
  const def=BUILDING_DEFS.find(d=>d.id===id);
  if(!def) return 0;
  // Exponential scaling: higher levels give much more income
  const bMult=getResearchEffect('buildingIncomeMult',1);
  const raw=def.baseIncome * Math.pow(def.incomeScale, level-1) * level;
  return Math.round(raw * bMult);
}

function calcIncome() {
  let base=4*G.playerCountry.econ;
  // Buildings
  Object.entries(G.buildings).forEach(([id,b])=>{
    base+=calcBuildingIncome(id,b.level||0);
  });
  // Occupied territories
  const occMult=getResearchEffect('occupyIncomeMult',1);
  Object.values(G.occupiedCountries).forEach(occ=>{
    base+=occ.income*occMult;
  });
  // Research
  base*=getResearchEffect('incomeMult',1);
  return Math.round(base);
}

function calcMilitaryExpenses() { return Math.round(G.troops*0.04); }

function getResearchEffect(key,def) {
  let val=def;
  RESEARCH_DEFS.forEach(r=>{
    if(G.research[r.id]?.done && r.effect[key]!==undefined){
      if(key==='troopCostMult'||key==='factorySpeedMult') val*=r.effect[key];
      else if(key==='nuclearStrength') val+=r.effect[key];
      else if(r.effect[key]>1||r.effect[key]<1&&key!=='troopCostMult') val*=r.effect[key];
      else val+=r.effect[key];
    }
  });
  return val;
}

// ===== STRENGTH =====
function calcPlayerStrength() {
  const tpm=getResearchEffect('troopPowerMult',1);
  const wpm=getResearchEffect('weaponPowerMult',1);
  let troopStr=G.troops*tpm;
  let weapStr=0;
  Object.values(G.weapons).forEach(w=>{
    let p=w.def.power*w.qty;
    const cat=w.def.category;
    if(["Fighter","Bomber","Attack Helicopter"].includes(cat)) p*=getResearchEffect('airMult',1)*getResearchEffect('stealthMult',1);
    if(["Destroyer","Frigate","Aircraft Carrier","Submarine"].includes(cat)) p*=getResearchEffect('navalMult',1);
    if(["Recon Drone","Attack Drone","Strategic Drone"].includes(cat)) p*=getResearchEffect('droneMult',1);
    p*=wpm;
    weapStr+=p;
  });
  let bldStr=Object.entries(G.buildings).reduce((s,[id,b])=>{
    const d=BUILDING_DEFS.find(x=>x.id===id);
    return s+(d?d.basePower*(b.level||0):0);
  },0);
  // Nuclear bonus
  let nukStr=0;
  Object.entries(G.nuclearWeapons).forEach(([id,qty])=>{
    const nd=NUCLEAR_DEFS.find(x=>x.id===id);
    if(nd) nukStr+=nd.power*qty*0.3;
  });
  const resStr=getResearchEffect('nuclearStrength',0);
  return Math.round(troopStr+weapStr+bldStr+nukStr+resStr);
}

function getPlayerTotalArea() {
  let a=G.playerCountry.area;
  Object.values(G.occupiedCountries).forEach(o=>a+=o.area);
  return a;
}

function getWorldRankings() {
  const list=[];
  list.push({
    name:G.playerCountry.name,flag:G.playerCountry.flag,
    strength:calcPlayerStrength(),troops:G.troops,money:G.money,
    area:getPlayerTotalArea(),isPlayer:true,status:'active'
  });
  Object.entries(G.aiCountries).forEach(([name,ai])=>{
    const c=ALL_COUNTRIES.find(x=>x.name===name);
    let status='active';
    if(G.destroyedCountries[name]) status='destroyed';
    else if(G.occupiedCountries[name]) status='occupied';
    list.push({name,flag:c?.flag||'🏳️',strength:ai.strength,troops:ai.troops,
      money:Math.round(ai.money),area:ai.area||c?.area||0,isPlayer:false,status});
  });
  list.sort((a,b)=>b.strength-a.strength);
  list.forEach((x,i)=>x.rank=i+1);
  return list;
}

function getPlayerRank(){return getWorldRankings().find(r=>r.isPlayer)?.rank||1;}

// ===== HUD =====
function updateHUD() {
  const p=G.playerCountry;
  document.getElementById('hud-flag').textContent=p.flag;
  document.getElementById('hud-country').textContent=p.name;
  document.getElementById('hud-money').textContent='$'+fmtNum(Math.floor(G.money));
  document.getElementById('hud-income').textContent='+$'+fmtNum(calcIncome())+'/s';
  document.getElementById('hud-troops').textContent=fmtNum(G.troops);
  const str=calcPlayerStrength();
  document.getElementById('hud-power').textContent=fmtNum(str);
  document.getElementById('hud-rank').textContent='#'+getPlayerRank();
  document.getElementById('hud-land').textContent=fmtArea(getPlayerTotalArea());
  if(str>G.stats.peakStrength) G.stats.peakStrength=str;
}

// ===== DASHBOARD =====
function renderDashboard() {
  const str=calcPlayerStrength();
  document.getElementById('dash-strength').textContent=fmtNum(str);
  document.getElementById('dash-rank').textContent='#'+getPlayerRank();
  const tpm=getResearchEffect('troopPowerMult',1);
  let wStr=0; Object.values(G.weapons).forEach(w=>wStr+=w.def.power*w.qty);
  let nukStr=0; Object.entries(G.nuclearWeapons).forEach(([id,qty])=>{const nd=NUCLEAR_DEFS.find(x=>x.id===id);if(nd)nukStr+=nd.power*qty*0.3;});
  document.getElementById('strength-breakdown').innerHTML=`
    <div><span>Troops</span><span>${fmtNum(Math.round(G.troops*tpm))}</span></div>
    <div><span>Conventional Weapons</span><span>${fmtNum(Math.round(wStr))}</span></div>
    <div><span>Infrastructure</span><span>${fmtNum(Object.entries(G.buildings).reduce((s,[id,b])=>{const d=BUILDING_DEFS.find(x=>x.id===id);return s+(d?d.basePower*(b.level||0):0);},0))}</span></div>
    <div><span>Nuclear Arsenal</span><span>${fmtNum(Math.round(nukStr))}</span></div>
    <div><span>Research Bonuses</span><span>${Object.values(G.research).filter(r=>r.done).length} active</span></div>
  `;
  const income=calcIncome(), expenses=calcMilitaryExpenses();
  document.getElementById('eco-stats').innerHTML=`
    <div><span>Income/sec</span><span class="val-pos">+$${fmtNum(income)}</span></div>
    <div><span>Military Cost/sec</span><span class="val-neg">-$${fmtNum(expenses)}</span></div>
    <div><span>Occupied Income</span><span class="val-pos">+$${fmtNum(Object.values(G.occupiedCountries).reduce((s,o)=>s+o.income,0)*getResearchEffect('occupyIncomeMult',1))}/s</span></div>
    <div><span>Net Income</span><span class="${income-expenses>=0?'val-pos':'val-neg'}">${income-expenses>=0?'+':''} $${fmtNum(income-expenses)}/s</span></div>
    <div><span>Treasury</span><span>$${fmtNum(Math.floor(G.money))}</span></div>
  `;
  const blds=Object.entries(G.buildings).filter(([,b])=>b.level>0);
  document.getElementById('infra-summary').innerHTML=blds.length===0
    ?'<div style="color:var(--text2);font-size:12px">No buildings yet</div>'
    :blds.map(([id,b])=>{const d=BUILDING_DEFS.find(x=>x.id===id);return`<div><span>${d?.icon||'🏗️'} ${d?.name||id}</span><span style="color:var(--gold)">Lv.${b.level}</span></div>`;}).join('');
  const rankings=getWorldRankings().slice(0,5);
  document.getElementById('world-snapshot').innerHTML=rankings.map(r=>`
    <div class="snap-row">
      <span class="snap-rank">#${r.rank}</span><span>${r.flag}</span>
      <span style="flex:1;color:${r.isPlayer?'var(--green)':'var(--white)'}">${r.name}</span>
      <span style="color:var(--text2);font-size:12px">${fmtNum(r.strength)}</span>
    </div>`).join('');
  document.getElementById('events-list').innerHTML=G.events.slice(0,8).map(e=>`
    <div class="event-item ${e.type||''}">
      ${e.msg}<div class="event-time">${formatGameTime(e.time)}</div>
    </div>`).join('')||'<div class="empty-state">No events yet</div>';
}

function formatGameTime(t){const d=G.gameTime-(t||0);if(d<60)return`${d}s ago`;if(d<3600)return`${Math.floor(d/60)}m ago`;return`${Math.floor(d/3600)}h ago`;}

// ===== BUILDINGS =====
function getBuildingTierClass(level) {
  if(level>=40) return 'tier-diamond';
  if(level>=25) return 'tier-emerald';
  if(level>=15) return 'tier-gold';
  if(level>=8)  return 'tier-silver';
  if(level>=3)  return 'tier-bronze';
  return '';
}

function renderBuildings() {
  let totalIncome=0;
  Object.entries(G.buildings).forEach(([id,b])=>totalIncome+=calcBuildingIncome(id,b.level||0));
  const el=document.getElementById('bld-total-income');
  if(el) el.textContent=`Total Building Income: +$${fmtNum(totalIncome)}/s`;

  document.getElementById('buildings-grid').innerHTML=BUILDING_DEFS.map(def=>{
    const b=G.buildings[def.id]||{level:0};
    const level=b.level||0;
    const maxed=level>=def.maxLevel;
    const nextCost=maxed?0:Math.round(def.baseCost*Math.pow(2.0,Math.floor(level/5))*Math.pow(1.5,level%5));
    const canBuy=!maxed&&G.money>=nextCost;
    const income=calcBuildingIncome(def.id,level);
    const nextIncome=calcBuildingIncome(def.id,level+1)-income;
    const pct=Math.min(100,(level/def.maxLevel)*100);
    const tierClass=getBuildingTierClass(level);
    const tierLabel=level>=40?'💎 Diamond':level>=25?'💚 Emerald':level>=15?'🏅 Gold':level>=8?'⬜ Silver':level>=3?'🟫 Bronze':'';
    return `
      <div class="building-card ${tierClass}">
        <div class="bld-header">
          <span class="bld-icon">${def.icon}</span>
          <div class="bld-info">
            <div class="bld-name">${def.name} ${tierLabel?`<small style="font-size:10px">${tierLabel}</small>`:''}</div>
            <div class="bld-level">${maxed?'⭐ MAX LEVEL':level===0?'Not built':`Level ${level} / ${def.maxLevel}`}</div>
          </div>
        </div>
        <div class="level-bar"><div class="level-fill" style="width:${pct}%"></div></div>
        <div class="bld-stats">
          ${income>0?`Income: <span>+$${fmtNum(income)}/s</span>`:''}
          ${!maxed&&nextIncome>0?`<span style="color:var(--text2)"> → +$${fmtNum(nextIncome)} next</span>`:''}
          ${def.basePower>0?` · Power: <span>+${def.basePower*level}</span>`:''}
          <br><span style="color:var(--text2);font-size:11px">${def.desc}</span>
        </div>
        <div class="bld-actions">
          ${maxed?`<button class="btn btn-secondary btn-sm" disabled>⭐ MAXED</button>`
          :`<button class="btn btn-primary btn-sm" onclick="buildingBuy('${def.id}')" ${canBuy?'':'disabled'}>
              ${level===0?'Build':'Upgrade'} — $${fmtNum(nextCost)}
            </button>`}
          ${level>0?`<button class="btn btn-secondary btn-sm" disabled>Lv.${level}</button>`:''}
        </div>
      </div>`;
  }).join('');
}

function buildingBuy(id) {
  const def=BUILDING_DEFS.find(d=>d.id===id);
  if(!def) return;
  const b=G.buildings[id]||{level:0};
  const level=b.level||0;
  if(level>=def.maxLevel){toast('Already at max level!','warning');return;}
  const cost=Math.round(def.baseCost*Math.pow(2.0,Math.floor(level/5))*Math.pow(1.5,level%5));
  if(G.money<cost){toast('Not enough money!','error');return;}
  G.money-=cost;
  G.buildings[id]={level:level+1};
  const newLevel=level+1;
  const tier=newLevel>=40?'💎 Diamond!':newLevel>=25?'💚 Emerald!':newLevel>=15?'🏅 Gold!':newLevel>=8?'⬜ Silver!':newLevel>=3?'🟫 Bronze!':'';
  toast(`${def.name} ${level===0?'built':'upgraded'} to Lv.${newLevel}${tier?' — '+tier:''}`,'success');
  renderBuildings(); renderDashboard();
}

// ===== TROOPS =====
function renderTroops() {
  const centerLv=G.buildings['recruitment_center']?.level||0;
  const costMult=getResearchEffect('troopCostMult',1);
  document.getElementById('troop-cards').innerHTML=TROOP_TYPES.map(t=>{
    if(t.reqCenter>centerLv) return `
      <div class="troop-card" style="opacity:0.45">
        <div class="tname">${t.icon} ${t.name}</div>
        <div class="tstats">🔒 Requires Recruitment Center Level ${t.reqCenter}</div>
      </div>`;
    const c10=Math.round(t.cost*10*costMult), c100=Math.round(t.cost*100*costMult), c1000=Math.round(t.cost*1000*costMult);
    return `
      <div class="troop-card">
        <div class="tname">${t.icon} ${t.name}</div>
        <div class="tstats">Cost: <span>$${fmtNum(Math.round(t.cost*costMult))}</span> · Power: <span>${t.power}</span> per troop</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn btn-secondary btn-sm" onclick="recruitTroops('${t.id}',10)" ${G.money>=c10?'':'disabled'}>+10 ($${fmtNum(c10)})</button>
          <button class="btn btn-primary btn-sm"   onclick="recruitTroops('${t.id}',100)" ${G.money>=c100?'':'disabled'}>+100 ($${fmtNum(c100)})</button>
          <button class="btn btn-warn btn-sm"      onclick="recruitTroops('${t.id}',1000)" ${G.money>=c1000?'':'disabled'}>+1K ($${fmtNum(c1000)})</button>
        </div>
      </div>`;
  }).join('');
  renderArsenal();
}

function recruitTroops(id,qty) {
  const t=TROOP_TYPES.find(x=>x.id===id); if(!t) return;
  const cost=Math.round(t.cost*qty*getResearchEffect('troopCostMult',1));
  if(G.money<cost){toast('Not enough money!','error');return;}
  G.money-=cost; G.troops+=qty; G.stats.recruited+=qty;
  toast(`Recruited ${fmtNum(qty)} ${t.name}!`,'success');
  renderTroops();
}

function renderArsenal() {
  const items=Object.values(G.weapons);
  document.getElementById('arsenal-list').innerHTML=items.length===0
    ?'<div class="empty-state">No weapons in arsenal.<br>Design weapons in the Factory tab.</div>'
    :items.map(w=>`
      <div class="arsen-item">
        <span class="arsen-icon">${WEAPON_CATEGORY_ICONS[w.def.category]||'🔫'}</span>
        <div class="arsen-info">
          <div class="arsen-name">${w.def.name}</div>
          <div class="arsen-qty">${w.def.category} · Qty: ${fmtNum(w.qty)}</div>
        </div>
        <div class="arsen-power">⚡ ${fmtNum(w.def.power*w.qty)}</div>
      </div>`).join('');
}

// ===== NUCLEAR =====
function renderNuclear() {
  const plantLevel=G.buildings['nuclear_plant']?.level||0;
  let html='';
  if(plantLevel===0) {
    html=`<div class="nuclear-warning">
      <span class="nw-icon">☢️</span>
      <h3>NUCLEAR PROGRAM LOCKED</h3>
      <p>Build and upgrade a <strong>Nuclear Power Plant</strong> (Buildings tab) to unlock nuclear weapons production.</p>
    </div>`;
  } else {
    html+=`<div class="nuclear-warning">
      <span class="nw-icon">⚛️</span>
      <h3>NUCLEAR COMMAND CENTER</h3>
      <p>Nuclear Plant Level: <strong style="color:var(--red)">${plantLevel}</strong> · 
         Clearance: ${plantLevel>=5?'THERMONUCLEAR':plantLevel>=3?'ICBM':'TACTICAL'}</p>
    </div>`;
    // Arsenal
    html+=`<div class="nuclear-arsenal"><h3>☢️ Nuclear Arsenal</h3>`;
    const nukes=NUCLEAR_DEFS.filter(n=>plantLevel>=n.reqPlant);
    if(nukes.length===0) html+=`<p style="color:var(--text2)">Upgrade Nuclear Plant to unlock weapons.</p>`;
    nukes.forEach(n=>{
      const qty=G.nuclearWeapons[n.id]||0;
      html+=`<div class="nuke-item"><div><div class="ni-name">${n.icon} ${n.name}</div><div style="font-size:11px;color:var(--text2)">${n.desc}</div></div><div class="ni-qty">${qty} in stock</div></div>`;
    });
    html+='</div>';
    // Production
    html+=`<div class="nuclear-grid">`;
    NUCLEAR_DEFS.forEach(n=>{
      const locked=plantLevel<n.reqPlant;
      const isBuilding=G.nuclearQueue?.id===n.id;
      const pct=isBuilding?Math.round((G.nuclearQueue.progress/G.nuclearQueue.totalTime)*100):0;
      const canBuild=!locked&&!G.nuclearQueue&&G.money>=n.cost;
      html+=`<div class="nuclear-card" style="${locked?'opacity:0.4':''}">
        <h4>${n.icon} ${n.name}</h4>
        <div class="nc-desc">${n.desc}</div>
        <div class="nc-stats">
          Cost: <span>$${fmtNum(n.cost)}</span> · Build: <span>${n.buildTime}s</span><br>
          War Power: <span>${fmtNum(n.power)}</span> · Area Destroyed: <span>${Math.round(n.areaDestroy*100)}%</span><br>
          🔒 Requires Plant Lv.<span>${n.reqPlant}</span>
        </div>
        ${isBuilding?`<div class="nuke-prog"><div class="nuke-prog-fill" style="width:${pct}%"></div></div><div style="font-size:11px;color:var(--gold)">Building... ${pct}%</div>`:''}
        <button class="btn btn-sm btn-danger" style="margin-top:8px" onclick="buildNuke('${n.id}')" ${canBuild?'':locked?'disabled title="Locked"':G.nuclearQueue?'disabled title="Building"':'disabled'}>
          ${locked?'🔒 Locked':isBuilding?'⏳ Building':G.nuclearQueue?'Queue Busy':'Build ($'+fmtNum(n.cost)+')'}
        </button>
      </div>`;
    });
    html+='</div>';
    // Target selection
    if(Object.values(G.nuclearWeapons).some(q=>q>0)) {
      html+=`<div class="nuclear-arsenal"><h3>🎯 Launch Nuclear Strike</h3>
        <p style="color:var(--text2);font-size:12px;margin-bottom:10px">Select a target country and weapon type to launch. Destroys military capacity and may obliterate the nation. Massive diplomatic consequences.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
          <select id="nuke-target-country" style="padding:8px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;color:var(--white);flex:1">
            <option value="">Select Target Country...</option>
            ${ALL_COUNTRIES.filter(c=>c.name!==G.playerCountry.name&&!G.destroyedCountries[c.name]).map(c=>`<option value="${c.name}">${c.flag} ${c.name}</option>`).join('')}
          </select>
          <select id="nuke-type" style="padding:8px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;color:var(--white)">
            ${NUCLEAR_DEFS.filter(n=>(G.nuclearWeapons[n.id]||0)>0).map(n=>`<option value="${n.id}">${n.icon} ${n.name} (${G.nuclearWeapons[n.id]})</option>`).join('')}
          </select>
          <button class="btn btn-danger" onclick="launchNuke()">☢️ LAUNCH</button>
        </div>
      </div>`;
    }
  }
  document.getElementById('nuclear-content').innerHTML=html;
}

function buildNuke(id) {
  const n=NUCLEAR_DEFS.find(x=>x.id===id); if(!n) return;
  if(G.nuclearQueue){toast('Nuclear production already underway!','warning');return;}
  if(G.money<n.cost){toast('Not enough money!','error');return;}
  const plantLevel=G.buildings['nuclear_plant']?.level||0;
  if(plantLevel<n.reqPlant){toast(`Requires Nuclear Plant level ${n.reqPlant}!`,'error');return;}
  G.money-=n.cost;
  G.nuclearQueue={id,progress:0,totalTime:n.buildTime};
  toast(`Started constructing ${n.name}!`,'warning');
  renderNuclear();
}

function advanceNuclearQueue() {
  if(!G.nuclearQueue) return;
  G.nuclearQueue.progress++;
  if(G.nuclearQueue.progress>=G.nuclearQueue.totalTime) {
    const n=NUCLEAR_DEFS.find(x=>x.id===G.nuclearQueue.id);
    if(!G.nuclearWeapons[G.nuclearQueue.id]) G.nuclearWeapons[G.nuclearQueue.id]=0;
    G.nuclearWeapons[G.nuclearQueue.id]++;
    addEvent(`☢️ ${n?.name} construction complete!`,'war');
    toast(`${n?.name} added to nuclear arsenal!`,'warning');
    G.nuclearQueue=null;
    renderNuclear();
  }
}

function launchNuke() {
  const targetName=document.getElementById('nuke-target-country')?.value;
  const nukeId=document.getElementById('nuke-type')?.value;
  if(!targetName){toast('Select a target country!','error');return;}
  if(!nukeId){toast('Select a weapon type!','error');return;}
  if(!confirm(`⚠️ LAUNCH NUCLEAR STRIKE on ${targetName}?\n\nThis will have massive diplomatic consequences and may destroy the nation permanently. This cannot be undone.`)) return;
  const n=NUCLEAR_DEFS.find(x=>x.id===nukeId);
  const ai=G.aiCountries[targetName];
  const c=ALL_COUNTRIES.find(x=>x.name===targetName);
  if(!n||!ai||!c) return;
  if((G.nuclearWeapons[nukeId]||0)<=0){toast('No weapons of this type!','error');return;}

  G.nuclearWeapons[nukeId]--;
  G.stats.nukesUsed++;

  // Diplomatic fallout
  Object.keys(G.relations).forEach(name=>{
    G.relations[name]=Math.max(-100,(G.relations[name]||0)-n.dipFallout);
  });

  // Damage target
  const prevStr=ai.strength;
  ai.strength=Math.round(ai.strength*(1-n.areaDestroy));
  ai.troops=Math.round(ai.troops*(1-n.areaDestroy*0.9));
  ai.money*=(1-n.areaDestroy*0.7);
  ai.weapons*=(1-n.areaDestroy);

  // Area destroyed
  const areaLost=Math.round(c.area*n.areaDestroy);
  ai.area=Math.max(0,(ai.area||c.area)-areaLost);

  // Check if destroyed
  const isDestroyed=n.areaDestroy>=0.8||ai.strength<500;
  let resultText='';
  if(isDestroyed) {
    G.destroyedCountries[targetName]=true;
    // Absorb remnant area
    const gainedArea=Math.round(ai.area*0.5);
    G.stats.totalArea+=gainedArea;
    if(!G.occupiedCountries[targetName]) {
      G.occupiedCountries[targetName]={
        since:G.gameTime, income:Math.round(ai.incomePerSec*0.2),
        area:gainedArea, pop:Math.round(c.pop*0.1),
      };
      G.stats.territoriesOccupied++;
    }
    resultText=`☢️ ${targetName} has been OBLITERATED. Nation destroyed. Remnant territory absorbed.`;
    addEvent(`☢️ NUCLEAR STRIKE: ${targetName} obliterated!`,'war');
    toast(`${targetName} DESTROYED by nuclear strike!`,'error');
  } else {
    resultText=`Strength reduced from ${fmtNum(prevStr)} → ${fmtNum(ai.strength)}. ${Math.round(n.areaDestroy*100)}% territory devastated.`;
    addEvent(`☢️ Nuclear strike on ${targetName} — devastation dealt`,'war');
    toast(`Nuclear strike on ${targetName} devastated their military!`,'warning');
  }

  document.getElementById('nuclear-modal-body').innerHTML=`
    <div style="text-align:center;padding:20px">
      <div style="font-size:60px;margin-bottom:12px">☢️💥</div>
      <h3 style="color:var(--red);font-size:20px;margin-bottom:8px">NUCLEAR STRIKE ON ${targetName.toUpperCase()}</h3>
      <p style="color:var(--white);margin-bottom:16px">${resultText}</p>
      <div style="background:rgba(255,68,68,0.1);border-radius:8px;padding:12px;margin-bottom:16px;font-size:13px;color:var(--text2)">
        🌍 All nations' relations with you reduced by ${n.dipFallout} points<br>
        💀 ${fmtNum(Math.round(c.pop*n.areaDestroy*0.5))} casualties estimated<br>
        ${isDestroyed?`🏳️ Nation status: <span style="color:var(--red)">DESTROYED</span>`:`⚡ Enemy strength remaining: ${fmtNum(ai.strength)}`}
      </div>
      <button class="btn btn-secondary" onclick="closeModal('nuclearModal');renderNuclear();renderTerritory();renderDiplomacy();renderWorld()">Close Report</button>
    </div>`;
  openModal('nuclearModal');
}

// ===== FACTORY =====
function updateWeaponCost() {
  const power=parseInt(document.getElementById('wpn-power').value);
  document.getElementById('power-display').textContent=power;
  const cost=calcWeaponProductionCost(power);
  const time=calcProductionTime(power);
  document.getElementById('cost-preview').innerHTML=`Production Cost: <span>$${fmtNum(cost)}</span>`;
  document.getElementById('prod-time-preview').textContent=`Production Time: ${time}s`;
}

function calcWeaponProductionCost(power) {
  const autoMult=1-G.factoryUpgrades.automation*0.1;
  return Math.round(power*power*2.5*autoMult);
}

function calcProductionTime(power) {
  const speedMult=Math.pow(0.85,G.factoryUpgrades.speed);
  const resMult=getResearchEffect('factorySpeedMult',1);
  return Math.max(3,Math.round(power*0.6*speedMult*resMult));
}

function designWeapon() {
  const name=document.getElementById('wpn-name').value.trim();
  const cat=document.getElementById('wpn-category').value;
  const power=parseInt(document.getElementById('wpn-power').value);
  if(!name){toast('Enter a weapon name','error');return;}
  if(!cat){toast('Select a category','error');return;}
  const techLimit=500+G.factoryUpgrades.technology*200;
  if(power>techLimit){toast(`Power exceeds tech limit (${techLimit}). Upgrade Technology!`,'error');return;}
  const cost=calcWeaponProductionCost(power);
  if(G.money<cost){toast('Not enough money for production!','error');return;}
  const maxSlots=1+G.factoryUpgrades.capacity*getResearchEffect('factoryCapacityMult',1);
  if(G.productionQueue.length>=maxSlots){toast('Production queue full! Upgrade Capacity.','error');return;}
  const id=name.toLowerCase().replace(/\s+/g,'_')+'_'+Date.now();
  const def={id,name,category:cat,power,cost};
  const time=calcProductionTime(power);
  G.money-=cost;
  G.productionQueue.push({id,def,progress:0,totalTime:time});
  if(power>(G.stats.bestWeaponPower||0)){G.stats.bestWeapon=name;G.stats.bestWeaponPower=power;}
  toast(`Started producing ${name}!`,'success');
  document.getElementById('wpn-name').value='';
  renderFactory();
}

function advanceProductionQueue() {
  if(!G.productionQueue.length) return;
  const q=G.productionQueue[0];
  q.progress++;
  if(q.progress>=q.totalTime){
    if(!G.weapons[q.id]) G.weapons[q.id]={def:q.def,qty:0};
    G.weapons[q.id].qty++;
    addEvent(`✅ ${q.def.name} produced!`,'');
    G.productionQueue.shift();
    renderArsenal();
  }
}

function updateQueueDisplay(){renderQueueDisplay();renderFactoryUpgradesDisplay();}

function renderQueueDisplay() {
  const el=document.getElementById('prod-queue'); if(!el) return;
  if(!G.productionQueue.length){el.innerHTML='<div class="empty-state">Queue empty.</div>';return;}
  el.innerHTML=G.productionQueue.map((q,i)=>{
    const pct=Math.round((q.progress/q.totalTime)*100);
    return `<div class="queue-item">
      <div class="q-name">${WEAPON_CATEGORY_ICONS[q.def.category]||'🔫'} ${q.def.name}</div>
      <div class="q-progress"><div class="q-fill" style="width:${pct}%"></div></div>
      <div class="q-stats">${i===0?`${q.progress}/${q.totalTime}s — ${pct}%`:'Queued'} · Power: ${q.def.power}</div>
    </div>`;
  }).join('');
}

function renderFactory() {
  updateWeaponCost(); renderQueueDisplay(); renderWeaponsList(); renderFactoryUpgradesDisplay();
}

function renderFactoryUpgradesDisplay() {
  const el=document.getElementById('factory-upgrades'); if(!el) return;
  el.innerHTML=FACTORY_UPGRADES.map(u=>{
    const lvl=G.factoryUpgrades[u.id]||0, maxed=lvl>=u.maxLevel;
    const cost=Math.round(u.baseCost*Math.pow(2,lvl));
    return `<div class="factory-upg-item">
      <div class="upg-name">${u.icon} ${u.name}</div>
      <div class="upg-desc">${u.desc}</div>
      <div class="upg-level">Level ${lvl}/${u.maxLevel}</div>
      <button class="btn btn-sm btn-secondary" onclick="upgradeFactory('${u.id}')" ${!maxed&&G.money>=cost?'':'disabled'}>
        ${maxed?'MAXED':'Upgrade $'+fmtNum(cost)}
      </button>
    </div>`;
  }).join('');
}

function upgradeFactory(id) {
  const u=FACTORY_UPGRADES.find(x=>x.id===id); if(!u) return;
  const lvl=G.factoryUpgrades[id]||0;
  if(lvl>=u.maxLevel){toast('Already maxed!','warning');return;}
  const cost=Math.round(u.baseCost*Math.pow(2,lvl));
  if(G.money<cost){toast('Not enough money!','error');return;}
  G.money-=cost; G.factoryUpgrades[id]=lvl+1;
  toast(`${u.name} upgraded to level ${lvl+1}!`,'success');
  renderFactory();
}

function renderWeaponsList() {
  const el=document.getElementById('my-weapons'); if(!el) return;
  const items=Object.values(G.weapons);
  el.innerHTML=items.length===0?'<div class="empty-state">No weapons yet</div>'
    :items.map(w=>`
      <div class="wpn-card">
        <div class="wname">${WEAPON_CATEGORY_ICONS[w.def.category]||'🔫'} ${w.def.name}</div>
        <div class="wcat">${w.def.category}</div>
        <div class="wstats">Qty: <span>${fmtNum(w.qty)}</span> · Power: <span>${w.def.power}</span> · Total: <span>${fmtNum(w.def.power*w.qty)}</span></div>
        <div class="wpn-actions">
          <button class="btn btn-secondary btn-sm" onclick="produceMore('${w.def.id}')">+1 More ($${fmtNum(w.def.cost)})</button>
        </div>
      </div>`).join('');
}

function produceMore(id) {
  const w=G.weapons[id]; if(!w) return;
  const maxSlots=1+G.factoryUpgrades.capacity;
  if(G.productionQueue.length>=maxSlots){toast('Queue full!','error');return;}
  if(G.money<w.def.cost){toast('Not enough money!','error');return;}
  G.money-=w.def.cost;
  G.productionQueue.push({id:w.def.id,def:w.def,progress:0,totalTime:calcProductionTime(w.def.power)});
  toast(`Queued ${w.def.name}!`,'info'); renderFactory();
}

// ===== RESEARCH =====
function advanceResearch() {
  if(!G.researchQueue) return;
  const r=G.researchQueue;
  if(!G.research[r.id]) G.research[r.id]={progress:0,done:false};
  G.research[r.id].progress++;
  if(G.research[r.id].progress>=r.duration){
    G.research[r.id].done=true; G.researchQueue=null;
    const def=RESEARCH_DEFS.find(x=>x.id===r.id);
    addEvent(`🔬 Research complete: ${def?.name}!`,'');
    toast(`Research complete: ${def?.name}!`,'success');
    renderResearch();
  }
}

function renderResearch() {
  document.getElementById('research-grid').innerHTML=RESEARCH_DEFS.map(r=>{
    const state=G.research[r.id]||{progress:0,done:false};
    const isResearching=G.researchQueue?.id===r.id;
    const pct=state.done?100:isResearching?Math.round((state.progress/r.time)*100):0;
    const canResearch=!state.done&&!G.researchQueue&&G.money>=r.cost;
    return `<div class="research-card ${state.done?'unlocked':''} ${isResearching?'researching':''}">
      ${state.done?'<div class="unlocked-badge">✓ DONE</div>':''}
      <div class="res-icon-big">${r.icon}</div>
      <div class="res-name">${r.name}</div>
      <div class="res-desc">${r.desc}</div>
      <div class="res-cost">Cost: <span>$${fmtNum(r.cost)}</span> · Time: ${r.time}s</div>
      ${(isResearching||state.done)?`<div class="res-progress"><div class="res-progress-fill" style="width:${pct}%"></div></div>`:''}
      ${isResearching?`<div style="font-size:12px;color:var(--gold)">Researching... ${pct}%</div>`:''}
      ${!state.done&&!isResearching?`<button class="btn btn-sm ${canResearch?'btn-primary':'btn-secondary'}" onclick="startResearch('${r.id}')" ${canResearch?'':'disabled'}>
        ${G.researchQueue?'Queue Busy':'Research ($'+fmtNum(r.cost)+')'}
      </button>`:''}
    </div>`;
  }).join('');
}

function startResearch(id) {
  const r=RESEARCH_DEFS.find(x=>x.id===id); if(!r) return;
  if(G.researchQueue){toast('Already researching!','warning');return;}
  if(G.research[id]?.done){toast('Already researched!','warning');return;}
  if(G.money<r.cost){toast('Not enough money!','error');return;}
  G.money-=r.cost; G.researchQueue={id,duration:r.time};
  if(!G.research[id]) G.research[id]={progress:0,done:false};
  toast(`Started researching ${r.name}!`,'info'); renderResearch();
}

// ===== DIPLOMACY =====
function renderDiplomacy() {
  const search=(document.getElementById('diplo-search')?.value||'').toLowerCase();
  const countries=ALL_COUNTRIES.filter(c=>c.name!==G.playerCountry.name&&c.name.toLowerCase().includes(search)&&!G.destroyedCountries[c.name]);
  document.getElementById('diplomacy-list').innerHTML=countries.slice(0,60).map(c=>{
    const rel=G.relations[c.name]||0;
    const ai=G.aiCountries[c.name];
    const relColor=rel>=50?'var(--green)':rel>=0?'var(--gold)':'var(--red)';
    const relText=rel>=70?'Allied':rel>=40?'Friendly':rel>=10?'Neutral':rel>=-20?'Tense':'Hostile';
    const threat=ai?(ai.strength>calcPlayerStrength()*1.5?'high':ai.strength>calcPlayerStrength()*0.7?'med':'low'):'low';
    const relPct=Math.round((rel+100)/2);
    const relBarColor=rel>=50?'var(--green)':rel>=0?'var(--gold)':'var(--red)';
    const isOcc=!!G.occupiedCountries[c.name];
    return `<div class="diplo-card">
      <span class="diplo-flag">${c.flag}</span>
      <div class="diplo-info">
        <div class="dname">${c.name}${isOcc?' <span style="color:var(--red);font-size:11px">OCCUPIED</span>':''}</div>
        <div class="dstats">Rel: <span style="color:${relColor}">${relText} (${rel>0?'+':''}${rel})</span>
          · Threat: <span class="threat-${threat}">${threat.toUpperCase()}</span>
          · Str: ${fmtNum(ai?.strength||0)} · Area: ${fmtArea(c.area)}</div>
        <div class="rel-bar"><div class="rel-fill" style="width:${relPct}%;background:${relBarColor}"></div></div>
      </div>
      <div class="diplo-actions">
        <button class="btn btn-sm btn-secondary" onclick="diplomacyAction('improve','${c.name.replace(/'/g,"\\'")}')">🤝 +Rel ($1K)</button>
        <button class="btn btn-sm btn-warn"      onclick="diplomacyAction('sanction','${c.name.replace(/'/g,"\\'")}')">🚫 Sanction ($2K)</button>
        <button class="btn btn-sm btn-secondary" onclick="diplomacyAction('spy','${c.name.replace(/'/g,"\\'")}')">🕵️ Spy ($3K)</button>
        <button class="btn btn-sm btn-danger"    onclick="declareWar('${c.name.replace(/'/g,"\\'")}')">⚔️ War</button>
      </div>
    </div>`;
  }).join('');
}

function diplomacyAction(action,countryName) {
  const costs={improve:1000,sanction:2000,spy:3000};
  if(G.money<costs[action]){toast('Not enough money!','error');return;}
  G.money-=costs[action];
  if(action==='improve'){
    G.relations[countryName]=Math.min(100,(G.relations[countryName]||0)+10);
    toast(`Relations with ${countryName} improved!`,'success');
  } else if(action==='sanction'){
    G.relations[countryName]=Math.max(-100,(G.relations[countryName]||0)-20);
    const ai=G.aiCountries[countryName];
    if(ai) ai.money=Math.max(0,ai.money-8000);
    toast(`Sanctions imposed on ${countryName}!`,'warning');
  } else if(action==='spy'){
    const ai=G.aiCountries[countryName];
    const c=ALL_COUNTRIES.find(x=>x.name===countryName);
    toast(`Intel: ${c?.flag} ${countryName} — Troops: ${fmtNum(ai?.troops||0)}, Str: ${fmtNum(ai?.strength||0)}, $${fmtNum(Math.round(ai?.money||0))}, Area: ${fmtArea(ai?.area||c?.area||0)}`,'info');
  }
  renderDiplomacy();
}

// ===== WAR =====
function declareWar(countryName) {
  if(G.destroyedCountries[countryName]){toast('That nation no longer exists!','warning');return;}
  if(!confirm(`Declare war on ${countryName}?`)) return;
  const ai=G.aiCountries[countryName];
  const c=ALL_COUNTRIES.find(x=>x.name===countryName);
  if(!ai||!c) return;

  G.relations[countryName]=Math.min(-50,(G.relations[countryName]||0)-60);
  G.stats.wars++;

  const playerStr=calcPlayerStrength();
  const aiStr=ai.strength;
  const intimBonus=getResearchEffect('warIntimidation',1);
  const morale=getResearchEffect('warMorale',1);
  const warDmgMult=getResearchEffect('warDamageMult',1);
  const hasBunker=(G.buildings['bunker_complex']?.level||0)>0?1.3:1;

  const playerScore=playerStr*intimBonus*morale*hasBunker+(G.troops*0.1)+Math.random()*playerStr*0.25;
  const aiScore=aiStr*c.diff+Math.random()*aiStr*0.25;

  const ratio=playerScore/(aiScore+1);
  let outcome,outcomeClass;
  if(ratio>2.5)     {outcome="TOTAL VICTORY 🏆🏆";outcomeClass="victory";}
  else if(ratio>1.5){outcome="MAJOR VICTORY 🏆";  outcomeClass="victory";}
  else if(ratio>1.1){outcome="VICTORY ✅";         outcomeClass="victory";}
  else if(ratio>0.9){outcome="STALEMATE ⚖️";       outcomeClass="stalemate";}
  else if(ratio>0.6){outcome="DEFEAT ❌";           outcomeClass="defeat";}
  else              {outcome="CRUSHING DEFEAT 💀";  outcomeClass="defeat";}

  const isVictory=outcomeClass==="victory";
  const isMajor=ratio>1.5;
  const isTotal=ratio>2.5;
  const isDefeat=outcomeClass==="defeat";

  if(isVictory) G.stats.victories++;
  if(isDefeat)  G.stats.defeats++;

  // Casualties
  const playerLossPct=isDefeat?(0.12+Math.random()*0.18):(0.01+Math.random()*0.06);
  const aiLossPct=isVictory?(0.15+Math.random()*0.25*warDmgMult):(0.03+Math.random()*0.08);
  const playerLoss=Math.round(G.troops*playerLossPct);
  const aiLoss=Math.round(ai.troops*aiLossPct);
  G.troops=Math.max(0,G.troops-playerLoss);
  ai.troops=Math.max(0,ai.troops-aiLoss);

  // Prize calculation — bigger rewards for bigger victories
  let moneyGained=0, areaGained=0, popGained=0, strPrize=0;
  let occupied=false, destroyed=false;

  if(isVictory) {
    const prizeScale=isTotal?0.5:isMajor?0.3:0.15;
    moneyGained=Math.round(ai.money*prizeScale*(0.8+Math.random()*0.4));
    G.money+=moneyGained;
    ai.money=Math.max(0,ai.money-moneyGained);
    strPrize=Math.round(aiStr*prizeScale);
    ai.strength=Math.max(0,ai.strength-strPrize);

    // Territory gain
    const areaFraction=isTotal?0.6:isMajor?0.35:0.15;
    areaGained=Math.round((ai.area||c.area)*areaFraction);
    popGained=Math.round(c.pop*areaFraction*0.7);
    const incomeGained=Math.round(ai.incomePerSec*areaFraction*0.5);
    ai.area=Math.max(0,(ai.area||c.area)-areaGained);

    if(!G.occupiedCountries[countryName]) {
      G.occupiedCountries[countryName]={since:G.gameTime,income:incomeGained,area:areaGained,pop:popGained};
      G.stats.territoriesOccupied++;
      G.stats.totalArea+=areaGained;
    } else {
      // Expand occupation
      G.occupiedCountries[countryName].area+=areaGained;
      G.occupiedCountries[countryName].income+=incomeGained;
      G.occupiedCountries[countryName].pop+=popGained;
      G.stats.totalArea+=areaGained;
    }
    occupied=true;

    // Total victory = complete destruction
    if(isTotal&&ai.strength<200) {
      G.destroyedCountries[countryName]=true;
      destroyed=true;
      // Absorb all remaining area
      const remaining=ai.area||0;
      G.occupiedCountries[countryName].area+=remaining;
      G.stats.totalArea+=remaining;
      G.occupiedCountries[countryName].income+=Math.round(ai.incomePerSec*0.4);
      ai.area=0; ai.troops=0; ai.strength=0;
    }
  } else if(isDefeat) {
    G.money=Math.max(0,G.money-Math.round(G.money*0.08));
  }

  // Weapon losses
  let wpnLostText='';
  if(Object.values(G.weapons).length>0&&playerLoss>500) {
    const wpnKeys=Object.keys(G.weapons);
    const lostWpn=wpnKeys[Math.floor(Math.random()*wpnKeys.length)];
    if(G.weapons[lostWpn]) {
      const lostQty=Math.max(1,Math.round(G.weapons[lostWpn].qty*(isDefeat?0.2:0.05)));
      G.weapons[lostWpn].qty=Math.max(0,G.weapons[lostWpn].qty-lostQty);
      wpnLostText=`${lostQty}× ${G.weapons[lostWpn].def.name} lost in battle.`;
      if(G.weapons[lostWpn].qty===0) delete G.weapons[lostWpn];
    }
  }

  const logs=[
    `[Day 1] ${G.playerCountry.flag} forces cross into ${c.flag} ${countryName}`,
    `[Day 1] Your combat score: ${fmtNum(Math.round(playerScore))} vs Enemy: ${fmtNum(Math.round(aiScore))}`,
    `[Day 2] Heavy fighting along multiple fronts`,
    `[Day 3] Air strikes and artillery exchanged`,
    ratio>1.5?`[Day 4] Enemy lines collapsing — breakthrough achieved!`:ratio>1?`[Day 4] Grinding advance, resistance stiffening`:`[Day 4] Enemy pushes back hard — losses mounting`,
    `[Day 5] Your losses: ${fmtNum(playerLoss)} troops${wpnLostText?' · '+wpnLostText:''}`,
    `[Day 5] Enemy losses: ${fmtNum(aiLoss)} troops · Strength reduced by ${fmtNum(strPrize)}`,
    isTotal&&destroyed?`[Day 6] Total victory — ${countryName} DESTROYED. Nation dissolved.`
    :isVictory?`[Day 6] Victory! Treasury: +$${fmtNum(moneyGained)} · Territory: +${fmtArea(areaGained)} occupied`
    :isDefeat?`[Day 6] Retreat ordered. Treasury lost: $${fmtNum(Math.round(G.money*0.08))}.`
    :`[Day 6] Ceasefire agreed. No clear winner.`,
  ];

  addEvent(`⚔️ War vs ${countryName}: ${outcome}`,'war');

  document.getElementById('war-title').textContent=`⚔️ War vs ${c.flag} ${countryName}`;
  document.getElementById('war-content').innerHTML=`
    <div class="war-vs">
      <div class="war-side"><div class="wflag">${G.playerCountry.flag}</div><div class="wname">${G.playerCountry.name}</div><div class="wstr">Str: ${fmtNum(Math.round(playerStr))}</div></div>
      <div class="war-vs-icon">⚔️</div>
      <div class="war-side"><div class="wflag">${c.flag}</div><div class="wname">${countryName}</div><div class="wstr">Str: ${fmtNum(Math.round(aiStr))}</div></div>
    </div>
    <div class="war-bars">
      ${[['Military',playerStr,aiStr],['Troops',G.troops+playerLoss,ai.troops+aiLoss],['Score',Math.round(playerScore),Math.round(aiScore)]].map(([label,pv,av])=>{
        const total=pv+av||1;
        return`<div class="war-bar-row"><span class="wbl">${label}</span>
          <div class="war-bar-bg"><div class="war-bar-fill war-bar-left" style="width:${Math.round(pv/total*100)}%"></div><div class="war-bar-fill war-bar-right" style="width:${Math.round(av/total*100)}%"></div></div>
          <span class="wbr">${label}</span></div>`;
      }).join('')}
    </div>
    <div class="battle-log">${logs.map((l,i)=>`<div class="${i===logs.length-1?(isVictory?'log-win':isDefeat?'log-lose':'log-neutral'): i>=4?'log-neutral':''}">▶ ${l}</div>`).join('')}</div>
    <div class="war-result ${outcomeClass}">${outcome}</div>
    <div style="margin-top:12px;font-size:13px;color:var(--text2)">
      Your losses: ${fmtNum(playerLoss)} troops
      ${isVictory?`<br>💰 Reparations: +$${fmtNum(moneyGained)}`:''}
      ${isVictory?`<br>🗺️ Territory captured: ${fmtArea(areaGained)}`:''}
      ${destroyed?`<br>💀 <strong style="color:var(--red)">${countryName} COMPLETELY DESTROYED & ANNEXED</strong>`:''}
    </div>
    <button class="btn btn-secondary" style="margin-top:12px;width:100%" onclick="closeModal('warModal');renderTerritory();renderDiplomacy();renderWorld();renderTroops()">Close Report</button>
  `;
  openModal('warModal');
}

// ===== TERRITORY =====
function renderTerritory() {
  const occupied=Object.entries(G.occupiedCountries);
  const totalOccArea=occupied.reduce((s,[,o])=>s+o.area,0);
  const totalOccIncome=occupied.reduce((s,[,o])=>s+o.income,0)*getResearchEffect('occupyIncomeMult',1);
  const totalOccPop=occupied.reduce((s,[,o])=>s+o.pop,0);

  document.getElementById('territory-stats').innerHTML=`
    <div class="territory-summary-grid">
      <div class="tsm"><div class="tv">${fmtArea(G.playerCountry.area)}</div><div class="tl">Home Territory</div></div>
      <div class="tsm"><div class="tv">${fmtArea(totalOccArea)}</div><div class="tl">Occupied Territory</div></div>
      <div class="tsm"><div class="tv">$${fmtNum(Math.round(totalOccIncome))}/s</div><div class="tl">Territory Income</div></div>
      <div class="tsm"><div class="tv">${Object.keys(G.destroyedCountries).length}</div><div class="tl">Nations Destroyed</div></div>
    </div>`;

  if(occupied.length===0&&Object.keys(G.destroyedCountries).length===0) {
    document.getElementById('territory-list').innerHTML='<div class="empty-state">No occupied territories yet.<br>Win wars decisively to capture land.</div>';
    return;
  }

  let html='';
  occupied.forEach(([name,occ])=>{
    const c=ALL_COUNTRIES.find(x=>x.name===name);
    const isDestroyed=G.destroyedCountries[name];
    html+=`<div class="territory-card ${!isDestroyed?'occupied':''}">
      <span class="tc-flag">${c?.flag||'🏳️'}</span>
      <div class="tc-info">
        <div class="tc-name">${name}</div>
        <div class="tc-stats">
          Area: ${fmtArea(occ.area)} · Pop: ${fmtPop(occ.pop)} · Income: +$${fmtNum(Math.round(occ.income*getResearchEffect('occupyIncomeMult',1)))}/s
          · Occupied: ${formatGameTime(occ.since)}
        </div>
      </div>
      <div class="tc-badge">${isDestroyed?'💀 DESTROYED':'🏴 OCCUPIED'}</div>
    </div>`;
  });
  Object.keys(G.destroyedCountries).filter(name=>!G.occupiedCountries[name]).forEach(name=>{
    const c=ALL_COUNTRIES.find(x=>x.name===name);
    html+=`<div class="territory-card">
      <span class="tc-flag">${c?.flag||'🏳️'}</span>
      <div class="tc-info"><div class="tc-name">${name}</div><div class="tc-stats">Nation obliterated by nuclear strike</div></div>
      <div class="tc-badge">☢️ OBLITERATED</div>
    </div>`;
  });
  document.getElementById('territory-list').innerHTML=html;
}

// ===== WORLD =====
let worldSortKey='rank', worldSortAsc=true;
function sortWorld(key){if(worldSortKey===key)worldSortAsc=!worldSortAsc;else{worldSortKey=key;worldSortAsc=key==='rank';}renderWorld();}

function renderWorld() {
  const search=(document.getElementById('world-search')?.value||'').toLowerCase();
  let rankings=getWorldRankings();
  if(search) rankings=rankings.filter(r=>r.name.toLowerCase().includes(search));
  if(worldSortKey!=='rank') rankings.sort((a,b)=>{const av=a[worldSortKey],bv=b[worldSortKey];return worldSortAsc?(av>bv?1:-1):(av<bv?1:-1);});
  const tbody=document.getElementById('world-tbody'); if(!tbody) return;
  tbody.innerHTML=rankings.slice(0,80).map(r=>{
    const rankClass=r.rank<=3?`rank-${r.rank}`:'rank-n';
    const statusEl=r.status==='destroyed'?'<span class="status-destroyed">💀 Destroyed</span>'
      :r.status==='occupied'?'<span class="status-occupied">🏴 Occupied</span>'
      :'<span class="status-alive">✅ Active</span>';
    return `<tr class="${r.isPlayer?'player-row':''}${r.status==='destroyed'?' destroyed-row':''}">
      <td><span class="rank-badge ${rankClass}">${r.rank}</span></td>
      <td><span style="margin-right:6px">${r.flag}</span>${r.name}${r.isPlayer?' 👑':''}</td>
      <td style="color:var(--green)">${fmtNum(r.strength)}</td>
      <td>${fmtNum(r.troops)}</td>
      <td>$${fmtNum(r.money)}</td>
      <td style="color:var(--text2)">${fmtArea(r.area)}</td>
      <td>${statusEl}</td>
    </tr>`;
  }).join('');
}

// ===== AI LOGIC =====
function aiTick() {
  Object.entries(G.aiCountries).forEach(([name,ai])=>{
    if(G.destroyedCountries[name]) return;
    const c=ALL_COUNTRIES.find(x=>x.name===name); if(!c) return;
    // Slower growth than before (×0.6 from original)
    ai.money+=ai.incomePerSec*4;
    const spend=ai.money*0.03*c.diff;
    ai.money-=spend;
    const mil=spend*0.65;
    ai.troops+=Math.floor(mil*0.008*c.diff);
    ai.weapons+=mil*0.0008*c.diff;
    ai.research+=mil*0.0004*c.diff;
    ai.buildings+=mil*0.00008*c.diff;
    ai.strength=Math.round(ai.troops*1.4+ai.weapons*45+ai.buildings*90+ai.research*180);
    ai.incomePerSec+=0.06*c.econ*c.diff;
    ai.incomePerSec=Math.min(ai.incomePerSec,8000*c.econ);
    ai.money=Math.max(0,ai.money);
    if(!ai.area) ai.area=c.area;
  });
}

// ===== MODALS =====
function openModal(id){const el=document.getElementById(id);if(el)el.classList.add('open');if(id==='statsModal')renderStats();}
function closeModal(id){const el=document.getElementById(id);if(el)el.classList.remove('open');}

function renderStats() {
  const s=G.stats;
  const occArea=Object.values(G.occupiedCountries).reduce((a,o)=>a+o.area,0);
  document.getElementById('stats-content').innerHTML=`
    <div class="stat-grid">
      <div class="stat-item"><div class="sval">$${fmtNum(Math.round(s.earned))}</div><div class="slabel">Total Money Earned</div></div>
      <div class="stat-item"><div class="sval">${fmtNum(s.recruited)}</div><div class="slabel">Troops Recruited</div></div>
      <div class="stat-item"><div class="sval">${s.wars}</div><div class="slabel">Wars Fought</div></div>
      <div class="stat-item"><div class="sval">${s.victories}</div><div class="slabel">Victories</div></div>
      <div class="stat-item"><div class="sval">${s.defeats}</div><div class="slabel">Defeats</div></div>
      <div class="stat-item"><div class="sval">${Math.round(s.wars>0?s.victories/s.wars*100:0)}%</div><div class="slabel">Win Rate</div></div>
      <div class="stat-item"><div class="sval">${fmtNum(s.peakStrength)}</div><div class="slabel">Peak Strength</div></div>
      <div class="stat-item"><div class="sval">${s.bestWeapon||'None'}</div><div class="slabel">Best Weapon</div></div>
      <div class="stat-item"><div class="sval">#${getPlayerRank()}</div><div class="slabel">Current World Rank</div></div>
      <div class="stat-item"><div class="sval">${Object.values(G.research).filter(r=>r.done).length}/${RESEARCH_DEFS.length}</div><div class="slabel">Researches Done</div></div>
      <div class="stat-item"><div class="sval">${s.territoriesOccupied}</div><div class="slabel">Territories Occupied</div></div>
      <div class="stat-item"><div class="sval">${Object.keys(G.destroyedCountries).length}</div><div class="slabel">Nations Destroyed</div></div>
      <div class="stat-item"><div class="sval">${fmtArea(G.playerCountry.area+occArea)}</div><div class="slabel">Total Land Area</div></div>
      <div class="stat-item"><div class="sval">${s.nukesUsed}</div><div class="slabel">Nuclear Strikes</div></div>
    </div>
    <div style="margin-top:16px;text-align:center;color:var(--text2);font-size:12px">
      Game time: ${Math.floor(G.gameTime/60)}m ${G.gameTime%60}s
    </div>`;
}

// ===== TABS =====
function showTab(id) {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id)?.classList.add('active');
  document.querySelector(`.nav-btn[data-tab="${id}"]`)?.classList.add('active');
  if(id==='buildings')  renderBuildings();
  if(id==='military')   renderTroops();
  if(id==='factory')    renderFactory();
  if(id==='nuclear')    renderNuclear();
  if(id==='research')   renderResearch();
  if(id==='diplomacy')  renderDiplomacy();
  if(id==='territory')  renderTerritory();
  if(id==='world')      renderWorld();
}

// ===== EVENTS & TOAST =====
function addEvent(msg,type){G.events.unshift({msg,type,time:G.gameTime});if(G.events.length>60)G.events.pop();}

function toast(msg,type='success') {
  const el=document.createElement('div');
  el.className=`toast ${type}`; el.textContent=msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(()=>{el.style.animation='slideOut 0.3s ease forwards';setTimeout(()=>el.remove(),300);},3200);
}

// ===== UTILS =====
function fmtNum(n){if(n>=1e9)return(n/1e9).toFixed(1)+'B';if(n>=1e6)return(n/1e6).toFixed(1)+'M';if(n>=1e3)return(n/1e3).toFixed(1)+'K';return Math.round(n).toLocaleString();}
function fmtPop(n){if(n>=1e9)return(n/1e9).toFixed(1)+'B';if(n>=1e6)return(n/1e6).toFixed(0)+'M';return n.toLocaleString();}
function fmtArea(n){if(!n)return'0 km²';if(n>=1e6)return(n/1e6).toFixed(2)+'M km²';if(n>=1000)return(n/1000).toFixed(1)+'K km²';return Math.round(n)+' km²';}
