//Archive
const scansCatalogue = [
    {title: '28 y F',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor journal',
        height: 3.5,
        width: 5.5,
        tags: ['local scene'],
        fileName: '202528yF'
    },
    {title: 'A Study in Bloom No. 1',
        partOfSeries: 'A Study in Bloom',
        year: 2022,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['floral', 'learning exercise'],
        fileName: '2022aStudyInBloomNo1'
    },
    {title: 'A Study in Bloom No. 2',
        partOfSeries: 'A Study in Bloom',
        year: 2022,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['floral', 'learning exercise'],
        fileName: '2022aStudyInBloomNo2'
    },
    {title: 'A Study in Bloom No. 3',
        partOfSeries: 'A Study in Bloom',
        year: 2022,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['floral', 'learning exercise'],
        fileName: '2022aStudyInBloomNo3'
    },
    {title: 'The Adventures of Zelda No. 1',
        partOfSeries: 'The Adventures of Zelda',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 12,
        width: 9,
        tags: ['pop culture', 'hand-lettering'],
        fileName: '2024theAdventuresOfZeldaNo1'
    },
    {title: 'The Adventures of Zelda No. 2',
        partOfSeries: 'The Adventures of Zelda',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 12,
        width: 9,
        tags: ['pop culture', 'hand-lettering'],
        fileName: '2024theAdventuresOfZeldaNo2'
    },
    {title: 'The Adventures of Zelda No. 3',
        partOfSeries: 'The Adventures of Zelda',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 12,
        width: 9,
        tags: ['pop culture', 'hand-lettering'],
        fileName: '2024theAdventuresOfZeldaNo3'
    },
    {title: 'The Aerialist',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['dancer'],
        fileName: '2023theAerialist'
    },
    {title: 'Alexis the Dancer',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['pin up', 'dancer'],
        fileName: '2024alexisDancer'
    },
    {title: 'Amandita',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['dancer'],
        fileName: '2024amandita'
    },
    {title: 'Americana',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['pop culture', 'music'],
        fileName: '2025americana'
    },
    {title: 'Amorcito Flash Sheet',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['flash', 'traditional American tattoo', 'hand-lettering'],
        fileName: '2021amorcitoFlashSheet'
    },
    {title: 'Arachnids',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 3.5,
        width: 5.5,
        tags: ['hand-lettering'],
        fileName: '2025arachnids'
    },
    {title: 'La Bailarina',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['dancer'],
        fileName: '2023laBailarina'
    },
    {title: 'Birthday Faerie', //TODO
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 0,
        width: 0,
        tags: ['dancer', 'fantasy'],
        fileName: '2025birthdayFaerie'
    },
    {title: 'Blue Bloom',
        partOfSeries: '',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 2.5,
        width: 2.5,
        tags: ['floral'],
        fileName: '2016blueBloom'
    },
    {title: 'Blue Dancer', //TODO
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor paper',
        height: 0,
        width: 0,
        tags: ['dancer'],
        fileName: '2025blueDancer'
    },
    {title: 'Blue Flower',
        partOfSeries: 'Purple Flash Cards',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 4,
        width: 6,
        tags: ['floral'],
        fileName: '2023blueFlower'
    },
    {title: 'Blob cats 23',//TODO
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 0,
        width: 0,
        tags: ['creative exercise', 'blob painting', 'cat'],
        fileName: '2023blobCats'
    },
    {title: 'Blob cats 24',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 3.5,
        width: 5.5,
        tags: ['creative exercise', 'blob painting', 'cat'],
        fileName: '2024blobCats'
    },
    {title: 'Can can dancer',
        partOfSeries: '',
        year: 2018,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Page from book',
        height: 12,
        width: 9,
        tags: ['pin up', 'dancer'],
        fileName: '2018canCanDancer'
    },
    {title: 'Coffee Bound', //TODO
        partOfSeries: '',
        year: 2025,
        medium: ['coffee', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 0,
        width: 0,
        tags: [],
        fileName: '2025coffeeBound'
    },
    {title: 'Coffee Flash Sheet',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['flash', 'traditional American tattoo', 'hand-lettering'],
        fileName: '2021coffeeFlashSheet'
    },
    {title: 'Cold Partner',
        partOfSeries: '',
        year: 2020,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['celestial', 'moon'],
        fileName: '2020coldPartner'
    },
    {title: 'Cool Cats Say Sorry Mom',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['cat'],
        fileName: '2023coolCatsSaySorryMom'
    },
    {title: 'Cortana Flash No. 1',
        partOfSeries: 'Cortana Flash',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 12,
        width: 9,
        tags: ['flash', 'traditional American tattoo', 'pin up', 'pop culture', 'hand-lettering'],
        fileName: '2024cortanaFlashNo1'
    },
    {title: 'Cortana Flash No. 2',
        partOfSeries: 'Cortana Flash',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 12,
        width: 9,
        tags: ['flash', 'traditional American tattoo', 'pin up', 'pop culture', 'hand-lettering'],
        fileName: '2024cortanaFlashNo2'
    },
    {title: 'Crybaby Flash',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['flash', 'traditional American tattoo'],
        fileName: '2021crybabyFlash'
    },
    {title: 'Dancing Neko',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['surreal', 'cat'],
        fileName: '2024dancingNeko'
    },
    {title: "The Dancing Onionhead's Scene",
        partOfSeries: '',
        year: 2023,
        medium: ['ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['surreal'],
        fileName: '2023theDancingOnionheadsScene'
    },
    {title: 'Dance',
        partOfSeries: '',
        year: 2020,
        medium: ['ink'],
        paintedOn: 'Resumé paper',
        height: 0,
        width: 0,
        tags: ['dancer', 'hand-lettering'],
        fileName: '2020dance'
    },
    {title: 'Dancer in the rain', //TODO
        partOfSeries: '',
        year: 2015,
        medium: ['acrylic'],
        paintedOn: 'Journal',
        height: 0,
        width: 0,
        tags: ['dancer'],
        fileName: '2015dancerInTheRain'
    },
    {title: 'Daphne',
        partOfSeries: 'Daphne and Velma',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['space babe', 'pin up', 'science fiction', 'pop culture'],
        fileName: '2021daphne'
    },
    {title: 'Dazed and Confused',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['comic', 'pop culture', 'music lyrics', 'hand-lettering'],
        fileName: '2024dazedAndConfused'
    },
    {title: 'The Elf with the Dragon Tattoo',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Mixed media paper with vellum surface',
        height: 8,
        width: 6,
        tags: ['fantasy', 'traditional American tattoo'],
        fileName: '2024theElfWithTheDragonTattoo'
    },
    {title: 'The Fat Orange Cat by the Window',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['cat', 'slice of life'],
        fileName: '2025theFatOrangeCat'
    },
    {title: 'The Fates',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['fantasy', 'hand-lettering'],
        fileName: '2024theFates'
    },
    {title: 'Fish Legs',
        partOfSeries: '',
        year: 2025,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 8.5,
        width: 11,
        tags: ['flash', 'pin up', 'traditional American tattoo', 'hand-lettering'],
        fileName: '2025fishLegs'
    },
    {title: 'Food-gasm',
        partOfSeries: '',
        year: 2018,
        medium: ['ink'],
        paintedOn: 'Resumé paper',
        height: 8.5,
        width: 11,
        tags: ['outline'],
        fileName: '2018foodgasm'
    },
    {title: 'Gates of Hell',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['fantasy', 'hand-lettering'],
        fileName: '2025gatesOfHell'
    },
    {title: 'La Gitana',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['dancer'],
        fileName: '2024laGitana'
    },
    {title: 'Gypsy Flash',
        partOfSeries: 'Purple Flash Cards',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['traditional American tattoo', 'flash'],
        fileName: '2022gypsyFlash'
    },
    {title: 'The Forest Scene',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['fantasy'],
        fileName: '2023theForestScene'
    },
    {title: 'Hell Raiser Flash',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['traditional American tattoo', 'flash'],
        fileName: '2021hellRaiserFlash'
    },
    {title: 'Home Cat',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['cat', 'slice of life'],
        fileName: '2025homeCat'
    },
    {title: 'Horror Flash',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['flash', 'traditional American tattoo', 'pop culture'],
        fileName: '2023beetleguiseFlash'
    },
    {title: 'Hot Partner',
        partOfSeries: '',
        year: 2020,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['celestial', 'sun'],
        fileName: '2020hotPartner'
    },
    {title: 'Hot Toaster No. 1',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['robot babe', 'pin up', 'science fiction'],
        fileName: '2025hotToasterNo1'
    },
    {title: 'Hot Toaster No. 2',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['robot babe', 'pin up', 'science fiction'],
        fileName: '2025hotToasterNo2'
    },
    {title: 'Hot Toasters',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Page from book',
        height: 12,
        width: 9,
        tags: ['robot babe', 'pin up', 'science fiction'],
        fileName: '2025hotToasters'
    },
    {title: 'Inkbot',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['science fiction', 'surreal'],
        fileName: '2023inkbot'
    },
    {title: 'Ingredientes',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['music', 'hand-lettering'],
        fileName: '2025ingredientes'
    },
    {title: 'Killboy Powerhead No. 1',
        partOfSeries: 'Killboy Powerhead',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['music lyrics', 'hand-lettering'],
        fileName: '2025killboyPowerheadNo1'
    },
    {title: 'Killboy Powerhead No. 2',
        partOfSeries: 'Killboy Powerhead',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['music lyrics', 'hand-lettering', 'pin up'],
        fileName: '2025killboyPowerheadNo2'
    },
    {title: 'Kitty',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 3.5,
        width: 5.5,
        tags: ['cat'],
        fileName: '2025kitty'
    },
    {title: 'Kitty Greetings No. 1',
        partOfSeries: 'Kitty Greetings',
        year: 2019,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 4,
        width: 6,
        tags: ['cat', 'hand-lettering'],
        fileName: '2019kittyGreetingsNo1'
    },
    {title: 'Kitty Greetings No. 2',
        partOfSeries: 'Kitty Greetings',
        year: 2019,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 4,
        width: 6,
        tags: ['cat', 'hand-lettering'],
        fileName: '2019kittyGreetingsNo2'
    },
    {title: 'Kitty Greetings No. 3',
        partOfSeries: 'Kitty Greetings',
        year: 2019,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 4,
        width: 6,
        tags: ['cat', 'hand-lettering'],
        fileName: '2019kittyGreetingsNo3'
    },
    {title: 'Knit fast. Die warm.',
        partOfSeries: '',
        year: 2020,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 4,
        width: 6,
        tags: ['hand-lettering'],
        fileName: '2020knitFastDieWarm'
    },
    {title: 'Knuckle Outlines',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 11,
        width: 8.5,
        tags: ['hand-lettering', 'flash', 'traditional American tattoo'],
        fileName: '2021knuckleOutlines'
    },
    {title: 'Larry Longskull',
        partOfSeries: '',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 3,
        width: 2,
        tags: [''],
        fileName: '2016larryLongskull'
    },
    {title: 'Love',
        partOfSeries: '',
        year: 2015,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Journal',
        height: 0,
        width: 0,
        tags: ['hand-lettering'],
        fileName: '2015love'
    },
    {title: 'Love Wolf',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['traditional American tattoo', 'flash'],
        fileName: '2024loveWolf'
    },
    {title: 'LSD',
        partOfSeries: '',
        year: 2020,
        medium: ['colored pencil', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['comic', 'hand-lettering'],
        fileName: '2020lsd'
    },
    {title: 'Luna y Sol',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['celestial', 'sun', 'moon'],
        fileName: '2025lunaYsol'
    },
    {title: 'Madre Tierra',
        partOfSeries: '',
        year: 2015,
        medium: ['colored pencil'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: [],
        fileName: '2015madreTierra'
    },
    {title: 'Merfolk',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['fantasy', 'hand-lettering'],
        fileName: '2024merfolk'
    },
    {title: "The Mermaid's Transformation Scene",
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['fantasy'],
        fileName: '2023theMermaidsTransformationScene'
    },
    {title: 'Mermaid Rider',//TODO
        partOfSeries: '',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: ['traditional American tattoo', 'pin up'],
        fileName: '2022mermaidRider'
    },
    {title: 'Miau',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['creative exercise', 'blob painting', 'cat'],
        fileName: '2024miau'
    },
    {title: 'On the Skull',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['traditional American tattoo', 'flash'],
        fileName: '2024onTheSkull'
    },
    {title: 'Party like hobbits',
        partOfSeries: '',
        year: 2020,
        medium: ['colored pencil', 'ink'],
        paintedOn: 'Resumé paper',
        height: 0,
        width: 0,
        tags: ['hand-lettering', 'pop culture'],
        fileName: '2020partyLikeHobbits'
    },
    {title: 'La Pingüina',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['pin up'],
        fileName: '2024laPinguina'
    },
    {title: 'Piropos',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Resumé paper',
        height: 0,
        width: 0,
        tags: ['hand-lettering'],
        fileName: '2021piropos'
    },
    {title: 'Photo Exercise',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['learning exercise'],
        fileName: '2025photoExercise'
    },
    {title: 'Poison Flash',
        partOfSeries: 'Purple Flash Cards',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['traditional American tattoo', 'flash'],
        fileName: '2022poisonFlash'
    },
    {title: 'Portrait in Six Layers',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['learning exercise'],
        fileName: '2023portraitInSixLayers'
    },
    {title: 'Portrait of a Dancer in Six Layers',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['learning exercise', 'dancer'],
        fileName: '2023portraitOfADancerInSixLayers'
    },
    {title: 'The Pumpkin Thief',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['pin up'],
        fileName: '2023thePumpkinThief'
    },
    {title: 'Rhonda the Human and Nadja the Dragon 15',
        partOfSeries: 'Rhonda and Nadja',
        year: 2015,
        medium: ['colored pencil'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: ['fantasy'],
        fileName: '2015rhondaTheHumanAndNadjaTheDragon'
    },
    {title: 'Rhonda the Human and Nadja the Dragon 22',
        partOfSeries: 'Rhonda and Nadja',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 0,
        width: 0,
        tags: ['fantasy'],
        fileName: '2022rhondaTheHumanAndNadjaTheDragon'
    },
    {title: 'The Roaring Dancer',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['dancer'],
        fileName: '2023theRoaringDancer'
    },
    {title: 'The Robot Train Station Scene',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['science fiction', 'surreal'],
        fileName: '2023theRobotTrainStationScene'
    },
    {title: "Rolin's Vampire",
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['fantasy', 'pin up'],
        fileName: '2023rolinsVampire'
    },
    {title: 'Rose Colored Glasses',
        partOfSeries: '',
        year: 2022,
        medium: ['ink'],
        paintedOn: 'Resumé paper',
        height: 0,
        width: 0,
        tags: ['pin up', 'hand-lettering'],
        fileName: '2022roseColoredGlasses'
    },
    {title: 'Royalty',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['japanese style', 'pop culture'],
        fileName: '2023royalty'
    },
    {title: 'Ruin',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['traditional American tattoo'],
        fileName: '2024ruin'
    },
    {title: 'Sally Supernova',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['space babe', 'pin up', 'science fiction', 'hand-lettering'],
        fileName: '2021sallySupernova'
    },
    {title: 'Shark Pinup',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Mixed media paper with vellum surface',
        height: 8,
        width: 6,
        tags: ['pin up', 'traditional American tattoo'],
        fileName: '2025sharkPinup'
    },
    {title: 'Space Babe (Blue)',
        partOfSeries: 'OG Space Babes',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Page from book',
        height: 12,
        width: 9,
        tags: ['space babe', 'pin up', 'science fiction'],
        fileName: '2022spaceBabe(Blue)'
    },
    {title: 'Space Babe (Green)',
        partOfSeries: 'OG Space Babes',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Page from book',
        height: 12,
        width: 9,
        tags: ['space babe', 'pin up', 'science fiction'],
        fileName: '2022spaceBabe(Green)'
    },
    {title: 'Space Babe (Purple)',
        partOfSeries: 'OG Space Babes',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Page from book',
        height: 12,
        width: 9,
        tags: ['space babe', 'pin up', 'science fiction'],
        fileName: '2022spaceBabe(Purple)'
    },
    {title: 'Space Babe (White)',
        partOfSeries: 'OG Space Babes',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Page from book',
        height: 12,
        width: 9,
        tags: ['space babe', 'pin up', 'science fiction'],
        fileName: '2022spaceBabe(White)'
    },
    {title: 'Sprouting Boot',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['still life'],
        fileName: '2023sproutingBoot'
    },
    {title: 'Star Tease',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['space babe', 'pin up', 'science fiction', 'pop culture'],
        fileName: '2023starTease'
    },
    {title: 'Still kitchen', //TODO
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Mixed media paper',
        height: 0,
        width: 0,
        tags: ['still life', 'slice of life'],
        fileName: '2025stillKitchen'
    },
    {title: 'The Swan',
        partOfSeries: '',
        year: 2023,
        medium: ['ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: [],
        fileName: '2023theSwan'
    },
    {title: 'Tatted Neko',
        partOfSeries: '',
        year: 2025,
        medium: ['acrylic', 'ink'],
        paintedOn: 'Canvas on wooden frame',
        height: 3,
        width: 3,
        tags: ['traditional American tattoo', 'cat'],
        fileName: '2025tattedNeko'
    },
    {title: 'Tattooed Pinup No. 1',
        partOfSeries: 'Tattooed Pinup',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['traditional American tattoo', 'pin up'],
        fileName: '2023tattooedPinupNo1'
    },
    {title: 'Tattooed Pinup No. 2',
        partOfSeries: 'Tattooed Pinup',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['traditional American tattoo', 'pin up'],
        fileName: '2023tattooedPinupNo2'
    },
    {title: 'Tattooed Pinup No. 3',
        partOfSeries: 'Tattooed Pinup',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['traditional American tattoo', 'pin up'],
        fileName: '2023tattooedPinupNo3'
    },
    {title: 'Tattooed Pinup No. 4',
        partOfSeries: 'Tattooed Pinup',
        year: 2023,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['traditional American tattoo', 'pin up'],
        fileName: '2023tattooedPinupNo4'
    },
    {title: 'Throat Punch',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: [''],
        fileName: '2021throatpunch'
    },
    {title: 'Tools of Witchcraft and Sorcery',
        partOfSeries: '',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['traditional American tattoo'],
        fileName: '2022toolsOfWitchcraftAndSorcery'
    },
    {title: 'Unamused kitties', //TODO
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 0,
        width: 0,
        tags: ['cat'],
        fileName: '2021unamusedKitties'
    },
    {title: 'Velma',
        partOfSeries: 'Daphne and Velma',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['space babe', 'pin up', 'science fiction', 'pop culture'],
        fileName: '2021velma'
    },
    {title: 'Wild Child',
        partOfSeries: '',
        year: 2021,
        medium: ['colored pencil', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['traditional American tattoo', 'flash', 'pin up', 'hand-lettering'],
        fileName: '2021wildChildFlash'
    },
    {title: 'Wild Wigs',
        partOfSeries: '',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 2.5,
        width: 2.5,
        tags: ['fantasy'],
        fileName: '2016wildWigs'
    },
    {title: 'Witchcraft and Wizardry War',
        partOfSeries: '',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 2.5,
        width: 2.5,
        tags: ['fantasy'],
        fileName: '2016witchcraftAndWizardryWar'
    },
    {title: 'The Woman in the Blue Dress',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: [],
        fileName: '2023theWomanInTheBlueDress'
    },
    {title: 'Yin Yang Cats',
        partOfSeries: '',
        year: 2020,
        medium: ['ink'],
        paintedOn: 'Page from book',
        height: 12,
        width: 9,
        tags: ['cat'],
        fileName: '2020yinYangCats'
    },
    {title: 'Z the Spacegirl',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['science fiction', 'space babe', 'pin up'],
        fileName: '2024zSpacegirl'
    },
    {title: 'Zen and the Art of Robot Maintenance',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['science fiction', 'surreal'],
        fileName: '2023zenAndTheArtOfRobotMaintenance'
    },
]

//Opening/filtering in the archive
const mediaTags = []
const tagTags = []
scansCatalogue.forEach(scanObj => {
    const mediaStr = scanObj.medium.join('+').replaceAll(' ', '_')
    if (!mediaTags.includes(mediaStr)) {
        mediaTags.push(mediaStr)
    }
    scanObj.tags.forEach(tagName => {
        if (!tagTags.includes(tagName) && tagName.length > 0) {
            tagTags.push(tagName)
        }
    })
})
const yearNums = new Set(scansCatalogue.map(scan => scan.year))
const yearArr = [...yearNums].sort((a, b) => a < b)
function openArchive(tagToShow = '', tagType = '') {
  //Write #filter-bar with .media and .tags fields in scansCatalogue
    let filterContent = `<p>Filter by media:</p>`
    mediaTags.forEach((tagName, i) => {
        filterContent += `
        <button class='filter-btn' onclick="openArchive('${tagName}', 'mediaFilter'); activateBtn(${i});">${tagName.replaceAll('_', ' ').replaceAll('+', ' and ')}</button>`
    })
    filterContent += `<br>
            <p>Filter by tag:</p>`
    tagTags.forEach((tagName, i) => {
        filterContent += `
            <button class='filter-btn' onclick="openArchive('${tagName}', 'tagFilter'); activateBtn(${mediaTags.length + i});">${tagName}</button>`
    })
    document.getElementById('filter-bar').innerHTML = filterContent + `<br>
    <button class='see-archive-btn' onclick="openArchive(); closeArchiveFilter();">See all</button>
    <button class='close-archive-filter-btn' onclick='closeArchiveFilter()'> Close filters </button>`

    //Organize by year (and alphabetically)
    const organizedScans = []
    for (let i = 0; i < yearArr.length; i++) {
        const yearlyArr = scansCatalogue.filter(scan => scan.year === yearArr[i])
        const scansToDisplay = []
        yearlyArr.forEach(scanObj => {
            if ((tagType === 'mediaFilter' && scanObj.medium.join('+').replaceAll(' ', '_') === tagToShow)
                || (tagType === 'tagFilter' && scanObj.tags.includes(tagToShow))
                || tagType.length === 0) {
                scansToDisplay.push(scanObj)
            }
        })
        organizedScans.push(...scansToDisplay)
    }

  //Write to the 'gallery' div
  const myGallery = document.getElementById('gallery')
  myGallery.innerHTML = ''
  organizedScans.forEach((scannedImg, i) => {
    //Get data of painting
    const {title, partOfSeries, year, medium, paintedOn, height, width, fileName} = scannedImg
    let mediaList = medium[0][0].toUpperCase() + medium[0].slice(1)
    if (medium.length === 2) {
      mediaList += ' and ' + medium[1]
    }
    const dimensionsInIn = height === 0 ? '' : `${height} x ${width} inches`

    //Build and push the art div
    const loadingOpts = i > 10 ? `loading='lazy' ` : ''
    const archivedArtDiv = `
    <div class='archived-art'>
      <img ${loadingOpts} src='scans/${fileName}.jpeg' alt='${title}'>
      <p class='copyrightP'>
        <span class='myTitle'> ${title} </span> © ${year} <br>
        ${mediaList} on <br>
        ${paintedOn} <br>
        ${dimensionsInIn}
      </p>
    </div>`
    myGallery.innerHTML += archivedArtDiv
  })
}
function openArchiveFilter() {
    const openFilterBtn = document.getElementById('open-filter-btn')
    openFilterBtn.classList.add('hidden')
    const archiveFilter = document.getElementById('filter-bar')
    archiveFilter.classList.remove('hidden')
}
function closeArchiveFilter() {
    const openFilterBtn = document.getElementById('open-filter-btn')
    openFilterBtn.classList.remove('hidden')
    const archiveFilter = document.getElementById('filter-bar')
    archiveFilter.classList.add('hidden')
}
function activateBtn(indx) {
    const filterBtns = document.getElementsByClassName('filter-btn')
    for(let i = 0; i < filterBtns.length; i++) {
        filterBtns[i].classList.remove('filtered')
    }
    filterBtns[indx].classList.add('filtered')
}

//Top navigational bar
function toggleMobileMenu() {

  //Show or hide mobile menu
  let navBar = document.getElementById('myTopnav');
  if (navBar.className === "topnav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "topnav";
  }

  //Change menu icon from bars to x, or vice versa
  const menuControl = document.getElementById('menu-icon').firstElementChild
  if (menuControl.classList[1] === 'fa-x') {
    menuControl.classList.remove('fa-x')
    menuControl.classList.add('fa-bars')
  } else {
    menuControl.classList.remove('fa-bars')
    menuControl.classList.add('fa-x')
  }
}

//Change sections
function goHome(fromFooter = false) {

  //Activate home
  const homeLink = document.getElementById('home-link')
  homeLink.classList.add('active')

  //De-activate other sections
  const sections = document.getElementsByClassName('nav-anchor')
  for(let i = 0; i < sections.length; i++) {
    sections[i].classList.remove('active')
  }

  //Show home
  const content = document.getElementsByTagName('section')
  for(let i = 0; i < content.length; i++) {
    if (content[i].id === 'home-content') {
      content[i].classList.remove('hidden')
    } else {
      content[i].classList.add('hidden')
    }
  }

  //Update tab name
  const currentTb = document.getElementById('current-tab')
  currentTb.innerHTML = ''

  //Close mobile menu if it's open
  const menuControl = document.getElementById('menu-icon').firstElementChild
  if (menuControl.classList[1] === 'fa-x' && !fromFooter) {
    toggleMobileMenu()
  }
}
function activate(sectionID, fromFooter = false) {

  //De-activate everything
  const homeLink = document.getElementById('home-link')
  homeLink.classList.remove('active')
  const sections = document.getElementsByClassName('nav-anchor')
  for(let i = 0; i < sections.length; i++) {
    sections[i].classList.remove('active')
  }

  //Activate the clicked-on section link
  const activeSection = document.getElementById(sectionID)
  activeSection.classList.add('active')

  //Show correct content
  const content = document.getElementsByTagName('section')
  for(let i = 0; i < content.length; i++) {
    if (content[i].id.slice(0, -8) + '-link' === sectionID) {
      content[i].classList.remove('hidden')
    } else {
      content[i].classList.add('hidden')
    }
  }

  //Update current tab
  const currentTb = document.getElementById('current-tab')
  const tabName = sectionID.slice(0,1).toUpperCase() + sectionID.slice(1, -5).replace('-', ' ')
  currentTb.innerHTML = ` / ${tabName} `

  //Close mobine menu
  if(!fromFooter) {
  toggleMobileMenu()
  }
}

//Open a blog post
function openBlogPost(postID) {
  //Hide blog index
  const titleDivs = document.getElementsByClassName('blog-title')
  for(let i = 0; i < titleDivs.length; i++) {
    titleDivs[i].classList.add('hidden')
  }
  //Show the blog title and full post with postID
  const postDIVs = document.getElementsByClassName('blog-post')
  titleDivs[postID].classList.remove('hidden')
  postDIVs[postID].classList.remove('hidden')
  //Hide blog intro
  const introToBlog = document.getElementById('blog-intro')
  introToBlog.classList.add('hidden')
  //Show Back to Index btn
  const backToIndexBtn = document.getElementById('back-to-index-btn')
  backToIndexBtn.classList.remove('hidden')
}

//Open all blog posts
function goBackToBlog() {
  //Show blog index and hide full blog posts
  const postDIVs = document.getElementsByClassName('blog-post')
  const titleDivs = document.getElementsByClassName('blog-title')
  for(let i = 0; i < postDIVs.length; i++) {
    postDIVs[i].classList.add('hidden')
    titleDivs[i].classList.remove('hidden')
  }
  //Show blog intro
  const introToBlog = document.getElementById('blog-intro')
  introToBlog.classList.remove('hidden')
  //hide Back to Index btn
  const backToIndexBtn = document.getElementById('back-to-index-btn')
  backToIndexBtn.classList.add('hidden')
}

// Back to top button
function takeMeToTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}