window.addEventListener('load', function () {
    let foundMarkersGroup = new L.LayerGroup()
    let id = 1
    let currentMarkerID = null
    let markers = []


    
    //{name:, x:, y:, path:, description:'', progression:, markertype:},

    //#region GRUB
    let grubGroup = new L.LayerGroup()
    var grubData = [
      {name: 'Grub', x:-575, y:1314, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-704, y:1030, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1015, y:860, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1067, y:1085, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-867, y:1624, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-978, y:1569, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1200, y:1562, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1141, y:502, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1400, y:836, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1819, y:317, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1952, y:851, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1891, y:1284, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-2093, y:1252, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1625, y:1596, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1520, y:1483, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1434, y:1878, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-923, y:1733, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-753, y:2111, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-705, y:2571, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-829, y:2396, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-897, y:2452, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-648, y:2290, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-695, y:2808, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-598, y:2888, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-726, y:2933, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-721, y:3308, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-597, y:3056, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-431, y:3392, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-981, y:3556, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1313, y:2516, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1479, y:2744, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1458, y:2994, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1696, y:3265, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1503, y:3588, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1509, y:3607, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1513, y:3626, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1825, y:2558, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-2168, y:2206, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-2152, y:2560, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1763, y:3395, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1864, y:3391, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1729, y:3573, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1909, y:3564, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1715, y:4001, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1913, y:3916, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
      {name: 'Grub', x:-1942, y:4385, path:'icon/grub.png', description:'', progression:0, markertype:'grub'},
    ];
    


    //#endregion

    //#region CHARMS
    let charmsGroup = new L.LayerGroup()
    var charmsData = [
      {name:'Joni Blessing', x:-507, y:1465, path:'icon/charms/joni_blessing.png', description:'', progression:1, markertype:'charms'},
      {name:'Baldur Shell', x:-665, y:1303, path:'icon/charms/baldur_shell.png', description:'', progression:1, markertype:'charms'},
      {name:'Fury of The Fallen', x:-655, y:1720, path:'icon/charms/fury_of_the_fallen.png', description:'', progression:1, markertype:'charms'},
      {name:'Grimm Child', x:-620, y:1888, path:'icon/charms/grimm_child.png', description:'', progression:1, markertype:'charms'},
      {name:'Nailmaster Glory', x:-599, y:1978, path:'icon/charms/nailmaster_glory.png', description:'', progression:1, markertype:'charms'},
      {name:'Deep Focus', x:-644, y:2481, path:'icon/charms/deep_focus.png', description:'', progression:1, markertype:'charms'},
      {name:'Shape of Unn', x:-909, y:373, path:'icon/charms/shape_of_unn.png', description:'', progression:1, markertype:'charms'},
      {name:'Thorns of Agony', x:-931, y:1287, path:'icon/charms/thorns_of_agony.png', description:'', progression:1, markertype:'charms'},
      {name:'Soul Catcher', x:-817, y:2055, path:'icon/charms/soul_catcher.png', description:'', progression:1, markertype:'charms'},
      {name:'Glowing Womb', x:-801, y:2335, path:'icon/charms/glowing_womb.png', description:'', progression:1, markertype:'charms'},
      {name:'Dream Shield', x:-856, y:3318, path:'icon/charms/dream_shield.png', description:'', progression:1, markertype:'charms'},
      {name:'Soul Eater', x:-982, y:3738, path:'icon/charms/soul_eater.png', description:'', progression:1, markertype:'charms'},
      {name:'King Soul Left', x:-1147, y:546, path:'icon/charms/king_soul_part1.png', description:'', progression:0.5, markertype:'charms'},
      {name:'Spore Shroom', x:-1547, y:1506, path:'icon/charms/spore_shroom.png', description:'', progression:1, markertype:'charms'},
      {name:'Mark of Pride', x:-1713, y:1948, path:'icon/charms/mark_of_pride.png', description:'', progression:1, markertype:'charms'},
      {name:'Dash Master', x:-1832, y:1991, path:'icon/charms/dash_master.png', description:'', progression:1, markertype:'charms'},
      {name:'Spell Twister', x:-1213, y:2818, path:'icon/charms/spell_twister.png', description:'', progression:1, markertype:'charms'},
      {name:'Weaversong', x:-1940, y:998, path:'icon/charms/weaversong.png', description:'', progression:1, markertype:'charms'},
      {name:'Sharp Shadow', x:-2175, y:1692, path:'icon/charms/sharp_shadow.png', description:'', progression:1, markertype:'charms'},
      {name:'Flukenest', x:-1956, y:2416, path:'icon/charms/flukenest.png', description:'', progression:1, markertype:'charms'},
      {name:'Defender Crest', x:-1809, y:2960, path:'icon/charms/defender_crest.png', description:'', progression:1, markertype:'charms'},
      {name:'Quick Slash', x:-1913, y:4151, path:'icon/charms/quick_slash.png', description:'', progression:1, markertype:'charms'},
      {name:'Hiverblood', x:-1986, y:4071, path:'icon/charms/hiverblood.png', description:'', progression:1, markertype:'charms'},
      {name:'King Soul Right', x:-2226, y:3042, path:'icon/charms/king_soul_part2.png', description:'', progression:0.5, markertype:'charms'},
      {name:'Lifeblood Core', x:-2638, y:2551, path:'icon/charms/lifeblood_core.png', description:'', progression:1, markertype:'charms'},
      {name:'Void Heart', x:-2812, y:2721, path:'icon/charms/void_heart.png', description:'', progression:0, markertype:'charms'},
      {name:'Unbreakable Greed', x:-605, y:1840, path:'icon/charms/unbreakable_greed.png', description:'', progression:0, markertype:'charms'},
      {name:'Unbreakable Heart', x:-605, y:1855, path:'icon/charms/unbreakable_heart.png', description:'', progression:0, markertype:'charms'},
      {name:'Unbreakable Strength', x:-605, y:1870, path:'icon/charms/unbreakable_strength.png', description:'', progression:0, markertype:'charms'},
      {name:'Grubsong', x:-696, y:1874, path:'icon/charms/grubsong.png', description:'', progression:1, markertype:'charms'},
      {name:'Grubberfly\'s Elegy', x:-696, y:1886, path:'icon/charms/grubberfly_elegy.png', description:'', progression:1, markertype:'charms'},
      {name:'Gathering Swarm', x:-587, y:1955, path:'icon/charms/gathering_swarm.png', description:'', progression:1, markertype:'charms'},
      {name:'Stalwart Shell', x:-587, y:1967, path:'icon/charms/stalwart_shell.png', description:'', progression:1, markertype:'charms'},
      {name:'Heavy Blow', x:-587, y:1979, path:'icon/charms/heavy_blow.png', description:'', progression:1, markertype:'charms'},
      {name:'Sprintmaster Shell', x:-587, y:1991, path:'icon/charms/sprintmaster.png', description:'', progression:1, markertype:'charms'},
      {name:'Wayward Compass', x:-599, y:2041, path:'icon/charms/wayward_compass.png', description:'', progression:1, markertype:'charms'},
      {name:'Fragile Greed', x:-1182, y:2100, path:'icon/charms/fragile_greed.png', description:'', progression:1, markertype:'charms'},
      {name:'Fragile Heart', x:-1182, y:2112, path:'icon/charms/fragile_heart.png', description:'', progression:1, markertype:'charms'},
      {name:'Fragile Strength', x:-1182, y:2124, path:'icon/charms/fragile_strength.png', description:'', progression:1, markertype:'charms'},
      {name:'Lifeblood Heart', x:-1006, y:2662, path:'icon/charms/lifeblood_heart.png', description:'', progression:1, markertype:'charms'},
      {name:'Longnail', x:-1006, y:2674, path:'icon/charms/long_nail.png', description:'', progression:1, markertype:'charms'},
      {name:'Steady Body', x:-1006, y:2686, path:'icon/charms/steady_body.png', description:'', progression:1, markertype:'charms'},
      {name:'Shaman Stone', x:-993, y:2662, path:'icon/charms/shaman_stone.png', description:'', progression:1, markertype:'charms'},
      {name:'Quick Focus', x:-993, y:2674, path:'icon/charms/quick_focus.png', description:'', progression:1, markertype:'charms'},
      {name:'Dream Wielder', x:-804, y:3421, path:'icon/charms/dream_wielder.png', description:'', progression:1, markertype:'charms'},
    ]



    
    //#endregion

    //#region WARRIOR DREAMS
    let warriordreamsGroup = new L.LayerGroup()
    var warriordreamsData = [
      {name:'Gorb', x:-327, y:1308, path:'icon/warriordreams/gorb.png', description:'', progression:1, markertype:'warriorsdreams'},
      {name:'Elder Hu', x:-1359, y:2267, path:'icon/warriordreams/elder_hu.png', description:'', progression:1, markertype:'warriorsdreams'},
      {name:'Galien', x:-1849, y:955, path:'icon/warriordreams/galien.png', description:'', progression:1, markertype:'warriorsdreams'},
      {name:'Markoth', x:-1782, y:4107, path:'icon/warriordreams/markoth.png', description:'', progression:1, markertype:'warriorsdreams'},
      {name:'Marmu', x:-1367, y:695, path:'icon/warriordreams/marmu.png', description:'', progression:1, markertype:'warriorsdreams'},
      {name:'No Eyes', x:-1033, y:1664, path:'icon/warriordreams/no_eyes.png', description:'', progression:1, markertype:'warriorsdreams'},
      {name:'Xero', x:-934, y:3189, path:'icon/warriordreams/xero.png', description:'', progression:1, markertype:'warriorsdreams'},
    ]
  
    //#endregion

    //#region  BOSSES
    let bossesGroup = new L.LayerGroup()
    var bossesData = [
      {name:'Broken Vessel', x:-2243, y:2098, path:'icon/bosses/broken_vessel.png', description:'', progression:1, markertype:'boss'},
      {name:'Brooding Mawlek', x:-872, y:1918, path:'icon/bosses/brooding_mawlek.png', description:'', progression:1, markertype:'boss'},
      {name:'The Collector', x:-1522, y:3593, path:'icon/bosses/the_collector.png', description:'', progression:1, markertype:'boss'},
      {name:'Crystal Guardian', x:-525, y:2869, path:'icon/bosses/crystal_guardian.png', description:'', progression:0, markertype:'boss'},
      {name:'Dung Defender', x:-1804, y:2942, path:'icon/bosses/dung_defender.png', description:'', progression:1, markertype:'boss'},
      {name:'False Knight', x:-844, y:2128, path:'icon/bosses/false_knight.png', description:'', progression:1, markertype:'boss'},
      {name:'Flukemarm', x:-1942, y:2436, path:'icon/bosses/flukemarm.png', description:'', progression:0, markertype:'boss'},
      {name:'Grimm', x:-624, y:1926, path:'icon/bosses/grimm.png', description:'', progression:1, markertype:'boss'},
      {name:'Gruz Mother', x:-986, y:2595, path:'icon/bosses/gruz_mother.png', description:'', progression:1, markertype:'boss'},
      {name:'Soul Master', x:-1220, y:2622, path:'icon/bosses/soul_master.png', description:'', progression:1, markertype:'boss'},
      {name:'Hive Knight', x:-1951, y:4071, path:'icon/bosses/hive_knight.png', description:'', progression:1, markertype:'boss'},
      {name:'Hollow Knight', x:-705, y:2238, path:'icon/bosses/hollow_knight.png', description:'', progression:0, markertype:'boss'},
      {name:'Hornet', x:-728, y:815, path:'icon/bosses/hornet.png', description:'', progression:1, markertype:'boss'},
      {name:'Mantis Lords', x:-1845, y:1866, path:'icon/bosses/mantis_lords.png', description:'', progression:1, markertype:'boss'},
      {name:'Massive Moss Charger', x:-1047, y:1352, path:'icon/bosses/massive_moss_charger.png', description:'', progression:0, markertype:'boss'},
      {name:'Nosk', x:-2128, y:1428, path:'icon/bosses/nosk.png', description:'', progression:1, markertype:'boss'},
      {name:'The Radiance', x:-684, y:2238, path:'icon/bosses/the_radiance.png', description:'', progression:0, markertype:'boss'},
      {name:'Soul Warrior', x:-1345, y:2686, path:'icon/bosses/soul_warrior.png', description:'', progression:0, markertype:'boss'},
      {name:'Traitor Lord', x:-1149, y:732, path:'icon/bosses/traitor_lord.png', description:'', progression:1, markertype:'boss'},
      {name:'Uumuu', x:-1210, y:1599, path:'icon/bosses/uumuu.png', description:'', progression:1, markertype:'boss'},
      {name:'Vengefly King', x:-637, y:988, path:'icon/bosses/vengefly_king.png', description:'', progression:0, markertype:'boss'},
      {name:'Watcher Knights', x:-1395, y:2985, path:'icon/bosses/watcher_knights.png', description:'', progression:1, markertype:'boss'},
      {name:'Enraged Guardian', x:-480, y:2863, path:'icon/bossvariants/enraged_guardian.png', description:'', progression:0, markertype:'boss'},
      {name:'Failed Champion', x:-824, y:2150, path:'icon/bossvariants/failed_champion.png', description:'', progression:0, markertype:'boss'},
      {name:'Grey Prince Zote', x:-642, y:2063, path:'icon/bossvariants/grey_prince_zote.png', description:'', progression:0, markertype:'boss'},
      {name:'Hornet Sentinel', x:-1692, y:4321, path:'icon/bossvariants/hornet_sentinel.png', description:'', progression:1, markertype:'boss'},
      {name:'Lost Kin', x:-2243, y:2110, path:'icon/bossvariants/lost_kin.png', description:'', progression:0, markertype:'boss'},
      {name:'Nightmare King Grimm', x:-611, y:1926, path:'icon/bossvariants/nightmare_king_grimm.png', description:'', progression:1, markertype:'boss'},
      {name:'Soul Tyrant', x:-1222, y:2650, path:'icon/bossvariants/soul_tyrant.png', description:'', progression:0, markertype:'boss'},
      {name:'White Defender', x:-1843, y:2953, path:'icon/bossvariants/white_defender.png', description:'', progression:0, markertype:'boss'},
    ]

              
    //#endregion

    //#region DREAMERS
    let dreamersGroup = new L.LayerGroup()
    var dreamersData = [
      {name:'Herrah', x:-1855, y:327, path:'icon/dreamers/herrah.png', description:'', progression:1, markertype:'dreamers'},
      {name:'Lurien', x:-1119, y:3044, path:'icon/dreamers/lurien.png', description:'', progression:1, markertype:'dreamers'},
      {name:'Monomon', x:-1223, y:1602, path:'icon/dreamers/monomon.png', description:'', progression:1, markertype:'dreamers'},
    ]

    //#endregion

    //#region NOTCH
    let notchesGroup = new L.LayerGroup()
    var notchesData = [
      {name:'Notches', x:-980, y:2662, path:'icon/notch.png', description:'<br>Collect 5 Charms', progression:0, markertype:'notches'},
      {name:'Notches', x:-980, y:2674, path:'icon/notch.png', description:'<br>Collect 10 Charms', progression:0, markertype:'notches'},
      {name:'Notches', x:-980, y:2686, path:'icon/notch.png', description:'<br>Collect 18 Charms', progression:0, markertype:'notches'},
      {name:'Notches', x:-993, y:2686, path:'icon/notch.png', description:'<br>Collect 25 Charms', progression:0, markertype:'notches'},
      {name:'Notches', x:-1081, y:1731, path:'icon/notch.png', description:'<br>Unlock Isma\'s Tear or Monarch Wings', progression:0, markertype:'notches'},
      {name:'Notches', x:-1262, y:1906, path:'icon/notch.png', description:'<br>Defeat 2 Shrumal Ogres', progression:0, markertype:'notches'},
      {name:'Notches', x:-1255, y:3653, path:'icon/notch.png', description:'<br>Complete the Trial of the Warrior', progression:0, markertype:'notches'},
      {name:'Notches', x:-596, y:1926, path:'icon/notch.png', description:'<br>Defeat Grimm', progression:0, markertype:'notches'},
    ]

    //#endregion

    //#region SPELL AND ABILITIES
    let spellsandabilitiesGroup = new L.LayerGroup()
    var spellsandabilitiesData = [
      {name:'Vengeful Spirit', x:-839, y:2054, path:'icon/spell_abilities/vengeful_spirit.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Desolate Dive', x:-1258, y:2637, path:'icon/spell_abilities/desolate_dive.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Howling Wraiths', x:-1190, y:1090, path:'icon/spell_abilities/howling_wraiths.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Shade Soul', x:-1331, y:2685, path:'icon/spell_abilities/shade_soul.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Descending Dark', x:-760, y:3309, path:'icon/spell_abilities/descending_dark.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Abyss Shriek', x:-2769, y:2365, path:'icon/spell_abilities/abyss_shriek.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Mothwing Cloak', x:-712, y:817, path:'icon/spell_abilities/mothwing_cloak.png', description:'', progression:2, markertype:'spellsandabilities'},
      {name:'Mantis Claw', x:-1634, y:1796, path:'icon/spell_abilities/mantis_claw.png', description:'', progression:2, markertype:'spellsandabilities'},
      {name:'Crystal Heart', x:-633, y:3409, path:'icon/spell_abilities/crystal_heart.png', description:'', progression:2, markertype:'spellsandabilities'},
      {name:'Monarch Wings', x:-2271, y:1858, path:'icon/spell_abilities/monarch_wings.png', description:'', progression:2, markertype:'spellsandabilities'},
      {name:'Isma\'s Tear', x:-1948, y:3372, path:'icon/spell_abilities/isma\'s_tear.png', description:'', progression:2, markertype:'spellsandabilities'},
      {name:'Shade Cloak', x:-2736, y:3643, path:'icon/spell_abilities/shade_cloak.png', description:'', progression:2, markertype:'spellsandabilities'},
      {name:'Dream Nail', x:-947, y:3321, path:'icon/spell_abilities/dream_nail.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Cyclone Slash', x:-379, y:1407, path:'icon/spell_abilities/cyclone_slash.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Dash Slash', x:-1823, y:4292, path:'icon/spell_abilities/dash_slash.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Great Slash', x:-928, y:477, path:'icon/spell_abilities/great_slash.png', description:'', progression:1, markertype:'spellsandabilities'},
      {name:'Awoken Dream Nail', x:-782, y:3433, path:'icon/spell_abilities/awoken_dream_nail.png', description:'<br>Collect 1800 Essence with the Dream Nail.', progression:1, markertype:'spellsandabilities'},
    ]
   
    //#endregion

    //#region MASK SHARD
    let maskshardGroup = new L.LayerGroup()
    var maskshardData = [
      {name:'Mask Shard', x:-575, y:1955, path:'icon/mask_shard.png', description:'<br>Just Sly', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-575, y:1967, path:'icon/mask_shard.png', description:'<br>Just Sly', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-575, y:1979, path:'icon/mask_shard.png', description:'<br>Sly With Shopkeeper Key', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-575, y:1991, path:'icon/mask_shard.png', description:'<br>Sly With Shopkeeper Key', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-872, y:1935, path:'icon/mask_shard.png', description:'<br>Reward for defeating Brooding Mawlek', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-696, y:1898, path:'icon/mask_shard.png', description:'<br>Requires rescuing 5 Grubs', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-940, y:2122, path:'icon/mask_shard.png', description:'<br>Recomended Mantis Claw', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-1414, y:1606, path:'icon/mask_shard.png', description:'<br>Requires Mantis Claw', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-627, y:2052, path:'icon/mask_shard.png', description:'<br>Requires rescuing Bretta from Fungal Wastes', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-1033, y:1680, path:'icon/mask_shard.png', description:'<br>Recommended Lumafly Lantern', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-1814, y:2157, path:'icon/mask_shard.png', description:'', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-1839, y:1700, path:'icon/mask_shard.png', description:'<br>Requires Monarch Wings', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-485, y:2835, path:'icon/mask_shard.png', description:'<br>Requires Monarch Wings', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-1968, y:3812, path:'icon/mask_shard.png', description:'<br>Requires baiting a Hive Guardian into breaking a wall', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-804, y:3431, path:'icon/mask_shard.png', description:'<br>Requires collecting 1500 Essence', progression:0.25, markertype:'maskshard'},
      {name:'Mask Shard', x:-936, y:3662, path:'icon/mask_shard.png', description:'<br>Requires completing the Delicate Flower quest', progression:0.25, markertype:'maskshard'},
    ]
    
    //#endregion

    //#region VESSEL FRAGMENT
    let vesselfragmentGroup = new L.LayerGroup()
    var vesselfragmentData = [
      {name:'Vessel Fragment', x:-563, y:1955, path:'icon/vessel_fragment.png', description:'<br>Just Sly', progression:0.33, markertype:'vesselfragment'},
      {name:'Vessel Fragment', x:-563, y:1967, path:'icon/vessel_fragment.png', description:'<br>Sly With Shopkeeper Key', progression:0.33, markertype:'vesselfragment'},
      {name:'Vessel Fragment', x:-1058, y:1024, path:'icon/vessel_fragment.png', description:'', progression:0.33, markertype:'vesselfragment'},
      {name:'Vessel Fragment', x:-984, y:2085, path:'icon/vessel_fragment.png', description:'', progression:0.33, markertype:'vesselfragment'},
      {name:'Vessel Fragment', x:-1481, y:3458, path:'icon/vessel_fragment.png', description:'', progression:0.33, markertype:'vesselfragment'},
      {name:'Vessel Fragment', x:-1984, y:1813, path:'icon/vessel_fragment.png', description:'', progression:0.33, markertype:'vesselfragment'},
      {name:'Vessel Fragment', x:-306, y:1221, path:'icon/vessel_fragment.png', description:'', progression:0.33, markertype:'vesselfragment'},
      {name:'Vessel Fragment', x:-793, y:3421, path:'icon/vessel_fragment.png', description:'<br>Collecting 700 Essence', progression:0.33, markertype:'vesselfragment'},
      {name:'Vessel Fragment', x:-2140, y:2782, path:'icon/vessel_fragment.png', description:'<br>Dropping Geo 3000 into the fountain', progression:0.33, markertype:'vesselfragment'},
    ]
    //#endregion

    //#region PALE ORE
    let paleoreGroup = new L.LayerGroup()
    var paleoreData = [
      {name:'Pale Ore', x:-2135, y:2348, path:'icon/pale_ore.png', description:'<br>Defeat two Lesser Mawleks that guard it.', progression:0.66, markertype:'paleore'},
      {name:'Pale Ore', x:-793, y:3433, path:'icon/pale_ore.png', description:'<br>Collect 300 Essence with the Dream Nail.', progression:0.66, markertype:'paleore'},
      {name:'Pale Ore', x:-104, y:3122, path:'icon/pale_ore.png', description:'<br>Requires Mantis Claw. Monarch Wings and Crystal Heart recommended.', progression:0.66, markertype:'paleore'},
      {name:'Pale Ore', x:-2132, y:1549, path:'icon/pale_ore.png', description:'<br>Requires defeating Nosk.', progression:0.66, markertype:'paleore'},
      {name:'Pale Ore', x:-696, y:1910, path:'icon/pale_ore.png', description:'<br>Rescue 31 Grubs.', progression:0.66, markertype:'paleore'},
      {name:'Pale Ore', x:-1255, y:3665, path:'icon/pale_ore.png', description:'<br>Complete the Trial of the Conqueror.', progression:0.66, markertype:'paleore'},
    ]
    //#endregion

    //#region WHISPERING ROOT
    let whisperingrootsGroup = new L.LayerGroup()
    var whisperingrootsData = [
      {name:'Whispering Roots', x:-839, y:2041, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-1361, y:2459, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-431, y:3191, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-1986, y:713, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-681, y:1978, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-1186, y:1921, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-1596, y:1868, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-1069, y:915, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-2093, y:3876, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-559, y:1081, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-1606, y:3754, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-1463, y:1175, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-892, y:3445, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-2002, y:3069, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
      {name:'Whispering Roots', x:-729, y:3676, path:'icon/whispering_roots.png', description:'', progression:0, markertype:'whisperingroots'},
    ]
    //#endregion

    //#region BENCH AND TRANSPORT
    let benchandtransportGroup = new L.LayerGroup()
    var benchData = [
      {name:'Bench', x:-395, y:1420, path:'icon/bench/mato_bench.png', description:'<br>Inside House', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-630, y:2000, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-917, y:2162, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-907, y:2350, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1020, y:2689, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-824, y:2042, path:'icon/bench/bone_bench.png', description:'<br>Inside House', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-705, y:2254, path:'icon/bench/final_boss_bench.png', description:'<br>Inside', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-739, y:1441, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-739, y:1441, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1007, y:1557, path:'icon/bench/fung_bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-857, y:1090, path:'icon/bench/bench.png', description:'<br>50 Geo to unlock', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-771, y:919, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-768, y:584, path:'icon/bench/slug_shrine_bench.png', description:'<br>Inside', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-951, y:491, path:'icon/bench/sheo_bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1228, y:1618, path:'icon/bench/fung_temple_bench.png', description:'<br>Inside', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1458, y:1489, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1195, y:2109, path:'icon/bench/leg_eater_bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1752, y:2114, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1724, y:2000, path:'icon/bench/mantis_bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1574, y:2484, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1411, y:2684, path:'icon/bench/toll_bench.png', description:'<br>150 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1265, y:2444, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1551, y:2898, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1671, y:3478, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1369, y:3279, path:'icon/bench/bath_bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1855, y:2586, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-2074, y:1424, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1719, y:1326, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1860, y:313, path:'icon/bench/spider_bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-2256, y:2633, path:'icon/bench/toll_bench.png', description:'<br>150 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-2233, y:3249, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1845, y:4311, path:'icon/bench/oro_bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1581, y:4026, path:'icon/bench/camp_bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1277, y:3665, path:'icon/bench/col_bench.png', description:'<br>Under Colloseum', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-2115, y:3609, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-2115, y:3609, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-853, y:2897, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-526, y:2854, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-859, y:3511, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-950, y:3678, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1325, y:1149, path:'icon/bench/guardian_bench.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1476, y:714, path:'icon/bench/toll_bench.png', description:'<br>150 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Bench', x:-1369, y:861, path:'icon/bench/bench.png', description:'', progression:0, markertype:'benchandtransport'},
    ]
    
    var stagData = [
      {name:'Stag', x:-304, y:1198, path:'icon/stag.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-769, y:891, path:'icon/stag.png', description:'<br>140 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-630, y:2016, path:'icon/stag.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-906, y:2328, path:'icon/stag.png', description:'<br>50 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-860, y:3543, path:'icon/stag.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-1264, y:2473, path:'icon/stag.png', description:'<br>200 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-860, y:3543, path:'icon/stag.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-1670, y:3506, path:'icon/stag.png', description:'<br>300 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-1457, y:1464, path:'icon/stag.png', description:'<br>140 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-1365, y:830, path:'icon/stag.png', description:'<br>200 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-1808, y:462, path:'icon/stag.png', description:'<br>250 Geo', progression:0, markertype:'benchandtransport'},
      {name:'Stag', x:-2232, y:3221, path:'icon/stag.png', description:'', progression:0, markertype:'benchandtransport'},
    ]

    var tramData = [
      {name:'Tram', x:-935, y:2653, path:'icon/tram.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Tram', x:-935, y:2879, path:'icon/tram.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Tram', x:-2069, y:3281, path:'icon/tram.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Tram', x:-2069, y:2770, path:'icon/tram.png', description:'', progression:0, markertype:'benchandtransport'},
      {name:'Tram', x:-2069, y:1820, path:'icon/tram.png', description:'', progression:0, markertype:'benchandtransport'},
    ]
    //#endregion

    //#region  TRADABLES
    let tradablesGroup = new L.LayerGroup()
    var tradablesData = [
      {name:'Rancid Eggs', x:-487, y:2925, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-799, y:2868, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-751, y:2650, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-978, y:2876, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-986, y:433, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1276, y:1092, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1571, y:1714, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1957, y:1037, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-2003, y:721, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1837, y:332, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1768, y:2210, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1823, y:2421, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1852, y:2675, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1934, y:3130, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1530, y:2708, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1452, y:3218, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1375, y:3735, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Rancid Eggs', x:-1935, y:4246, path:'icon/rancid_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-459, y:3001, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-536, y:1155, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-767, y:970, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1071, y:1476, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1350, y:1865, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1574, y:1885, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1287, y:2305, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-2032, y:2971, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1567, y:3222, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1585, y:3428, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1003, y:3733, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1654, y:3677, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1766, y:3956, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Wanderers Journal', x:-1579, y:3994, path:'icon/wanderers_journal.png', description:'', progression:0, markertype:'tradables'},
      {name:'King\'s Idol', x:-550, y:2730, path:'icon/kings_idol.png', description:'', progression:0, markertype:'tradables'},
      {name:'King\'s Idol', x:-582, y:1017, path:'icon/kings_idol.png', description:'', progression:0, markertype:'tradables'},
      {name:'King\'s Idol', x:-1844, y:1251, path:'icon/kings_idol.png', description:'', progression:0, markertype:'tradables'},
      {name:'King\'s Idol', x:-1837, y:3002, path:'icon/kings_idol.png', description:'', progression:0, markertype:'tradables'},
      {name:'King\'s Idol', x:-1339, y:3546, path:'icon/kings_idol.png', description:'', progression:0, markertype:'tradables'},
      {name:'King\'s Idol', x:-1391, y:4213, path:'icon/kings_idol.png', description:'', progression:0, markertype:'tradables'},
      {name:'King\'s Idol', x:-778, y:3708, path:'icon/kings_idol.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-987, y:3439, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-658, y:2083, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1034, y:1814, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-979, y:1114, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1135, y:1297, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1424, y:1487, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1287, y:487, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1307, y:1787, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1852, y:298, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1741, y:1583, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1700, y:1977, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1327, y:2542, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1625, y:2551, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1348, y:2949, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Hallownest Seal', x:-1624, y:3461, path:'icon/hallownest_seal.png', description:'', progression:0, markertype:'tradables'},
      {name:'Arcane Egg', x:-2661, y:2430, path:'icon/arcane_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Arcane Egg', x:-2755, y:3589, path:'icon/arcane_egg.png', description:'', progression:0, markertype:'tradables'},
      {name:'Arcane Egg', x:-2809, y:2626, path:'icon/arcane_egg.png', description:'', progression:0, markertype:'tradables'},
    ]
    
                     
    //#endregion

    //#region  ExplorationQuest
    let explorationandquestGroup = new L.LayerGroup()
    var explorationandquestData = [
      {name:'Tram Pass', x:-1743, y:878, path:'icon/explorequest/tram_pass.png', description:'', progression:0, markertype:'explorationandquest'},
      {name:'Lumafly Lantern', x:-551, y:1955, path:'icon/lumafly_lantern.png', description:'', progression:0, markertype:'explorationandquest'},
      {name:'Collectors Map', x:-1523, y:3578, path:'icon/explorequest/collectors_map.png', description:'<br>Marks the location of all 46 Grubs on any purchased Maps.', progression:0, markertype:'explorationandquest'},
      {name:'Hunter Mark', x:-925, y:1668, path:'icon/explorequest/hunter_mark.png', description:'', progression:0, markertype:'explorationandquest'},
      {name:'Delicate Flower', x:-949, y:3646, path:'icon/explorequest/flower.png', description:'<br>Clear Monster First, Donot bench', progression:0, markertype:'explorationandquest'},
      {name:'Grave of The Traitors Child', x:-1312, y:827, path:'icon/explorequest/grave_marker.png', description:'<br>Delicate Flower Destination', progression:0, markertype:'explorationandquest'},
      {name:'Godtuner', x:-1957, y:2104, path:'icon/explorequest/godtuner.png', description:'<br>It is dropped by the Godseeker automatically when she is freed from her coffin in the Junk Pit by using a Simple Key.', progression:1, markertype:'explorationandquest'},
    ]    
    //#endregion

    //#region  Keys
    let keysGroup = new L.LayerGroup()
    var keysData = [
      {name:'Simple Key', x:-563, y:1979, path:'icon/simple_key.png', description:'<br> Simple Key: 950 Geo', progression:0, markertype:'keys'},
      {name:'Elegant Key', x:-563, y:1991, path:'icon/elegant_key.png', description:'<br> Elegant Key: 800 Geo', progression:0, markertype:'keys'},
      {name:'Love Key', x:-1479, y:1347, path:'icon/love_key.png', description:'', progression:0, markertype:'keys'},
      {name:'Shopkeeper\'s Key', x:-494, y:2808, path:'icon/shopkeeper_key.png', description:'', progression:0, markertype:'keys'},
      {name:'City Crest', x:-846, y:2143, path:'icon/city_crest.png', description:'<br>Drop from False Knight', progression:0, markertype:'keys'},
      {name:'King\'s Brand', x:-1742, y:4305, path:'icon/kings_brand.png', description:'', progression:2, markertype:'keys'},
    ]
    //#endregion

    //#region NPC
    let npcGroup = new L.LayerGroup()
    var npcData = [
      {name:'Cornifer', x:-2154, y:2787, path:'icon/npc/cornifer.png', description:'<br>Map for Ancient Basin: 112 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-1409, y:2703, path:'icon/npc/cornifer.png', description:'<br>Map for City of Tears: 90 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-570, y:2715, path:'icon/npc/cornifer.png', description:'<br>Map for Crystal Peak: 112 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-1696, y:1384, path:'icon/npc/cornifer.png', description:'<br>Map for Deepnest: 38 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-1117, y:1556, path:'icon/npc/cornifer.png', description:'<br>Map for Fog Canyon: 150 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-865, y:1992, path:'icon/npc/cornifer.png', description:'<br>Map for Forgotten Crossroads: 30 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-1460, y:1666, path:'icon/npc/cornifer.png', description:'<br>Map for Fungal Wastes: 75 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-891, y:1620, path:'icon/npc/cornifer.png', description:'<br>Map for Greenpath: 60 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-435, y:1468, path:'icon/npc/cornifer.png', description:'<br>Map for Howling Cliffs: 75 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-1757, y:3670, path:'icon/npc/cornifer.png', description:'<br>Map for Kingdom\'s Edge: 112 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-1327, y:1192, path:'icon/npc/cornifer.png', description:'<br>Map for Queen\'s Gardens: 150 Geo', progression:0, markertype:'npc'},
      {name:'Cornifer', x:-1789, y:2078, path:'icon/npc/cornifer.png', description:'<br>Map for Royal Waterways: 75 Geo', progression:0, markertype:'npc'},
      {name:'Zote', x:-643, y:972, path:'icon/npc/zote1.png', description:'<br> Saved or If not saved before Mantis Claw, Zote dies there, leaving shell and nail. Hitting shell unlocks Neglect achievement.'+
      '<br>PS: FCK THIS GUY. FCK Grey Prince Zote.', progression:0, markertype:'npc'},
      {name:'Zote', x:-1833, y:1306, path:'icon/npc/zote1.png', description:'<br>Found stuck in spider webs in Deepnest. Knight can save or leave him, but leaving him won\'t result in death.'+
      '<br>PS:FCK Grey Prince Zote. Specially in Pantheon!', progression:0, markertype:'npc'},
      {name:'Hunter', x:-938, y:1668, path:'icon/npc/hunter.png', description:'<br>He gifts the Hunter\'s Journal, a bestiary detailing all enemies in Hallownest.', progression:0, markertype:'npc'},
      {name:'Godseeker', x:-1971, y:2102, path:'icon/npc/godseeker.png', description:'<br>Godseeker\'s cocoon is in Junk Pit, unlocks with Simple Key. Free Godseeker, get Godtuner, start seeking gods or use Dream Nail to join Godhome fights.', progression:0, markertype:'npc'},
      {name:'Seer', x:-815, y:3425, path:'icon/npc/seer.png', description:'<br><img src="icon/hallownest_seal.png"  width="12" height="12"> Hallownest Seal: 100 Essence</img>'+
      '<br><img src=""  width="12" height="12"> Spirit Glade: 200 Essence</img>'+
      '<br><img src="icon/pale_ore.png"  width="12" height="12"> Pale Ore: 300 Essence</img>'+
      '<br><img src="icon/charms/dream_wielder.png"  width="12" height="12"> Dream Wielder: 500 Essence</img>'+
      '<br><img src="icon/vessel_fragment.png"  width="12" height="12"> Vessel Fragment: 700 Essence</img>'+
      '<br><img src="icon/dream_gate.png"  width="12" height="12"> Dream Gate: 900 Essence</img>'+
      '<br><img src="icon/arcane_egg.png"  width="12" height="12"> Arcane Egg: 1200 Essence</img>'+
      '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 1500 Essence</img>'+
      '<br><img src="icon/spell_abilities/awoken_dream_nail.png"  width="12" height="12"> Awoken Dream Nail: 1800 Essence</img>'+
      '<br><img src="icon/achievements/achievement_ascension.png"  width="12" height="12"> Ascension Achievement: 2400 Essence</img>', progression:0, markertype:'npc'},
      {name:'Grub Father', x:-715, y:1890, path:'icon/npc/grub_father.png', description:'<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 5/46 Grub</img>'+
      '<br><img src="icon/charms/grubsong.png"  width="12" height="12"> Grubsong: 10/46 Grub</img>'+
      '<br><img src="icon/rancid_egg.png"  width="15" height="15"> Rancid Egg: 16/46 Grub</img>'+
      '<br><img src="icon/hallownest_seal.png"  width="12" height="12"> Hallownest Seal: 23/46 Grub</img>'+
      '<br><img src="icon/pale_ore.png"  width="12" height="12"> Pale Ore: 31/46 Grub</img>'+
      '<br><img src="icon/kings_idol.png"  width="12" height="12"> King\'s Idol: 38/46 Grub</img>'+
      '<br><img src="icon/charms/grubberfly_elegy.png"  width="12" height="12"> Grubberfly Elegy: 46/46 Grub</img>', progression:0, markertype:'npc'},
      {name:'Grey Mourner', x:-950, y:3662, path:'icon/npc/grey_mourner.png', description:'<br>Grey Mourner is in Resting Grounds, needs Desolate Dive/Descending Dark.'+
      ' She asks Knight to take Delicate Flower to lover\'s grave in Queen\'s Gardens, but flower breaks if Knight teleports or takes damage.', progression:0, markertype:'npc'},
      {name:'Brumm', x:-1912, y:299, path:'icon/npc/brumm_banish.png', description:'<br>After Grimm fight, Brumm in Distant Village gives Flame if Knight has less than three. He offers to help banish Grimm Troupe.', progression:0, markertype:'npc'},
      {name:'Brumm', x:-540, y:1279, path:'icon/npc/brumm_banish.png', description:'<br>Brumm will jabs his staff into the brazier so it can be broken and banished Grimm Troupe', progression:0, markertype:'npc'},
      {name:'Mato', x:-393, y:1407, path:'icon/npc/mato.png', description:'<br>Nailmaster Mato is one of three Nailmasters in Hollow Knight.'+
      ' He teaches the Cyclone Slash to whoever is willing to become his disciple.', progression:0, markertype:'npc'},
      {name:'Oro', x:-1845, y:4293, path:'icon/npc/oro.png', description:'<br>Nailmaster Oro is one of three Nailmasters in Hollow Knight.'+
      ' He teaches the Dash Slash Nail Art to those willing to pay him for his services.', progression:0, markertype:'npc'},
      {name:'Sheo', x:-950, y:477, path:'icon/npc/sheo.png', description:'<br>Nailmaster Sheo is one of three Nailmasters in Hollow Knight.'+
      ' Although retired, he teaches the Great Slash Nail Art to those seeking him.', progression:0, markertype:'npc'},
      {name:'Bretta', x:-1765, y:2017, path:'icon/npc/bretta.png', description:'<br>Bretta is in Fungal Wastes past Dash Master statue. Unlock her house for Mask Shard. She sleeps in the house and sits on Bench.', progression:0, markertype:'npc'},
      {name:'Tuk', x:-1748, y:2908, path:'icon/npc/tuk.png', description:'<br>She sells the Knight Rancid Eggs for Geo.png 80-100.' +
      'She does not sell eggs if the Knight has 80 or more in their inventory.'+
      'She also gives them one for free if they are wearing the Defender\'s Crest Charm,', progression:0, markertype:'npc'},
      {name:'Confessor Jiji', x:-633, y:2199, path:'icon/npc/confessor_jiji.png', description:'<br>Requires Rancid Eggs to summon the Knight\'s Shade.', progression:0, markertype:'npc'},
      {name:'Little Fool', x:-1277, y:3648, path:'icon/npc/little_fool.png', description:'<br><img src="icon/trial_of_the_warrior.png"  width="15" height="20"> Trial of The Warrior: 100 Geo</img>'+
      '<br><img src="icon/trial_of_the_conqueror.png"  width="15" height="20"> Trial of The Conqueror: 450 Geo</img>'+
      '<br><img src="icon/trial_of_the_fool.png"  width="15" height="20"> Trial of The Fool: 800 Geo</img>', progression:0, markertype:'npc'},
      {name:'Millibelle The Banker', x:-1391, y:1396, path:'icon/npc/millibelle.png', description:'<br>If she holds 2550 Geo or more and the Knight rests at a Bench or uses the Stagways, visiting the bank again reveals that Millibelle has abandoned her stand.'+
      '<br>Millibelle the Thief can be found at the Hot Spring in the Pleasure House in the City of Tears', progression:0, markertype:'npc'},
      {name:'Nailsmith', x:-1683, y:2184, path:'icon/npc/nailsmith.png', description:'<br>Sharpened Nail: 250 Geo <br>Channelled Nail: 800g + x1 Pale Ore <br>Coiled Nail: 2000g + x2 Pale Ore <br>Pure Nail: 4000g + x3 Pale Ore', progression:0, markertype:'npc'},
      {name:'Iselda', x:-627, y:2040, path:'icon/npc/iselda.png', description:'<br><img src="icon/charms/wayward_compass.png"  width="12" height="12"> Wayward Compass: 220 Geo</img>'+
      '<br><img src="icon/area_map.png"  width="12" height="12"> Resting Grounds: 75 Geo</img>'+
      '<br><img src="icon/quill.png"  width="12" height="12"> :Quill</img>'+
      '<br><img src="icon/map_pins.png"  width="28" height="18"> :Map pins</img>', progression:0, markertype:'npc'},
      {name:'Relic Seeker Lemm', x:-1679, y:2733, path:'icon/npc/lemm.png', description:'<br><img src="icon/wanderers_journal.png"  width="12" height="12"> Wanderer Journal: 200 Geo</img>'+
      '<br><img src="icon/hallownest_seal.png"  width="12" height="12"> Hollownest Seal: 450 Geo</img>'+
      '<br><img src="icon/kings_idol.png"  width="12" height="12"> King\'s Idol: 800 Geo</img>'+
      '<br><img src="icon/arcane_egg.png"  width="12" height="12"> Arcane Egg: 1200 Geo</img>', progression:0, markertype:'npc'},
      {name:'Divine', x:-624, y:1853, path:'icon/npc/divine.png', description:'<br><img src="icon/charms/unbreakable_greed.png"  width="12" height="12"> Unbreakable Greed: 9000 Geo</img>'+
      '<br><img src="icon/charms/unbreakable_heart.png"  width="12" height="12"> Unbreakable Heart: 12000 Geo</img>'+
      '<br><img src="icon/charms/unbreakable_strength.png"  width="12" height="12"> Unbreakable Strength: 15000 Geo</img>', progression:0, markertype:'npc'},
      {name:'Legeater', x:-1193, y:2124, path:'icon/npc/legeater.png', description:'<br><img src="icon/charms/fragile_heart.png"  width="12" height="12"> Fragile Heart: 350 Geo</img>'+
      '<br><img src="icon/charms/fragile_greed.png"  width="12" height="12"> Fragile Greed: 250 Geo</img>'+
      '<br><img src="icon/charms/fragile_strength.png"  width="12" height="12"> Fragile Strength:600 Geo</img>'+
      '<br><img src="icon/charms/fragile_heart_broken.png"  width="12" height="12"> Repair:200 Geo/Defender Crest Equipped 160G</img>'+
      '<br><img src="icon/charms/fragile_greed_broken.png"  width="12" height="12"> Repair:150 Geo/Defender Crest Equipped 120G</img>'+
      '<br><img src="icon/charms/fragile_strength_broken.png"  width="12" height="12"> Repair:350 Geo/Defender Crest Equipped 280G</img>', progression:0, markertype:'npc'},
      {name:'Salubra', x:-1018, y:2676, path:'icon/npc/salubra.png', description:'<br><img src="icon/charms/lifeblood_heart.png"  width="12" height="12"> Lifeblood Heart: 250 Geo</img>'+
      '<br><img src="icon/charms/long_nail.png"  width="12" height="12"> Long Nail: 300 Geo</img>'+
      '<br><img src="icon/charms/steady_body.png"  width="12" height="12"> Steady Body: 120 Geo</img>'+
      '<br><img src="icon/charms/shaman_stone.png"  width="12" height="12"> Shaman Stone: 220 Geo</img>'+
      '<br><img src="icon/charms/quick_focus.png"  width="12" height="12"> Quick Focus: 800 Geo</img>'+
      '<br><img src="icon/notch.png"  width="12" height="12"> Notch: 120 Geo and Own 5 Charms</img>'+ 
      '<br><img src="icon/notch.png" width="12" height="12"> Notch: 500 Geo and Own 10 Charms</img>'+
      '<br><img src="icon/notch.png" width="12" height="12"> Notch: 900 Geo and Own 18 Charms</img>'+ 
      '<br><img src="icon/notch.png" width="12" height="12"> Notch: 1400 Geo and Own 25 Charms</img>'+
      '<br><img src="icon/salubra_blessing.png" width="12" height="12"> Blessing: 800 Geo and Own 40 Charms</img>', progression:0, markertype:'npc'},
      {name:'Sly', x:-627, y:1977, path:'icon/npc/sly.png', description:'<br><img src="icon/simple_key.png"  width="12" height="12"> Simple Key: 950 Geo</img>'+
      '<br><img src="icon/rancid_egg.png"  width="12" height="12"> Rancid Egg: 60 Geo</img>'+
      '<br><img src="icon/lumafly_lantern.png"  width="12" height="12"> Lumafly Lantern: 1800 Geo</img>'+
      '<br><img src="icon/charms/gathering_swarm.png"  width="12" height="12"> Gathering Swarm: 300 Geo</img>'+
      '<br><img src="icon/charms/stalwart_shell.png"  width="12" height="12"> Stalwart Shell: 200 Geo</img>'+
      '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 150 Geo</img>'+
      '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 500 Geo </img>'+
      '<br><img src="icon/vessel_fragment.png"  width="12" height="12"> Vessel Fragment: 550 Geo</img>'+
      '<br><img src="icon/elegant_key.png"  width="12" height="12"> Elegant Key: 800 Geo</img>'+
      '<br><img src="" width="12" height="12">Requires Shopkeeper\'s Key</img>'+
      '<br><img src="icon/charms/heavy_blow.png"  width="12" height="12"> Heavy Blow: 350 Geo</img>'+
      '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 800 Geo</img>'+
      '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 1500 Geo</img>'+
      '<br><img src="icon/vessel_fragment.png"  width="12" height="12"> Vessel Fragment: 900 Geo</img>'+
      '<br><img src="icon/charms/sprintmaster.png"  width="12" height="12"> Sprintmaster: 400 Geo</img>', progression:0, markertype:'npc'},
    ]

                                      
    //#endregion

    //#region  TRIALS OF FOOLS
    let foolsGroup = new L.LayerGroup()
    var foolsData = [
      {name:'Trial of the Warrior', x:-1239, y:3645, path:'icon/trial_of_the_warrior.png', description:'<br>100 Geo to unlock', progression:1, markertype:'fools'},
      {name:'Trial of the Conqueror', x:-1239, y:3665, path:'icon/trial_of_the_conqueror.png', description:'<br>450 Geo to unlock', progression:1, markertype:'fools'},
      {name:'Trial of the Fool', x:-1239, y:3685, path:'icon/trial_of_the_fool.png', description:'<br>800 Geo to unlock', progression:1, markertype:'fools'},
    ]
    //#endregion

    //#region GOD HOME
    let godhomeGroup = new L.LayerGroup()
    var godhomeData = [
      {name:'Pantheon of the Master', x:-1941, y:2065, path:'icon/godhome/pantheon_of_the_master.png', description:'', progression:1, markertype:'godhome'},
      {name:'Pantheon of the Artist', x:-1941, y:2085, path:'icon/godhome/pantheon_of_the_artist.png', description:'', progression:1, markertype:'godhome'},
      {name:'Pantheon of the Sage', x:-1941, y:2105, path:'icon/godhome/pantheon_of_the_sage.png', description:'', progression:1, markertype:'godhome'},
      {name:'Pantheon of the Knight', x:-1941, y:2125, path:'icon/godhome/pantheon_of_the_knight.png', description:'', progression:1, markertype:'godhome'},
      {name:'Pantheon of Hallownest', x:-1941, y:2145, path:'icon/godhome/pantheon_of_the_hallownest.png', description:'', progression:0, markertype:'godhome'},
    ]
    //#endregion

    //#region ACHIEVEMENT
    let achievementGroup = new L.LayerGroup()
    var achievementData = [
      {name:'Ascension', x:-780, y:3420, path:'icon/achievement/ascension.png', description:'', progression:1, markertype:'achievement'},
    ]
    //#endregion

    const LayerGroupDict = {
      'grub':grubGroup,
      'charms':charmsGroup,
      'boss':bossesGroup,
      'warriorsdreams':warriordreamsGroup,
      'dreamers':dreamersGroup,
      'notches':notchesGroup,
      'maskshard':maskshardGroup,
      'spellsandabilities':spellsandabilitiesGroup,
      'vesselfragment':vesselfragmentGroup,
      'paleore':paleoreGroup,
      'whisperingroots':whisperingrootsGroup,
      'npc':npcGroup,
      'benchandtransport':benchandtransportGroup,
      'tradables':tradablesGroup,
      'explorationandquest':explorationandquestGroup,
      'keys':keysGroup,
      'fools':foolsGroup,
      'godhome':godhomeGroup,
      'achievement':achievementGroup,

    }
    //[totalpercentange,number of items]
    const completionPercentage = {
      'maskshard':4, //16
      'vesselfragment':3, //9
      'spellsandabilities':23,
      'explorationandquest':1, //GODTUNER
      'paleore':4, //NAIL UPGRADES, 4% 6.length
      'charms':40, //40
      'boss':17,
      'warriorsdreams':7,
      'dreamers':3,
      'fools':3, 
      'achievement':1, 
      'godhome':4,
      'keys':2,
    }


    
    
    //#region DROPDOWN
    const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");


    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

    options.forEach(option =>{
        option.addEventListener("click", ()=>{
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
            setMapView(selectedOption)
        });
    });

    //#endregion

    //#region SEARCH BOX AND IMAGEBOX
    const search = document.querySelector(".search-box input");
    const btn_search = document.querySelectorAll("button[data-name]");


    search.addEventListener("input", e => {
      const searchValue = search.value.toLowerCase();
      btn_search.forEach(btn => {
        const btnName = btn.dataset.name.toLowerCase();
        if (btnName.includes(searchValue)) {
          btn.style.display = "flex";
        } else {
          btn.style.display = "none";
        }
      });
    });

    search.addEventListener("keyup", () => {
      if (search.value !== "") return;

      btn_search.forEach(btn => {
        btn.style.display = "flex";
      });
    });


    //#endregion

    //#region HIDE ALL SELECT CLEAR BUTTON
    const hideselectclearall = document.querySelectorAll('.hideall-select-clear button');
    const collectibles = document.querySelectorAll('.collectibles button');
    const collectibles2 = document.querySelector('.collectibles').querySelectorAll('button');
    
    hideselectclearall.forEach(button=>{
        switch(button.className){
            case 'hideall-button':
                button.addEventListener('click',hideall)
                break;
            case 'sellect-all':
                button.addEventListener('click',selectall)
                break;
            case 'clear-all':
                button.addEventListener('click',clearall)
                break;
        }
    })

    function hideall(){
        this.classList.toggle('active')
        hideAllFoundMarker()
    }

    function selectall(){
        collectibles.forEach(buttons=>{
            if(!buttons.classList.contains('active')){
                buttons.classList.toggle('active')
            }
        })
        showAllMarkers()
    }

    function clearall(){
        
        collectibles.forEach(buttons=>{
            if(buttons.classList.contains('active')){
                buttons.classList.toggle('active')
            }
        })
        clearAllMarker()
        
    }
    //#endregion

    //#region  BUTTONS FOR MAP COMMNET LOGIN

    const buttons = document.querySelectorAll(".buttons-group button");
    const markerBlock = document.querySelector(".marker-block");
    const commentBlock = document.querySelector(".comment-block");
    const loginBlock = document.querySelector(".login-block");

    for (const button of buttons) {
      button.addEventListener("click", function () {

        buttons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        markerBlock.style.display = "none";
        commentBlock.style.display = "none";
        loginBlock.style.display = "none";

        if(this.classList.contains('marker-button')){
            markerBlock.style.display = "block";
        }
        else if(this.classList.contains('comment-button')){
            commentBlock.style.display = "block";
        }
        else if(this.classList.contains('login-button')){
            loginBlock.style.display = "block";
        }

      });
    }
    //#endregion

    //#region  BUTTONS FOR COLLECTIBLES
    //ADDING BUTTON EVENT LISTENER TO ALL BUTTON

    collectibles2.forEach(button=>{
     
      switch(button.className){
          
          case 'grub active':
              button.addEventListener('click',showhidegrub)
              break;
          case 'charms active':
              button.addEventListener('click',showhidecharms)
              break;  
          case 'bossess active':
              button.addEventListener('click',showhidebossess)
              break;
          case 'warriordreams active':
              button.addEventListener('click',showhidewarriordreams)
              break;
          case 'bossvariants active':
              button.addEventListener('click',showhidebossvariants)
              break;
          case 'dreamers active':
              button.addEventListener('click',showhidedreamers)
              break;  
          case 'nocthes active':
              button.addEventListener('click',showhidenotches)
              break;
          case 'spellsandabilities active':
              button.addEventListener('click',showhidespellandability)
              break;
          case 'npc active':
              button.addEventListener('click',showhidenpc)
              break;
          case 'maskshard active':
              button.addEventListener('click',showhidemaskshard)
              break;
          case 'vesselfragment active':
              button.addEventListener('click',showhidevesselfragment)
              break;  
          case 'paleore active':
              button.addEventListener('click',showhidepaleore)
              break;
          case 'shortcut active':
              button.addEventListener('click',showhideshortcut)
              break;
          case 'whisperingroot active':
              button.addEventListener('click',showhidewhisperingroot)
              break;
          case 'benchandtransport active':
              button.addEventListener('click',showhidebenchandtransport)
              break;  
          case 'tradables active':
              button.addEventListener('click',showhidetradables)
              break;
          case 'explorationandquest active':
              button.addEventListener('click',showhideexplorationandquest)
              break;
          case 'keys active':
              button.addEventListener('click',showhidekeys)
              break;
          case 'godhome active':
            button.addEventListener('click',showhidepantheon)
            break;
          case 'fools active':
            button.addEventListener('click',showhidefools)
            break;
          case 'achievement active':
            button.addEventListener('click',showhideachievement)
            break;           
      }
    })

    function showhidegrub (){
      this.classList.toggle('active')
      map.hasLayer(grubGroup) === true ? hideMarker(grubGroup) : showMarker(grubGroup)
    }

    function showhidecharms (){
      this.classList.toggle('active')
      map.hasLayer(charmsGroup) === true ? hideMarker(charmsGroup) : showMarker(charmsGroup)
    }

    function showhidebossess (){
      this.classList.toggle('active')
      map.hasLayer(bossesGroup) === true ? hideMarker(bossesGroup) : showMarker(bossesGroup)
    }

    function showhidewarriordreams (){
      this.classList.toggle('active')
      map.hasLayer(warriordreamsGroup) === true ? hideMarker(warriordreamsGroup) : showMarker(warriordreamsGroup)
    }

    function showhidedreamers (){
      this.classList.toggle('active')
      map.hasLayer(dreamersGroup) === true ? hideMarker(dreamersGroup) : showMarker(dreamersGroup)
    }

    function showhidenotches (){
      this.classList.toggle('active')
      map.hasLayer(notchesGroup) === true ? hideMarker(notchesGroup) : showMarker(notchesGroup)
    }

    function showhidespellandability (){
      this.classList.toggle('active')
      map.hasLayer(spellsandabilitiesGroup) === true ? hideMarker(spellsandabilitiesGroup) : showMarker(spellsandabilitiesGroup)
    }

    function showhidenpc (){
      this.classList.toggle('active')
      map.hasLayer(npcGroup) === true ? hideMarker(npcGroup) : showMarker(npcGroup)
    }

    function showhidemaskshard (){
      this.classList.toggle('active')
      map.hasLayer(maskshardGroup) === true ? hideMarker(maskshardGroup) : showMarker(maskshardGroup)
    }

    function showhidevesselfragment (){
      this.classList.toggle('active')
      map.hasLayer(vesselfragmentGroup) === true ? hideMarker(vesselfragmentGroup) : showMarker(vesselfragmentGroup)
    }

    function showhidepaleore (){
      this.classList.toggle('active')
      map.hasLayer(paleoreGroup) === true ? hideMarker(paleoreGroup) : showMarker(paleoreGroup)

    }

    function showhidewhisperingroot (){
      this.classList.toggle('active')
      map.hasLayer(whisperingrootsGroup) === true ? hideMarker(whisperingrootsGroup) : showMarker(whisperingrootsGroup)
    }

    function showhidebenchandtransport (){
      this.classList.toggle('active')
      map.hasLayer(benchandtransportGroup) === true ? hideMarker(benchandtransportGroup) : showMarker(benchandtransportGroup)
    }

    function showhidetradables (){
      this.classList.toggle('active')
      map.hasLayer(tradablesGroup) === true ? hideMarker(tradablesGroup) : showMarker(tradablesGroup)
    }

    function showhideexplorationandquest (){
      this.classList.toggle('active')
      map.hasLayer(explorationandquestGroup) === true ? hideMarker(explorationandquestGroup) : showMarker(explorationandquestGroup)
    }

    function showhidekeys (){
      this.classList.toggle('active')
      map.hasLayer(keysGroup) === true ? hideMarker(keysGroup) : showMarker(keysGroup)
    }

    function showhidepantheon (){
      this.classList.toggle('active')
      map.hasLayer(godhomeGroup) === true ? hideMarker(godhomeGroup) : showMarker(godhomeGroup)
    }

    function showhidefools (){
      this.classList.toggle('active')
      map.hasLayer(foolsGroup) === true ? hideMarker(foolsGroup) : showMarker(foolsGroup)
    }

    function showhideachievement (){
      this.classList.toggle('active')
      map.hasLayer(achievementGroup) === true ? hideMarker(achievementGroup) : showMarker(achievementGroup)
    }


    //#endregion

    //#region HIDING SIDEBAR
    const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle");


    toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    })
    //#endregion

    //#region LOGIN AND SIGNUP FORM
    const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");
    const loginform = document.querySelector(".login-form")
    const login_alert = document.querySelector('.login-error span')
    const login_section = document.querySelector('.container.forms')
    const user_details = document.querySelector('.user-details')
    const user_info = document.querySelector('.user-info')
    const h6element = user_info.querySelector('h6')
    const signupform = document.querySelector('.signup-form')
    const logoutbtn = document.getElementById('logout-btn')


    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            let pwFields = document.querySelectorAll('[class*="password"]');
            pwFields.forEach(password => {
                if(password.type === "password"){
                    password.type = "text";
                    pwShowHide.forEach(eyeIcon=>{
                      eyeIcon.classList.replace("bx-hide", "bx-show");
                    })
                    return;
                }
                password.type = "password";
                pwShowHide.forEach(eyeIcon=>{
                  eyeIcon.classList.replace("bx-show", "bx-hide");
                })
            })
            
        })
    }) 

    links.forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault(); //preventing form submit
          forms.classList.toggle("show-signup");
        })
    })

    signupform.addEventListener('submit',function(e){
      e.preventDefault()

      const username = document.querySelector('.signup-username')
      const pass = document.querySelector('.signup-password')
      const pass2= document.querySelector('.signup-password2')
      const email= document.querySelector('.signup-email')
      const signup_error = document.querySelector('.signup-error span')
      const signup_success = document.querySelector('.signup-success span')

      let action = 'signup'
      let signupinfo = {
        username:username.value,
        password:pass.value,
        password2:pass2.value,
        email:email.value,
      }
      
      axios.post('/HKgitgud-map',{action,signupinfo})
                .then(response => {
                  signup_success.innerHTML = response.data.msg
                  clearAllInput()
                })
                .catch(error => {
                  signup_error.innerHTML = error.response.data.msg
                });
    })

    loginform.addEventListener('submit',function(e){
      e.preventDefault()

      const username = document.querySelector('.login-username')
      const pass = document.querySelector('.login-password')
      

      login_alert.innerHTML = ''
      let action = 'login'
      let logininfo = {
        username:username.value,
        pass:pass.value
      }

      
      axios.post('/HKgitgud-map',{action,logininfo})
                .then(response => {
                  sessionStorage.setItem('token',response.data.token)
                  sessionStorage.setItem('name',response.data.user.name)

                  h6element.textContent = response.data.user.name
                  login_section.style.display = 'none';
                  user_details.removeAttribute('style')
                  clearAllInput()
                  for(let i=0;i<response.data.progress.length;i++){
                    if(response.data.progress[i].category==='total'){
                      changeTotalPercentage(response.data.progress[i].progress)
                      continue
                    }
                    changePercentage(response.data.progress[i].category,response.data.progress[i].progress)
                  }

                })
                .catch(error => {
                  console.log(error)
                  login_alert.innerHTML = error.response.data.msg
                });    
      })

      const token = this.sessionStorage.getItem('token')
      const name = this.sessionStorage.getItem('name')
      if(token){
        login_section.style.display = 'none';
        user_details.removeAttribute('style')
        h6element.textContent = name
      }
      else{
        login_section.style.display = 'block';
        user_details.setAttribute('style', 'display: none;');
      }


    logoutbtn.addEventListener('click',function(e){
      e.preventDefault()
      login_section.style.display = 'block';
      user_details.setAttribute('style', 'display: none;');
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('name')
      const updateDatabase = true
      axios.put('/HKgitgud-map',{token,updateDatabase})
        .then(response => {
          console.log(response.data.msg);
        })
        .catch(error => {
          console.log(error);
        });
    })

    //#endregion

    //#region  UPLOADING IMAGE COMMENT FORM
    const commentForm = document.querySelector('#comment-form')
    commentForm.addEventListener('submit',function(e){
      e.preventDefault()

      const formData = new FormData(e.target);
 
      const messageValue = formData.get('message');
      const image = formData.get('Image');

      const Comments = new FormData();
      Comments.append('message',messageValue)
      Comments.append('Image',image)

      const action = 'comments'

      axios.post('/HKgitgud-map',Comments,{params:{action,currentMarkerID}})
      .then(response=>{
        console.log(response.data.msg)
        getComments(currentMarkerID)
      })
      .catch(error=>{
        console.log(error)
      })

    })
    //#endregion

    //#region MAP SETTINGS

    let mapExtent = [0.00000000, -2901.00000000, 4498.00000000, 0.00000000];
    let mapMinZoom = 0;
    let mapMaxZoom = 3;
    let mapMaxResolution = 0.50000000;
    let mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
    let tileExtent = [0.00000000, -2901.00000000, 4498.00000000, 0.00000000];

    let crs = L.CRS.Simple; //no need georeference .Simple
    crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);

    crs.scale = function(zoom) {
        return Math.pow(2, zoom) / mapMinResolution;
      };
      
    crs.zoom = function(scale) {
        return Math.log(scale * mapMinResolution) / Math.LN2;
    };

    map = new L.Map('map', {
        maxZoom: mapMaxZoom,
        minZoom: mapMinZoom,
        zoomControl:false,
        crs: crs,
        maxBoundsViscosity: 1.0,
        maxBounds: [
          crs.unproject(L.point(mapExtent[0] -1500,mapExtent[1]-1500)),
          crs.unproject(L.point(mapExtent[2]+1500, mapExtent[3]+1500))
          ]
      });

    L.control.zoom({
      position:'topright',
    }).addTo(map)
    
    var layer;
    layer = L.tileLayer('/{z}/{x}/{y}.png', {
    minZoom: mapMinZoom, maxZoom: mapMaxZoom,
    tileSize: L.point(2048, 1024),
    bounds: [[mapExtent[1], mapExtent[0]], [mapExtent[3], mapExtent[2]]],
    noWrap: true,
    tms: false
    }).addTo(map);


    map.fitBounds([
        crs.unproject(L.point(mapExtent[2], mapExtent[3])),
        crs.unproject(L.point(mapExtent[0], mapExtent[1]))
      ]);
      
    L.control.mousePosition().addTo(map)
    //#endregion

    //#region  CREATEMARKERS
      createMarkers(grubData,[32,32],grubGroup)
      grubGroup.addTo(map)

      createMarkers(charmsData,[22,22],charmsGroup)
      charmsGroup.addTo(map)
      
      createMarkers(warriordreamsData,[25,25],warriordreamsGroup)
      warriordreamsGroup.addTo(map)
      
      createMarkers(bossesData,[32,32],bossesGroup)
      bossesGroup.addTo(map)
      
      createMarkers(dreamersData,[32,32],dreamersGroup)
      dreamersGroup.addTo(map)

      createMarkers(notchesData,[22,22],notchesGroup)
      notchesGroup.addTo(map)

      createMarkers(spellsandabilitiesData,[25,25],spellsandabilitiesGroup)
      spellsandabilitiesGroup.addTo(map)

      createMarkers(maskshardData,[25,25],maskshardGroup)
      maskshardGroup.addTo(map)

      createMarkers(vesselfragmentData,[24,20],vesselfragmentGroup)
      vesselfragmentGroup.addTo(map)
      
      createMarkers(paleoreData,[22,22],paleoreGroup)
      paleoreGroup.addTo(map)

      createMarkers(whisperingrootsData,[30,30],whisperingrootsGroup)
      whisperingrootsGroup.addTo(map)

      createMarkers(benchData,[30,20],benchandtransportGroup)
      benchandtransportGroup.addTo(map)
    
      createMarkers(stagData,[30,25],benchandtransportGroup)
      benchandtransportGroup.addTo(map)

      createMarkers(tramData,[27,27],benchandtransportGroup)
      benchandtransportGroup.addTo(map)

      createMarkers(tradablesData,[20,23],tradablesGroup)
      tradablesGroup.addTo(map)

      createMarkers(explorationandquestData,[25,25],explorationandquestGroup)
      explorationandquestGroup.addTo(map)

      createMarkers(keysData,[25,25],keysGroup)
      keysGroup.addTo(map)

      createMarkers(npcData,[28,28],npcGroup)
      npcGroup.addTo(map)

      createMarkers(foolsData,[35,35],foolsGroup)
      foolsGroup.addTo(map)

      createMarkers(godhomeData,[32,35],godhomeGroup)
      godhomeGroup.addTo(map)

      createMarkers(achievementData,[28,28],achievementGroup)
      achievementGroup.addTo(map)

      

      foundMarkersGroup.addTo(map)

      //#endregion

      function showMarker(grouplayer){
        grouplayer.addTo(map)
      }

      function hideMarker(groupLayer){
        map.removeLayer(groupLayer);
      }

      function clearAllMarker(){
        hideMarker(grubGroup)
        hideMarker(charmsGroup)
        hideMarker(bossesGroup)
        hideMarker(warriordreamsGroup) 
        hideMarker(dreamersGroup) 
        hideMarker(notchesGroup) 
        hideMarker(spellsandabilitiesGroup)
        hideMarker(maskshardGroup) 
        hideMarker(vesselfragmentGroup)
        hideMarker(paleoreGroup)
        hideMarker(whisperingrootsGroup) 
        hideMarker(npcGroup) 
        hideMarker(benchandtransportGroup)
        hideMarker(tradablesGroup)
        hideMarker(explorationandquestGroup)
        hideMarker(keysGroup)
        hideMarker(godhomeGroup)
        hideMarker(foolsGroup)
        hideMarker(achievementGroup)
      }

      function showAllMarkers(){
        showMarker(grubGroup)
        showMarker(charmsGroup)
        showMarker(bossesGroup)
        showMarker(warriordreamsGroup) 
        showMarker(dreamersGroup) 
        showMarker(notchesGroup) 
        showMarker(spellsandabilitiesGroup)
        showMarker(maskshardGroup) 
        showMarker(vesselfragmentGroup)
        showMarker(paleoreGroup)
        showMarker(whisperingrootsGroup) 
        showMarker(npcGroup) 
        showMarker(benchandtransportGroup)
        showMarker(tradablesGroup)
        showMarker(explorationandquestGroup)
        showMarker(keysGroup)
        showMarker(godhomeGroup)
        showMarker(foolsGroup)
        showMarker(achievementGroup)
      }

      function hideAllFoundMarker(){
        if(map.hasLayer(foundMarkersGroup)){
          hideMarker(foundMarkersGroup)
          removeAllFoundMarkerFromTheirLayerGroup(foundMarkersGroup)
        }
        else{
          showMarker(foundMarkersGroup)
          AddAllFoundMarkerFromTheirLayerGroup(foundMarkersGroup)
        }

        
      }

      function createMarkers(markerInfo,iconSize,markerGroupLayer){
        for(let i=0;i<markerInfo.length;i++){
          var Icon = L.icon({
            iconUrl:markerInfo[i].path,
            iconSize:iconSize,
          });
          
          var Marker = L.marker([markerInfo[i].x,markerInfo[i].y],
            {icon:Icon,
              opacity:1,
              id:id,
              name:markerInfo[i].name,
              description:markerInfo[i].description,
              progression:markerInfo[i].progression,
              markertype:markerInfo[i].markertype,
            })

          
          
          var Foundpopup = `<br><button id='MarkFoundButton-${Marker.options.id}'> Mark Found</button>`
          Marker.bindPopup(Marker.options.name + Marker.options.description + Foundpopup,{maxHeight:250});
          id+=1

          Marker.on("popupopen",function(e){
            var marker = e.target
            currentMarkerID = marker.options.id

            //changeSideBarButtons(markerBlock,commentBlock,loginBlock,buttons)
            getComments(currentMarkerID)

            var button = document.getElementById(`MarkFoundButton-${currentMarkerID}`)
            button.addEventListener('click',function(){
              var opacity = marker.options.opacity;
               

              let markerINFO = {
                id: marker.options.id,
                name: marker.options.name,
                isHidden:opacity==1? true : false,
                progress:marker.options.progression,
                markertype:marker.options.markertype,
              }

              

              const token = sessionStorage.getItem('token')
              const updateDatabase = false
              axios.put('/HKgitgud-map',{markerINFO,token,updateDatabase})
                .then(response => {
                  console.log(response.data.msg)
                  if(response.data.newprogress !==undefined && response.data.markertype !==undefined){
                    changePercentage(response.data.markertype,response.data.newprogress)
                    changeTotalPercentage(response.data.newtotalprogress)
                  }
                 
                })
                .catch(error => {
                  console.log(error);
                });
  
              
              if(marker.options.opacity===1){
                foundMarkersGroup.addLayer(marker)
              }
              else{
                foundMarkersGroup.removeLayer(marker)
                LayerGroupDict[marker.options.markertype].addLayer(marker)
              }
              

             
      
              //create function for set bindpopup and description
              setDescription(marker,markerINFO.isHidden)
            })

          })
          markerGroupLayer.addLayer(Marker)
          markers.push(Marker);
        }
      }

      function hideAllMarkers(groupMarkers){
        map.removeLayer(groupMarkers);
      }

      function setMapView(map){
        switch(map){
            case 'Forgotten Crossroads':
                mapview(-817,2247,2)
                break;
            case 'Greenpath':
                mapview(-845,1052,2)
                break;
            case 'Fungal Wastes':
                mapview(-1420,1888,2)
                break;
            case 'Dirtmouth':
                mapview(-586,2009,2)
                break;
            case 'Fog Canyon':
                mapview(-1209,1490,2)
                break;
            case 'Howling Cliffs':
                mapview(-470,1335,2)
                break;
            case 'City of Tears':
                mapview(-1463,2820,2)
                break;
            case 'Crystal Peak':
                mapview(-590,2885,2)
                break;
            case 'Resting Ground':
                mapview(-930,3195,2)
                break;
            case 'Kingdom`s Edge':
                mapview(-1622,3988,2)
                break;
            case 'Queen`s Garden':
                mapview(-1310,870,2)
                break;
            case 'Ancient Basin':
                mapview(-2359,2656,2)
                break;
            case 'Deepnest':
              mapview(-1931,1022,2)
              break;
            case 'Royal Waterways':
              mapview(-2359,2656,2)
              break;
            case 'The Hive':
              mapview(-1844,2603,2)
              break;          
        }
      }

      function mapview(x,y,zoom){
        map.setView([x,y],zoom)
      }

      function removeAllFoundMarkerFromTheirLayerGroup(foundmarker){
        foundmarker.eachLayer(marker => {
          LayerGroupDict[marker.options.markertype].removeLayer(marker)
        })
      }

      function AddAllFoundMarkerFromTheirLayerGroup(foundmarker){
        foundmarker.eachLayer(marker => {
          LayerGroupDict[marker.options.markertype].addLayer(marker)
        })
      }

      function clearAllInput(){
        const allinput = document.querySelectorAll('.input-field input')

        allinput.forEach(input=>{
          input.value=''
        })
      }

      function getComments(currentMarkerID){
        const alert = document.querySelector('.alert')
        const commentForm = document.getElementById('comment-form')
        const usersmessages = document.querySelector('.user-messages')
        const nocomment = document.querySelector('.nocomment')

        if(alert.style.display !== "none"){
          alert.style.display = "none"
          commentForm.removeAttribute("style")
          usersmessages.removeAttribute("style")
        }

        axios.get('/HKgitgud-map',{params:{currentMarkerID}})
        .then(response=>{
          usersmessages.innerHTML=''
          if(response.data.comments.length===0){
            nocomment.style.display = 'block'
          }
          else{
            nocomment.style.display = 'none'
          }
          
          response.data.comments.forEach(comment =>{
            var div = document.createElement('div')
            var paragraph = document.createElement('p')
            var img = document.createElement('img')

            img.id = 'image'
            img.src = comment.image.replace('\\','/')

            div.className = 'user-comment'
            paragraph.innerHTML = comment.message

            div.appendChild(paragraph)
            div.appendChild(img)
            usersmessages.appendChild(div)
          })
        })
        .catch(error=>{
          console.log(error)
        })

      }

      function changeSideBarButtons(markerBlock,commentBlock,loginBlock,buttons){
          markerBlock.style.display = "none";
          commentBlock.style.display = "block";
          
          loginBlock.style.display = "none";

          for (const button of buttons){
            if(button.classList.contains('comment-button')){
              button.classList.add('active')
            }
            else{
              button.classList.remove('active')
            }
          }
      }

      function changePercentage(category,newprogress){
        var newprogress = (parseFloat(newprogress)/completionPercentage[category]*100)
        const skillPerElement = document.querySelector('.skill-per.'+category)
        const tooltipElement = skillPerElement.querySelector('.tooltip')
        skillPerElement.style.width = Math.ceil(newprogress)+'%';
        tooltipElement.textContent =  Math.ceil(newprogress)+'%';
        
      }

      function changeTotalPercentage(newprogress){
        var userpercentage = document.querySelector('.user-percentage span')
        var newpercent = (parseFloat(newprogress))
        userpercentage.innerText = Math.ceil(newpercent.toFixed(2))+'%'
      }


      
      function setDescription(marker,isHidden){
            var name = marker.options.name;
            var desc = marker.options.description;
            var id = marker.options.id
            var Foundpopup = `<br><button id='MarkFoundButton-${id}'> Mark Found</button>`
            var NotFoundpopup = `<br><button id='MarkFoundButton-${id}'> Mark As Not Found</button>`
            if(desc){
              popupContent = isHidden === true ? name+desc+NotFoundpopup : name+desc+Foundpopup;
            }
            else{
              popupContent = isHidden  === true ? name+NotFoundpopup : name+Foundpopup;
            }
            marker.options.opacity = isHidden === true ? 0.40 : 1 ;
            marker.closePopup();
            marker.setOpacity(isHidden === true ? 0.40 : 1)
            marker.bindPopup(popupContent);
            
            
      }

      
});













