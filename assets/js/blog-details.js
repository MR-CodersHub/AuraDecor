/* ============================================================
   Blog detail renderer
   Each blog card links here with ?story=<slug> so every story
   opens its own title, imagery, article copy and related links.
   ============================================================ */

(() => {
  const IMG = {
    priya: 'https://i.pinimg.com/736x/58/d3/96/58d396b422a7b273a985960018bec2d8.jpg',
    ramesh: 'https://i.pinimg.com/1200x/ea/c8/2f/eac82f2ebffbb959ae87da174de50797.jpg',
    meera: 'https://i.pinimg.com/736x/26/11/5b/26115b2d925ee3559d7e14f77fd7d3bd.jpg',
    arjun: 'https://i.pinimg.com/736x/48/41/f7/4841f70d09d7dc73b33a41c91f2a9f52.jpg',
    sunita: 'https://i.pinimg.com/1200x/ef/89/48/ef894896f7c7480d14c61ae867f612ab.jpg',
    kavita: 'https://i.pinimg.com/736x/4f/9a/2e/4f9a2ec342f691f1d088c4ff839318fc.jpg',
    bluePottery: 'https://i.pinimg.com/736x/98/40/c8/9840c8abb2a3496eb80e603a8cc63058.jpg',
    kutch: 'https://i.pinimg.com/1200x/0c/f5/13/0cf51335b7f0d069efeeff4e3f924408.jpg',
    dhokra: 'https://i.pinimg.com/736x/09/b5/8f/09b58fe42de19efcdad3d473c5198167.jpg',
    woodcraft: 'https://i.pinimg.com/1200x/6d/93/b2/6d93b2cbcef94022f74bba5a3b130384.jpg',
    living: 'https://i.pinimg.com/736x/3f/a1/08/3fa108d9a0a04e038178b1c1ef52d41f.jpg',
    bedroom: 'https://i.pinimg.com/736x/52/77/3f/52773f6aeec94f134d9ba5f9d88814b9.jpg',
    table: 'https://i.pinimg.com/1200x/5b/82/05/5b82056f3ccb900ecbd52b0985551029.jpg',
    lanterns: 'https://i.pinimg.com/736x/5d/0c/90/5d0c909db41b8cb8489b5a7988d09c1e.jpg'
  };

  const baseSteps = (labels) => labels.map(([title, text], i) => ({
    num: i + 1,
    title,
    text
  }));

  const ARTICLES = {
    'priya-sharma': {
      title: "The Potter's Wheel: Priya Sharma's Journey Through Three Generations",
      titleHtml: "The Potter's Wheel:<br>Priya Sharma's Journey<br><em>Through Three Generations</em>",
      category: 'Pottery & Ceramics',
      author: 'Priya Sharma',
      authorImage: IMG.priya,
      readTime: '8 min read',
      location: 'Jaipur, Rajasthan',
      heroImage: IMG.priya,
      quote: 'Every time I sit at my wheel, I feel like the clay is telling me what it wants to become. My hands just help it get there.',
      quoteCite: 'Priya Sharma, master potter, Sanganer',
      intro: [
        'In a sunlit workshop tucked into the narrow lanes of Sanganer, Priya Sharma begins her day before the city wakes. The clay has warmed in her hands and the day’s first vessel is already taking shape.',
        'Priya is a third-generation potter in a village where pottery is not simply a craft but a language spoken across centuries — passed from grandmother to mother to daughter in the gesture of wet hands on a turning wheel.'
      ],
      gallery: [IMG.lanterns, IMG.bluePottery, IMG.priya],
      sections: [
        { heading: 'The Architecture of Patience', text: 'Priya works on the same kick-wheel her grandmother used for forty years. The timber is worn smooth where hands have rested, and every shelf holds pots in various stages of becoming — raw, leather-hard, bisque-fired and glazed.' },
        { heading: 'From Sanganer to the World', text: 'Her signature “sunrise” glaze took three years to perfect. It now defines the AuraDecor Pottery Collection, appearing on vases, bowls and candle lanterns made by her eight-women collective.' }
      ],
      steps: baseSteps([
        ['Sourcing the Clay', 'Red terracotta clay comes from mineral-rich soil near Sanganer. Each batch is tested for plasticity and moisture before it enters the workshop.'],
        ['Wedging & Centering', 'The clay is wedged by hand to remove air pockets, then centred on the kick-wheel with a sensitivity that twenty-five years of practice has made second nature.'],
        ['Throwing & Shaping', 'Walls are drawn upward with both hands, then refined at the shoulder to create the widening form that defines the Sunrise series.'],
        ['Glaze Firing', 'Three layers of sunrise glaze are applied by hand before a second firing at 1120°C melts the colour into a permanent, food-safe surface.']
      ]),
      tags: ['Pottery', 'Jaipur', 'Artisan Profile', 'Terracotta', 'Women Artisans'],
      related: ['jaipur-blue-pottery', 'ramesh-patel', 'meera-nair'],
      products: [
        { name: 'Terracotta Sunrise Vase', price: '₹2,850', old: '₹3,500', badge: 'Bestseller', image: IMG.priya },
        { name: 'Glazed Ceramic Bowl Set', price: '₹3,600', old: '₹4,200', badge: 'Popular', image: IMG.bluePottery },
        { name: 'Hand-Carved Candle Lantern', price: '₹1,950', old: '', badge: '', image: IMG.lanterns }
      ]
    },

    'ramesh-patel': {
      title: "Threads of Kutch: Ramesh Patel's Handloom Legacy",
      titleHtml: 'Threads of Kutch:<br>Ramesh Patel’s<br><em>Handloom Legacy</em>',
      category: 'Textiles & Weaving',
      author: 'Ramesh Patel',
      authorImage: IMG.ramesh,
      readTime: '7 min read',
      location: 'Kutch, Gujarat',
      heroImage: IMG.ramesh,
      quote: 'The loom keeps time with the desert. Every thread carries a memory of home.',
      quoteCite: 'Ramesh Patel, master weaver, Kutch',
      intro: [
        'Ramesh Patel works at a pit-loom set into the floor of his family home in Kutch. The rhythm of the shuttle is a sound he has known since childhood, long before he could reach the pedals himself.',
        'His textiles are coloured with natural dyes made from indigo, madder and pomegranate rind — a practice his family has kept alive while surrounding workshops have moved to synthetic colour.'
      ],
      gallery: [IMG.kutch, IMG.sunita, IMG.ramesh],
      sections: [
        { heading: 'The Pit Loom', text: 'The loom is set into the earth so the weaver’s feet can find its rhythm naturally. Warp threads are stretched by hand, then passed through the reed before dyeing begins.' },
        { heading: 'Colour from the Earth', text: 'Ramesh mixes his dyes in copper vessels over wood fires. Each batch carries the slight variation of the desert water, making every finished textile quietly one of a kind.' }
      ],
      steps: baseSteps([
        ['Sorting the Cotton', 'Hand-spun cotton is sorted by fibre length and gently washed before it is wound into skeins.'],
        ['Natural Dyeing', 'Indigo, madder and pomegranate dyes are prepared over wood fires, then the yarn is dipped and dried repeatedly to build depth of colour.'],
        ['Warping the Loom', 'Hundreds of threads are measured, wound and threaded through the reed in a process that takes a full day.'],
        ['Weaving & Finishing', 'Ramesh weaves slowly, checking tension by touch, then washes and sun-dries the cloth to soften the hand-spun fibre.']
      ]),
      tags: ['Textiles', 'Kutch', 'Artisan Profile', 'Natural Dyes', 'Handloom'],
      related: ['kutch-handloom', 'sikki-weaving', 'sunita-devi'],
      products: [
        { name: 'Kutchi Handloom Throw', price: '₹4,200', old: '₹4,900', badge: 'Bestseller', image: IMG.kutch },
        { name: 'Natural-Dyed Cushion Cover', price: '₹1,450', old: '', badge: '', image: IMG.ramesh },
        { name: 'Jute & Cotton Table Runner', price: '₹2,100', old: '', badge: 'New', image: IMG.sunita }
      ]
    },

    'meera-nair': {
      title: 'Wood Whisperers: Meera Nair and the Carving Traditions of Kerala',
      titleHtml: 'Wood Whisperers:<br>Meera Nair and the<br><em>Carving Traditions of Kerala</em>',
      category: 'Woodcraft',
      author: 'Meera Nair',
      authorImage: IMG.meera,
      readTime: '6 min read',
      location: 'Thrissur, Kerala',
      heroImage: IMG.meera,
      quote: 'The grain already knows what it wants to be. My job is to listen before I cut.',
      quoteCite: 'Meera Nair, master woodcarver, Thrissur',
      intro: [
        'Meera Nair learned to read wood grain before she learned to hold a chisel. In her workshop in Thrissur, mango and rosewood are stacked to season for years before a single cut is made.',
        'Her work carries the quiet geometry of Kerala temple carving, simplified for contemporary homes — low stools, carved panels and vessels that let the timber speak for itself.'
      ],
      gallery: [IMG.woodcraft, IMG.meera, IMG.table],
      sections: [
        { heading: 'Seasoning the Timber', text: 'Wood is stored under cover for up to three years. Meera believes rushing this stage is the surest way to lose a piece to warping.' },
        { heading: 'Carving with the Grain', text: 'Each form is roughed out with a hand plane, then detailed with chisels that follow the natural direction of the fibre rather than fighting it.' }
      ],
      steps: baseSteps([
        ['Selecting the Log', 'Timber is chosen for grain pattern and density, then cut to rough size and left to season.'],
        ['Rough Shaping', 'A hand plane and saw establish the main silhouette before any fine detail is attempted.'],
        ['Hand Carving', 'Chisels and gouges cut with the grain, revealing the carved relief slowly over several days.'],
        ['Oil Finishing', 'The finished piece is rubbed with natural oils that deepen the colour and protect the surface without a plastic sheen.']
      ]),
      tags: ['Woodcraft', 'Kerala', 'Artisan Profile', 'Hand Carving', 'Furniture'],
      related: ['kerala-woodcraft', 'living-room-essentials', 'arjun-mehta'],
      products: [
        { name: 'Carved Mango Wood Stool', price: '₹5,400', old: '₹6,200', badge: 'Bestseller', image: IMG.meera },
        { name: 'Rosewood Wall Panel', price: '₹8,900', old: '', badge: '', image: IMG.woodcraft },
        { name: 'Seasoned Teak Serving Board', price: '₹2,300', old: '', badge: 'New', image: IMG.table }
      ]
    },

    'arjun-mehta': {
      title: "Dhokra Fire: Arjun Mehta's Lost-Wax Metalcraft",
      titleHtml: 'Dhokra Fire:<br>Arjun Mehta’s<br><em>Lost-Wax Metalcraft</em>',
      category: 'Craft Traditions',
      author: 'Arjun Mehta',
      authorImage: IMG.arjun,
      readTime: '5 min read',
      location: 'Moradabad, U.P.',
      heroImage: IMG.arjun,
      quote: 'No two Dhokra pieces can ever be identical. The fire decides the final line.',
      quoteCite: 'Arjun Mehta, master metalsmith, Moradabad',
      intro: [
        'Arjun Mehta works in the tradition of Dhokra, one of India’s oldest metal-casting techniques. His tools are simple, but the process demands an exact understanding of wax, clay and molten brass.',
        'Every object begins as a hand-modelled wax form. It is encased in clay, heated until the wax melts away, and replaced with metal — a transformation Arjun describes as “a small act of alchemy”.'
      ],
      gallery: [IMG.dhokra, IMG.arjun, IMG.table],
      sections: [
        { heading: 'The Wax Original', text: 'Arjun builds each figure or vessel in beeswax and resin, pressing texture into the surface with simple hand tools. Once cast, the mould is broken and the original is lost forever.' },
        { heading: 'The Moment of Pour', text: 'Molten brass is poured into the heated clay mould. The metal finds every fingerprint left in the wax, preserving impressions no machine could reproduce.' }
      ],
      steps: baseSteps([
        ['Modelling the Wax', 'A unique form is hand-built in wax and refined with engraved details.'],
        ['Clay Moulding', 'Layers of fine and coarse clay are applied around the wax and left to dry slowly.'],
        ['Lost-Wax Firing', 'The mould is heated until the wax drains away, leaving a hollow cavity.'],
        ['Pouring & Finishing', 'Brass is poured in, the clay is broken open, and the casting is filed, polished and lightly patinated.']
      ]),
      tags: ['Metal', 'Dhokra', 'Artisan Profile', 'Moradabad', 'Lost Wax'],
      related: ['dhokra-metal', 'madhubani-art', 'meera-nair'],
      products: [
        { name: 'Dhokra Brass Vessel', price: '₹3,800', old: '₹4,400', badge: 'Bestseller', image: IMG.dhokra },
        { name: 'Cast Brass Wall Object', price: '₹2,650', old: '', badge: '', image: IMG.arjun },
        { name: 'Hand-Engraved Tray', price: '₹1,950', old: '', badge: 'New', image: IMG.table }
      ]
    },

    'sunita-devi': {
      title: 'Golden Grass: Sunita Devi and the Quiet Craft of Sikki Weaving',
      titleHtml: 'Golden Grass:<br>Sunita Devi and the<br><em>Quiet Craft of Sikki Weaving</em>',
      category: 'Textiles & Weaving',
      author: 'Sunita Devi',
      authorImage: IMG.sunita,
      readTime: '5 min read',
      location: 'Muzaffarpur, Bihar',
      heroImage: IMG.sunita,
      quote: 'The grass is golden for only a few weeks. We have to gather it at exactly the right time.',
      quoteCite: 'Sunita Devi, Sikki grass weaver, Bihar',
      intro: [
        'Sunita Devi gathers sikki grass from the floodplains of Bihar in the brief window when its colour is most luminous. The stems are dried, split and softened before they can be woven.',
        'Her baskets and decorative objects are made without looms, using only the hands and a simple needle — a technique passed between women in her village for generations.'
      ],
      gallery: [IMG.sunita, IMG.kutch, IMG.bedroom],
      sections: [
        { heading: 'Harvesting the Light', text: 'Sikki grass is cut after the monsoon and dried in shade. Only the inner stalk is used, split into fine strands that catch the light like spun gold.' },
        { heading: 'Weaving Without a Loom', text: 'Sunita builds form from the base upward, coiling and stitching with a needle. A single basket can take three days of steady, patient work.' }
      ],
      steps: baseSteps([
        ['Gathering & Drying', 'Grass is harvested at peak colour and dried in shade to preserve its golden tone.'],
        ['Splitting the Stalk', 'The inner fibre is separated into fine, flexible strands by hand.'],
        ['Coiling the Form', 'Strands are coiled and stitched around a base, with the shape guided entirely by touch.'],
        ['Final Binding', 'Edges are secured and the surface is lightly dampened and shaped before sun-drying.']
      ]),
      tags: ['Weaving', 'Bihar', 'Artisan Profile', 'Sikki', 'Women Artisans'],
      related: ['sikki-weaving', 'ramesh-patel', 'kavita-jha'],
      products: [
        { name: 'Golden Sikki Basket', price: '₹2,450', old: '₹2,900', badge: 'Bestseller', image: IMG.sunita },
        { name: 'Woven Storage Bowl', price: '₹1,650', old: '', badge: '', image: IMG.kutch },
        { name: 'Sikki Wall Ornament', price: '₹1,200', old: '', badge: 'New', image: IMG.bedroom }
      ]
    },

    'kavita-jha': {
      title: 'Sacred Walls: Kavita Jha and the Madhubani Painting Tradition',
      titleHtml: 'Sacred Walls:<br>Kavita Jha and the<br><em>Madhubani Tradition</em>',
      category: 'Folk Art',
      author: 'Kavita Jha',
      authorImage: IMG.kavita,
      readTime: '8 min read',
      location: 'Madhubani, Bihar',
      heroImage: IMG.kavita,
      quote: 'A Madhubani painting is a prayer made visible. Every line has a purpose.',
      quoteCite: 'Kavita Jha, Madhubani painter, Bihar',
      intro: [
        'Kavita Jha paints the way women in her family have for generations — first drawing a boundary of repeated motifs, then filling the space with gods, birds, fish and flowering trees.',
        'Her panels have travelled to galleries abroad, but she still works seated on the floor, using fingers, twigs and fine nib pens rather than brushes.'
      ],
      gallery: [IMG.kavita, IMG.bluePottery, IMG.living],
      sections: [
        { heading: 'The Language of Motifs', text: 'Fish represent prosperity, the sun marks new beginnings, and bamboo borders protect the composition. Kavita explains each symbol as she works, treating the image as a form of storytelling.' },
        { heading: 'From Wall to Paper', text: 'What began as wedding and festival painting on mud walls is now made on handmade paper and cloth, allowing the tradition to travel without losing its ritual roots.' }
      ],
      steps: baseSteps([
        ['Preparing the Surface', 'Handmade paper or cloth is sized with a thin natural wash and left to dry flat.'],
        ['Drawing the Border', 'A frame of repeating motifs is drawn first, establishing the rhythm of the whole composition.'],
        ['Filling the Field', 'Figurative motifs are added in fine black line, then filled with flat, symbolic colour.'],
        ['Final Details', 'Dot work and fine line patterns bring the surface to life before the piece is sealed.']
      ]),
      tags: ['Folk Art', 'Madhubani', 'Artisan Profile', 'Bihar', 'Painting'],
      related: ['madhubani-art', 'sunita-devi', 'arjun-mehta'],
      products: [
        { name: 'Madhubani Framed Panel', price: '₹4,600', old: '₹5,200', badge: 'Bestseller', image: IMG.kavita },
        { name: 'Hand-Painted Cushion', price: '₹2,200', old: '', badge: '', image: IMG.living },
        { name: 'Folk Art Greeting Set', price: '₹650', old: '', badge: 'New', image: IMG.bluePottery }
      ]
    },

    'jaipur-blue-pottery': {
      title: 'The Ancient Art of Jaipur Blue Pottery — A 400-Year Legacy',
      titleHtml: 'The Ancient Art of Jaipur<br>Blue Pottery — <em>A 400-Year Legacy</em>',
      category: 'Pottery & Ceramics',
      author: 'Priya Sharma',
      authorImage: IMG.priya,
      readTime: '6 min read',
      location: 'Jaipur, Rajasthan',
      heroImage: IMG.bluePottery,
      quote: 'Blue pottery is clay without clay. Its beauty comes from patience, not from the wheel.',
      quoteCite: 'Priya Sharma, Jaipur blue pottery',
      intro: [
        'Jaipur blue pottery arrived from Persia and found a new home in Rajasthan four centuries ago. Unlike regular ceramics, it is made from a quartz-and-plaster body that is never thrown on a wheel.',
        'The palette is deliberately restrained — cobalt blue, turquoise, green and white — with patterns drawn freehand using fine brushes made from squirrel hair.'
      ],
      gallery: [IMG.bluePottery, IMG.priya, IMG.lanterns],
      sections: [
        { heading: 'A Material Unlike Clay', text: 'The body is made from quartz, sand, plaster and sajji, kneaded into a dough-like mass and shaped by hand or in moulds. It air-dries rather than needing a first firing.' },
        { heading: 'Painting in Cobalt', text: 'Artists paint directly onto the dry surface, covering it with a transparent glaze before a single high-temperature firing fixes the design permanently.' }
      ],
      steps: baseSteps([
        ['Preparing the Body', 'Quartz, plaster and sajji are mixed and kneaded until smooth and pliable.'],
        ['Hand Shaping', 'The material is pressed into moulds or shaped by hand, then left to dry in shade.'],
        ['Freehand Painting', 'Cobalt and turquoise motifs are painted freehand with fine brushes and botanical geometry.'],
        ['Glaze Firing', 'A clear glaze is applied and the piece is fired at high temperature to lock in colour.']
      ]),
      tags: ['Pottery', 'Jaipur', 'Blue Pottery', 'Craft Tradition', 'Rajasthan'],
      related: ['priya-sharma', 'madhubani-art', 'kutch-handloom'],
      products: [
        { name: 'Blue Pottery Spice Jars', price: '₹1,850', old: '', badge: 'Bestseller', image: IMG.bluePottery },
        { name: 'Cobalt Ceramic Bowl', price: '₹2,400', old: '₹2,800', badge: '', image: IMG.priya },
        { name: 'Hand-Painted Tile Set', price: '₹1,200', old: '', badge: 'New', image: IMG.lanterns }
      ]
    },

    'kutch-handloom': {
      title: 'Threads of Identity: The Handloom Traditions of Kutch',
      titleHtml: 'Threads of Identity:<br>The Handloom Traditions<br><em>of Kutch</em>',
      category: 'Textiles & Weaving',
      author: 'Ramesh Patel',
      authorImage: IMG.ramesh,
      readTime: '7 min read',
      location: 'Kutch, Gujarat',
      heroImage: IMG.kutch,
      quote: 'In Kutch, a woven cloth is a record of the family that made it.',
      quoteCite: 'Ramesh Patel, master weaver, Kutch',
      intro: [
        'The arid plains of Kutch produce textiles of extraordinary beauty using pit-looms, hand-spun yarn and naturally dyed threads passed down through generations.',
        'Each community in the region has its own vocabulary of stripes, borders and motifs, making a handloom textile as readable as a family name.'
      ],
      gallery: [IMG.kutch, IMG.ramesh, IMG.sunita],
      sections: [
        { heading: 'Woven Identity', text: 'Border patterns and colour sequences identify the wearer’s community and village. Weavers describe these combinations as a language rather than a design choice.' },
        { heading: 'Dyes from the Desert', text: 'Indigo, madder and iron are still prepared by hand. The slight irregularity of natural dye is celebrated as the signature of the maker.' }
      ],
      steps: baseSteps([
        ['Spinning the Yarn', 'Cotton is hand-spun into fine, slightly irregular thread with a distinctive softness.'],
        ['Natural Dye Baths', 'Yarn is dipped repeatedly in plant-based dyes and dried in the desert sun.'],
        ['Setting the Warp', 'Threads are measured and stretched on the pit-loom, then threaded through the reed by hand.'],
        ['Weaving the Cloth', 'The weaver works slowly, keeping tension even and introducing motif bands from memory.']
      ]),
      tags: ['Textiles', 'Kutch', 'Handloom', 'Natural Dyes', 'Craft Tradition'],
      related: ['ramesh-patel', 'sikki-weaving', 'jaipur-blue-pottery'],
      products: [
        { name: 'Kutchi Woven Throw', price: '₹4,200', old: '₹4,900', badge: 'Bestseller', image: IMG.kutch },
        { name: 'Handloom Cushion Cover', price: '₹1,450', old: '', badge: '', image: IMG.ramesh },
        { name: 'Desert Stripe Table Runner', price: '₹2,100', old: '', badge: 'New', image: IMG.sunita }
      ]
    },

    'dhokra-metal': {
      title: "Dhokra: India's Oldest Lost-Wax Metal Casting Tradition",
      titleHtml: "Dhokra: India's Oldest<br>Lost-Wax Metal<br><em>Casting Tradition</em>",
      category: 'Craft Traditions',
      author: 'Arjun Mehta',
      authorImage: IMG.arjun,
      readTime: '5 min read',
      location: 'Moradabad, U.P.',
      heroImage: IMG.dhokra,
      quote: 'The mould is broken to release the object. Nothing can ever be repeated exactly.',
      quoteCite: 'Arjun Mehta, Dhokra metalsmith',
      intro: [
        'More than four thousand years old, Dhokra casting creates brass and bronze objects that can never be exactly replicated. Each piece carries the fingerprints of the wax original.',
        'The technique is practised by tribal communities across central and eastern India, with regional variations in figure style and surface decoration.'
      ],
      gallery: [IMG.dhokra, IMG.arjun, IMG.table],
      sections: [
        { heading: 'A Technique Older than Memory', text: 'Archaeologists have found Dhokra objects in ancient sites across the subcontinent. The method survives because it requires no workshop machinery — only fire, clay, wax and skill.' },
        { heading: 'Imperfection as Signature', text: 'Small irregularities from the broken mould are left visible. They are proof that the object was made by hand rather than reproduced by machine.' }
      ],
      steps: baseSteps([
        ['Wax Modelling', 'A unique form is built in wax and decorated with hand-pressed texture.'],
        ['Clay Encasement', 'Fine and coarse clay layers surround the wax and dry slowly in shade.'],
        ['Burning Out', 'Heat melts the wax away, leaving a precise cavity inside the clay shell.'],
        ['Metal Pour', 'Molten brass is poured in; once cool, the clay is broken and the casting is finished.']
      ]),
      tags: ['Metal', 'Dhokra', 'Craft Tradition', 'Lost Wax', 'Moradabad'],
      related: ['arjun-mehta', 'madhubani-art', 'kerala-woodcraft'],
      products: [
        { name: 'Dhokra Brass Vessel', price: '₹3,800', old: '₹4,400', badge: 'Bestseller', image: IMG.dhokra },
        { name: 'Cast Brass Wall Object', price: '₹2,650', old: '', badge: '', image: IMG.arjun },
        { name: 'Textured Brass Tray', price: '₹1,950', old: '', badge: 'New', image: IMG.table }
      ]
    },

    'kerala-woodcraft': {
      title: 'Wood Whisperers: The Carving Traditions of Kerala',
      titleHtml: 'Wood Whisperers:<br>The Carving Traditions<br><em>of Kerala</em>',
      category: 'Woodcraft',
      author: 'Meera Nair',
      authorImage: IMG.meera,
      readTime: '6 min read',
      location: 'Thrissur, Kerala',
      heroImage: IMG.woodcraft,
      quote: 'The log already contains the form. The carver only removes what does not belong.',
      quoteCite: 'Meera Nair, Kerala woodcarver',
      intro: [
        'Kerala’s wood-carving masters work with the grain itself, believing each log already contains the form it wishes to become. The tradition is visible in temple ceilings, doorframes and household objects.',
        'Today a new generation of carvers is translating those temple forms into quieter pieces for contemporary interiors — stools, panels and small vessels.'
      ],
      gallery: [IMG.woodcraft, IMG.meera, IMG.living],
      sections: [
        { heading: 'The Temple Lineage', text: 'Temple carving demanded extraordinary patience and symbolic precision. Modern makers carry that discipline into household objects without the religious iconography.' },
        { heading: 'Working with Seasoned Timber', text: 'Wood is seasoned for years before carving. Meera says the wait is the least visible and most important part of the craft.' }
      ],
      steps: baseSteps([
        ['Seasoning', 'Timber is stored under cover for up to three years to stabilise its moisture.'],
        ['Roughing Out', 'The main silhouette is established with hand planes and saws.'],
        ['Detail Carving', 'Chisels follow the grain to reveal shallow relief and softened edges.'],
        ['Natural Finish', 'Oil is rubbed into the surface to deepen colour and protect the wood.']
      ]),
      tags: ['Woodcraft', 'Kerala', 'Hand Carving', 'Craft Tradition', 'Furniture'],
      related: ['meera-nair', 'living-room-essentials', 'dhokra-metal'],
      products: [
        { name: 'Carved Teak Stool', price: '₹5,400', old: '₹6,200', badge: 'Bestseller', image: IMG.meera },
        { name: 'Relief Wall Panel', price: '₹8,900', old: '', badge: '', image: IMG.woodcraft },
        { name: 'Rosewood Serving Board', price: '₹2,300', old: '', badge: 'New', image: IMG.living }
      ]
    },

    'madhubani-art': {
      title: 'Madhubani: When Village Walls Became Sacred Canvas',
      titleHtml: 'Madhubani: When Village<br>Walls Became<br><em>Sacred Canvas</em>',
      category: 'Folk Art',
      author: 'Kavita Jha',
      authorImage: IMG.kavita,
      readTime: '8 min read',
      location: 'Madhubani, Bihar',
      heroImage: IMG.kavita,
      quote: 'Every line is a small prayer for the household that will live beneath it.',
      quoteCite: 'Kavita Jha, Madhubani painter',
      intro: [
        'Originally painted on mud walls for weddings and festivals, Madhubani art has travelled from Bihar’s villages to galleries worldwide — yet it remains rooted in ritual and community.',
        'The paintings are made by women, using natural pigments and an unbroken line of fine motifs that bless the home and celebrate the natural world.'
      ],
      gallery: [IMG.kavita, IMG.living, IMG.bluePottery],
      sections: [
        { heading: 'Walls as Ceremony', text: 'A bride’s room was once painted from floor to ceiling before the wedding. The images invoked prosperity, fertility and protection for the new household.' },
        { heading: 'A Living Vocabulary', text: 'Fish, lotus, bamboo and peacocks form a shared symbolic language. Younger artists now reinterpret these motifs on paper, cloth and everyday objects.' }
      ],
      steps: baseSteps([
        ['Preparing the Wall or Paper', 'A natural wash creates a soft, even ground for the line work.'],
        ['Drawing the Border', 'Repeated geometric motifs frame the composition and establish rhythm.'],
        ['Painting the Figures', 'Fine lines describe deities, animals and plants using pigments from plants and minerals.'],
        ['Completing the Pattern', 'Dots and hatch marks fill the remaining space, leaving no area empty.']
      ]),
      tags: ['Folk Art', 'Madhubani', 'Bihar', 'Painting', 'Craft Tradition'],
      related: ['kavita-jha', 'sikki-weaving', 'jaipur-blue-pottery'],
      products: [
        { name: 'Madhubani Framed Panel', price: '₹4,600', old: '₹5,200', badge: 'Bestseller', image: IMG.kavita },
        { name: 'Hand-Painted Cushion', price: '₹2,200', old: '', badge: '', image: IMG.living },
        { name: 'Folk Art Greeting Set', price: '₹650', old: '', badge: 'New', image: IMG.bluePottery }
      ]
    },

    'sikki-weaving': {
      title: 'Golden Grass: The Quiet Craft of Sikki Weaving in Bihar',
      titleHtml: 'Golden Grass:<br>The Quiet Craft of<br><em>Sikki Weaving in Bihar</em>',
      category: 'Craft Traditions',
      author: 'Sunita Devi',
      authorImage: IMG.sunita,
      readTime: '5 min read',
      location: 'Muzaffarpur, Bihar',
      heroImage: IMG.sunita,
      quote: 'A single basket holds several days of gathering, drying and quiet, patient weaving.',
      quoteCite: 'Sunita Devi, Sikki grass weaver',
      intro: [
        'Harvested from Bihar’s floodplains, golden sikki grass is hand-woven by women artisans into objects of extraordinary intricacy — a tradition endangered but resilient.',
        'The craft requires no loom. The grass is split, softened and coiled by hand into baskets, bowls and ceremonial objects with a warm, honeyed glow.'
      ],
      gallery: [IMG.sunita, IMG.bedroom, IMG.kutch],
      sections: [
        { heading: 'A Short Harvest Window', text: 'Sikki grass must be gathered at exactly the right moment. Too early and it lacks strength; too late and the golden colour fades.' },
        { heading: 'Women Keeping the Craft Alive', text: 'In villages around Muzaffarpur, the skill passes from mothers to daughters. New collaborations with designers are helping the craft reach a wider audience.' }
      ],
      steps: baseSteps([
        ['Harvesting', 'Grass is cut from floodplain meadows at peak colour and dried in shade.'],
        ['Splitting', 'Each stalk is split into fine, flexible strands with a simple tool.'],
        ['Coiling & Stitching', 'Strands are coiled into form and secured with a needle and softer sikki fibre.'],
        ['Shaping & Drying', 'The finished object is dampened, shaped by hand and dried in the sun.']
      ]),
      tags: ['Weaving', 'Sikki', 'Bihar', 'Craft Tradition', 'Women Artisans'],
      related: ['sunita-devi', 'kutch-handloom', 'madhubani-art'],
      products: [
        { name: 'Golden Sikki Basket', price: '₹2,450', old: '₹2,900', badge: 'Bestseller', image: IMG.sunita },
        { name: 'Woven Storage Bowl', price: '₹1,650', old: '', badge: '', image: IMG.bedroom },
        { name: 'Sikki Wall Ornament', price: '₹1,200', old: '', badge: 'New', image: IMG.kutch }
      ]
    },

    'living-room-essentials': {
      title: 'How to Style a Living Room with Earthy Artisan Pieces',
      titleHtml: 'How to Style a Living Room<br>with <em>Earthy Artisan Pieces</em>',
      category: 'Home Styling',
      author: 'AuraDecor Studio',
      authorImage: IMG.priya,
      readTime: '4 min read',
      location: 'Studio Journal',
      heroImage: IMG.living,
      quote: 'A warm room is built from layers — clay underfoot, wood at the centre and textile in between.',
      quoteCite: 'AuraDecor Studio',
      intro: [
        'Layering terracotta, natural wood and handwoven textiles creates a living room that feels grounded rather than decorated. Begin with a restrained base and let the materials carry the warmth.',
        'The secret is repetition: echo one earthy tone in the pottery, another in the timber and a third in the weave, so the room reads as a single considered composition.'
      ],
      gallery: [IMG.living, IMG.woodcraft, IMG.kutch],
      sections: [
        { heading: 'Start with the Ground', text: 'A handwoven rug in undyed wool or jute sets the texture. Keep the palette quiet so larger pieces can sit comfortably above it.' },
        { heading: 'Layer at Three Heights', text: 'Place a low wooden table, a mid-height ceramic vessel and a tall woven screen or branch. The eye travels through the room instead of stopping at one object.' }
      ],
      steps: baseSteps([
        ['Choose a Base Palette', 'Pick two earth tones and one neutral, then repeat them across large surfaces.'],
        ['Add a Woven Layer', 'A handloom rug or throw introduces softness without visual noise.'],
        ['Place a Wood Anchor', 'One sculptural wooden piece grounds the seating arrangement.'],
        ['Finish with Clay', 'Group two or three handmade vessels in varying heights, leaving empty space around them.']
      ]),
      tags: ['Home Styling', 'Living Room', 'Terracotta', 'Woodcraft', 'Textiles'],
      related: ['bedroom-lighting', 'handcrafted-table', 'kerala-woodcraft'],
      products: [
        { name: 'Terracotta Sunrise Vase', price: '₹2,850', old: '₹3,500', badge: 'Bestseller', image: IMG.priya },
        { name: 'Handwoven Jute Rug', price: '₹6,900', old: '', badge: '', image: IMG.kutch },
        { name: 'Carved Mango Wood Stool', price: '₹5,400', old: '', badge: 'New', image: IMG.woodcraft }
      ]
    },

    'bedroom-lighting': {
      title: 'Bedroom Ambiance with Handmade Lighting',
      titleHtml: 'Bedroom Ambiance<br>with <em>Handmade Lighting</em>',
      category: 'Home Styling',
      author: 'AuraDecor Studio',
      authorImage: IMG.lanterns,
      readTime: '4 min read',
      location: 'Studio Journal',
      heroImage: IMG.bedroom,
      quote: 'Handmade light does not just brighten a room. It changes the way the room feels after dusk.',
      quoteCite: 'AuraDecor Studio',
      intro: [
        'A bedroom lit only by a ceiling fixture often feels clinical. Handmade lighting introduces pools of warmth that make the space feel softer and more intimate.',
        'Pair a hand-carved lantern with a woven shade and a low ceramic lamp, then keep the rest of the lighting deliberately dim.'
      ],
      gallery: [IMG.bedroom, IMG.lanterns, IMG.sunita],
      sections: [
        { heading: 'Light at Eye Level', text: 'Place one warm source close to the bed and another near a reading chair. Avoid lighting the centre of the room from directly overhead.' },
        { heading: 'Materials That Glow', text: 'Terracotta, amber glass and split sikki grass all filter light gently, creating shadows with texture rather than glare.' }
      ],
      steps: baseSteps([
        ['Map the Corners', 'Identify where you read, rest and dress, then place a light source near each.'],
        ['Choose a Warm Shade', 'Pick a handmade shade that diffuses light rather than directing it downward.'],
        ['Add a Low Accent', 'A small lantern on a bedside table creates a soft pool of light for evenings.'],
        ['Keep It Dimmable', 'Use warm bulbs and dimmers so the room can shift from morning to night.']
      ]),
      tags: ['Home Styling', 'Bedroom', 'Lighting', 'Terracotta', 'Ambience'],
      related: ['living-room-essentials', 'handcrafted-table', 'sikki-weaving'],
      products: [
        { name: 'Hand-Carved Terracotta Lantern', price: '₹3,200', old: '₹3,800', badge: 'Bestseller', image: IMG.lanterns },
        { name: 'Sikki Woven Lamp Shade', price: '₹1,850', old: '', badge: '', image: IMG.sunita },
        { name: 'Amber Glass Table Lamp', price: '₹2,750', old: '', badge: 'New', image: IMG.bedroom }
      ]
    },

    'handcrafted-table': {
      title: 'Setting a Handcrafted Table for Every Occasion',
      titleHtml: 'Setting a Handcrafted Table<br><em>for Every Occasion</em>',
      category: 'Home Styling',
      author: 'AuraDecor Studio',
      authorImage: IMG.table,
      readTime: '5 min read',
      location: 'Studio Journal',
      heroImage: IMG.table,
      quote: 'A handmade table does not need matching pieces. It needs pieces that know each other.',
      quoteCite: 'AuraDecor Studio',
      intro: [
        'The most memorable tables are assembled slowly: a carved wooden board, a stack of hand-thrown bowls, a woven runner gathered over years of travel and market visits.',
        'Mix materials rather than matching sets. The differences in glaze, grain and weave are what give a handcrafted table its ease.'
      ],
      gallery: [IMG.table, IMG.bluePottery, IMG.dhokra],
      sections: [
        { heading: 'Build a Quiet Base', text: 'Start with a plain linen or handloom runner. Let a single textured surface organize the objects placed above it.' },
        { heading: 'Mix Craft Disciplines', text: 'Pair blue pottery bowls with brass accents and a carved wooden board. Contrast makes each material more visible.' }
      ],
      steps: baseSteps([
        ['Lay the Runner', 'Choose a natural fibre that softens the table without competing with the objects.'],
        ['Place the Anchor', 'A carved board or large ceramic platter becomes the visual centre.'],
        ['Mix Small Pieces', 'Combine bowls, brass objects and woven coasters in odd numbers.'],
        ['Finish with Light', 'A low lantern keeps the table warm without blocking conversation.']
      ]),
      tags: ['Home Styling', 'Dining', 'Table Setting', 'Pottery', 'Woodcraft'],
      related: ['living-room-essentials', 'bedroom-lighting', 'jaipur-blue-pottery'],
      products: [
        { name: 'Carved Serving Board', price: '₹2,300', old: '', badge: 'Bestseller', image: IMG.table },
        { name: 'Blue Pottery Bowl Set', price: '₹2,400', old: '₹2,800', badge: '', image: IMG.bluePottery },
        { name: 'Dhokra Brass Accent', price: '₹1,950', old: '', badge: 'New', image: IMG.dhokra }
      ]
    }
  };

  let param = new URLSearchParams(window.location.search).get('story');
  if (!param && window.location.hash.startsWith('#story=')) {
    param = decodeURIComponent(window.location.hash.slice(7));
  }
  const article = ARTICLES[param] || ARTICLES['priya-sharma'];

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = value;
  };

  const tagBlock = (tags, cls) => tags.map((tag) => `<span class="${cls}">${tag}</span>`).join('');

  document.title = `${article.title} — AuraDecor Blog`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', `${article.title}. An AuraDecor story from ${article.location}.`);

  setText('#articleHeroBg', '');
  const heroBg = document.querySelector('#articleHeroBg');
  if (heroBg) heroBg.style.backgroundImage = `url('${article.heroImage}')`;

  setText('#articleCategoryLabel', `<span><i class="fas fa-star"></i></span><span>${article.category}</span>`);
  setText('#articleTitle', article.titleHtml);
  setText('#articleMeta', `
    <img src="${article.authorImage}" alt="${article.author}">
    <span>By <strong>${article.author}</strong></span>
    <span>·</span>
    <span>November 2026</span>
    <span>·</span>
    <span>${article.readTime}</span>
    <span>·</span>
    <span>${article.location}</span>
  `);

  setText('#articleDynamic', `
    <div class="article-pull-quote">
      <blockquote>“${article.quote}”</blockquote>
      <cite>— ${article.quoteCite}</cite>
    </div>
    ${article.intro.map((p) => `<p>${p}</p>`).join('')}
    <div class="article-two-col">
      ${article.gallery.slice(0, 2).map((src, i) => `<img src="${src}" alt="${article.title} detail ${i + 1}">`).join('')}
    </div>
    ${article.sections.map((s) => `<h2>${s.heading}</h2><p>${s.text}</p>`).join('')}
    ${article.gallery[2] ? `<img src="${article.gallery[2]}" alt="${article.title} workshop detail">` : ''}
    <h2>The Artisan Journey: Step by Step</h2>
    <div class="process-steps">
      ${article.steps.map((step) => `
        <div class="process-step">
          <div class="step-num">${step.num}</div>
          <div class="step-content">
            <h4>${step.title}</h4>
            <p>${step.text}</p>
          </div>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--warm-sand);">
      <strong style="font-size:.82rem;color:var(--charcoal);text-transform:uppercase;letter-spacing:.1em;">Tags:</strong>
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.8rem;">
        ${tagBlock(article.tags, 'blog-tag')}
      </div>
    </div>
  `);

  setText('#sidebarArtisan', `
    <h4>About the Maker</h4>
    <div class="sidebar-artisan">
      <img src="${article.authorImage}" alt="${article.author}">
      <div>
        <h5>${article.author}</h5>
        <p>${article.category} · ${article.location}</p>
      </div>
    </div>
    <p style="font-size:.82rem;color:#666;line-height:1.6;margin-bottom:.8rem;">${article.intro[0]}</p>
    <a href="services.html" class="btn-primary" style="display:block;text-align:center;text-decoration:none;font-size:.85rem;">Explore the Collection</a>
  `);

  setText('#sidebarRelated', article.related.map((slug) => {
    const rel = ARTICLES[slug];
    return `
      <div class="sidebar-related-article">
        <img src="${rel.heroImage}" alt="">
        <a href="blog-details.html?story=${slug}">${rel.title}</a>
      </div>
    `;
  }).join(''));

  setText('#sidebarTags', tagBlock(article.tags, 'sidebar-tag'));

  setText('#productsHeading', `Shop ${article.category}<br><em>Collection</em>`);
  setText('#productsGrid', article.products.map((product) => `
    <article class="product-card">
      <div class="product-card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge" style="background:var(--deep-olive)">${product.badge}</span>` : ''}
      </div>
      <div class="product-card-body">
        <p class="product-category">${article.category}</p>
        <h3>${product.name}</h3>
        <div class="product-pricing">
          <span class="price-current">${product.price}</span>
          ${product.old ? `<span class="price-old">${product.old}</span>` : ''}
        </div>
        <div class="product-card-actions">
          <a href="service-details.html" class="btn-detail" style="flex:1;justify-content:center;">View Details</a>
        </div>
      </div>
    </article>
  `).join(''));

  setText('#relatedStoriesGrid', article.related.map((slug) => {
    const rel = ARTICLES[slug];
    return `
      <article class="blog-card">
        <div class="blog-card-img">
          <img src="${rel.heroImage}" alt="${rel.title}" loading="lazy">
        </div>
        <div class="blog-card-body">
          <div class="blog-card-meta"><span>${rel.author} · ${rel.readTime}</span></div>
          <h3 class="blog-card-title">${rel.title}</h3>
          <a href="blog-details.html?story=${slug}" class="blog-card-link">Read Story <i class="fas fa-arrow-right"></i></a>
        </div>
      </article>
    `;
  }).join(''));
})();
