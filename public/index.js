
window.addEventListener('load', function () {

    //#region GRUB
    let grubGroup = new L.LayerGroup()
    let grubInfo = [['Grub',-575, 1314,'icon/grub.png'],
                   ['Grub',-704, 1030,'icon/grub.png'],
                   ['Grub',-1015, 860,'icon/grub.png'],
                   ['Grub',-1067, 1085,'icon/grub.png'],
                   ['Grub',-867, 1624,'icon/grub.png'],
                   ['Grub',-978, 1569,'icon/grub.png'],
                   ['Grub',-1200,1562,'icon/grub.png'],
                   ['Grub',-1141, 502,'icon/grub.png'],
                   ['Grub',-1400, 836,'icon/grub.png'],
                   ['Grub',-1819, 317,'icon/grub.png'],
                   ['Grub',-1952, 851,'icon/grub.png'],
                   ['Grub',-1891, 1284,'icon/grub.png'],
                   ['Grub',-2093, 1252,'icon/grub.png'],
                   ['Grub',-1625, 1596,'icon/grub.png'],
                   ['Grub',-1520, 1483,'icon/grub.png'],
                   ['Grub',-1434, 1878,'icon/grub.png'],
                   ['Grub',-923, 1733,'icon/grub.png'],
                   ['Grub',-753, 2111,'icon/grub.png'],
                   ['Grub',-705, 2571,'icon/grub.png'],
                   ['Grub',-829, 2396,'icon/grub.png'],
                   ['Grub',-897, 2452,'icon/grub.png'],
                   ['Grub',-648, 2290,'icon/grub.png'],
                   ['Grub',-695, 2808,'icon/grub.png'],
                   ['Grub',-598, 2888,'icon/grub.png'],
                   ['Grub',-726, 2933,'icon/grub.png'],
                   ['Grub',-721, 3308,'icon/grub.png'],
                   ['Grub',-597, 3056,'icon/grub.png'],
                   ['Grub',-431, 3392,'icon/grub.png'],
                   ['Grub',-981, 3556,'icon/grub.png'],
                   ['Grub',-1313, 2516,'icon/grub.png'],
                   ['Grub',-1479, 2744,'icon/grub.png'],
                   ['Grub',-1458, 2994,'icon/grub.png'],
                   ['Grub',-1696, 3265,'icon/grub.png'],
                   ['Grub',-1503, 3588,'icon/grub.png'],
                   ['Grub',-1509, 3607,'icon/grub.png'],
                   ['Grub',-1513, 3626,'icon/grub.png'],
                   ['Grub',-1825, 2558,'icon/grub.png'],
                   ['Grub',-2168, 2206,'icon/grub.png'],
                   ['Grub',-2152, 2560,'icon/grub.png'],
                   ['Grub',-1763, 3395,'icon/grub.png'],
                   ['Grub',-1864, 3391,'icon/grub.png'],
                   ['Grub',-1729, 3573,'icon/grub.png'],
                   ['Grub',-1909, 3564,'icon/grub.png'],
                   ['Grub',-1715, 4001,'icon/grub.png'],
                   ['Grub',-1913, 3916,'icon/grub.png'],
                   ['Grub',-1942, 4385,'icon/grub.png'],];
    //#endregion

    //#region CHARMS
    let charmsGroup = new L.LayerGroup()
    let charmsInfo = [['Joni Blessing',-507, 1465,'icon/charms/joni_blessing.png'],
                     ['Baldur Shell',-665, 1303,'icon/charms/baldur_shell.png'],
                     ['Fury of The Fallen',-655, 1720,'icon/charms/fury_of_the_fallen.png'],
                     ['Grimm Child',-620,1888,'icon/charms/grimm_child.png'],
                     ['Nailmaster Glory',-599, 1978,'icon/charms/nailmaster_glory.png'],
                     ['Deep Focus',-644, 2481,'icon/charms/deep_focus.png'],
                     ['Shape of Unn',-909, 373,'icon/charms/shape_of_unn.png'],
                     ['Thorns of Agony',-931, 1287,'icon/charms/thorns_of_agony.png'],
                     ['Soul Catcher',-817, 2055,'icon/charms/soul_catcher.png'],
                     ['Glowing Womb',-801, 2335,'icon/charms/glowing_womb.png'],
                     ['Dream Shield',-856, 3318,'icon/charms/dream_shield.png'],
                     ['Soul Eater',-982, 3738,'icon/charms/soul_eater.png'],
                     ['King Soul Left',-1147, 546,'icon/charms/king_soul_part1.png'],
                     ['Spore Shroom',-1547, 1506,'icon/charms/spore_shroom.png'],
                     ['Mark of Pride',-1713, 1948,'icon/charms/mark_of_pride.png'],
                     ['Dash Master',-1832, 1991,'icon/charms/dash_master.png'],
                     ['Spell Twister',-1213, 2818,'icon/charms/spell_twister.png'],
                     ['Weaversong',-1940, 998,'icon/charms/weaversong.png'],
                     ['Sharp Shadow',-2175, 1692,'icon/charms/sharp_shadow.png'],
                     ['Flukenest',-1956, 2416,'icon/charms/flukenest.png'],
                     ['Defender Crest',-1809, 2960,'icon/charms/defender_crest.png'],
                     ['Quick Slash',-1913, 4151,'icon/charms/quick_slash.png'],
                     ['Hiverblood',-1986,4071,'icon/charms/hiverblood.png'],
                     ['King Soul Right',-2226, 3042,'icon/charms/king_soul_part2.png'],
                     ['Lifeblood Core',-2638, 2551,'icon/charms/lifeblood_core.png'],
                     ['Void Heart',-2812, 2721,'icon/charms/void_heart.png'],
                     ['Unbreakable Greed',-605,1840,'icon/charms/unbreakable_greed.png'],
                     ['Unbreakable Heart',-605,1855,'icon/charms/unbreakable_heart.png'],
                     ['Unbreakable Strength',-605,1870,'icon/charms/unbreakable_strength.png'],
                     ['Grubsong',-696,1874,'icon/charms/grubsong.png'],
                     ['Grubberfly\'s Elegy',-696,1886,'icon/charms/grubberfly_elegy.png'],
                     ['Gathering Swarm',-587,1955,'icon/charms/gathering_swarm.png'],
                     ['Stalwart Shell',-587,1967,'icon/charms/stalwart_shell.png'],
                     ['Heavy Blow',-587,1979,'icon/charms/heavy_blow.png'],
                     ['Sprintmaster Shell',-587,1991,'icon/charms/sprintmaster.png'],
                     ['Wayward Compass',-599, 2041,'icon/charms/wayward_compass.png'],
                     ['Fragile Greed',-1182,2100,'icon/charms/fragile_greed.png'],
                     ['Fragile Heart',-1182,2112,'icon/charms/fragile_heart.png'],
                     ['Fragile Strength',-1182,2124,'icon/charms/fragile_strength.png'],
                     ['Lifeblood Heart',-1006,2662,'icon/charms/lifeblood_heart.png'],
                     ['Longnail',-1006,2674,'icon/charms/long_nail.png'],
                     ['Steady Body',-1006,2686,'icon/charms/steady_body.png'],
                     ['Shaman Stone',-993,2662,'icon/charms/shaman_stone.png'],
                     ['Quick Focus',-993,2674,'icon/charms/quick_focus.png'],
                     ['Dream Wielder',-804,3421,'icon/charms/dream_wielder.png'],]
    //#endregion

    //#region WARRIOR DREAMS
    let warriordreamsGroup = new L.LayerGroup()
    let warriordreamInfo = [['Gorb',-327,1308,'icon/warriordreams/gorb.png'],
                        ['Elder Hu',-1359,2267,'icon/warriordreams/elder_hu.png'],
                        ['Galien',-1849,955,'icon/warriordreams/galien.png'],
                        ['Markoth',-1782,4107,'icon/warriordreams/markoth.png'],
                        ['Marmu',-1367,695,'icon/warriordreams/marmu.png'],
                        ['No Eyes',-1033,1664,'icon/warriordreams/no_eyes.png'],
                        ['Xero',-934,3189,'icon/warriordreams/xero.png'],];
    //#endregion

    //#region  BOSSES
    let bossesGroup = new L.LayerGroup()
    let bossesInfo = [['Broken Vessel',-2243,2098 ,'icon/bosses/broken_vessel.png'],
              ['Brooding Mawlek',-872,1918,'icon/bosses/brooding_mawlek.png'],
              ['The Collector',-1522,3593,'icon/bosses/the_collector.png'],
              ['Crystal Guardian',-525,2869,'icon/bosses/crystal_guardian.png'],
              ['Dung Defender',-1804,2942,'icon/bosses/dung_defender.png'],
              ['False Knight',-844,2128,'icon/bosses/false_knight.png'],
              ['Flukemarm',-1942,2436,'icon/bosses/flukemarm.png'],
              ['Grimm',-624,1926,'icon/bosses/grimm.png'],
              ['Gruz Mother',-986,2595,'icon/bosses/gruz_mother.png','',0],
              ['Soul Master',-1220,2622,'icon/bosses/soul_master.png'],
              ['Hive Knight',-1951,4071,'icon/bosses/hive_knight.png'],
              ['Hollow Knight',-705,2238,'icon/bosses/hollow_knight.png'],
              ['Hornet',-728,815,'icon/bosses/hornet.png'],
              ['Mantis Lords',-1845,1866,'icon/bosses/mantis_lords.png'],
              ['Massive Moss Charger',-1047,1352,'icon/bosses/massive_moss_charger.png'],
              ['Nosk',-2128,1428,'icon/bosses/nosk.png'],
              ['The Radiance',-684,2238,'icon/bosses/the_radiance.png'],
              ['Soul Warrior',-1345,2686,'icon/bosses/soul_warrior.png'],
              ['Traitor Lord',-1149,732,'icon/bosses/traitor_lord.png'],
              ['Uumuu',1223,1599,'icon/bosses/uumuu.png'],
              ['Vengefly King',-637,988,'icon/bosses/vengefly_king.png'],
              ['Watcher Knights',-1395,2985,'icon/bosses/watcher_knights.png'],]
              
    //#endregion

    //#region BOSSVARIANTS
    let bossvariantsGroup = new L.LayerGroup()
    let bossvariants = [['Enraged Guardian',-480,2863,'icon/bossvariants/enraged_guardian.png'],
                        ['Failed Champion',-824,2150,'icon/bossvariants/failed_champion.png'],
                        ['Grey Prince Zote',-642,2063,'icon/bossvariants/grey_prince_zote.png'],
                        ['Hornet Sentinel',-1692,4321,'icon/bossvariants/hornet_sentinel.png'],
                        ['Lost Kin',-2243,2110,'icon/bossvariants/lost_kin.png'],
                        ['Nightmare King Grimm',-611,1926,'icon/bossvariants/nightmare_king_grimm.png'],
                        ['Soul Tyrant',-1222,2650,'icon/bossvariants/soul_tyrant.png'],
                        ['White Defender',-1843,2953,'icon/bossvariants/white_defender.png'],]
    //#endregion

    //#region DREAMERS
    let dreamersGroup = new L.LayerGroup()
    let dreamersInfo = [['Herrah',-1855,327,'icon/dreamers/herrah.png'],
                    ['Lurien',-1119,3044,'icon/dreamers/lurien.png'],
                    ['Monomon',-1223,1602,'icon/dreamers/monomon.png'],]
    //#endregion

    //#region NOTCH
    let notchGroup = new L.LayerGroup()
    let notchInfo = [['Notches',-980,2662,'icon/notch.png','Collect 5 Charms'],
                     ['Notches',-980,2674,'icon/notch.png','Collect 10 Charms'],
                     ['Notches',-980,2686,'icon/notch.png','Collect 18 Charms'],
                     ['Notches',-993,2686,'icon/notch.png','Collect 25 Charms'],
                     ['Notches',-1081,1731,'icon/notch.png','Unlock Isma\'s Tear or Monarch Wings'],
                     ['Notches',-1262,1906,'icon/notch.png','Defeat 2 Shrumal Ogres'],
                     ['Notches',-1255,3653,'icon/notch.png','Complete the Trial of the Warrior'],
                     ['Notches',-596,1926,'icon/notch.png','Defeat Grimm'],]
    //#endregion

    //#region SPELL AND ABILITIES
    let spell_abilitiesGroup = new L.LayerGroup()
    let spell_abilitiesInfo = [['Vengeful Spirit',-839,2054,'icon/spell_abilities/vengeful_spirit.png'],
                           ['Desolate Dive',-1258,2637,'icon/spell_abilities/desolate_dive.png'],
                           ['Howling Wraiths',-1190,1090,'icon/spell_abilities/howling_wraiths.png'],
                           ['Shade Soul',-1331,2685,'icon/spell_abilities/shade_soul.png'],
                           ['Descending Dark',-760,3309,'icon/spell_abilities/descending_dark.png'],
                           ['Abyss Shriek',-2769,2365,'icon/spell_abilities/abyss_shriek.png'],
                           ['Mothwing Cloak',-712,817,'icon/spell_abilities/mothwing_cloak.png'],
                           ['Mantis Claw',-1634,1796,'icon/spell_abilities/mantis_claw.png'],
                           ['Crystal Heart',-633,3409,'icon/spell_abilities/crystal_heart.png'],
                           ['Monarch Wings',-2271,1858,'icon/spell_abilities/monarch_wings.png'],
                           ['Isma\'s Tear',-1948,3372,'icon/spell_abilities/isma\'s_tear.png'],
                           ['Shade Cloak',-2736,3643,'icon/spell_abilities/shade_cloak.png'],
                           ['Dream Nail',-947,3321,'icon/spell_abilities/dream_nail.png'],
                           ['Cyclone Slash',-379,1407,'icon/spell_abilities/cyclone_slash.png'],
                           ['Dash Slash',-1823,4292,'icon/spell_abilities/dash_slash.png'],
                           ['Great Slash',-928,477,'icon/spell_abilities/great_slash.png'],]
    //#endregion

    //#region MASK SHARD
    let maskshardGroup = new L.LayerGroup()
    let maskshardInfo = [['Mask Shard',-575,1955,'icon/mask_shard.png','Just Sly'],
                         ['Mask Shard',-575,1967,'icon/mask_shard.png','Just Sly'],
                         ['Mask Shard',-575,1979,'icon/mask_shard.png','Sly With Shopkeeper Key'],
                         ['Mask Shard',-575,1991,'icon/mask_shard.png','Sly With Shopkeeper Key'],
                         ['Mask Shard',-872,1935,'icon/mask_shard.png','Reward for defeating Brooding Mawlek'],
                         ['Mask Shard',-696,1898,'icon/mask_shard.png','Requires rescuing 5 Grubs'],
                         ['Mask Shard',-940,2122,'icon/mask_shard.png','Recomended Mantis Claw'],
                         ['Mask Shard',-1414,1606,'icon/mask_shard.png','Requires Mantis Claw'],
                         ['Mask Shard',-828,2063,'icon/mask_shard.png','Requires rescuing Bretta from Fungal Wastes'],
                         ['Mask Shard',-908,2027,'icon/mask_shard.png','Recommended Lumafly Lantern'],
                         ['Mask Shard',-1814,2157,'icon/mask_shard.png',''],
                         ['Mask Shard',-1839,1700,'icon/mask_shard.png','Requires Monarch Wings'],
                         ['Mask Shard',-485,2835,'icon/mask_shard.png','Requires Monarch Wings'],
                         ['Mask Shard',-1968,3812,'icon/mask_shard.png','Requires baiting a Hive Guardian into breaking a wall'],
                         ['Mask Shard',-804,3431,'icon/mask_shard.png','Requires collecting 1500 Essence'],
                         ['Mask Shard',-936,3662,'icon/mask_shard.png','Requires completing the Delicate Flower quest'],]
    //#endregion

    //#region 
    let vesselfragmentGroup = new L.LayerGroup()
    let vesselfragmentInfo = [['Vessel Fragment',-563,1955,'icon/vessel_fragment.png','<br>Just Sly'],
                              ['Vessel Fragment',-563,1967,'icon/vessel_fragment.png','<br>Sly With Shopkeeper Key'],
                              ['Vessel Fragment',-1058,1024,'icon/vessel_fragment.png',''],
                              ['Vessel Fragment',-984,2085,'icon/vessel_fragment.png',''],
                              ['Vessel Fragment',-1481,3458,'icon/vessel_fragment.png',''],
                              ['Vessel Fragment',-1983,1849,'icon/vessel_fragment.png',''],
                              ['Vessel Fragment',-306,1221,'icon/vessel_fragment.png',''],
                              ['Vessel Fragment',-793,3421,'icon/vessel_fragment.png','<br>Collecting 700 Essence'],
                              ['Vessel Fragment',-2140,2782,'icon/vessel_fragment.png','<br>Dropping Geo 3000 into the fountain'],]

    //#endregion

    //#region 
    let paleoreGroup = new L.LayerGroup()
    let paleoreInfo = [['Pale Ore',-2135,2348,'icon/pale_ore.png','<br>Defeat two Lesser Mawleks that guard it.'],
                       ['Pale Ore',-793,3433,'icon/pale_ore.png','Collect 300 Essence with the Dream Nail.'],
                       ['Pale Ore',-104,3122,'icon/pale_ore.png','Requires Mantis Claw. Monarch Wings and Crystal Heart recommended.'],
                       ['Pale Ore',-2132,1549,'icon/pale_ore.png','Requires defeating Nosk.'],
                       ['Pale Ore',-696,1910,'icon/pale_ore.png','Rescue 31 Grubs.'],
                       ['Pale Ore',-1255,3665,'icon/pale_ore.png','<br>Complete the Trial of the Conqueror.'],]
    //#endregion

    //#region 
    let whisperingrootsGroup = new L.LayerGroup()
    let whisperingrootsInfo = [['Whispering Roots',-839,2041,'icon/whispering_roots.png'],
                               ['Whispering Roots',-1361,2459,'icon/whispering_roots.png'],
                               ['Whispering Roots',-431,3191,'icon/whispering_roots.png'],
                               ['Whispering Roots',-1986,713,'icon/whispering_roots.png'],
                               ['Whispering Roots',-681,1978,'icon/whispering_roots.png'],
                               ['Whispering Roots',-1186,1921,'icon/whispering_roots.png'],
                               ['Whispering Roots',-1596,1868,'icon/whispering_roots.png'],
                               ['Whispering Roots',-1069,915,'icon/whispering_roots.png'],
                               ['Whispering Roots',-2093,3876,'icon/whispering_roots.png'],
                               ['Whispering Roots',-559,1081,'icon/whispering_roots.png'],
                               ['Whispering Roots',-1606,3754,'icon/whispering_roots.png'],
                               ['Whispering Roots',-1463,1175,'icon/whispering_roots.png'],
                               ['Whispering Roots',-892,3445,'icon/whispering_roots.png'],
                               ['Whispering Roots',-2002,3069,'icon/whispering_roots.png'],
                               ['Whispering Roots',-729,3676,'icon/whispering_roots.png'],]
    //#endregion

    //#region NPC
    //Name X,Y,ImageURL,Description,Completion
    let npcGroup = new L.LayerGroup()
    let npcInfo = [['Salubra',-1018,2676,'icon/npc/salubra.png',
                    ['<br><img src="icon/charms/lifeblood_heart.png"  width="12" height="12"> Lifeblood Heart: 250 Geo</img>'+
                    '<br><img src="icon/charms/long_nail.png"  width="12" height="12"> Long Nail: 300 Geo</img>'+
                    '<br><img src="icon/charms/steady_body.png"  width="12" height="12"> Steady Body: 120 Geo</img>'+
                    '<br><img src="icon/charms/shaman_stone.png"  width="12" height="12"> Shaman Stone: 220 Geo</img>'+
                    '<br><img src="icon/charms/quick_focus.png"  width="12" height="12"> Quick Focus: 800 Geo</img>'+
                    '<br><img src="icon/notch.png"  width="12" height="12"> Notch: 120 Geo and Own 5 Charms</img>'+ 
                    '<br><img src="icon/notch.png" width="12" height="12"> Notch: 500 Geo and Own 10 Charms</img>'+
                    '<br><img src="icon/notch.png" width="12" height="12"> Notch: 900 Geo and Own 18 Charms</img>'+ 
                    '<br><img src="icon/notch.png" width="12" height="12"> Notch: 1400 Geo and Own 25 Charms</img>'+
                    '<br><img src="icon/salubra_blessing.png" width="12" height="12"> Blessing: 800 Geo and Own 40 Charms</img>'],0],
                   ['Confessor Jiji',-633,2199,'icon/npc/confessor_jiji.png',['<br>Requires Rancid Eggs to summon the Knight\'s Shade.'],0],
                   ['Divine',-624,1853,'icon/npc/divine.png',
                    ['<br><img src="icon/charms/unbreakable_greed.png"  width="12" height="12"> Unbreakable Greed: 9000 Geo</img>'+
                    '<br><img src="icon/charms/unbreakable_heart.png"  width="12" height="12"> Unbreakable Heart: 12000 Geo</img>'+
                    '<br><img src="icon/charms/unbreakable_strength.png"  width="12" height="12"> Unbreakable Strength: 15000 Geo</img>'],0],
                   ['Iselda',-627,2040,'icon/npc/iselda.png',
                    ['<br><img src="icon/charms/wayward_compass.png"  width="12" height="12"> Wayward Compass: 220 Geo</img>'+
                    '<br><img src="icon/area_map.png"  width="12" height="12"> Resting Grounds: 75 Geo</img>'+
                    '<br><img src="icon/quill.png"  width="12" height="12"> :Quill</img>'+
                    '<br><img src="icon/map_pins.png"  width="28" height="18"> :Map pins</img>'],0],
                   ['Legeater',-1193,2124,'icon/npc/legeater.png',
                    ['<br><img src="icon/charms/fragile_heart.png"  width="12" height="12"> Fragile Heart: 350 Geo</img>'+
                    '<br><img src="icon/charms/fragile_greed.png"  width="12" height="12"> Fragile Greed: 250 Geo</img>'+
                    '<br><img src="icon/charms/fragile_strength.png"  width="12" height="12"> Fragile Strength:600 Geo</img>'+
                    '<br><img src="icon/charms/fragile_heart_broken.png"  width="12" height="12"> Repair:200 Geo/Defender Crest Equipped 160G</img>'+
                    '<br><img src="icon/charms/fragile_greed_broken.png"  width="12" height="12"> Repair:150 Geo/Defender Crest Equipped 120G</img>'+
                    '<br><img src="icon/charms/fragile_strength_broken.png"  width="12" height="12"> Repair:350 Geo/Defender Crest Equipped 280G</img>'],0],
                   ['Little Fool',-1277,3648,'icon/npc/little_fool.png',
                    ['<br><img src="icon/trial_of_the_warrior.png"  width="15" height="20"> Trial of The Warrior: 100 Geo</img>'+
                    '<br><img src="icon/trial_of_the_conqueror.png"  width="15" height="20"> Trial of The Conqueror: 450 Geo</img>'+
                    '<br><img src="icon/trial_of_the_fool.png"  width="15" height="20"> Trial of The Fool: 800 Geo</img>'],0],
                   ['Millibelle The Banker',-1391,1396,'icon/npc/millibelle.png',['<br>If she holds 2550 Geo or more and the Knight rests at a Bench or uses the Stagways, visiting the bank again reveals that Millibelle has abandoned her stand.'+
                   '<br>Millibelle the Thief can be found at the Hot Spring in the Pleasure House in the City of Tears'],0],
                   ['Nailsmith',-1683,2184,'icon/npc/nailsmith.png',
                    ['<br>Sharpened Nail: 250 Geo <br>Channelled Nail: 800g + x1 Pale Ore <br>Coiled Nail: 2000g + x2 Pale Ore <br>Pure Nail: 4000g + x3 Pale Ore'],0],
                   ['Relic Seeker Lemm',-1679,2733,'icon/npc/lemm.png',
                    ['<br><img src="icon/wanderers_journal.png"  width="12" height="12"> Wanderer Journal: 200 Geo</img>'+
                    '<br><img src="icon/hallownest_seal.png"  width="12" height="12"> Hollownest Seal: 450 Geo</img>'+
                    '<br><img src="icon/kings_idol.png"  width="12" height="12"> King\'s Idol: 800 Geo</img>'+
                    '<br><img src="icon/arcane_egg.png"  width="12" height="12"> Arcane Egg: 1200 Geo</img>'],0],
                   ['Sly',-627,1977,'icon/npc/sly.png',
                    ['<br><img src="icon/simple_key.png"  width="12" height="12"> Simple Key: 950 Geo</img>'+
                    '<br><img src="icon/rancid_egg.png"  width="12" height="12"> Rancid Egg: 60 Geo</img>'+
                    '<br><img src="icon/lumafly_lantern.png"  width="12" height="12"> Lumafly Lantern: 1800 Geo</img>'+
                    '<br><img src="icon/charms/gathering_swarm.png"  width="12" height="12"> Gathering Swarm: 300 Geo</img>'+
                    '<br><img src="icon/charms/stalwart_shell.png"  width="12" height="12"> Stalwart Shell: 200 Geo</img>'+
                    '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 150 Geo</img>'+
                    '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 500 Geo </img>'+
                    '<br><img src="icon/vessel_fragment.png"  width="12" height="12"> Vessel Fragment: 550 Geo</img>'+
                    '<br><img src="icon/elegant_key.png"  width="12" height="12"> Elegant Key: 800 Geo</img>'+
                    '<br><img src="" width="12" height="12">-------Requires Shopkeeper\'s Key-------</img>'+
                    '<br><img src="icon/charms/heavy_blow.png"  width="12" height="12"> Heavy Blow: 350 Geo</img>'+
                    '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 800 Geo</img>'+
                    '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 1500 Geo</img>'+
                    '<br><img src="icon/vessel_fragment.png"  width="12" height="12"> Vessel Fragment: 900 Geo</img>'+
                    '<br><img src="icon/charms/sprintmaster.png"  width="12" height="12"> Sprintmaster: 400 Geo</img>'],0],
                   ['Tuk',-1748,2908,'icon/npc/tuk.png',
                    ['<br>She sells the Knight Rancid Eggs for Geo.png 80-100.' +
                     'She does not sell eggs if the Knight has 80 or more in their inventory.'+
                     'She also gives them one for free if they are wearing the Defender\'s Crest Charm,'],0],
                   ['Mato',-393,1407,'icon/npc/mato.png',
                    ['<br>Nailmaster Mato is one of three Nailmasters in Hollow Knight.'+
                     ' He teaches the Cyclone Slash to whoever is willing to become his disciple.'],0],
                   ['Oro',-1845,4293,'icon/npc/oro.png',
                    ['<br>Nailmaster Oro is one of three Nailmasters in Hollow Knight.'+
                      ' He teaches the Dash Slash Nail Art to those willing to pay him for his services.'],0],
                   ['Sheo',-950,477,'icon/npc/sheo.png',
                    ['<br>Nailmaster Sheo is one of three Nailmasters in Hollow Knight.'+
                     ' Although retired, he teaches the Great Slash Nail Art to those seeking him.'],0],
                   ['Bretta',-1765,2017,'icon/npc/bretta.png',
                    ['<br>Bretta is in Fungal Wastes past Dash Master statue. Unlock her house for Mask Shard. She sleeps in the house and sits on Bench.'],0],
                   ['Brumm',-1912,299,'icon/npc/brumm_banish.png',
                    ['<br>After Grimm fight, Brumm in Distant Village gives Flame if Knight has less than three. He offers to help banish Grimm Troupe.'],0],
                   ['Brumm',-540,1279,'icon/npc/brumm_banish.png',
                    ['<br>Brumm will jabs his staff into the brazier so it can be broken and banished Grimm Troupe'],0],
                   ['Grey Mourner',-950,3662,'icon/npc/grey_mourner.png',
                    ['<br>Grey Mourner is in Resting Grounds, needs Desolate Dive/Descending Dark.'+
                     ' She asks Knight to take Delicate Flower to lover\'s grave in Queen\'s Gardens, but flower breaks if Knight teleports or takes damage.'],0],
                   ['Grub Father',-715,1890,'icon/npc/grub_father.png',
                    ['<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 5/46 Grub</img>'+
                    '<br><img src="icon/charms/grubsong.png"  width="12" height="12"> Grubsong: 10/46 Grub</img>'+
                    '<br><img src="icon/rancid_egg.png"  width="15" height="15"> Rancid Egg: 16/46 Grub</img>'+
                    '<br><img src="icon/hallownest_seal.png"  width="12" height="12"> Hallownest Seal: 23/46 Grub</img>'+
                    '<br><img src="icon/pale_ore.png"  width="12" height="12"> Pale Ore: 31/46 Grub</img>'+
                    '<br><img src="icon/kings_idol.png"  width="12" height="12"> King\'s Idol: 38/46 Grub</img>'+
                    '<br><img src="icon/charms/grubberfly_elegy.png"  width="12" height="12"> Grubberfly Elegy: 46/46 Grub</img>'],0],]
    //#endregion

    
    

    
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
        crs: crs,
        maxBoundsViscosity: 1.0,
        maxBounds: [
          crs.unproject(L.point(mapExtent[0], mapExtent[1])),
          crs.unproject(L.point(mapExtent[2], mapExtent[3]))
          ]
      });
    
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

      createMarkers(grubInfo,[32,32],grubGroup)
      grubGroup.addTo(map)
      // setGroupOpacity(grubGroup)



      createMarkers(charmsInfo,[22,22],charmsGroup)
      charmsGroup.addTo(map)
      


      createMarkers(warriordreamInfo,[25,25],warriordreamsGroup)
      warriordreamsGroup.addTo(map)
      

      createMarkers(bossesInfo,[32,32],bossesGroup)
      bossesGroup.addTo(map)
      

      createMarkers(bossvariants,[32,32],bossvariantsGroup)
      bossvariantsGroup.addTo(map)

      createMarkers(dreamersInfo,[32,32],dreamersGroup)
      dreamersGroup.addTo(map)

      createMarkers(notchInfo,[22,22],notchGroup)
      notchGroup.addTo(map)

      createMarkers(spell_abilitiesInfo,[25,25],spell_abilitiesGroup)
      spell_abilitiesGroup.addTo(map)

      createMarkers(maskshardInfo,[25,25],maskshardGroup)
      maskshardGroup.addTo(map)

      createMarkers(vesselfragmentInfo,[24,20],vesselfragmentGroup)
      vesselfragmentGroup.addTo(map)
      
      createMarkers(paleoreInfo,[22,22],paleoreGroup)
      paleoreGroup.addTo(map)

      createMarkers(whisperingrootsInfo,[30,30],whisperingrootsGroup)
      whisperingrootsGroup.addTo(map)

      createMarkers(npcInfo,[28,28],npcGroup)
      npcGroup.addTo(map)
    
    

});



