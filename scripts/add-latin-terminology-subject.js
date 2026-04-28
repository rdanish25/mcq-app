// Adds a new subject `latin_terminology` to public/data/mcq-data.json
// Run from project root with: node scripts/add-latin-terminology-subject.js

import fs from 'fs';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;
const DATA_PATH = path.join(__dirname, '..', 'public', 'data', 'mcq-data.json');

// Source pasted by user. Correct answer is always option A (first option column).
const input = String.raw`Osiyo Xalqaro Universiteti “Xalqaro talabalar” fakulteti
MBBS yo‘nalishi “Lotin tili va tibbiy terminologiya” fanidan yakuniy nazorat test savollari
Mas’ul: f.f.f.d. (PhD), professor v.b. Djalilova Z.O.

№	Questions	A	B	C	D
1	The Greek term element meaning “liver” is:	hepat-	gastr-	nephr-	splen-
2	The Greek term element meaning “stomach” is:	gastr-	enter-	col-	proct-
3	The suffix -logia means:	study of	pain	tumor	incision
4	The prefix peri- means:	around	within	under	against
5	The Greek term element meaning “nerve” is:	neur-	myel-	oste-	chondr-
6	The suffix -oma usually denotes:	tumor	inflammation	paralysis	incision
7	The Greek term element meaning “bone” is:	oste-	odont-	arthr-	cephal-
8	The prefix hyper- means:	above normal, excessive	below normal	inside	without
9	The suffix -scopia means:	visual examination	surgical removal	fixation	suture
10	The Greek term element meaning “lung” is:	pneum-	thorac-	mening-	laryng-
11	The suffix -ptosis means:	prolapse, downward displacement	rupture	enlargement	bleeding
1213	The Greek term element meaning “muscle” is:	my-	myel-	neur-	angi-
14	The prefix inter- means:	between	under	above	outside
15	The suffix -rrhoea means:	flow, discharge	bleeding	rupture	pain
16	The Greek term element meaning “brain” is:	encephal-	cephal-	neur-	psych-
17	The suffix -plasty means:	surgical repair	removal	incision	destruction
18	The Greek term element meaning “vein” is:	phleb-	angi-	arteri-	haemat-
19	The prefix sub- means:	under	around	above	within
20	The suffix -centesis means:	surgical puncture	incision	fixation	excision
21	The Greek term element meaning “spleen” is:	splen-	hepat-	gastr-	enter-
22	The suffix -lysis means:	dissolution, destruction	inflammation	tumor	pain
23	The Greek term element meaning “uterus” is:	hyster-	colp-	salping-	cyst-
24	The prefix retro- means:	behind, backward	forward	inside	between
25	The suffix -megaly means:	enlargement	rupture	pain	discharge
26	The Greek term element meaning “bladder” is:	cyst-	nephr-	pyel-	ur-
27	The suffix -raphy means:	suture	removal	incision	fixation
28	The Greek term element meaning “tongue” is:	gloss-	stomat-	cheil-	odont-
29	The prefix intra- means:	within	outside	around	under
30	The suffix -genesis means:	origin, formation	rupture	tumor	inflammation
31	The Greek term element meaning “cartilage” is:	chondr-	oste-	myel-	neur-
32	The Greek term element meaning “artery” is:	arteri-	phleb-	angi-	haem-
33	The suffix -pathy means:	disease	pain	tumor	incision
34	The Greek term element meaning “eye” is:	ophthalm-	ot-	rhin-	stomat-
35	The prefix para- means:	near, beside	above	under	inside
36	The suffix -plegia means:	paralysis	rupture	discharge	inflammation
37	The Greek term element meaning “ear” is:	ot-	ophthalm-	laryng-	gloss-
38	The prefix post- means:	after, behind	before	inside	around
39	The suffix -stasis means:	stopping, stagnation	flow	rupture	enlargement
40	The Greek term element meaning “nose” is:	rhin-	ot-	phleb-	pneum-
41	The suffix -tomy means:	incision	removal	fixation	suture
42	The Greek term element meaning “tooth” is:	odont-	oste-	gloss-	cheil-
43	The prefix anti- means:	against	within	below	around
44	The suffix -aemia means:	blood condition	inflammation	tumor	pain
45	The Greek term element meaning “gland” is:	aden-	cyst-	mast-	chondr-
46	The prefix extra- means:	outside	inside	above	between
47	The suffix -ectasis means:	dilation, expansion	rupture	pain	discharge
48	The Greek term element meaning “cell” is:	cyt-	haem-	glyc-	lip-
49	The suffix -penia means:	deficiency	excess	inflammation	enlargement
50	The Greek term element meaning “fat” is:	lip-	leuc-	eryth-	py-
51	The prefix contra- means:	against	within	below	after
52	The suffix -rrhexis means:	rupture	bleeding	discharge	tumor
53	The Greek term element meaning “red” is:	erythr-	leuc-	melan-	chlor-
54	The suffix -phobia means:	fear	pain	tumor	disease
55	The Greek term element meaning “black” is:	melan-	erythr-	leuc-	cyan-
56	The prefix pre- means:	before	after	inside	around
57	The suffix -philia means:	attraction, affinity	deficiency	inflammation	paralysis
58	The Greek term element meaning “stone” is:	lith-	cyst-	aden-	mast-
59	The suffix -osis usually indicates:	pathological condition	incision	removal	bleeding
60	The Greek term element meaning “milk” is:	galact-	dacry-	chole-	colp-
61	The prefix endo- means:	within, inside	outside	above	around
62	The Latin word “Recipe” means:	Take	Mix	Give	Write
63	The abbreviation Rp. stands for:	Recipe	Repetatur	Reporta	Remedia
64	The phrase Misce, fiat pulvis means:	Mix to make a powder	Mix and give	Let it be mixed	Make a solution
65	The phrase Da tales doses numero X means:	Give such doses in number X	Mix ten doses	Give one dose	Sign ten doses
66	The phrase Misce. Da. Signa. means:	Mix. Give. Label.	Take. Write. Sign.	Prepare and inject	Divide and send
67	The word Signa in a prescription means:	Label (write instructions)	Mix	Give	Take
68	The word Da in a prescription means:	Give	Mix	Write	Repeat
69	The word Misce in a prescription means:	Mix	Give	Write	Repeat
70	The phrase Fiat unguentum means:	Let an ointment be made	Give ointment	Mix ointment	Write ointment
71	The phrase Fiant suppositoria means:	Let suppositories be made	Give suppositories	Mix suppositories	Label suppositories
72	The Latin term for “tablet” is:	tabuletta	capsula	solutio	species
73	The Latin term for “solution” is:	solutio	tinctura	extractum	unguentum
74	The Latin term for “ointment” is:	unguentum	solutio	tabuletta	pulvis
75	The Latin term for “powder” is:	pulvis	solutio	capsula	extractum
76	The Latin term for “capsule” is:	capsula	tabuletta	solutio	tinctura
77	The phrase in capsulis gelatinosis means:	in gelatin capsules	in coated tablets	in glass ampoules	in powders
78	The phrase in tabulettis obductis means:	in coated tablets	in capsules	in solution	in powder
79	The word gutta, ae f means:	drop	gram	dose	tablet
80	In prescriptions, drops are written with:	Roman numerals and the word “guttas”	Arabic numerals only	letters only	no numbers
81	The Latin term for “extract” is:	extractum	tinctura	solutio	pulvis
82	The Latin term for “tincture” is:	tinctura	extractum	capsula	tabuletta
83	The Latin word species in pharmacy means:	herbal mixture	tablet	solution	injection
84	The phrase Misce, fiat solutio means:	Mix to make a solution	Give the solution	Prepare tablets	Make powder
85	The Latin term for “syrup” is:	sirupus	tinctura	extractum	unguentum
86	The Latin term for “infusion” is:	infusum	decoctum	tinctura	extractum
87	The Latin term for “decoction” is:	decoctum	infusum	solutio	tinctura
88	The Latin word ana in prescriptions means:	of each	once	before	after
89	The phrase ad usum internum means:	for internal use	for external use	for injection	for washing
90	The phrase ad usum externum means:	for external use	for internal use	for injection	for inhalation
91	The Latin term for “injection” is:	injectio	solutio	tinctura	extractum
92	The Genitive singular of Solutio, onis f is:	solutionis	solutio	solutionem	solutione
93	The correct form in the phrase “with extract” is:	cum extracto	cum extractum	cum extracti	cum extracta
94	The Genitive singular of Tabuletta, ae f is:	tabulettae	tabuletta	tabulettam	tabulettis
95	The correct phrase for “in tablets” is:	in tabulettis	in tabulettas	in tabuletta	in tabulettae
96	The Genitive singular of Pulvis, eris m is:	pulveris	pulvis	pulverem	pulvere
97	The phrase “with Papaverine hydrochloride” is correctly written:	cum Papaverini hydrochlorido	cum Papaverino hydrochloridum	cum Papaverinum hydrochloridi	cum Papaverini hydrochloridum
98	The Latin word for “dose” is:	dosis	massa	forma	pars
99	The Genitive plural of Gutta, ae f is:	guttarum	guttas	guttae	guttis
100	The phrase “in ampoules” is correctly written:	in ampullis	in ampullas	in ampulla	in ampullae
101	The Latin word for “mixture” is:	mixtura	solutio	tinctura	extractum
102	The Genitive singular of Unguentum, i n is:	unguenti	unguentum	unguento	unguenta
103	The phrase “of distilled water” is:	Aquae destillatae	Aqua destillata	Aquam destillatam	Aqua destillatum
104	The correct phrase for “in capsules” is:	in capsulis	in capsulas	in capsula	in capsulae
105	The Latin word for “suppository” is:	suppositorium	tabuletta	capsula	unguentum
106	The Genitive singular of Extractum, i n is:	extracti	extracto	extractum	extracta
107	The phrase “Take: Tincture of Valerian” begins with:	Rp.: Tincturae Valerianae	Rp.: Tinctura Valeriana	Rp.: Tincturam Valeriana	Rp.: Tinctura Valerianae
108	The correct form for “powders” (plural) is:	pulveres	pulvis	pulveris	pulvere
109	The Latin word for “oil” is:	oleum	aqua	acidum	spiritus
110	The Genitive singular of Oleum, i n is:	olei	oleum	oleo	olea
111	The phrase “of peppermint oil” is:	Olei Menthae piperitae	Oleum Mentha piperita	Olea Menthae piperita	Oleo Menthae piperitae
112	The Latin word for “acid” is:	acidum	oleum	spiritus	massa
113	The Genitive singular of Acidum, i n is:	acidi	acidum	acido	acida
114	The correct phrase “with ethyl alcohol” is:	cum Spiritu aethylico	cum Spiritus aethylicus	cum Spiritum aethylicum	cum Spiritus aethylico
115	The Latin word for “water” is:	aqua	oleum	spiritus	massa
116	The Genitive singular of Aqua, ae f is:	aquae	aqua	aquam	aquarum
117	The Latin word for “syrup” is:	sirupus	tinctura	pulvis	species
118	The Genitive singular of Sirupus, i m is:	sirupi	sirupus	sirupo	sirupum
119	The Latin word for “powdered root” is:	radix pulverata	radix pulveratus	radicem pulveratam	radice pulverata
120	The phrase “Mix to make tablets” is:	Misce, fiant tabulettae	Misce, fiat tabulettae	Misce, fiant tabuletta	Misce, fiat tabuletta
121	The phrase “Let a solution be made” is:	Fiat solutio	Fiant solutio	Misce solutio	Da solutio
122	The Latin word for “spirit (alcohol)” is:	spiritus	aqua	oleum	acidum
123	The Genitive singular of Spiritus, us m is:	spiritus	spiritum	spiritui	spirituum
124	The Latin word for “vitamin” is:	vitaminum	vita	vitis	vitalis
125	The Genitive singular of Vitaminum, i n is:	vitamini	vitaminum	vitamino	vitamina
126	The Latin word for “clay” is:	bolus	terra	argilla	massa
127	The phrase “for internal use” in Latin is:	ad usum internum	ad usum externum	pro usu interno	in usu interno
128	The phrase “for injection” is:	pro injectione	ad usum externum	in capsulis	pro usu interno
129	The Latin word for “daily” is:	quotidie	semel	bis	ter
130	The Latin word meaning “twice” is:	bis	semel	ter	quater
131	The Latin word meaning “three times” is:	ter	bis	semel	decies
132	The abbreviation D.S. stands for:	Da. Signa.	Detur. Solve.	Divide. Sterilisa.	Da. Sume.
133	The phrase “Mix thoroughly” is:	Misce bene	Da bene	Fiat bene	Signa bene
134	The Latin word for “before meals” is:	ante cibum	post cibum	cum cibo	sine cibo
135	The Latin word for “after meals” is:	post cibum	ante cibum	cum cibo	sine cibo
136	The Latin word for “immediately” is:	statim	lente	saepe	raro
137	The Latin word for “rarely” is:	raro	statim	semper	saepe
138	The Latin word for “always” is:	semper	raro	numquam	interdum
139	The Latin word for “sometimes” is:	interdum	semper	numquam	statim
140	The Latin word for “never” is:	numquam	semper	raro	saepe
141	The Latin term for “powder for injection” is:	pulvis pro injectione	pulvis ad usum externum	pulvis internus	pulvis mixtus
142	The Greek term element meaning “sugar” is:	glyc-	haem-	lip-	cyt-
143	The suffix -uria means:	condition of urine	inflammation	tumor	pain
144	The Greek term element meaning “pus” is:	py-	ser-	leuc-	erythr-
145	The suffix -derma relates to:	skin condition	bone condition	muscle condition	nerve condition
146	The Greek term element meaning “hair” is:	trich-	psych-	ot-	gloss-
147	The suffix -kinesia means:	movement	memory	digestion	temperature
148	The suffix -thermia relates to:	temperature	pressure	digestion	sensation
149	The Greek term element meaning “thyroid gland” is:	thyr-	aden-	mast-	cyst-
150	The suffix -poiesis means:	formation, production	rupture	pain	incision
151	The Greek term element meaning “thrombus” is:	thromb-	lith-	cyst-	py-
152	The term polyneuropathy means:	disease of many nerves	inflammation of one nerve	tumor of nerve tissue	rupture of nerve
153	The term hyperglycaemia means:	excessive sugar in blood	low sugar in blood	sugar in urine	inflammation of pancreas
154	The term bradycardia means:	slow heart rate	fast heart rate	heart enlargement	heart inflammation
155	The term tachypnoea means:	rapid breathing	slow breathing	painful breathing	absence of breathing
156	The term osteomyelitis means:	inflammation of bone and bone marrow	tumor of bone	fracture of bone	softening of bone
157	The term nephrolithiasis means:	kidney stone formation	kidney inflammation	kidney tumor	kidney fixation
158	The term gastrectomy means:	surgical removal of the stomach	incision of the stomach	inflammation of stomach	examination of stomach
159	The term encephalopathy means:	disease of the brain	brain tumor	brain incision	brain rupture
160	The term haemorrhagia means:	bleeding	rupture	discharge	swelling
161	The term dermatoplasty means:	surgical repair of skin	removal of skin	inflammation of skin	bleeding of skin
162	The correct Genitive singular of Radix, icis f is:	radicis	radix	radicem	radice
163	The correct phrase “of powdered leaves” is:	Foliorum pulveratorum	Folia pulverata	Folium pulveratum	Folia pulveratorum
164	The correct phrase “in glass ampoules” is:	in ampullis vitreis	in ampullas vitreas	in ampulla vitrea	in ampullae vitreae
165	The correct phrase “with sterile water” is:	cum Aqua sterili	cum Aquam sterile	cum Aqua sterilis	cum Aquae sterili
166	The phrase Divide in partes aequales means:	Divide into equal parts	Mix equal parts	Give equal parts	Label equal parts
167	The term leucocytosis means:	increased number of white blood cells	decreased white cells	inflammation of white cells	tumor of white cells
168	The term cyanosis means:	bluish discoloration	redness	swelling	bleeding
169	The term myocarditis means:	inflammation of heart muscle	enlargement of heart	tumor of heart	slow heart rate
170	The term cholecystectomy means:	surgical removal of the gallbladder	incision of gallbladder	inflammation of gallbladder	fixation of gallbladder
171	The term otorrhoea means:	discharge from the ear	bleeding from the ear	pain in the ear	tumor of ear
172	The Latin imperative plural of Misce is:	Miscete	Misce	Miscent	Miscetur
173	The phrase Fiant capsulae means:	Let capsules be made	Make a capsule	Give capsules	Label capsules
174	The correct form of “of Valerian root” is:	Radicis Valerianae	Radix Valeriana	Radicem Valerianae	Radice Valeriana
175	The correct phrase “in sterile solution” is:	in solutione sterili	in solutio sterilis	in solutionem sterile	in solutionis sterili
176	The term hypotensio means:	low blood pressure	high blood pressure	normal pressure	heart enlargement
177	The term thrombosis means:	formation of a blood clot	destruction of clot	bleeding	vessel dilation
178	The term laryngitis means:	inflammation of the larynx	tumor of larynx	incision of larynx	rupture of larynx
179	The term mastalgia means:	breast pain	breast tumor	breast inflammation	breast removal
180	The term splenomegaly means:	enlargement of the spleen	removal of spleen	inflammation of spleen	rupture of spleen
181	The term pyrexia means:	fever	bleeding	rupture	tumor
182	The correct Genitive singular of Capsula, ae f is:	capsulae	capsula	capsulam	capsularum
183	The correct phrase “Mix to make an ointment” is:	Misce, fiat unguentum	Misce, fiant unguentum	Misce, fiat unguenta	Misce unguentum
184	The term neurolysis means:	destruction of nerve tissue	inflammation of nerve	tumor of nerve	fixation of nerve
185	The term adenoma means:	benign glandular tumor	inflammation of gland	malignant tumor	gland removal
186	The term pneumothorax means:	air in pleural cavity	lung inflammation	lung tumor	rupture of lung
187	The term haematology means:	study of blood	disease of blood	bleeding	blood tumor
188	The term colitis means:	inflammation of the colon	colon tumor	colon incision	colon fixation
189	The term rhinitis means:	inflammation of the nose	nose tumor	nose bleeding	nose incision
190	The term gastroscopy means:	visual examination of the stomach	stomach removal	stomach inflammation	stomach rupture
191	The term polyarthritis means:	inflammation of many joints	tumor of joints	fixation of joints	rupture of joints
192	The diphthong ae in Latin is pronounced as:	[e]	[ai]	[a]	[ae]
193	The diphthong oe is pronounced as:	[e]	[oi]	[o]	[oe]
194	The digraph ph is pronounced as:	[f]	[p]	[h]	[v]
195	The digraph th is pronounced as:	[t]	[θ]	[h]	[d]
196	The digraph ch in medical Latin is pronounced as:	[k]	[ch]	[h]	[ts]
197	The noun vertebra, ae f belongs to:	1st declension	2nd declension	3rd declension	4th declension
198	The noun musculus, i m belongs to:	2nd declension	1st declension	3rd declension	5th declension
199	The Genitive singular of musculus is:	musculi	musculus	musculum	musculo
200	The noun corpus, oris n belongs to:	3rd declension	2nd declension	4th declension	1st declension
201	The Genitive singular of corpus is:	corporis	corpus	corpore	corpori
202	The adjective longus, a, um is a:	1st–2nd declension adjective	3rd declension adjective	indeclinable adjective	comparative form
203	In the phrase musculus longus, the adjective agrees in:	gender, number, case	gender only	number only	case only
204	The plural of vena, ae f is:	venae	venas	venarum	venis
205	The Anatomical term for “upper jaw” is:	maxilla	mandibula	os	costa
206	The Anatomical term for “lower jaw” is:	mandibula	maxilla	clavicula	scapula
207	The Anatomical term for “shoulder blade” is:	scapula	humerus	radius	ulna
208	The Anatomical term for “collarbone” is:	clavicula	scapula	sternum	costa
209	The Anatomical term for “breastbone” is:	sternum	costa	vertebra	femur
210	The Anatomical term for “thigh bone” is:	femur	tibia	fibula	humerus
211	The Anatomical term for “shin bone” is:	tibia	fibula	femur	patella
212	The plural of vertebra is:	vertebrae	vertebras	vertebrarum	vertebris
213	The plural of foramen, inis n is:	foramina	foramens	foramenes	foramini
214	The comparative degree of magnus is:	major	maximus	magnis	magnior
215	The superlative degree of longus is:	longissimus	longior	longus	longum
216	In anatomical terminology, adjectives usually follow:	the noun	the verb	the preposition	the number
217	The noun cranium, i n means:	skull	chest	abdomen	pelvis
218	The correct translation of “neck of the femur” is:	collum femoris	collum femur	colli femoris	collum femora
219	The correct form of “head of the humerus” is:	caput humeri	caput humerus	capitis humerus	caput humerum
220	The correct translation of “body of the vertebra” is:	corpus vertebrae	corpus vertebra	corpori vertebrae	corpus vertebram
221	The correct form of “arch of the aorta” is:	arcus aortae	arcus aorta	arcu aortae	arcum aortae
222	The correct translation of “process of the vertebra” is:	processus vertebrae	processus vertebra	processum vertebrae	processus vertebrarum
223	The correct translation of “base of the skull” is:	basis cranii	basis cranium	basem cranii	basis crania
224	The correct form of “cavity of the nose” is:	cavitas nasi	cavitas nasus	cavitatis nasi	cavitas nasum
225	The correct translation of “septum of the nose” is:	septum nasi	septum nasus	septi nasi	septum nasum
226	The correct translation of “angle of the rib” is:	angulus costae	angulus costa	anguli costae	angulum costae
227	The correct translation of “foramen of the skull” is:	foramen cranii	foramen cranium	foraminis cranii	foramen cranio
228	The correct translation of “muscle of the tongue” is:	musculus linguae	musculus lingua	musculi linguae	musculum linguae
229	The correct translation of “artery of the brain” is:	arteria cerebri	arteria cerebrum	arteriae cerebrum	arteriam cerebri
230	The correct translation of “vein of the liver” is:	vena hepatis	vena hepar	venae hepatis	venam hepatis
231	The correct translation of “surface of the lung” is:	facies pulmonis	facies pulmo	faciem pulmonis	facies pulmonum
232	The correct translation of “border of the scapula” is:	margo scapulae	margo scapula	marginis scapulae	margum scapulae
233	The correct translation of “fossa of the skull” is:	fossa cranii	fossa cranium	fossae cranii	fossam cranii
234	The correct translation of “canal of the vertebra” is:	canalis vertebrae	canalis vertebra	canalem vertebrae	canalis vertebrarum
235	The correct translation of “ligament of the liver” is:	ligamentum hepatis	ligamentum hepar	ligamenti hepatis	ligamentum hepato
236	The correct translation of “nerve of the face” is:	nervus faciei	nervus facies	nervi faciei	nervum faciei
237	The correct translation of “cartilage of the nose” is:	cartilago nasi	cartilago nasus	cartilaginis nasi	cartilago nasum
238	The correct translation of “membrane of the brain” is:	membrana cerebri	membrana cerebrum	membrana cerebrius	membranam cerebri
239	The correct translation of “gland of the thyroid” is:	glandula thyreoidea	glandula thyreoideus	glandula thyreoidei	glandulam thyreoideam
240	The correct translation of “upper lobe of the lung” is:	lobus superior pulmonis	lobus superius pulmonis	lobum superior pulmonis	lobus superior pulmo
241	The correct translation of “inferior vena cava” is:	vena cava inferior	vena cavae inferior	vena cavum inferior	vena cava inferius
242	The correct translation of “transverse process of vertebra” is:	processus transversus vertebrae	processus transversi vertebrae	processum transversus vertebrae	processus transversum vertebra
243	The correct translation of “anterior surface of the heart” is:	facies anterior cordis	facies anterior cor	faciem anterior cordis	facies anteriore cordis
244	The correct translation of “medial border of scapula” is:	margo medialis scapulae	margo medial scapulae	marginis medialis scapula	margo medialis scapula
245	The correct translation of “external acoustic meatus” is:	meatus acusticus externus	meatus acustici externi	meatum acusticus externus	meatus acusticum externum
246	The correct translation of “internal carotid artery” is:	arteria carotis interna	arteria carotis internus	arteria carotidem internam	arteria carotis internum
247	The correct translation of “middle cranial fossa” is:	fossa cranii media	fossa cranium media	fossae cranii media	fossa cranii medius
248	The correct translation of “deep branch of the radial nerve” is:	ramus profundus nervi radialis	ramus profundum nervus radialis	ramus profundus nervus radiale	ramus profundus nervi radialem
249	The correct form of “medial surface of the right lung” is:	facies medialis pulmonis dextri	facies medial pulmonis dexter	faciem medialis pulmonis dextri	facies medialis pulmo dextri
250	The correct translation of “posterior horn of lateral ventricle” is:	cornu posterius ventriculi lateralis	cornu posterior ventriculus lateralis	cornus posterius ventriculi lateralis	cornu posterius ventriculus laterale
251	The correct form of “inferior surface of cerebellar hemisphere” is:	facies inferior hemispherii cerebelli	facies inferius hemispherium cerebelli	faciem inferior hemispherii cerebelli	facies inferior hemispherium cerebellum
252	The correct translation of “ascending part of the duodenum” is:	pars ascendens duodeni	pars ascendens duodenum	partem ascendens duodeni	pars ascendens duodenumi
253	The correct translation of “left hepatic duct” is:	ductus hepaticus sinister	ductus hepatis sinister	ductus hepaticus sinistrum	ductus hepaticum sinister
254	The correct translation of “right atrioventricular orifice” is:	ostium atrioventriculare dextrum	ostium atrioventricularis dexter	ostium atrioventriculare dexter	ostium atrioventricularis dextrum
255	The correct form of “greater curvature of stomach” is:	curvatura ventriculi major	curvatura major ventriculus	curvatura ventriculum major	curvatura ventriculi majus
256	The correct form of “lesser tubercle of humerus” is:	tuberculum minus humeri	tuberculum minor humerus	tuberculum minus humerus	tuberculum minor humeri
257	The correct translation of “anterior cranial fossa” is:	fossa cranii anterior	fossa anterior cranium	fossae cranii anterior	fossa cranii anterius
258	The correct translation of “common bile duct” is:	ductus choledochus	ductus bilis communis	ductus choledochum	ductus communis bilis
259	The correct translation of “superficial palmar arch” is:	arcus palmaris superficialis	arcus palmaris superficial	arcum palmaris superficialis	arcus palmarius superficialis
260	The correct translation of “transverse colon” is:	colon transversum	colon transversus	colon transversi	colon transversale
261	The correct translation of “middle cerebral artery” is:	arteria cerebri media	arteria cerebrum media	arteria cerebri medius	arteria cerebri medium
262	The correct translation of “inferior vena cava” is:	vena cava inferior	vena cava inferius	venae cavae inferior	vena cava inferiorem
263	The correct translation of “long thoracic nerve” is:	nervus thoracicus longus	nervus thoracici longi	nervum thoracicus longus	nervus thoracicum longum
264	The correct translation of “superior orbital fissure” is:	fissura orbitalis superior	fissura orbitalis superius	fissura orbita superior	fissuram orbitalis superior
265	The correct translation of “external carotid artery” is:	arteria carotis externa	arteria carotis externus	arteria carotidem externam	arteria carotis externum
266	The correct translation of “inferior nasal concha” is:	concha nasalis inferior	concha nasal inferior	concha nasale inferior	concha nasalis inferius
267	The correct translation of “anterior longitudinal ligament” is:	ligamentum longitudinale anterius	ligamentum longitudinal anterior	ligamentum longitudinale anterior	ligamentum longitudinale anteriore
268	The correct translation of “posterior cerebral artery” is:	arteria cerebri posterior	arteria cerebrum posterior	arteria cerebri posterius	arteria cerebri posteriorem
269	The correct translation of “left ventricle of heart” is:	ventriculus sinister cordis	ventriculus sinister cor	ventriculum sinistrum cordis	ventriculus sinister cordem
270	The correct translation of “right pulmonary artery” is:	arteria pulmonalis dextra	arteria pulmonalis dexter	arteria pulmonale dextra	arteria pulmonalis dextrum
271	The correct translation of “middle ear cavity” is:	cavitas tympani	cavitas tympanum	cavitas tympani media	cavitas tympanis
272	The correct translation of “anterior surface of kidney” is:	facies anterior renis	facies anterior ren	faciem anterior renis	facies anterius renis`;

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function parseLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return null;
  if (!/^\d/.test(trimmed)) return null;

  // Prefer TSV splits.
  let parts = trimmed.split(/\t+/).map((p) => p.trim());
  // Fallback: multiple spaces.
  if (parts.length < 6) {
    parts = trimmed.split(/\s{2,}/).map((p) => p.trim());
  }
  if (parts.length < 6) return null;

  // parts: [No, Question, A, B, C, D]
  let [noRaw, questionRaw, a, b, c, d] = parts;

  // Fix rare "1213" typo: treat it as question 12 (we renumber sequentially anyway).
  if (/^\d{4}$/.test(noRaw)) {
    noRaw = noRaw.slice(0, 2);
  }

  return {
    no: noRaw,
    question: normalizeText(questionRaw),
    options: [a, b, c, d].map(normalizeText),
  };
}

function parseQuestions(raw) {
  const lines = raw.replace(/\r/g, '').split('\n');
  const labels = ['A', 'B', 'C', 'D'];
  const questions = [];

  for (const line of lines) {
    const parsed = parseLine(line);
    if (!parsed) continue;
    if (parsed.options.some((o) => !o)) continue;

    questions.push({
      id: String(questions.length + 1),
      text: parsed.question,
      options: parsed.options.map((text, idx) => ({
        id: labels[idx],
        text,
        isCorrect: idx === 0,
      })),
    });
  }

  return questions;
}

function main() {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  if (!data.subjects) data.subjects = {};

  const questions = parseQuestions(input);
  if (questions.length === 0) {
    throw new Error('No questions parsed. Input formatting may be incompatible.');
  }

  data.subjects.latin_terminology = {
    id: 'latin_terminology',
    name: 'Latin & Medical Terminology',
    questions,
  };

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  // eslint-disable-next-line no-console
  console.log(`Added subject latin_terminology with ${questions.length} questions.`);
}

main();

