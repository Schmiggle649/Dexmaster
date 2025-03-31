This project was made using a PostgreSQL database. If you would like to use this project and database, you can use the PostgreSQL database dump I've pasted below.

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2025-03-31 12:19:17

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16586)
-- Name: pokedex; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokedex (
    id integer NOT NULL,
    entry text NOT NULL,
    pokemon_id integer NOT NULL
);


ALTER TABLE public.pokedex OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16585)
-- Name: pokedex_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pokedex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pokedex_id_seq OWNER TO postgres;

--
-- TOC entry 3340 (class 0 OID 0)
-- Dependencies: 216
-- Name: pokedex_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pokedex_id_seq OWNED BY public.pokedex.id;


--
-- TOC entry 215 (class 1259 OID 16561)
-- Name: pokemon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon (
    id integer NOT NULL,
    pokemon text NOT NULL
);


ALTER TABLE public.pokemon OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16560)
-- Name: pokemon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pokemon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pokemon_id_seq OWNER TO postgres;

--
-- TOC entry 3341 (class 0 OID 0)
-- Dependencies: 214
-- Name: pokemon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pokemon_id_seq OWNED BY public.pokemon.id;


--
-- TOC entry 3179 (class 2604 OID 16589)
-- Name: pokedex id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokedex ALTER COLUMN id SET DEFAULT nextval('public.pokedex_id_seq'::regclass);


--
-- TOC entry 3178 (class 2604 OID 16564)
-- Name: pokemon id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon ALTER COLUMN id SET DEFAULT nextval('public.pokemon_id_seq'::regclass);