function setGroupOpacity(groupLayer){
  groupLayer.eachLayer(marker => {
    marker.setOpacity(0)
    marker.setClickable(false)
  })
}


function createMarkers(markerInfo,iconSize,markerGroupLayer){
  for(let i=0;i<markerInfo.length;i++){
    var Icon = L.icon({
      iconUrl:markerInfo[i][3],
      iconSize:iconSize,
      title:markerInfo[i][0],
      description:markerInfo[i][4],
    });

    var Marker = L.marker([markerInfo[i][1],markerInfo[i][2]],{icon:Icon,opacity:1,id:i})
    
    var Foundpopup = "<br><button id='MarkFoundButton'>Mark Found</button>";
    var NotFoundpopup = "<br><button id='MarkFoundButton'>Mark As Not Found</button>"
    Marker.bindPopup(Icon.options.title + Icon.options.description + Foundpopup,{maxHeight:250});
    var popupContent

    Marker.on("popupopen",function(e){
      var marker = e.target

      var button = document.getElementById('MarkFoundButton')
      button.addEventListener('click',function(){
        var opacity = marker.options.opacity;
        marker.setOpacity(opacity===1? 0.5:1)
        marker.closePopup();

        var title = marker.getIcon().options.title;
        var desc = marker.getIcon().options.description;
        if(desc){
          popupContent = opacity === 1 ? title+desc+NotFoundpopup : title+desc+Foundpopup;
        }
        else{
          popupContent = opacity === 1 ? title+NotFoundpopup : title+Foundpopup;
        }
        marker.bindPopup(popupContent);

      })

    })

    markerGroupLayer.addLayer(Marker)
  }
}


function hideAllMarkers(groupMarkers){
    map.removeLayer(groupMarkers);
}

function updateMarker(){

}