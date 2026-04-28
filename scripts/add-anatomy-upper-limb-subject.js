// Adds a new subject `anatomy_upper_limb` to public/data/mcq-data.json
// Run from project root with: node scripts/add-anatomy-upper-limb-subject.js

import fs from 'fs';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;
const DATA_PATH = path.join(__dirname, '..', 'public', 'data', 'mcq-data.json');

// Source pasted from the user (Correct option is always the first option after the question).
// The parser is tolerant of newlines inside options and inconsistent spacing.
const input = String.raw`1.A 52-year-old woman develops winging of scapula on her left side 4 weeks after undergoing modified radical mastectomy for breast cancer.Which of the following nerves is most likely injured?	Long thoracic nerve	Axillary nerve	Spinal accessory nerve	Dorsal scapular nerve
2.The inferior angle of the scapula is normally located at the level of:	T7 vertebra	T6 vertebra	T9 vertebra	T8 vertebra
3.The trapezius muscle is supplied by which nerve?	Spinal accessory nerve	Dorsal scapular nerve	Long thoracic nerve	Axillary nerve
4.The trapezius muscle contributes to several movements of the scapula. All of the following are actions of the trapezius except:	Protraction of the scapula	Elevation of the scapula	Retraction of the scapula	Depression of scapula
5.Which of the following muscles is primarily considered a “climbing muscle” ?	Latissimus dorsi	Serratus anterior	Trapezius	Pectoralis minor
6.A 50-year-old woman undergoes axillary lymph node dissection during breast cancer surgery. Postoperatively, she has weakness in extending, adducting, and medial rotation of the arm, but scapular movements are normal. Which nerve is most likely injured?	Thoracodorsal nerve	Long thoracic nerve	Spinal accessory nerve	Axillary nerve
7.The thoracodorsal nerve supplies which of the following muscles? 	Latissimus dorsi	Serratus anterior	Rhomboid major	Trapezius
8.The latissimus dorsi muscle arises from several sites. All of the following are origins of latissimus dorsi except:	Spinous processes of C7–T12	Thoracolumbar fascia	Iliac crest	Inferior angle of scapula
9.The triangle of auscultation is an area of the back where lung sounds can be auscultated more clearly. Which of the following correctly describes its boundaries?	Medially – trapezius; Laterally – Scapula; Inferiorly – latissimus dorsi	Medially – trapezius; Laterally – latissimus dorsi; Inferiorly – rhomboid major	Medially – rhomboid major; Laterally – trapezius; Inferiorly – latissimus dorsi	Medially – latissimus dorsi; Laterally – trapezius; Inferiorly – rhomboid major
10.The lumbar triangle of Petit is a weak area in the posterolateral abdominal wall. Which of the following correctly describes its boundaries?	Medially – latissimus dorsi; Laterally – external abdominal oblique; Inferiorly – iliac crest	Medially – external abdominal oblique; Laterally – latissimus dorsi; Inferiorly – iliac crest	Medially – latissimus dorsi; Laterally – internal abdominal oblique; Superiorly – iliac crest	Medially – internal abdominal oblique; Laterally – external abdominal oblique; Inferiorly – iliac crest
11.The rhomboid major muscle is supplied by which nerve?	Dorsal scapular nerve	Long thoracic nerve	Spinal accessory nerve	Thoracodorsal nerve
12.The dorsal scapular nerve supplies all of the following muscles except:	Trapezius	Levator scapulae	Rhomboid minor	Rhomboid major
13.The deltoid muscle is supplied by which nerve?	Axillary nerve	Musculocutaneous nerve	Radial nerve	Suprascapular nerve
14.The deltoid muscle arises from several sites. All of the following are origins of the deltoid except:	Coracoid process of scapula	Lateral third of clavicle	Acromion of scapula	Spine of scapula
15.The deltoid muscle performs several movements of the shoulder. All of the following are actions of the deltoid except:	Adduction of the arm	Medial rotation of arm	Flexion of the arm	Extension of the arm
16.The Infraspinatus muscle is supplied by which nerve?	Suprascapular nerve	Dorsal scapular nerve	Musculocutaneous nerve	Axillary nerve
17.The teres minor muscle is supplied by which nerve?	Axillary nerve	Suprascapular nerve	Musculocutaneous nerve	Subscapular nerve
18.The supraspinatus muscle primarily performs which of the following actions?	Initiation of arm abduction	Lateral rotation of the arm	Adduction of the arm	Extension of the arm
19.The teres major muscle inserts into which of the following structures?	Medial lip of bicipital (intertubercular) groove of humerus	Lateral lip of bicipital (intertubercular) groove of humerus	Greater tubercle of humerus	Lesser tubercle of humerus
20.All of the following muscles act as retractors of the scapula except:	Serratus anterior	Rhomboid major	Rhomboid minor	Middle fibers of trapezius
21.The subscapular space (quadrangular space) transmits which of the following structures?	Posterior circumflex humeral artery	Musculocutaneous  nerve	Radial nerve	Circumflex scapular artery
22.Which of the following correctly describes the boundaries of the subscapular (upper triangular) space?	Teres minor, teres major, long head of triceps	Teres minor, teres major, surgical neck of humerus	Teres major, long head of triceps, humerus	Infraspinatus, teres major, long head of triceps
23.Which of the following correctly describes the boundaries of the cubital fossa?	Medial – pronator teres; Lateral – brachioradialis; Superior – line joining medial and lateral epicondyles	Medial – brachioradialis; Lateral – pronator teres; Superior – biceps brachii	Medial – brachioradialis; Lateral – biceps brachii; Superior – line joining epicondyles	Medial – pronator teres; Lateral – biceps brachii; Superior – brachioradialis
24.The correct medial to lateral arrangement of contents in the cubital fossa is:	Median nerve – Brachial artery – Tendon of biceps – Radial nerve	Brachial artery – Median nerve – Tendon of biceps – Radial nerve	Median nerve – Tendon of biceps – Brachial artery – Radial nerve	Tendon of biceps – Brachial artery – Median nerve – Radial nerve
25.Which vein is most commonly used for venepuncture in the cubital fossa?	Median cubital vein	Cephalic vein	Basilic vein	Brachial vein
26.All are muscles of the front (anterior compartment) of the arm except:	Triceps brachii	Coracobrachialis	Brachialis	Biceps brachii
27.A 24-year-old man sustains a stab injury in the axilla. He is unable to flex his elbow and supinate his forearm. Sensation over the lateral aspect of the forearm is also lost. Which nerve is most likely injured?	Musculocutaneous nerve	Radial nerve	Median nerve	Ulnar nerve
28.Nerve supply of biceps brachii is…	Musculocutaneous nerve	Radial nerve	Median nerve	Ulnar nerve
29.The main function of biceps brachii is:	Supination of forearm	Flexion of wrist	Extension of elbow	Pronation of forearm
30.Regarding biceps brachii, all of the following statements are true except:	It is supplied by the musculocutaneous nerve and radial nerve	It originates from the supraglenoid tubercle and coracoid process of scapula	It is inserted into the radial tuberosity	Its action is flexion of the elbow joint
31.Regarding brachialis muscle, all of the following statements are true except:	It is supplied only by the musculocutaneous nerve	It originates from the lower half of the anterior surface of humerus	It is inserted into the coronoid process and tuberosity of ulna	Its main action is flexion of forearm
32.The composite muscle of the arm is:	Brachialis	Biceps brachii	Coracobrachialis	Triceps brachii
33.A 55-year-old man in shock requires rapid blood pressure monitoring and arterial assessment. The clinician palpates the brachial artery in the cubital fossa. At which location is the brachial pulse best felt?	Medial to the biceps tendon	Lateral to the biceps tendon	Posterior to the biceps tendon	Over the olecranon process
34.A 10-year-old boy sustains a supracondylar fracture of the humerus. Days later, he develops pain, pallor, and flexion deformity of the hand. Which of the following vessel injuries is most likely responsible for Volkmann’s ischemic contracture?	Brachial artery	Radial artery	Ulnar artery	Median artery
35.Which nerve supplies the triceps brachii muscle?	Radial nerve	Ulnar nerve	Median nerve	Musculocutaneous nerve
36.Regarding triceps brachii, all of the following statements are true except:	Medial head from the posterior humerus above radial groove	It is inserted into the olecranon process of ulna	It is supplied by the radial  nerve	Its main action is extension of the elbow
37.False about clavicle	Most common site of fracture is the junction of medial 1/3rd with lateral 2/3rd	Ossifies in membrane and cartilage both	No medullary cavity	Horizontal bone
38.Which of the following bones is the first one to start ossification?	Clavicle	Scapula	Humerus	Ulna
39.The acromioclavicular joint is a:	Plane synovial joint	Saddle synovial joint	Hinge synovial joint	Ball and socket joint
40.Which muscle is attached to the medial one-third of the clavicle?	Sternocleidomastoid	Trapezius	Deltoid	Pectoralis minor
41.Which muscle is attached to the lateral one-third of the clavicle?	Deltoid	Subclavius	Pectoralis major	Sternothyroid
42.Attachment on supra glenoid tubercle  scapula is:	Long head of biceps	Subscapularis	Infraspinatus	Teres minor
43.The following muscles are attached to the coracoid process of the scapula except:	Subclavius	Coracobrachialis	Short head of biceps	Pectoralis minor
44.Attachment on Infra glenoid tubercle  scapula is:	Long head of triceps	Long head of biceps	Short head of biceps	Short head of triceps
45.Which of the following muscle is attached to the lower border of the crest of the spine of scapula ?	Deltoid	trapezius	serratus anterior	subscapularis
46.All of the following muscle are attached along the medial border of scapula except	inferior belly of the omohyoid	levator scapulae	Rhomboid minor	Rhomboid major
47.Subscapularis is inserted at	Lesser tubercle	Greater tubercle	Lateral lip of bicipital groove	Floor of bicipital groove
48.All muscles are inserted at greater tubercle except	Teres major	Teres minor	supraspinatus	Infraspinatus
49.Latissimus dorsi is inserted at	Floor of the intertubercular sulcus	Lateral lip of the intertubercular sulcus	Medial lip of the intertubercular sulcus	Lesser tubercle
50.A patient with fracture of the surgical neck of humerus presents with loss of shoulder abduction.The nerve injured is:	Axillary nerve	Suprascapular nerve	Musculocutaneous nerve	Thoracodorsal nerve
51.The radial nerve lies in the spiral groove of the humerus along with the:	Profunda brachii artery	Posterior circumflex humeral artery	Anterior circumflex humeral artery	Axillary artery
52.Fracture of the shaft of humerus at the spiral groove most commonly injures the:	Radial nerve	Ulnar nerve	Median nerve	Axillary nerve
53.Fracture or injury at the medial epicondyle of the humerus is most likely to damage the:	Ulnar nerve	Radial nerve	Median nerve	Axillary nerve
54.The nerve most commonly injured in supracondylar fracture of the humerus is the:	Median nerve	Axillary nerve	Ulnar nerve	Radial nerve
55.True statement regarding serratus anterior	All of above	Arise from upper 8 ribs	Insert to medial border of scapula	Helps in overhead abduction of arm
56.All is true about mammary gland except:	Is a modified sebaceous gland	Extends from the 2-6 ribs vertically	Supplied by internal mammary artery	Axillary lymph node drains maximum Lymph from breast
57.Dimpling of breast skin in breast cancer is due to	Involvement of Cooper’s ligament	Haematogenous dissemination	Blockade of sub-dermal lymphatics	Chest wall fixation
58.Mammary gland is supplied by all artery except	Musculophrenic artery	Thoracoacromial artery	Internal mammary artery	Lateral thoracic artery
59.A 55 years old lady presented with lump in the left breast, On examination, the lump is well circumscribed,hard ,irregular and painless . Most likely diagnosis:	Breast cancer	Fibrocystic disease	Galactocele	Fibroadenoma
60.Which of the following statements about lymphatic drainage of the breast is true?	Level II lymph nodes are located posterior to the pectoralis minor	Level III lymph nodes are located lateral to the pectoralis minor muscle.	Lymphatic drainage from the breast is mainly directed to the subclavian lymph nodes.	Level I lymph nodes are located medial to the pectoralis minor muscle.
61.All of the following muscles are related to deep to breast except	Teres minor	Pectoralis major	Serratus anterior	External oblique
62.According to morphological classification of exocrine gland, Breast is ….	Compound tubuloalveolar gland	Simple alveolar gland	Compound tubular gland	Simple coiled tubular gland
63.According to mode of secretion, Breast is	Apocrine gland	Holocrine gland	Merocrine gland	Eecrine gland
64.Milk ejection during breast feeding is coordinated by.	Oxytocin	Prolactin	Oestrogen	Progesterone
65.Find the wrong matching regarding breast	Polythelia --Development of more than one breast along milk line	75-85 % lymphatic drainage---Axillary Lymph node	Milk production is mediated by---Prolactin	Mammography-- Breast cancer screening
66.Most common site of breast cancer is	Upper & outer quardrant	Upper & Medial quardrant	Lower & outer quardrant	Lower & Medial quardrant
67.Which rib articulates at the level of the Angle of Louis?	Second rib	First rib	Third rib	Fourth rib
68.Which pair of dermatomes meet at the sternal angle (Angle of Louis)?	T2 and C4	T2 and T3	T3 and C3	T5 and T6
69.Nerve supply of pectoralis major  muscle is	Lateral & Medial pectoral nerve	Lateral pectoral nerve	Medial pectoral nerve	Long thoracic nerve
70.All of the following are the action of pectoralis major except	Lateral rotation of arm	Flexion of arm	Adduction of arm	Medial rotation of arm
71.Pectoralis major is inserted at	Lateral lip of the intertubercular sulcus of humerus	Floor of the intertubercular sulcus of humerus	Medial lip of the intertubercular sulcus of humerus	Lesser tubercle of humerus
72.False statement regarding pectoralis minor	Origin from 5,6,7th ribs	Inserted at coracoid process of sapula	Nerve supply by Lateral & Medial pectoral nerve	Divide axillary artery in 3 parts.
73.The axillary artery is divided into three parts by the:	Pectoralis minor muscle	Pectoralis major muscle	Subscapularis muscle	Coracobrachialis muscle
74.Which of the following muscle is known as the “boxer’s muscle”:	Serratus anterior	Rhomboid major	Trapezius	Pectoralis minor
75.Which of the following nerve supplies Serratus anterior ?	Long thoracic nerve	Thoraco dorsal nerve	Supra scapular nerve	Pectoral nerve
76.What is the action of serratus anterior ?	Protraction of scapula	Retraction of scapula	Elevation of scapula	Depression of scapula
77.All of the following are features of typical long bones except:	Ossify from membrane	Consist of a tubular shaft and two expanded ends	Contain a medullary cavity filled with bone marrow	Lie vertically in the body and act as levers for muscles
78.Which of the following is an example of a miniature long bone?	Metacarpal	Carpal	Humerus	Radius
79.All of the following are examples of flat bones except:	Base of skull	Sternum	Ribs	Parietal bone
80.Which of the following is an example of a pneumatic bone?	Maxilla	Vertebra	Mandible	Temporal
81.Which of the following is a sesamoid bone ?	Pisiform	Scaphoid	Lunate	Capitate
82.Which of the following bones develops only by intramembranous ossification ?	Frontal bone	Humerus	Carpal bone	Clavicle
83.Which of the following bones develops only by membranous-cartilagenous  ossification ?	Mandible	Cranial vault	Humerus	Sternum
84.Which of the following represents an atavistic epiphysis?	Coracoid process of scapula	Head of femur	Greater trochanter	Tibial tuberosity
85.Which of the following is a traction epiphysis in the upper limb?	Greater tubercle of humerus	Head of humerus	Capitulum of humerus	Trochlea of humerus
86.A 9-year-old child presents with fever, severe pain, and swelling near the knee. X-ray shows infection localized near the growing end of the femur. Which part of the long bone is most commonly affected by bacterial infection (Hematogenous osteomyelitis)?	Metaphysis	Diaphysis	Periosteum	Epiphysis
87.What type of joint is the glenohumeral joint?	Ball-and-socket joint	Hinge joint	Pivot joint	Saddle joint
88.The tendon of which muscle passes through the bicipital  groove?	Long head of Biceps brachii	Triceps brachii	Deltoid	Supraspinatus
89.The glenoid labrum functions primarily to:	Deepen the glenoid cavity and stabilize the joint	Connect clavicle to scapula	Produce synovial fluid	Prevent dislocation of the acromioclavicular joint
90.The muscles responsible for abduction of the shoulder joint act at different ranges. Which of the following is correctly matched?	0–15°: Supraspinatus, 15–90°: Deltoid, >90°: Serratus anterior & Trapezius	0–15°: Deltoid, 15–90°: Supraspinatus, >90°: Serratus anterior & Trapezius	0–30°: Deltoid, 30–90°: Supraspinatus, >90°: Teres major	0–15°: Supraspinatus, 15–90°: Teres minor, >90°: Trapezius
91.Which muscle is the primary mover  for flexion of the shoulder joint?	Deltoid (anterior fibers)	Pectoralis major (sternocostal head)	Coracobrachialis	Biceps brachii (short head)
92.Which of the following does not act as an extensor of the shoulder joint?	Pectoralis major (clavicular head)	Deltoid (posterior fibers)	Teres major	Latissimus dorsi
93.Which of the following  is main  adductor of the shoulder joint?	Latissimus dorsi & Pectoralis major	Teres major & Long head of triceps	Coracobrahialis & Short head of biceps	Infraspinatus & Teres minor
94.Which of the following does not significantly contribute to the stability of the shoulder joint?	Deltoid muscle	Glenoid labrum	Rotator cuff muscles	Coracoacromial arch
95.The cervical enlargement of the spinal cord gives rise to nerves that innervate the:	Upper limbs	Lower limbs	Thoracic wall	Pelvic organ
96.The elbow joint is classified as:	Hinge joint	Ball and socket joint	Pivot joint	Saddle joint
97.Which of the following bone is present in the distal row of carpal bone	Trapezium	Lunate	Scaphoid	Pisiform
98.Following is true about sesamoid bone except:	Have periosteum covering them	Develop in tendon of muscle	Have no medullary cavity	Are responsible for the ulteration of direction muscle pull
99.Which muscle inserts into the radial tuberosity?	Bicep brachii	Supinator	Brachialis	Triceps brachii
100.A 64 year old woman fell when she missed the last step from her home. Radiographic examination at the local medical care center reveals a fracture of the distal radius. The distal fragment of the radius is angled forward. What name is commonly applied to this type of injury?	Smith’s fracture	Colles’s facture	Boxer’s facture	Scaphoid fracture
101.The olecranon process is a feature of which bone?	Ulna	Radius	Humerus	Clavicle
102.Which of the Following is Not a fibrous type of joint	Symphysis	Sutures	Syndesmosis	Gomphosis
103.Anterior axillary fold formed by all of the following muscles Except:	Subscapularis	Pectoralis major	Pectoralis minor	Subclavius
104.The joint between metacarpal bone of the thumb and the carpus is which type of joint?	Saddle	Hinge	Ball and socket	Condyloid
105.Posterior wall of axilla is formed by all of the following muscles except	Teres minor	Teres major	Latissimus dorsi	Subscapularis
106.Which of the following joints is incorrectly classified?	The glenohumeral joint is a hinge joint	The atlantoaxial joint is a pivot joint	The distal tibiofibular joint is a syndesmosis (fibrous joint)	The metacarpophalangeal joint is a condyloid joint
107.Joint in which bones are united by plate of hyaline cartilage and later on cartilage is replaced by bone is example of:	Primary cartilaginous joint	Fibrous joint	Synovial joint	Secondary cartilaginous joint
108.All synovial joints possess:	Synovial lining	Joint space	Joint capsule	An articular disk
109.Synovial membranes are found in:	Joints	Heart	Brain	Glands
110. Upper end of ulna gives attachment to all the following muscles EXCEPT:	Biceps brachii	Pronator teres	Triceps brachii	Brachialis
111.All of the following structures pass superficial to the flexor retinaculum except:	Superficial radial nerve	Ulnar nerve	Tendon of palmaris lingus	Ulnar artery
112. Posterior interosseous nerve runs under which compartment of extensor retinaculum:	4th	2nd	3rd	5th
113.All are attached to the hook of the hamate EXCEPT:	Extensor retinaculum	Flexor retinaculum	Opponens digiti minimi	Flexor digiti minimi
114.A 46 years old female court stenographer is admitted to the orthopedic department with symptoms of carpal tunnel syndrome.Which of the following muscles is most typically become weakened in this condition?	Thenar	Dorsal interossei	Palmar interossei	Hypothenar
115.Which is a branch of medial cord	Medial pectoral nerve	Lateral pectoral nerve	Dorsal scapula	Axillary nerve
116.Which of the following is NOT a branch of the axillary artery	Lateral thoracic	Thoraco-acromial	Superior thoracic	Posterior circumflex humeral
117.Which of the following bones is attached to flexor and extensor retinaculum?	Pisiform	Scaphoid	Hamate	Trapezium
118. The nerve which supplies the pronator quadratus is:	Median Nerve	Radial Nerve	Ulnar nerve	Axillary nerve
119.The nerve supplying to the adductor pollicis is:	Ulnar nerve	Musculocutaneous nerve	Median nerve	Radial nerve
120. Which nerve injured can lead to claw hand?	Ulnar nerve	Axillary nerve	Radial nerve	Median nerve
121.which nerve injured can lead to wrist drop?	Radial nerve	Median nerve	Musculocutaneous nerve	Ulnar nerve
122. Which nerve passes through the quadrilateral foramen?	Axillary nerve	Median nerve	Ulnar nerve	Radial nerve
123. The radial nerve supplies	all of the extensor muscles of upper limb	all of the flexor muscles of upper limb	the muscles of the hand	the extenser muscles of arm only
124. Where does the axillary artery become the brachial artery?	Lower border of teres major	lower border of pectoralis major	Upper border of subscapularis	Lateral border of 2nd rib
125. Which nerve arises from the lateral cord of brachial plexus?	Musculocutaneous nerve	Ulnar nerve	Medial pectoral nerve	Radial nerve
126. Which part doesn’t belong to the apex of axilla?	Head of humerus	Medial 1/3 part of clavicle	Upper border of scapula	The 1st rib
127. The deep branch of radial nerve perforates:	Supinator	Flexor carpi radialis	Pronator quadratus	Flexor digitorum superficialis
128. Which nerve distributes to the skin of little finger	Ulnar nerve	Median nerve	Radial nerve	Axillary nerve
129. The lymph node along the distal part of the axillary vein is:	Lateral group	Central group	Apical group	Pectoral group
130. The superficial veins of the upper limb include all EXCEPT:	Axillary vein	Cephalic vein	Median cubital vein	Basilic vein
131. Freely moveable joints are also known as:	Synovial joints	Fibrous joint	Cartilaginous joints	Amphiarthroses
132.What action does the flexor carpi ulnaris perform?	same as the flexor carpi radialis	Flexes the lower arm	Flexes the little finger	Extends the wrist
133. Which of the following muscles causes the wrist to bend?	Extensor carpi ulnaris	Flexor digitorum profundus	Extensor digitorum	Abductor pollicis longus
134. Which of the following muscles increases the angle between the bones of the fingers and hand?	Extensor digitorum	Extensor carpi ulnaris	Flexor digitorum profundus	Abductor pollicis longus
135. The axilla contains all of the following EXCEPT:	Trunks of brachial plexus	Axillary artery	Axillary vein	Tail of the breast
136.The brachial plexus has:	6 divisions	8 rami (roots)	5 trunks	4 cords
137. The usual number of branches of the medial cord of the brachial plexus:	5	2	3	4
138. In Erb’s paralysis, the deformity is called:	Policeman’s tip position	Winging of scapula	Claw hand	Ape hand
139. In Klumpke’s paralysis, the deformity is called:	Claw hand	Policeman’s tip position	Wrist drop	Ape hand
140.The median nerve supplies all of the following muscles EXCEPT:	Flexor carpi ulnaris	Flexor carpi radialis	Flexor digitorum superficialis	Palmaris longus
141.Muscles taking origin from the radius	None	Biceps	Supinator	Pronator quadratus
142. As a result of injury of the ulnar nerve at the wrist:	Thumb cannot be adducted	Marked wasting (atrophy) of the thenar eminence	Thumb cannot be abducted	Loss of sensation over the thumb
143. Movements allowed at elbow joint:	Both A and B	Flexion and extension	Pronation and supination	Circumduction
144. Which ligament prevents lateral displacement of the elbow?	Radial collateral ligament	Ulnar collateral ligament	Annular ligament	Interosseous membrane
145. Which ligament encircles the head of the radius?	Annular ligament	Ulnar collateral ligament	Radial collateral ligament	Interosseous ligament
146. Which artery is involved in the anastomosis around the elbow joint?	All of the above	Brachial artery	Radial recurrent artery	Ulnar recurrent artery
147. Posterior aspect of elbow anastomosis is formed mainly by:	Superior ulnar collateral artery	Inferior ulnar collateral artery	Radial recurrent artery	Interosseous artery
148. Which structure stabilizes the proximal radioulnar joint?	Annular ligament	Radial collateral ligament	Ulnar collateral ligament	Interosseous membrane
149. The lateral side of the forearm corresponds to which dermatome?	C6	C5	C7	C8
150. The tip of the middle finger corresponds to which dermatome?	C7	C6	C8	T1
151. Dermatomes are clinically tested to assess:	Sensory nerve roots	Motor strength	Peripheral arteries	Muscle tone
152. The dorsum of the thumb corresponds to:	C6	C5	C7	C8
153. The dorsum of the ring finger corresponds to:	C8	C7	T1	C6`;