--
-- TOC entry 3334 (class 0 OID 16586)
-- Dependencies: 217
-- Data for Name: pokedex; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (1, 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.', 1);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (2, 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.', 2);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (3, 'The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.', 3);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (4, 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.', 4);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (5, 'When it swings its burning tail, it elevates the temperature to unbearably high levels.', 5);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (6, 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.', 6);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (7, 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.', 7);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (8, 'Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.', 8);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (9, 'A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.', 9);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (10, 'Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.', 10);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (11, 'This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body.', 11);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (12, 'In battle, it flaps its wings at high speed to release highly toxic dust into the air.', 12);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (13, 'Often found in forests, eating leaves. It has a sharp venomous stinger on its head.', 13);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (14, 'Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators.', 14);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (15, 'Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.', 15);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (16, 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.', 16);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (17, 'Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.', 17);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (18, 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.', 18);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (19, 'Bites anything when it attacks. Small and very quick, it is a common sight in many places.', 19);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (20, 'It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.', 20);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (21, 'Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.', 21);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (22, 'With its huge and magnificent wings, it can keep aloft without ever having to land for rest.', 22);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (23, 'Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole.', 23);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (24, 'It is rumored that the ferocious warning markings on its belly differ from area to area.', 24);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (25, 'When several of these Pokémon gather, their electricity could build and cause lightning storms.', 25);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (26, 'Its long tail serves as a ground to protect itself from its own high voltage power.', 26);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (27, 'Burrows deep underground in arid locations far from water. It only emerges to hunt for food.', 27);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (28, 'Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.', 28);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (29, 'Although small, its venomous barbs render this Pokémon dangerous. The female has smaller horns.', 29);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (30, 'The female''s horn develops slowly. Prefers physical attacks such as clawing and biting.', 30);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (31, 'Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.', 31);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (32, 'Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.', 32);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (33, 'An aggressive Pokémon that is quick to attack. The horn on its head secretes a powerful venom.', 33);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (34, 'It uses its powerful tail in battle to smash, constrict, then break the prey''s bones.', 34);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (35, 'Its magical and cute appeal has many admirers. It is rare and found only in certain areas.', 35);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (36, 'A timid fairy Pokémon that is rarely seen. It will run and hide the moment it senses people.', 36);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (37, 'At the time of birth, it has just one tail. The tail splits from its tip as it grows older.', 37);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (38, 'Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.', 38);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (39, 'When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.', 39);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (40, 'The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.', 40);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (41, 'Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.', 41);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (42, 'Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.', 42);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (43, 'During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.', 43);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (44, 'The fluid that oozes from its mouth isn''t drool. It is a nectar that is used to attract prey.', 44);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (45, 'The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.', 45);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (46, 'Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.', 46);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (47, 'A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.', 47);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (48, 'Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.', 48);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (49, 'The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.', 49);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (50, 'Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.', 50);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (51, 'A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.', 51);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (52, 'Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.', 52);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (53, 'Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.', 53);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (54, 'While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers.', 54);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (55, 'Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.', 55);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (56, 'Extremely quick to anger. It could be docile one moment then thrashing away the next instant.', 56);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (57, 'Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.', 57);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (58, 'Very protective of its territory. It will bark and bite to repel intruders from its space.', 58);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (59, 'A Pokémon that has been admired since the past for its beauty. It runs agilely as if on wings.', 59);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (60, 'Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.', 60);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (61, 'Capable of living in or out of water. When out of water, it sweats to keep its body slimy.', 61);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (62, 'An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.', 62);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (63, 'Using its ability to read minds, it will identify impending danger and Teleport to safety.', 63);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (64, 'It emits special alpha waves from its body that induce headaches just by being close by.', 64);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (65, 'Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000.', 65);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (66, 'Loves to build its muscles. It trains in all styles of martial arts to become even stronger.', 66);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (67, 'Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.', 67);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (68, 'Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.', 68);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (69, 'A carnivorous Pokémon that traps and eats bugs. It uses its root feet to soak up needed moisture.', 69);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (70, 'It spits out PoisonPowder to immobilize the enemy and then finishes it with a spray of Acid.', 70);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (71, 'Said to live in huge colonies deep in jungles, although no one has ever returned from there.', 71);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (72, 'Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.', 72);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (73, 'The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.', 73);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (74, 'Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.', 74);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (75, 'Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.', 75);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (76, 'Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.', 76);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (77, 'Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.', 77);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (78, 'Very competitive, this Pokémon will chase anything that moves fast in the hopes of racing it.', 78);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (79, 'Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.', 79);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (80, 'The Shellder that is latched onto Slowpoke''s tail is said to feed on the host''s left over scraps.', 80);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (81, 'Uses anti-gravity to stay suspended. Appears without warning and uses Thunder Wave and similar moves.', 81);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (82, 'Formed by several Magnemites linked together. They frequently appear when sunspots flare up.', 82);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (83, 'The sprig of green onions it holds is its weapon. It is used much like a metal sword.', 83);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (84, 'A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.', 84);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (85, 'Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.', 85);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (86, 'The protruding horn on its head is very hard. It is used for bashing through thick ice.', 86);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (87, 'Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.', 87);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (88, 'Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.', 88);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (89, 'Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.', 89);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (90, 'Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.', 90);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (91, 'When attacked, it launches its horns in quick volleys. Its innards have never been seen.', 91);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (92, 'Almost invisible, this gaseous Pokémon cloaks the target and puts it to sleep without notice.', 92);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (93, 'Because of its ability to slip through block walls, it is said to be from another dimension.', 93);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (94, 'Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.', 94);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (95, 'As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.', 95);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (96, 'Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.', 96);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (97, 'When it locks eyes with an enemy, it will use a mix of PSI moves such as Hypnosis and Confusion.', 97);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (98, 'Its pincers are not only powerful weapons, they are used for balance when walking sideways.', 98);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (99, 'The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.', 99);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (100, 'Usually found in power plants. Easily mistaken for a Poké Ball, they have zapped many people.', 100);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (101, 'It stores electric energy under very high pressure. It often explodes with little or no provocation.', 101);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (102, 'Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.', 102);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (103, 'Legend has it that on rare occasions, one of its heads will drop off and continue on as an Exeggcute.', 103);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (104, 'Because it never removes its skull helmet, no one has ever seen this Pokémon''s real face.', 104);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (105, 'The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.', 105);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (106, 'When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides.', 106);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (107, 'While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.', 107);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (108, 'Its tongue can be extended like a chameleon''s. It leaves a tingling sensation when it licks enemies.', 108);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (109, 'Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.', 109);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (110, 'Where two kinds of poison gases meet, 2 Koffings can fuse into a ___ over many years.', 110);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (111, 'Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying.', 111);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (112, 'Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.', 112);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (113, 'A rare and elusive Pokémon that is said to bring happiness to those who manage to get it.', 113);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (114, 'The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks.', 114);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (115, 'The infant rarely ventures out of its mother''s protective pouch until it is 3 years old.', 115);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (116, 'Known to shoot down flying bugs with precision blasts of ink from the surface of the water.', 116);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (117, 'Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail.', 117);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (118, 'Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen.', 118);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (119, 'In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks.', 119);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (120, 'An enigmatic Pokémon that can effortlessly regenerate any appendage it loses in battle.', 120);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (121, 'Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.', 121);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (122, 'If interrupted while it is miming, it will slap around the offender with its broad hands.', 122);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (123, 'With ninja-like agility and speed, it can create the illusion that there is more than one.', 123);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (124, 'It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.', 124);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (125, 'Normally found near power plants, they can wander away and cause major blackouts in cities.', 125);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (126, 'Its body always burns with an orange glow that enables it to hide perfectly among flames.', 126);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (127, 'If it fails to crush the victim in its pincers, it will swing it around and toss it hard.', 127);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (128, 'When it targets an enemy, it charges furiously while whipping its body with its long tails.', 128);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (129, 'In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.', 129);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (130, 'Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.', 130);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (131, 'A Pokémon that has been overhunted almost to extinction. It can ferry people across the water.', 131);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (132, 'Capable of copying an enemy''s genetic code to instantly transform itself into a duplicate of the enemy.', 132);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (133, 'Its genetic code is irregular. It may mutate if it is exposed to radiation from element Stones.', 133);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (134, 'Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid''s.', 134);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (135, 'It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts.', 135);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (136, 'When storing thermal energy in its body, its temperature could soar to over 1600 degrees.', 136);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (137, 'A Pokémon that consists entirely of programming code. Capable of moving freely in cyberspace.', 137);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (138, 'Although long extinct, in rare cases, it can be genetically resurrected from fossils.', 138);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (139, 'A prehistoric Pokémon that died out when its heavy shell made it impossible to catch prey.', 139);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (140, 'A Pokémon that was resurrected from a fossil found in what was once the ocean floor eons ago.', 140);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (141, 'Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids.', 141);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (142, 'A ferocious, prehistoric Pokémon that goes for the enemy''s throat with its serrated saw-like fangs.', 142);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (143, 'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.', 143);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (144, 'A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.', 144);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (145, 'A legendary bird Pokémon that is said to appear from clouds while dropping enormous lightning bolts.', 145);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (146, 'Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.', 146);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (147, 'Long considered a mythical Pokémon until recently when a small colony was found living underwater.', 147);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (148, 'A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions.', 148);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (149, 'An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.', 149);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (150, 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.', 150);
INSERT INTO public.pokedex (id, entry, pokemon_id) VALUES (151, 'So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.', 151);


