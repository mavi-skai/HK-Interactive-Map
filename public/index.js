window.addEventListener('load', function () {
    let foundMarkersGroup = new L.LayerGroup()
    let id = 1
    let currentMarkerID = null

    //#region GRUB
    let grubGroup = new L.LayerGroup()
    let grubInfo = [['Grub',-575, 1314,'icon/grub.png','',0,'grub'],
                   ['Grub',-704, 1030,'icon/grub.png','',0,'grub'],
                   ['Grub',-1015, 860,'icon/grub.png','',0,'grub'],
                   ['Grub',-1067, 1085,'icon/grub.png','',0,'grub'],
                   ['Grub',-867, 1624,'icon/grub.png','',0,'grub'],
                   ['Grub',-978, 1569,'icon/grub.png','',0,'grub'],
                   ['Grub',-1200,1562,'icon/grub.png','',0,'grub'],
                   ['Grub',-1141, 502,'icon/grub.png','',0,'grub'],
                   ['Grub',-1400, 836,'icon/grub.png','',0,'grub'],
                   ['Grub',-1819, 317,'icon/grub.png','',0,'grub'],
                   ['Grub',-1952, 851,'icon/grub.png','',0,'grub'],
                   ['Grub',-1891, 1284,'icon/grub.png','',0,'grub'],
                   ['Grub',-2093, 1252,'icon/grub.png','',0,'grub'],
                   ['Grub',-1625, 1596,'icon/grub.png','',0,'grub'],
                   ['Grub',-1520, 1483,'icon/grub.png','',0,'grub'],
                   ['Grub',-1434, 1878,'icon/grub.png','',0,'grub'],
                   ['Grub',-923, 1733,'icon/grub.png','',0,'grub'],
                   ['Grub',-753, 2111,'icon/grub.png','',0,'grub'],
                   ['Grub',-705, 2571,'icon/grub.png','',0,'grub'],
                   ['Grub',-829, 2396,'icon/grub.png','',0,'grub'],
                   ['Grub',-897, 2452,'icon/grub.png','',0,'grub'],
                   ['Grub',-648, 2290,'icon/grub.png','',0,'grub'],
                   ['Grub',-695, 2808,'icon/grub.png','',0,'grub'],
                   ['Grub',-598, 2888,'icon/grub.png','',0,'grub'],
                   ['Grub',-726, 2933,'icon/grub.png','',0,'grub'],
                   ['Grub',-721, 3308,'icon/grub.png','',0,'grub'],
                   ['Grub',-597, 3056,'icon/grub.png','',0,'grub'],
                   ['Grub',-431, 3392,'icon/grub.png','',0,'grub'],
                   ['Grub',-981, 3556,'icon/grub.png','',0,'grub'],
                   ['Grub',-1313, 2516,'icon/grub.png','',0,'grub'],
                   ['Grub',-1479, 2744,'icon/grub.png','',0,'grub'],
                   ['Grub',-1458, 2994,'icon/grub.png','',0,'grub'],
                   ['Grub',-1696, 3265,'icon/grub.png','',0,'grub'],
                   ['Grub',-1503, 3588,'icon/grub.png','',0,'grub'],
                   ['Grub',-1509, 3607,'icon/grub.png','',0,'grub'],
                   ['Grub',-1513, 3626,'icon/grub.png','',0,'grub'],
                   ['Grub',-1825, 2558,'icon/grub.png','',0,'grub'],
                   ['Grub',-2168, 2206,'icon/grub.png','',0,'grub'],
                   ['Grub',-2152, 2560,'icon/grub.png','',0,'grub'],
                   ['Grub',-1763, 3395,'icon/grub.png','',0,'grub'],
                   ['Grub',-1864, 3391,'icon/grub.png','',0,'grub'],
                   ['Grub',-1729, 3573,'icon/grub.png','',0,'grub'],
                   ['Grub',-1909, 3564,'icon/grub.png','',0,'grub'],
                   ['Grub',-1715, 4001,'icon/grub.png','',0,'grub'],
                   ['Grub',-1913, 3916,'icon/grub.png','',0,'grub'],
                   ['Grub',-1942, 4385,'icon/grub.png','',0,'grub'],];
    //#endregion

    //#region CHARMS
    let charmsGroup = new L.LayerGroup()
    let charmsInfo = [['Joni Blessing',-507, 1465,'icon/charms/joni_blessing.png','',1,'charms'],
                     ['Baldur Shell',-665, 1303,'icon/charms/baldur_shell.png','',1,'charms'],
                     ['Fury of The Fallen',-655, 1720,'icon/charms/fury_of_the_fallen.png','',1,'charms'],
                     ['Grimm Child',-620,1888,'icon/charms/grimm_child.png','',1,'charms'],
                     ['Nailmaster Glory',-599, 1978,'icon/charms/nailmaster_glory.png','',1,'charms'],
                     ['Deep Focus',-644, 2481,'icon/charms/deep_focus.png','',1,'charms'],
                     ['Shape of Unn',-909, 373,'icon/charms/shape_of_unn.png','',1,'charms'],
                     ['Thorns of Agony',-931, 1287,'icon/charms/thorns_of_agony.png','',1,'charms'],
                     ['Soul Catcher',-817, 2055,'icon/charms/soul_catcher.png','',1,'charms'],
                     ['Glowing Womb',-801, 2335,'icon/charms/glowing_womb.png','',1,'charms'],
                     ['Dream Shield',-856, 3318,'icon/charms/dream_shield.png','',1,'charms'],
                     ['Soul Eater',-982, 3738,'icon/charms/soul_eater.png','',1,'charms'],
                     ['King Soul Left',-1147, 546,'icon/charms/king_soul_part1.png','',0.5,'charms'],
                     ['Spore Shroom',-1547, 1506,'icon/charms/spore_shroom.png','',1,'charms'],
                     ['Mark of Pride',-1713, 1948,'icon/charms/mark_of_pride.png','',1,'charms'],
                     ['Dash Master',-1832, 1991,'icon/charms/dash_master.png','',1,'charms'],
                     ['Spell Twister',-1213, 2818,'icon/charms/spell_twister.png','',1,'charms'],
                     ['Weaversong',-1940, 998,'icon/charms/weaversong.png','',1,'charms'],
                     ['Sharp Shadow',-2175, 1692,'icon/charms/sharp_shadow.png','',1,'charms'],
                     ['Flukenest',-1956, 2416,'icon/charms/flukenest.png','',1,'charms'],
                     ['Defender Crest',-1809, 2960,'icon/charms/defender_crest.png','',1,'charms'],
                     ['Quick Slash',-1913, 4151,'icon/charms/quick_slash.png','',1,'charms'],
                     ['Hiverblood',-1986,4071,'icon/charms/hiverblood.png','',1,'charms'],
                     ['King Soul Right',-2226, 3042,'icon/charms/king_soul_part2.png','',0.5,'charms'],
                     ['Lifeblood Core',-2638, 2551,'icon/charms/lifeblood_core.png','',1,'charms'],
                     ['Void Heart',-2812, 2721,'icon/charms/void_heart.png','Unlock 2 Endings',0,'charms'],
                     ['Unbreakable Greed',-605,1840,'icon/charms/unbreakable_greed.png','',0,'charms'],
                     ['Unbreakable Heart',-605,1855,'icon/charms/unbreakable_heart.png','',0,'charms'],
                     ['Unbreakable Strength',-605,1870,'icon/charms/unbreakable_strength.png','',0,'charms'],
                     ['Grubsong',-696,1874,'icon/charms/grubsong.png','',1,'charms'],
                     ['Grubberfly\'s Elegy',-696,1886,'icon/charms/grubberfly_elegy.png','',1,'charms'],
                     ['Gathering Swarm',-587,1955,'icon/charms/gathering_swarm.png','',1,'charms'],
                     ['Stalwart Shell',-587,1967,'icon/charms/stalwart_shell.png','',1,'charms'],
                     ['Heavy Blow',-587,1979,'icon/charms/heavy_blow.png','',1,'charms'],
                     ['Sprintmaster Shell',-587,1991,'icon/charms/sprintmaster.png','',1,'charms'],
                     ['Wayward Compass',-599, 2041,'icon/charms/wayward_compass.png','',1,'charms'],
                     ['Fragile Greed',-1182,2100,'icon/charms/fragile_greed.png','',1,'charms'],
                     ['Fragile Heart',-1182,2112,'icon/charms/fragile_heart.png','',1,'charms'],
                     ['Fragile Strength',-1182,2124,'icon/charms/fragile_strength.png','',1,'charms'],
                     ['Lifeblood Heart',-1006,2662,'icon/charms/lifeblood_heart.png','',1,'charms'],
                     ['Longnail',-1006,2674,'icon/charms/long_nail.png','',1,'charms'],
                     ['Steady Body',-1006,2686,'icon/charms/steady_body.png','',1,'charms'],
                     ['Shaman Stone',-993,2662,'icon/charms/shaman_stone.png','',1,'charms'],
                     ['Quick Focus',-993,2674,'icon/charms/quick_focus.png','',1,'charms'],
                     ['Dream Wielder',-804,3421,'icon/charms/dream_wielder.png','',1,'charms'],]
    //#endregion

    //#region WARRIOR DREAMS
    let warriordreamsGroup = new L.LayerGroup()
    let warriordreamInfo = [['Gorb',-327,1308,'icon/warriordreams/gorb.png','',1,'warriorsdreams'],
                        ['Elder Hu',-1359,2267,'icon/warriordreams/elder_hu.png','',1,'warriorsdreams'],
                        ['Galien',-1849,955,'icon/warriordreams/galien.png','',1,'warriorsdreams'],
                        ['Markoth',-1782,4107,'icon/warriordreams/markoth.png','',1,'warriorsdreams'],
                        ['Marmu',-1367,695,'icon/warriordreams/marmu.png','',1,'warriorsdreams'],
                        ['No Eyes',-1033,1664,'icon/warriordreams/no_eyes.png','',1,'warriorsdreams'],
                        ['Xero',-934,3189,'icon/warriordreams/xero.png','',1,'warriorsdreams'],];
    //#endregion

    //#region  BOSSES
    let bossesGroup = new L.LayerGroup()
    let bossesInfo = [['Broken Vessel',-2243,2098 ,'icon/bosses/broken_vessel.png','',1,'boss'],
              ['Brooding Mawlek',-872,1918,'icon/bosses/brooding_mawlek.png','',1,'boss'],
              ['The Collector',-1522,3593,'icon/bosses/the_collector.png','',1,'boss'],
              ['Crystal Guardian',-525,2869,'icon/bosses/crystal_guardian.png','',0,'boss'],
              ['Dung Defender',-1804,2942,'icon/bosses/dung_defender.png','',1,'boss'],
              ['False Knight',-844,2128,'icon/bosses/false_knight.png','',1,'boss'],
              ['Flukemarm',-1942,2436,'icon/bosses/flukemarm.png','',0,'boss'],
              ['Grimm',-624,1926,'icon/bosses/grimm.png','',1,'boss'],
              ['Gruz Mother',-986,2595,'icon/bosses/gruz_mother.png','',1,'boss'],
              ['Soul Master',-1220,2622,'icon/bosses/soul_master.png','',1,'boss'],
              ['Hive Knight',-1951,4071,'icon/bosses/hive_knight.png','',1,'boss'],
              ['Hollow Knight',-705,2238,'icon/bosses/hollow_knight.png','',0,'boss'],
              ['Hornet',-728,815,'icon/bosses/hornet.png','',1,'boss'],
              ['Mantis Lords',-1845,1866,'icon/bosses/mantis_lords.png','',1,'boss'],
              ['Massive Moss Charger',-1047,1352,'icon/bosses/massive_moss_charger.png','',0,'boss'],
              ['Nosk',-2128,1428,'icon/bosses/nosk.png','',1,'boss'],
              ['The Radiance',-684,2238,'icon/bosses/the_radiance.png','',0,'boss'],
              ['Soul Warrior',-1345,2686,'icon/bosses/soul_warrior.png','',0,'boss'],
              ['Traitor Lord',-1149,732,'icon/bosses/traitor_lord.png','',1,'boss'],
              ['Uumuu',-1210,1599,'icon/bosses/uumuu.png','',1,'boss'],
              ['Vengefly King',-637,988,'icon/bosses/vengefly_king.png','',0,'boss'],
              ['Watcher Knights',-1395,2985,'icon/bosses/watcher_knights.png','',1,'boss'],]
              
    //#endregion

    //#region BOSSVARIANTS
    let bossvariantsGroup = new L.LayerGroup()
    let bossvariants = [['Enraged Guardian',-480,2863,'icon/bossvariants/enraged_guardian.png','',0,'bossvariants'],
                        ['Failed Champion',-824,2150,'icon/bossvariants/failed_champion.png','',0,'bossvariants'],
                        ['Grey Prince Zote',-642,2063,'icon/bossvariants/grey_prince_zote.png','',0,'bossvariants'],
                        ['Hornet Sentinel',-1692,4321,'icon/bossvariants/hornet_sentinel.png','',1,'bossvariants'],
                        ['Lost Kin',-2243,2110,'icon/bossvariants/lost_kin.png','',0,'bossvariants'],
                        ['Nightmare King Grimm',-611,1926,'icon/bossvariants/nightmare_king_grimm.png','',1,'bossvariants'],
                        ['Soul Tyrant',-1222,2650,'icon/bossvariants/soul_tyrant.png','',0,'bossvariants'],
                        ['White Defender',-1843,2953,'icon/bossvariants/white_defender.png','',0,'bossvariants'],]
    //#endregion

    //#region DREAMERS
    let dreamersGroup = new L.LayerGroup()
    let dreamersInfo = [['Herrah',-1855,327,'icon/dreamers/herrah.png','',1,'dreamers'],
                    ['Lurien',-1119,3044,'icon/dreamers/lurien.png','',1,'dreamers'],
                    ['Monomon',-1223,1602,'icon/dreamers/monomon.png','',1,'dreamers'],]
    //#endregion

    //#region NOTCH
    let notchesGroup = new L.LayerGroup()
    let notchesInfo = [['Notches',-980,2662,'icon/notch.png','Collect 5 Charms',0,'notches'],
                     ['Notches',-980,2674,'icon/notch.png','Collect 10 Charms',0,'notches'],
                     ['Notches',-980,2686,'icon/notch.png','Collect 18 Charms',0,'notches'],
                     ['Notches',-993,2686,'icon/notch.png','Collect 25 Charms',0,'notches'],
                     ['Notches',-1081,1731,'icon/notch.png','Unlock Isma\'s Tear or Monarch Wings',0,'notches'],
                     ['Notches',-1262,1906,'icon/notch.png','Defeat 2 Shrumal Ogres',0,'notches'],
                     ['Notches',-1255,3653,'icon/notch.png','Complete the Trial of the Warrior',0,'notches'],
                     ['Notches',-596,1926,'icon/notch.png','Defeat Grimm',0,'notches'],]
    //#endregion

    //#region SPELL AND ABILITIES
    let spellsandabilitiesGroup = new L.LayerGroup()
    let spellsandabilitiesInfo = [['Vengeful Spirit',-839,2054,'icon/spell_abilities/vengeful_spirit.png','',1,'spellsandabilities'],
                           ['Desolate Dive',-1258,2637,'icon/spell_abilities/desolate_dive.png','',1,'spellsandabilities'],
                           ['Howling Wraiths',-1190,1090,'icon/spell_abilities/howling_wraiths.png','',1,'spellsandabilities'],
                           ['Shade Soul',-1331,2685,'icon/spell_abilities/shade_soul.png','',1,'spellsandabilities'],
                           ['Descending Dark',-760,3309,'icon/spell_abilities/descending_dark.png','',1,'spellsandabilities'],
                           ['Abyss Shriek',-2769,2365,'icon/spell_abilities/abyss_shriek.png','',1,'spellsandabilities'],
                           ['Mothwing Cloak',-712,817,'icon/spell_abilities/mothwing_cloak.png','',1,'spellsandabilities'],
                           ['Mantis Claw',-1634,1796,'icon/spell_abilities/mantis_claw.png','',1,'spellsandabilities'],
                           ['Crystal Heart',-633,3409,'icon/spell_abilities/crystal_heart.png','',1,'spellsandabilities'],
                           ['Monarch Wings',-2271,1858,'icon/spell_abilities/monarch_wings.png','',1,'spellsandabilities'],
                           ['Isma\'s Tear',-1948,3372,'icon/spell_abilities/isma\'s_tear.png','',1,'spellsandabilities'],
                           ['Shade Cloak',-2736,3643,'icon/spell_abilities/shade_cloak.png','',1,'spellsandabilities'],
                           ['Dream Nail',-947,3321,'icon/spell_abilities/dream_nail.png','',1,'spellsandabilities'],
                           ['Cyclone Slash',-379,1407,'icon/spell_abilities/cyclone_slash.png','',1,'spellsandabilities'],
                           ['Dash Slash',-1823,4292,'icon/spell_abilities/dash_slash.png','',1,'spellsandabilities'],
                           ['Great Slash',-928,477,'icon/spell_abilities/great_slash.png','',1,'spellsandabilities'],
                           ['Awoken Dream Nail',-782,3433,'icon/spell_abilities/awoken_dream_nail.png','<br>Collect 1800 Essence with the Dream Nail.',1,'spellsandabilities'],]
    //#endregion

    //#region MASK SHARD
    let maskshardGroup = new L.LayerGroup()
    let maskshardInfo = [['Mask Shard',-575,1955,'icon/mask_shard.png','<br>Just Sly','',0.25,'maskshard'],
                         ['Mask Shard',-575,1967,'icon/mask_shard.png','<br>Just Sly','',0.25,'maskshard'],
                         ['Mask Shard',-575,1979,'icon/mask_shard.png','<br>Sly With Shopkeeper Key',0.25,'maskshard'],
                         ['Mask Shard',-575,1991,'icon/mask_shard.png','<br>Sly With Shopkeeper Key',0.25,'maskshard'],
                         ['Mask Shard',-872,1935,'icon/mask_shard.png','<br>Reward for defeating Brooding Mawlek',0.25,'maskshard'],
                         ['Mask Shard',-696,1898,'icon/mask_shard.png','<br>Requires rescuing 5 Grubs',0.25,'maskshard'],
                         ['Mask Shard',-940,2122,'icon/mask_shard.png','<br>Recomended Mantis Claw',0.25,'maskshard'],
                         ['Mask Shard',-1414,1606,'icon/mask_shard.png','<br>Requires Mantis Claw',0.25,'maskshard'],
                         ['Mask Shard',-828,2063,'icon/mask_shard.png','<br>Requires rescuing Bretta from Fungal Wastes',0.25,'maskshard'],
                         ['Mask Shard',-908,2027,'icon/mask_shard.png','<br>Recommended Lumafly Lantern',0.25,'maskshard'],
                         ['Mask Shard',-1814,2157,'icon/mask_shard.png',,'',0.25,'maskshard'],
                         ['Mask Shard',-1839,1700,'icon/mask_shard.png','<br>Requires Monarch Wings','',0.25,'maskshard'],
                         ['Mask Shard',-485,2835,'icon/mask_shard.png','<br>Requires Monarch Wings','',0.25,'maskshard'],
                         ['Mask Shard',-1968,3812,'icon/mask_shard.png','<br>Requires baiting a Hive Guardian into breaking a wall','',0.25,'maskshard'],
                         ['Mask Shard',-804,3431,'icon/mask_shard.png','<br>Requires collecting 1500 Essence','',0.25,'maskshard'],
                         ['Mask Shard',-936,3662,'icon/mask_shard.png','<br>Requires completing the Delicate Flower quest','',0.25,'maskshard'],]
    //#endregion

    //#region VESSEL FRAGMENT
    let vesselfragmentGroup = new L.LayerGroup()
    let vesselfragmentInfo = [['Vessel Fragment',-563,1955,'icon/vessel_fragment.png','<br>Just Sly',0.33,'vesselfragment'],
                              ['Vessel Fragment',-563,1967,'icon/vessel_fragment.png','<br>Sly With Shopkeeper Key',0.33,'vesselfragment'],
                              ['Vessel Fragment',-1058,1024,'icon/vessel_fragment.png','',0.33,'vesselfragment'],
                              ['Vessel Fragment',-984,2085,'icon/vessel_fragment.png','',0.33,'vesselfragment'],
                              ['Vessel Fragment',-1481,3458,'icon/vessel_fragment.png','',0.33,'vesselfragment'],
                              ['Vessel Fragment',-1983,1849,'icon/vessel_fragment.png','',0.33,'vesselfragment'],
                              ['Vessel Fragment',-306,1221,'icon/vessel_fragment.png','',0.33,'vesselfragment'],
                              ['Vessel Fragment',-793,3421,'icon/vessel_fragment.png','<br>Collecting 700 Essence',0.33,'vesselfragment'],
                              ['Vessel Fragment',-2140,2782,'icon/vessel_fragment.png','<br>Dropping Geo 3000 into the fountain',0.33,'vesselfragment'],]

    //#endregion

    //#region PALE ORE
    let paleoreGroup = new L.LayerGroup()
    let paleoreInfo = [['Pale Ore',-2135,2348,'icon/pale_ore.png','<br>Defeat two Lesser Mawleks that guard it.',0.66,'paleore'],
                       ['Pale Ore',-793,3433,'icon/pale_ore.png','Collect 300 Essence with the Dream Nail.',0.66,'paleore'],
                       ['Pale Ore',-104,3122,'icon/pale_ore.png','Requires Mantis Claw. Monarch Wings and Crystal Heart recommended.',0.66,'paleore'],
                       ['Pale Ore',-2132,1549,'icon/pale_ore.png','Requires defeating Nosk.',0.66,'paleore'],
                       ['Pale Ore',-696,1910,'icon/pale_ore.png','Rescue 31 Grubs.',0.66,'paleore'],
                       ['Pale Ore',-1255,3665,'icon/pale_ore.png','<br>Complete the Trial of the Conqueror.',0.66,'paleore'],]
    //#endregion

    //#region WHISPERING ROOT
    let whisperingrootsGroup = new L.LayerGroup()
    let whisperingrootsInfo = [['Whispering Roots',-839,2041,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-1361,2459,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-431,3191,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-1986,713,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-681,1978,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-1186,1921,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-1596,1868,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-1069,915,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-2093,3876,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-559,1081,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-1606,3754,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-1463,1175,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-892,3445,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-2002,3069,'icon/whispering_roots.png','',0,'whisperingroots'],
                               ['Whispering Roots',-729,3676,'icon/whispering_roots.png','',0,'whisperingroots'],]
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
                    '<br><img src="icon/salubra_blessing.png" width="12" height="12"> Blessing: 800 Geo and Own 40 Charms</img>'],0,'npc'],
                   ['Confessor Jiji',-633,2199,'icon/npc/confessor_jiji.png',['<br>Requires Rancid Eggs to summon the Knight\'s Shade.'],0,'npc'],
                   ['Divine',-624,1853,'icon/npc/divine.png',
                    ['<br><img src="icon/charms/unbreakable_greed.png"  width="12" height="12"> Unbreakable Greed: 9000 Geo</img>'+
                    '<br><img src="icon/charms/unbreakable_heart.png"  width="12" height="12"> Unbreakable Heart: 12000 Geo</img>'+
                    '<br><img src="icon/charms/unbreakable_strength.png"  width="12" height="12"> Unbreakable Strength: 15000 Geo</img>'],0,'npc'],
                   ['Iselda',-627,2040,'icon/npc/iselda.png',
                    ['<br><img src="icon/charms/wayward_compass.png"  width="12" height="12"> Wayward Compass: 220 Geo</img>'+
                    '<br><img src="icon/area_map.png"  width="12" height="12"> Resting Grounds: 75 Geo</img>'+
                    '<br><img src="icon/quill.png"  width="12" height="12"> :Quill</img>'+
                    '<br><img src="icon/map_pins.png"  width="28" height="18"> :Map pins</img>'],0,'npc'],
                   ['Legeater',-1193,2124,'icon/npc/legeater.png',
                    ['<br><img src="icon/charms/fragile_heart.png"  width="12" height="12"> Fragile Heart: 350 Geo</img>'+
                    '<br><img src="icon/charms/fragile_greed.png"  width="12" height="12"> Fragile Greed: 250 Geo</img>'+
                    '<br><img src="icon/charms/fragile_strength.png"  width="12" height="12"> Fragile Strength:600 Geo</img>'+
                    '<br><img src="icon/charms/fragile_heart_broken.png"  width="12" height="12"> Repair:200 Geo/Defender Crest Equipped 160G</img>'+
                    '<br><img src="icon/charms/fragile_greed_broken.png"  width="12" height="12"> Repair:150 Geo/Defender Crest Equipped 120G</img>'+
                    '<br><img src="icon/charms/fragile_strength_broken.png"  width="12" height="12"> Repair:350 Geo/Defender Crest Equipped 280G</img>'],0,'npc'],
                   ['Little Fool',-1277,3648,'icon/npc/little_fool.png',
                    ['<br><img src="icon/trial_of_the_warrior.png"  width="15" height="20"> Trial of The Warrior: 100 Geo</img>'+
                    '<br><img src="icon/trial_of_the_conqueror.png"  width="15" height="20"> Trial of The Conqueror: 450 Geo</img>'+
                    '<br><img src="icon/trial_of_the_fool.png"  width="15" height="20"> Trial of The Fool: 800 Geo</img>'],0,'npc'],
                   ['Millibelle The Banker',-1391,1396,'icon/npc/millibelle.png',['<br>If she holds 2550 Geo or more and the Knight rests at a Bench or uses the Stagways, visiting the bank again reveals that Millibelle has abandoned her stand.'+
                   '<br>Millibelle the Thief can be found at the Hot Spring in the Pleasure House in the City of Tears'],0,'npc'],
                   ['Nailsmith',-1683,2184,'icon/npc/nailsmith.png',
                    ['<br>Sharpened Nail: 250 Geo <br>Channelled Nail: 800g + x1 Pale Ore <br>Coiled Nail: 2000g + x2 Pale Ore <br>Pure Nail: 4000g + x3 Pale Ore'],0,'npc'],
                   ['Relic Seeker Lemm',-1679,2733,'icon/npc/lemm.png',
                    ['<br><img src="icon/wanderers_journal.png"  width="12" height="12"> Wanderer Journal: 200 Geo</img>'+
                    '<br><img src="icon/hallownest_seal.png"  width="12" height="12"> Hollownest Seal: 450 Geo</img>'+
                    '<br><img src="icon/kings_idol.png"  width="12" height="12"> King\'s Idol: 800 Geo</img>'+
                    '<br><img src="icon/arcane_egg.png"  width="12" height="12"> Arcane Egg: 1200 Geo</img>'],0,'npc'],
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
                    '<br><img src="" width="12" height="12">Requires Shopkeeper\'s Key</img>'+
                    '<br><img src="icon/charms/heavy_blow.png"  width="12" height="12"> Heavy Blow: 350 Geo</img>'+
                    '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 800 Geo</img>'+
                    '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 1500 Geo</img>'+
                    '<br><img src="icon/vessel_fragment.png"  width="12" height="12"> Vessel Fragment: 900 Geo</img>'+
                    '<br><img src="icon/charms/sprintmaster.png"  width="12" height="12"> Sprintmaster: 400 Geo</img>'],0,'npc'],
                   ['Tuk',-1748,2908,'icon/npc/tuk.png',
                    ['<br>She sells the Knight Rancid Eggs for Geo.png 80-100.' +
                     'She does not sell eggs if the Knight has 80 or more in their inventory.'+
                     'She also gives them one for free if they are wearing the Defender\'s Crest Charm,'],0,'npc'],
                   ['Mato',-393,1407,'icon/npc/mato.png',
                    ['<br>Nailmaster Mato is one of three Nailmasters in Hollow Knight.'+
                     ' He teaches the Cyclone Slash to whoever is willing to become his disciple.'],0,'npc'],
                   ['Oro',-1845,4293,'icon/npc/oro.png',
                    ['<br>Nailmaster Oro is one of three Nailmasters in Hollow Knight.'+
                     ' He teaches the Dash Slash Nail Art to those willing to pay him for his services.'],0,'npc'],
                   ['Sheo',-950,477,'icon/npc/sheo.png',
                    ['<br>Nailmaster Sheo is one of three Nailmasters in Hollow Knight.'+
                     ' Although retired, he teaches the Great Slash Nail Art to those seeking him.'],0,'npc'],
                   ['Bretta',-1765,2017,'icon/npc/bretta.png',
                    ['<br>Bretta is in Fungal Wastes past Dash Master statue. Unlock her house for Mask Shard. She sleeps in the house and sits on Bench.'],0,'npc'],
                   ['Brumm',-1912,299,'icon/npc/brumm_banish.png',
                    ['<br>After Grimm fight, Brumm in Distant Village gives Flame if Knight has less than three. He offers to help banish Grimm Troupe.'],0,'npc'],
                   ['Brumm',-540,1279,'icon/npc/brumm_banish.png',
                    ['<br>Brumm will jabs his staff into the brazier so it can be broken and banished Grimm Troupe'],0,'npc'],
                   ['Grey Mourner',-950,3662,'icon/npc/grey_mourner.png',
                    ['<br>Grey Mourner is in Resting Grounds, needs Desolate Dive/Descending Dark.'+
                     ' She asks Knight to take Delicate Flower to lover\'s grave in Queen\'s Gardens, but flower breaks if Knight teleports or takes damage.'],0,'npc'],
                   ['Grub Father',-715,1890,'icon/npc/grub_father.png',
                    ['<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 5/46 Grub</img>'+
                     '<br><img src="icon/charms/grubsong.png"  width="12" height="12"> Grubsong: 10/46 Grub</img>'+
                     '<br><img src="icon/rancid_egg.png"  width="15" height="15"> Rancid Egg: 16/46 Grub</img>'+
                     '<br><img src="icon/hallownest_seal.png"  width="12" height="12"> Hallownest Seal: 23/46 Grub</img>'+
                     '<br><img src="icon/pale_ore.png"  width="12" height="12"> Pale Ore: 31/46 Grub</img>'+
                     '<br><img src="icon/kings_idol.png"  width="12" height="12"> King\'s Idol: 38/46 Grub</img>'+
                     '<br><img src="icon/charms/grubberfly_elegy.png"  width="12" height="12"> Grubberfly Elegy: 46/46 Grub</img>'],0,'npc'],
                   ['Seer',-815,3425,'icon/npc/seer.png',
                    ['<br><img src="icon/hallownest_seal.png"  width="12" height="12"> Hallownest Seal: 100 Essence</img>'+
                     '<br><img src=""  width="12" height="12"> Spirit Glade: 200 Essence</img>'+
                     '<br><img src="icon/pale_ore.png"  width="12" height="12"> Pale Ore: 300 Essence</img>'+
                     '<br><img src="icon/charms/dream_wielder.png"  width="12" height="12"> Dream Wielder: 500 Essence</img>'+
                     '<br><img src="icon/vessel_fragment.png"  width="12" height="12"> Vessel Fragment: 700 Essence</img>'+
                     '<br><img src="icon/dream_gate.png"  width="12" height="12"> Dream Gate: 900 Essence</img>'+
                     '<br><img src="icon/arcane_egg.png"  width="12" height="12"> Arcane Egg: 1200 Essence</img>'+
                     '<br><img src="icon/mask_shard.png"  width="12" height="12"> Mask Shard: 1500 Essence</img>'+
                     '<br><img src="icon/spell_abilities/awoken_dream_nail.png"  width="12" height="12"> Awoken Dream Nail: 1800 Essence</img>'+
                     '<br><img src="icon/achievements/achievement_ascension.png"  width="12" height="12"> Ascension Achievement: 2400 Essence</img>'],0,'npc'],
                    ['Hunter',-938,1668,'icon/npc/hunter.png',
                     ['<br>He gifts the Hunter\'s Journal, a bestiary detailing all enemies in Hallownest.'],0,'npc'],
                    ['Godseeker',-1971,2102,'icon/npc/godseeker.png',
                     ['<br>Godseeker\'s cocoon is in Junk Pit, unlocks with Simple Key. Free Godseeker, get Godtuner, start seeking gods or use Dream Nail to join Godhome fights.'],0,'npc'],
                    ['Zote',-643,972,'icon/npc/zote1.png',
                     ['<br> Saved or If not saved before Mantis Claw, Zote dies there, leaving shell and nail. Hitting shell unlocks Neglect achievement.'+
                      '<br>PS: FCK THIS GUY. FCK Grey Prince Zote.'],0,'npc'],
                    ['Zote',-643,972,'icon/npc/zote1.png',
                     ['<br>Found stuck in spider webs in Deepnest. Knight can save or leave him, but leaving him won\'t result in death.'+
                      '<br>PS:FCK Grey Prince Zote. Specially in Pantheon!'],0,'npc'],
                    ['Cornifer',-2154,2787,'icon/npc/cornifer.png',
                      ['<br>Map for Ancient Basin: 112 Geo'],0,'npc'],
                    ['Cornifer',-1409,2703,'icon/npc/cornifer.png',
                      ['<br>Map for City of Tears: 90 Geo'],0,'npc'],
                    ['Cornifer',-570,2715,'icon/npc/cornifer.png',
                      ['<br>Map for Crystal Peak: 112 Geo'],0,'npc'],
                    ['Cornifer',-1696,1384,'icon/npc/cornifer.png',
                      ['<br>Map for Deepnest: 38 Geo'],0,'npc'],
                    ['Cornifer',-1117,1556,'icon/npc/cornifer.png',
                      ['<br>Map for Fog Canyon: 150 Geo'],0,'npc'],
                    ['Cornifer',-1117,1556,'icon/npc/cornifer.png',
                      ['<br>Map for Fog Canyon: 150 Geo'],0,'npc'],
                    ['Cornifer',-865,1992,'icon/npc/cornifer.png',
                      ['<br>Map for Forgotten Crossroads: 30 Geo'],0,'npc'],
                    ['Cornifer',-1460,1666,'icon/npc/cornifer.png',
                      ['<br>Map for Fungal Wastes: 75 Geo'],0,'npc'],
                    ['Cornifer',-891,1620,'icon/npc/cornifer.png',
                      ['<br>Map for Greenpath: 60 Geo'],0,'npc'],
                    ['Cornifer',-891,1620,'icon/npc/cornifer.png',
                      ['<br>Map for Howling Cliffs: Geo'],0,'npc'],
                    ['Cornifer',-1757,3670,'icon/npc/cornifer.png',
                      ['<br>Map for Kingdom\'s Edge: 112 Geo'],0,'npc'],
                    ['Cornifer',-1327,1192,'icon/npc/cornifer.png',
                      ['<br>Map for Queen\'s Gardens: 150 Geo'],0,'npc'],
                    ['Cornifer',-1789,2078,'icon/npc/cornifer.png',
                      ['<br>Map for Royal Waterways: 75 Geo'],0,'npc'],]
    //#endregion

    //#region BENCH AND TRANSPORT
    let benchandtransportGroup = new L.LayerGroup()
    let benchInfo = [['Bench',-395,1420,'icon/bench/mato_bench.png','<br>Inside House',0,'benchandtransport'],
                               ['Bench',-630,2000,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-917,2162,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-907,2350,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1020,2689,'icon/bench/salubra_bench.png','',0,'benchandtransport'],
                               ['Bench',-824,2042,'icon/bench/bone_bench.png','<br>Inside House',0,'benchandtransport'],
                               ['Bench',-705,2254,'icon/bench/final_boss_bench.png','<br>Inside',0,'benchandtransport'],
                               ['Bench',-739,1441,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-739,1441,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1007,1557,'icon/bench/fung_bench.png','',0,'benchandtransport'],
                               ['Bench',-857,1090,'icon/bench/bench.png','<br>50 Geo to unlock',0,'benchandtransport'],//GreenPath
                               ['Bench',-771,919,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-768,584,'icon/bench/slug_shrine_bench.png','<br>Inside',0,'benchandtransport'],
                               ['Bench',-951,491,'icon/bench/sheo_bench.png','',0,'benchandtransport'],
                               ['Bench',-1228,1618,'icon/bench/fung_temple_bench.png','<br>Inside',0,'benchandtransport'],
                               ['Bench',-1458,1489,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1195,2109,'icon/bench/leg_eater_bench.png','',0,'benchandtransport'],
                               ['Bench',-1752,2114,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1724,2000,'icon/bench/mantis_bench.png','',0,'benchandtransport'],
                               ['Bench',-1574,2484,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1411,2684,'icon/bench/toll_bench.png','<br>150 Geo',0,'benchandtransport'],//city of tears
                               ['Bench',-1265,2444,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1551,2898,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1671,3478,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1369,3279,'icon/bench/bath_bench.png','',0,'benchandtransport'],
                               ['Bench',-1855,2586,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-2074,1424,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1719,1326,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1860,313,'icon/bench/spider_bench.png','',0,'benchandtransport'],
                               ['Bench',-2256,2633,'icon/bench/toll_bench.png','<br>150 Geo',0,'benchandtransport'],//ancient basin
                               ['Bench',-2233,3249,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1845,4311,'icon/bench/oro_bench.png','',0,'benchandtransport'],
                               ['Bench',-1581,4026,'icon/bench/camp_bench.png','',0,'benchandtransport'],
                               ['Bench',-1277,3665,'icon/bench/col_bench.png','<br>Under Colloseum',0,'benchandtransport'],
                               ['Bench',-2115,3609,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-2115,3609,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-853,2897,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-526,2854,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-859,3511,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-950,3678,'icon/bench/bench.png','',0,'benchandtransport'],
                               ['Bench',-1325,1149,'icon/bench/guardian_bench.png','',0,'benchandtransport'],
                               ['Bench',-1476,714,'icon/bench/toll_bench.png','<br>150 Geo',0,'benchandtransport'],//queen garden
                               ['Bench',-1369,861,'icon/bench/bench.png','',0,'benchandtransport'],]

    let stagInfo = [['Stag',-304,1198,'icon/stag.png','',0,'benchandtransport'],
                    ['Stag',-769,891,'icon/stag.png','<br>140 Geo',0,'benchandtransport'],
                    ['Stag',-630,2016,'icon/stag.png','',0,'benchandtransport'],
                    ['Stag',-906,2328,'icon/stag.png','<br>50 Geo',0,'benchandtransport'],
                    ['Stag',-860,3543,'icon/stag.png','',0,'benchandtransport'],
                    ['Stag',-1264,2473,'icon/stag.png','<br>200 Geo',0,'benchandtransport'],
                    ['Stag',-860,3543,'icon/stag.png','',0,'benchandtransport'],
                    ['Stag',-1670,3506,'icon/stag.png','<br>300 Geo',0,'benchandtransport'],
                    ['Stag',-1457,1464,'icon/stag.png','<br>140 Geo',0,'benchandtransport'],
                    ['Stag',-1365,830,'icon/stag.png','<br>200 Geo',0,'benchandtransport'],
                    ['Stag',-1808,462,'icon/stag.png','<br>250 Geo',0,'benchandtransport'],
                    ['Stag',-2232,3221,'icon/stag.png','',0,'benchandtransport'],]

    let tramInfo = [['Tram',-935,2653,'icon/tram.png','',0,'benchandtransport'],
                    ['Tram',-935,2879,'icon/tram.png','',0,'benchandtransport'],
                    ['Tram',-2069,3281,'icon/tram.png','',0,'benchandtransport'],
                    ['Tram',-2069,2770,'icon/tram.png','',0,'benchandtransport'],
                    ['Tram',-2069,1820,'icon/tram.png','',0,'benchandtransport'],]
    //#endregion

    //#region  TRADABLES
    let tradablesGroup = new L.LayerGroup()
    let tradablesInfo = [['Rancid Eggs',-487,2925,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-799,2868,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-751,2650,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-978,2876,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-986,433,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1276,1092,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1571,1714,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1957,1037,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-2003,721,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1837,332,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1768,2210,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1823,2421,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1852,2675,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1934,3130,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1530,2708,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1452,3218,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1375,3735,'icon/rancid_egg.png','',0,'tradables'],
                     ['Rancid Eggs',-1935,4246,'icon/rancid_egg.png','',0,'tradables'],
                     ['Wanderers Journal',-459,3001,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-536,1155,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-767,970,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1071,1476,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1350,1865,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1574,1885,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1287,2305,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-2032,2971,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1567,3222,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1585,3428,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1003,3733,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1654,3677,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1766,3956,'icon/wanderers_journal.png','',0,'tradables'],
                     ['Wanderers Journal',-1579,3994,'icon/wanderers_journal.png','',0,'tradables'],
                     ['King\'s Idol',-550,2730,'icon/kings_idol.png','',0,'tradables'],
                     ['King\'s Idol',-582,1017,'icon/kings_idol.png','',0,'tradables'],
                     ['King\'s Idol',-1844,1251,'icon/kings_idol.png','',0,'tradables'],
                     ['King\'s Idol',-1837,3002,'icon/kings_idol.png','',0,'tradables'],
                     ['King\'s Idol',-1339,3546,'icon/kings_idol.png','',0,'tradables'],
                     ['King\'s Idol',-1391,4213,'icon/kings_idol.png','',0,'tradables'],
                     ['King\'s Idol',-778,3708,'icon/kings_idol.png','',0,'tradables'],
                     ['Hallownest Seal',-987,3439,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-658,2083,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1034,1814,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-979,1114,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1135,1297,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1424,1487,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1287,487,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1307,1787,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1852,298,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1741,1583,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1700,1977,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1327,2542,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1625,2551,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1348,2949,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Hallownest Seal',-1624,3461,'icon/hallownest_seal.png','',0,'tradables'],
                     ['Arcane Egg',-2661,2430,'icon/arcane_egg.png','',0,'tradables'],
                     ['Arcane Egg',-2755,3589,'icon/arcane_egg.png','',0,'tradables'],
                     ['Arcane Egg',-2809,2626,'icon/arcane_egg.png','',0,'tradables'],]
                     
    //#endregion

    //#region  ExplorationQuest
    let explorationandquestGroup = new L.LayerGroup()
    let explorationandquest = [['Tram Pass',-1743,878,'icon/explorequest/tram_pass.png','',0,'explorationandquest'],
                            ['Lumafly Lantern',-551,1955,'icon/lumafly_lantern.png','',0,'explorationandquest'],
                            ['Collectors Map',-1523,3578,'icon/explorequest/collectors_map.png','<br>Marks the location of all 46 Grubs on any purchased Maps.',0,'explorationandquest'],
                            ['Hunter Mark',-925,1668,'icon/explorequest/hunter_mark.png','',0,'explorationandquest'],
                            ['Delicate Flower',-949,3646,'icon/explorequest/flower.png','<br>Clear Monster First, Donot bench',0,'explorationandquest'],
                            ['Grave of The Traitors Child',-1312,827,'icon/explorequest/grave_marker.png','<br>Delicate Flower Destination',0,'explorationandquest'],
                            ['Godtuner',-1957,2104,'icon/explorequest/godtuner.png','<br>It is dropped by the Godseeker automatically when she is freed from her coffin in the Junk Pit by using a Simple Key.',1,'explorationandquest'],]
    
    //#endregion

    //#region  Keys
    let keysGroup = new L.LayerGroup()
    let keysInfo = [['Simple Key',-563,1979,'icon/simple_key.png','<br> Simple Key: 950 Geo',0,'keys'],
                    ['Elegant Key',-563,1991,'icon/elegant_key.png','<br> Elegant Key: 800 Geo',0,'keys'],
                    ['Love Key',-1479,1347,'icon/love_key.png','',0,'keys'],
                    ['Shopkeeper\'s Key',-494,2808,'icon/shopkeeper_key.png','',0,'keys'],
                    ['City Crest',-846,2143,'icon/city_crest.png','<br>Drop from False Knight',0,'keys'],
                    ['King\'s Brand',-1742,4305,'icon/kings_brand.png','',2,'keys'],]
    //#endregion


    
    const LayerGroupDict = {
      'grub':grubGroup,
      'charms':charmsGroup,
      'boss':bossesGroup,
      'warriorsdreams':warriordreamsGroup,
      'bossvariants':bossvariantsGroup,
      'dreamers':dreamersGroup,
      'notches':notchesGroup,
      'maskshard':maskshardGroup,
      'spellsandabilities':spellsandabilitiesGroup,
      'vesselfragments':vesselfragmentGroup,
      'paleore':paleoreGroup,
      'whisperingroots':whisperingrootsGroup,
      'npc':npcGroup,
      'benchandtransport':benchandtransportGroup,
      'tradables':tradablesGroup,
      'explorationandquest':explorationandquestGroup,
      'keys':keysGroup,
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

    function showhidebossvariants (){
      this.classList.toggle('active')
      map.hasLayer(bossvariantsGroup) === true ? hideMarker(bossvariantsGroup) : showMarker(bossvariantsGroup)
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

    function showhideshortcut (){
      this.classList.toggle('active')
  
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
    const user_info = document.querySelector('.user-details')
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

      const name = document.querySelector('.signup-name')
      const pass = document.querySelector('.signup-password')
      const pass2= document.querySelector('.signup-password2')
      const email= document.querySelector('.signup-email')
      const signup_error = document.querySelector('.signup-error span')
      const signup_success = document.querySelector('.signup-success span')

      let action = 'register'
      let registerinfo = {
        name:name.value,
        password:pass.value,
        password2:pass2.value,
        email:email.value,
      }
      
      axios.post('/HKgitgud-map',{action,registerinfo})
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

      const email = document.querySelector('.login-email')
      const pass = document.querySelector('.login-password')


      login_alert.innerHTML = ''
      let action = 'login'
      let logininfo = {
        email:email.value,
        pass:pass.value
      }

      
      axios.post('/HKgitgud-map',{action,logininfo})
                .then(response => {
                  sessionStorage.setItem('token',response.data.token)

                  login_section.style.display = 'none';
                  user_info.removeAttribute('style')
                  clearAllInput()
                })
                .catch(error => {
                  console.log(error)
                  login_alert.innerHTML = error.response.data.msg
                  
                });    
      })

      const token = this.sessionStorage.getItem('token')
      if(token){
        login_section.style.display = 'none';
        user_info.removeAttribute('style')
      }
      else{
        login_section.style.display = 'block';
        user_info.setAttribute('style', 'display: none;');
      }


    logoutbtn.addEventListener('click',function(e){
      e.preventDefault()
      login_section.style.display = 'block';
      user_info.setAttribute('style', 'display: none;');
      sessionStorage.removeItem('token')
    })

    //#endregion

    //#region  UPLOADING IMAGE
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
          crs.unproject(L.point(mapExtent[0] -500,mapExtent[1]-500)),
          crs.unproject(L.point(mapExtent[2]+500, mapExtent[3]+500))
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
      createMarkers(grubInfo,[32,32],grubGroup)
      grubGroup.addTo(map)
      

      // createMarkers(charmsInfo,[22,22],charmsGroup)
      // charmsGroup.addTo(map)
      

      // createMarkers(warriordreamInfo,[25,25],warriordreamsGroup)
      // warriordreamsGroup.addTo(map)
      

      // createMarkers(bossesInfo,[32,32],bossesGroup)
      // bossesGroup.addTo(map)
      

      // createMarkers(bossvariants,[32,32],bossvariantsGroup)
      // bossvariantsGroup.addTo(map)


      // createMarkers(dreamersInfo,[32,32],dreamersGroup)
      // dreamersGroup.addTo(map)


      // createMarkers(notchesInfo,[22,22],notchesGroup)
      // notchesGroup.addTo(map)


      // createMarkers(spellsandabilitiesInfo,[25,25],spellsandabilitiesGroup)
      // spellsandabilitiesGroup.addTo(map)


      // createMarkers(maskshardInfo,[25,25],maskshardGroup)
      // maskshardGroup.addTo(map)


      // createMarkers(vesselfragmentInfo,[24,20],vesselfragmentGroup)
      // vesselfragmentGroup.addTo(map)
      

      // createMarkers(paleoreInfo,[22,22],paleoreGroup)
      // paleoreGroup.addTo(map)


      // createMarkers(whisperingrootsInfo,[30,30],whisperingrootsGroup)
      // whisperingrootsGroup.addTo(map)


      // createMarkers(npcInfo,[28,28],npcGroup)
      // npcGroup.addTo(map)


      // createMarkers(benchInfo,[30,20],benchandtransportGroup)
      // benchandtransportGroup.addTo(map)
    

      // createMarkers(stagInfo,[30,25],benchandtransportGroup)
      // benchandtransportGroup.addTo(map)


      // createMarkers(tramInfo,[27,27],benchandtransportGroup)
      // benchandtransportGroup.addTo(map)


      // createMarkers(explorationandquest,[25,25],explorationandquestGroup)
      // explorationandquestGroup.addTo(map)


      // createMarkers(keysInfo,[25,25],keysGroup)
      // keysGroup.addTo(map)


      // createMarkers(tradablesInfo,[20,23],tradablesGroup)
      // tradablesGroup.addTo(map)


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
        hideMarker(bossvariantsGroup)
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
      }

      function showAllMarkers(){
        showMarker(grubGroup)
        showMarker(charmsGroup)
        showMarker(bossesGroup)
        showMarker(warriordreamsGroup) 
        showMarker(bossvariantsGroup)
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
            iconUrl:markerInfo[i][3],
            iconSize:iconSize,
          });
      
          var Marker = L.marker([markerInfo[i][1],markerInfo[i][2]],
            {icon:Icon,
              opacity:1,
              id:id,
              title:markerInfo[i][0],
              description:markerInfo[i][4],
              completion:markerInfo[i][5],
              category:markerInfo[i][6],
            })

          id+=1
          

          var Foundpopup = `<br><button id='MarkFoundButton'> Mark Found</button>`;
          var NotFoundpopup = `<br><button id='MarkFoundButton'> Mark As Not Found</button>`
          Marker.bindPopup(Marker.options.title + Marker.options.description + Foundpopup,{maxHeight:250});
          var popupContent
          Marker.on("popupopen",function(e){
            var marker = e.target
            currentMarkerID = marker.options.id
            console.log('CurrentMarkerID: '+currentMarkerID)
            getComments(currentMarkerID)

            var button = document.getElementById('MarkFoundButton')
            button.addEventListener('click',function(){
              var opacity = marker.options.opacity;


              let markerINFO = {
                id: marker.options.id,
                title: marker.options.title,
                description: marker.options.description,
                completion: marker.options.completion,
                category: marker.options.category,
                isHidden:opacity==1? true : false
              }

              const token = sessionStorage.getItem('token')
              axios.put('/HKgitgud-map',{markerINFO,token})
                .then(response => {
                  console.log(response.data);
                })
                .catch(error => {
                  console.log(error);
                });

              if(marker.options.opacity===1){
                foundMarkersGroup.addLayer(marker)
              }
              else{
                foundMarkersGroup.removeLayer(marker)
                LayerGroupDict[marker.options.category].addLayer(marker)
              }
              

              marker.setOpacity(opacity===1? 0.5:1)
              marker.closePopup();
      
              var title = marker.options.title;
              var desc = marker.options.description;
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
        }
      }

      function mapview(x,y,zoom){
        map.setView([x,y],zoom)
      }

      function removeAllFoundMarkerFromTheirLayerGroup(foundmarker){
        foundmarker.eachLayer(marker => {
          LayerGroupDict[marker.options.category].removeLayer(marker)
        })
      }

      function AddAllFoundMarkerFromTheirLayerGroup(foundmarker){
        foundmarker.eachLayer(marker => {
          LayerGroupDict[marker.options.category].addLayer(marker)
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
        if(alert.style.display !== "none"){
          alert.style.display = "none"
          commentForm.removeAttribute("style")
        }
        axios.get('/HKgitgud-map',{params:{currentMarkerID}})
        .then(response=>{
          console.log(response)
        })
        .catch(error=>{
          console.log(error)
        })

  


      }
      
});