function normalizeCell(text) {
  return String(text).replace(/\s+/g, ' ').trim();
}

function splitRow(row) {
  const normalized = row.replace(/\r/g, '').replace(/\n+/g, '\t').trim();
  if (!normalized) return null;

  // Prefer tab splits (tsv-like), then fall back to 2+ spaces.
  let parts = normalized.split(/\t+/).map((p) => p.trim()).filter(Boolean);
  if (parts.length < 5) {
    parts = normalized.split(/\s{2,}/).map((p) => p.trim()).filter(Boolean);
  }
  if (parts.length < 5) return null;

  const [questionRaw, ...optionTexts] = parts;
  const optionsRaw = optionTexts.slice(0, 4);
  if (optionsRaw.length < 4) return null;

  return { questionRaw, optionsRaw };
}

function parseQuestions(raw) {
  const blocks = raw
    .split(/\n(?=\d+\.)/)
    .map((b) => b.trim())
    .filter(Boolean);

  const labels = ['A', 'B', 'C', 'D'];
  const questions = [];

  for (const block of blocks) {
    const row = splitRow(block);
    if (!row) continue;

    const qTextMatch = row.questionRaw.match(/^\d+\.?\s*(.+)$/);
    const qText = normalizeCell(qTextMatch ? qTextMatch[1] : row.questionRaw);
    const options = row.optionsRaw.map((t, i) => ({
      id: labels[i],
      text: normalizeCell(t),
      isCorrect: i === 0,
    }));

    questions.push({
      id: String(questions.length + 1),
      text: qText,
      options,
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

  data.subjects.anatomy_upper_limb = {
    id: 'anatomy_upper_limb',
    name: 'Anatomy (Upper Limb & Breast)',
    questions,
  };

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  // eslint-disable-next-line no-console
  console.log(`Added subject anatomy_upper_limb with ${questions.length} questions.`);
}

main();