--
-- TOC entry 3332 (class 0 OID 16561)
-- Dependencies: 215
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.pokemon (id, pokemon) VALUES (1, 'Bulbasaur');
INSERT INTO public.pokemon (id, pokemon) VALUES (2, 'Ivysaur');
INSERT INTO public.pokemon (id, pokemon) VALUES (3, 'Venusaur');
INSERT INTO public.pokemon (id, pokemon) VALUES (4, 'Charmander');
INSERT INTO public.pokemon (id, pokemon) VALUES (5, 'Charmeleon');
INSERT INTO public.pokemon (id, pokemon) VALUES (6, 'Charizard');
INSERT INTO public.pokemon (id, pokemon) VALUES (7, 'Squirtle');
INSERT INTO public.pokemon (id, pokemon) VALUES (8, 'Wartortle');
INSERT INTO public.pokemon (id, pokemon) VALUES (9, 'Blastoise');
INSERT INTO public.pokemon (id, pokemon) VALUES (10, 'Caterpie');
INSERT INTO public.pokemon (id, pokemon) VALUES (11, 'Metapod');
INSERT INTO public.pokemon (id, pokemon) VALUES (12, 'Butterfree');
INSERT INTO public.pokemon (id, pokemon) VALUES (13, 'Weedle');
INSERT INTO public.pokemon (id, pokemon) VALUES (14, 'Kakuna');
INSERT INTO public.pokemon (id, pokemon) VALUES (15, 'Beedrill');
INSERT INTO public.pokemon (id, pokemon) VALUES (16, 'Pidgey');
INSERT INTO public.pokemon (id, pokemon) VALUES (17, 'Pidgeotto');
INSERT INTO public.pokemon (id, pokemon) VALUES (18, 'Pidgeot');
INSERT INTO public.pokemon (id, pokemon) VALUES (19, 'Rattata');
INSERT INTO public.pokemon (id, pokemon) VALUES (20, 'Raticate');
INSERT INTO public.pokemon (id, pokemon) VALUES (21, 'Spearow');
INSERT INTO public.pokemon (id, pokemon) VALUES (22, 'Fearow');
INSERT INTO public.pokemon (id, pokemon) VALUES (23, 'Ekans');
INSERT INTO public.pokemon (id, pokemon) VALUES (24, 'Arbok');
INSERT INTO public.pokemon (id, pokemon) VALUES (25, 'Pikachu');
INSERT INTO public.pokemon (id, pokemon) VALUES (26, 'Raichu');
INSERT INTO public.pokemon (id, pokemon) VALUES (27, 'Sandshrew');
INSERT INTO public.pokemon (id, pokemon) VALUES (28, 'Sandslash');
INSERT INTO public.pokemon (id, pokemon) VALUES (29, 'NidoranF');
INSERT INTO public.pokemon (id, pokemon) VALUES (30, 'Nidorina');
INSERT INTO public.pokemon (id, pokemon) VALUES (31, 'Nidoqueen');
INSERT INTO public.pokemon (id, pokemon) VALUES (32, 'NidoranM');
INSERT INTO public.pokemon (id, pokemon) VALUES (33, 'Nidorino');
INSERT INTO public.pokemon (id, pokemon) VALUES (34, 'Nidoking');
INSERT INTO public.pokemon (id, pokemon) VALUES (35, 'Clefairy');
INSERT INTO public.pokemon (id, pokemon) VALUES (36, 'Clefable');
INSERT INTO public.pokemon (id, pokemon) VALUES (37, 'Vulpix');
INSERT INTO public.pokemon (id, pokemon) VALUES (38, 'Ninetales');
INSERT INTO public.pokemon (id, pokemon) VALUES (39, 'Jigglypuff');
INSERT INTO public.pokemon (id, pokemon) VALUES (40, 'Wigglytuff');
INSERT INTO public.pokemon (id, pokemon) VALUES (41, 'Zubat');
INSERT INTO public.pokemon (id, pokemon) VALUES (42, 'Golbat');
INSERT INTO public.pokemon (id, pokemon) VALUES (43, 'Oddish');
INSERT INTO public.pokemon (id, pokemon) VALUES (44, 'Gloom');
INSERT INTO public.pokemon (id, pokemon) VALUES (45, 'Vileplume');
INSERT INTO public.pokemon (id, pokemon) VALUES (46, 'Paras');
INSERT INTO public.pokemon (id, pokemon) VALUES (47, 'Parasect');
INSERT INTO public.pokemon (id, pokemon) VALUES (48, 'Venonat');
INSERT INTO public.pokemon (id, pokemon) VALUES (49, 'Venomoth');
INSERT INTO public.pokemon (id, pokemon) VALUES (50, 'Diglett');
INSERT INTO public.pokemon (id, pokemon) VALUES (51, 'Dugtrio');
INSERT INTO public.pokemon (id, pokemon) VALUES (52, 'Meowth');
INSERT INTO public.pokemon (id, pokemon) VALUES (53, 'Persian');
INSERT INTO public.pokemon (id, pokemon) VALUES (54, 'Psyduck');
INSERT INTO public.pokemon (id, pokemon) VALUES (55, 'Golduck');
INSERT INTO public.pokemon (id, pokemon) VALUES (56, 'Mankey');
INSERT INTO public.pokemon (id, pokemon) VALUES (57, 'Primeape');
INSERT INTO public.pokemon (id, pokemon) VALUES (58, 'Growlithe');
INSERT INTO public.pokemon (id, pokemon) VALUES (59, 'Arcanine');
INSERT INTO public.pokemon (id, pokemon) VALUES (60, 'Poliwag');
INSERT INTO public.pokemon (id, pokemon) VALUES (61, 'Poliwhirl');
INSERT INTO public.pokemon (id, pokemon) VALUES (62, 'Poliwrath');
INSERT INTO public.pokemon (id, pokemon) VALUES (63, 'Abra');
INSERT INTO public.pokemon (id, pokemon) VALUES (64, 'Kadabra');
INSERT INTO public.pokemon (id, pokemon) VALUES (65, 'Alakazam');
INSERT INTO public.pokemon (id, pokemon) VALUES (66, 'Machop');
INSERT INTO public.pokemon (id, pokemon) VALUES (67, 'Machoke');
INSERT INTO public.pokemon (id, pokemon) VALUES (68, 'Machamp');
INSERT INTO public.pokemon (id, pokemon) VALUES (69, 'Bellsprout');
INSERT INTO public.pokemon (id, pokemon) VALUES (70, 'Weepinbell');
INSERT INTO public.pokemon (id, pokemon) VALUES (71, 'Victreebel');
INSERT INTO public.pokemon (id, pokemon) VALUES (72, 'Tentacool');
INSERT INTO public.pokemon (id, pokemon) VALUES (73, 'Tentacruel');
INSERT INTO public.pokemon (id, pokemon) VALUES (74, 'Geodude');
INSERT INTO public.pokemon (id, pokemon) VALUES (75, 'Graveler');
INSERT INTO public.pokemon (id, pokemon) VALUES (76, 'Golem');
INSERT INTO public.pokemon (id, pokemon) VALUES (77, 'Ponyta');
INSERT INTO public.pokemon (id, pokemon) VALUES (78, 'Rapidash');
INSERT INTO public.pokemon (id, pokemon) VALUES (79, 'Slowpoke');
INSERT INTO public.pokemon (id, pokemon) VALUES (80, 'Slowbro');
INSERT INTO public.pokemon (id, pokemon) VALUES (81, 'Magnemite');
INSERT INTO public.pokemon (id, pokemon) VALUES (82, 'Magneton');
INSERT INTO public.pokemon (id, pokemon) VALUES (83, 'Farfetch''d');
INSERT INTO public.pokemon (id, pokemon) VALUES (84, 'Doduo');
INSERT INTO public.pokemon (id, pokemon) VALUES (85, 'Dodrio');
INSERT INTO public.pokemon (id, pokemon) VALUES (86, 'Seel');
INSERT INTO public.pokemon (id, pokemon) VALUES (87, 'Dewgong');
INSERT INTO public.pokemon (id, pokemon) VALUES (88, 'Grimer');
INSERT INTO public.pokemon (id, pokemon) VALUES (89, 'Muk');
INSERT INTO public.pokemon (id, pokemon) VALUES (90, 'Shellder');
INSERT INTO public.pokemon (id, pokemon) VALUES (91, 'Cloyster');
INSERT INTO public.pokemon (id, pokemon) VALUES (92, 'Gastly');
INSERT INTO public.pokemon (id, pokemon) VALUES (93, 'Haunter');
INSERT INTO public.pokemon (id, pokemon) VALUES (94, 'Gengar');
INSERT INTO public.pokemon (id, pokemon) VALUES (95, 'Onix');
INSERT INTO public.pokemon (id, pokemon) VALUES (96, 'Drowzee');
INSERT INTO public.pokemon (id, pokemon) VALUES (97, 'Hypno');
INSERT INTO public.pokemon (id, pokemon) VALUES (98, 'Krabby');
INSERT INTO public.pokemon (id, pokemon) VALUES (99, 'Kingler');
INSERT INTO public.pokemon (id, pokemon) VALUES (100, 'Voltorb');
INSERT INTO public.pokemon (id, pokemon) VALUES (101, 'Electrode');
INSERT INTO public.pokemon (id, pokemon) VALUES (102, 'Exeggcute');
INSERT INTO public.pokemon (id, pokemon) VALUES (103, 'Exeggutor');
INSERT INTO public.pokemon (id, pokemon) VALUES (104, 'Cubone');
INSERT INTO public.pokemon (id, pokemon) VALUES (105, 'Marowak');
INSERT INTO public.pokemon (id, pokemon) VALUES (106, 'Hitmonlee');
INSERT INTO public.pokemon (id, pokemon) VALUES (107, 'Hitmonchan');
INSERT INTO public.pokemon (id, pokemon) VALUES (108, 'Lickitung');
INSERT INTO public.pokemon (id, pokemon) VALUES (109, 'Koffing');
INSERT INTO public.pokemon (id, pokemon) VALUES (110, 'Weezing');
INSERT INTO public.pokemon (id, pokemon) VALUES (111, 'Rhyhorn');
INSERT INTO public.pokemon (id, pokemon) VALUES (112, 'Rhydon');
INSERT INTO public.pokemon (id, pokemon) VALUES (113, 'Chansey');
INSERT INTO public.pokemon (id, pokemon) VALUES (114, 'Tangela');
INSERT INTO public.pokemon (id, pokemon) VALUES (115, 'Kangaskhan');
INSERT INTO public.pokemon (id, pokemon) VALUES (116, 'Horsea');
INSERT INTO public.pokemon (id, pokemon) VALUES (117, 'Seadra');
INSERT INTO public.pokemon (id, pokemon) VALUES (118, 'Goldeen');
INSERT INTO public.pokemon (id, pokemon) VALUES (119, 'Seaking');
INSERT INTO public.pokemon (id, pokemon) VALUES (120, 'Staryu');
INSERT INTO public.pokemon (id, pokemon) VALUES (121, 'Starmie');
INSERT INTO public.pokemon (id, pokemon) VALUES (122, 'Mr. Mime');
INSERT INTO public.pokemon (id, pokemon) VALUES (123, 'Scyther');
INSERT INTO public.pokemon (id, pokemon) VALUES (124, 'Jynx');
INSERT INTO public.pokemon (id, pokemon) VALUES (125, 'Electabuzz');
INSERT INTO public.pokemon (id, pokemon) VALUES (126, 'Magmar');
INSERT INTO public.pokemon (id, pokemon) VALUES (127, 'Pinsir');
INSERT INTO public.pokemon (id, pokemon) VALUES (128, 'Tauros');
INSERT INTO public.pokemon (id, pokemon) VALUES (129, 'Magikarp');
INSERT INTO public.pokemon (id, pokemon) VALUES (130, 'Gyarados');
INSERT INTO public.pokemon (id, pokemon) VALUES (131, 'Lapras');
INSERT INTO public.pokemon (id, pokemon) VALUES (132, 'Ditto');
INSERT INTO public.pokemon (id, pokemon) VALUES (133, 'Eevee');
INSERT INTO public.pokemon (id, pokemon) VALUES (134, 'Vaporeon');
INSERT INTO public.pokemon (id, pokemon) VALUES (135, 'Jolteon');
INSERT INTO public.pokemon (id, pokemon) VALUES (136, 'Flareon');
INSERT INTO public.pokemon (id, pokemon) VALUES (137, 'Porygon');
INSERT INTO public.pokemon (id, pokemon) VALUES (138, 'Omanyte');
INSERT INTO public.pokemon (id, pokemon) VALUES (139, 'Omastar');
INSERT INTO public.pokemon (id, pokemon) VALUES (140, 'Kabuto');
INSERT INTO public.pokemon (id, pokemon) VALUES (141, 'Kabutops');
INSERT INTO public.pokemon (id, pokemon) VALUES (142, 'Aerodactyl');
INSERT INTO public.pokemon (id, pokemon) VALUES (143, 'Snorlax');
INSERT INTO public.pokemon (id, pokemon) VALUES (144, 'Articuno');
INSERT INTO public.pokemon (id, pokemon) VALUES (145, 'Zapdos');
INSERT INTO public.pokemon (id, pokemon) VALUES (146, 'Moltres');
INSERT INTO public.pokemon (id, pokemon) VALUES (147, 'Dratini');
INSERT INTO public.pokemon (id, pokemon) VALUES (148, 'Dragonair');
INSERT INTO public.pokemon (id, pokemon) VALUES (149, 'Dragonite');
INSERT INTO public.pokemon (id, pokemon) VALUES (150, 'Mewtwo');
INSERT INTO public.pokemon (id, pokemon) VALUES (151, 'Mew');


--
-- TOC entry 3342 (class 0 OID 0)
-- Dependencies: 216
-- Name: pokedex_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pokedex_id_seq', 151, true);


--
-- TOC entry 3343 (class 0 OID 0)
-- Dependencies: 214
-- Name: pokemon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pokemon_id_seq', 151, true);


--
-- TOC entry 3185 (class 2606 OID 16595)
-- Name: pokedex pokedex_entry_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokedex
    ADD CONSTRAINT pokedex_entry_key UNIQUE (entry);


--
-- TOC entry 3187 (class 2606 OID 16593)
-- Name: pokedex pokedex_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokedex
    ADD CONSTRAINT pokedex_pkey PRIMARY KEY (id);


--
-- TOC entry 3181 (class 2606 OID 16568)
-- Name: pokemon pokemon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_pkey PRIMARY KEY (id);


--
-- TOC entry 3183 (class 2606 OID 16570)
-- Name: pokemon pokemon_pokemon_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_pokemon_key UNIQUE (pokemon);


--
-- TOC entry 3188 (class 2606 OID 16596)
-- Name: pokedex pokedex_pokemon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokedex
    ADD CONSTRAINT pokedex_pokemon_id_fkey FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


-- Completed on 2025-03-31 12:19:17

--
-- PostgreSQL database dump complete
--

