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
    {title: 'Akane Sketch',
        partOfSeries: '',
        year: 2024,
        medium: ['ink'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: ['pop culture', 'sketch'],
        fileName: '2024akaneSketch'
    },
    {title: 'Alexis the Dancer',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['pin up', 'dancer', 'portrait'],
        fileName: '2024alexisDancer'
    },
    {title: 'Amandita',
        partOfSeries: '',
        year: 2024,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['dancer', 'portrait'],
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
    {title: 'Amorcito Flash',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['flash', 'traditional American tattoo', 'hand-lettering'],
        fileName: '2021amorcitoFlash'
    },
    {title: 'Amorcito Flash Outline',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 11,
        width: 8.5,
        tags: ['flash', 'traditional American tattoo', 'hand-lettering', 'outline'],
        fileName: '2021amorcitoOutline'
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
    {title: 'Bee Kind',
        partOfSeries: '',
        year: 2020,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 0,
        width: 0,
        tags: ['hand-lettering', 'greeting card'],
        fileName: '2020beeKind'
    },
    {title: 'Birthday Faerie',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 6.5,
        width: 4,
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
    {title: 'Blue Dancer',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor paper',
        height: 6.5,
        width: 4,
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
    {title: 'Bridge from the Corridor',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor journal',
        height: 3.5,
        width: 5.5,
        tags: ['local scene'],
        fileName: '2025bridgeFromTheCorridor'
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
    {title: 'Cat Card No. 1',
        partOfSeries: 'Cat Cards',
        year: 2018,
        medium: ['ink'],
        paintedOn: 'Postcard',
        height: 6,
        width: 4,
        tags: ['cat', 'greeting card', 'hand-lettering'],
        fileName: 'catCardNo1'
    },
    {title: 'Cat Card No. 2',
        partOfSeries: 'Cat Cards',
        year: 2018,
        medium: ['ink'],
        paintedOn: 'Postcard',
        height: 6,
        width: 4,
        tags: ['cat', 'greeting card', 'hand-lettering'],
        fileName: 'catCardNo2'
    },
    {title: 'Cat Card No. 3',
        partOfSeries: 'Cat Cards',
        year: 2018,
        medium: ['ink'],
        paintedOn: 'Postcard',
        height: 6,
        width: 4,
        tags: ['cat', 'greeting card', 'hand-lettering'],
        fileName: 'catCardNo3'
    },
    {title: 'Cat Card No. 4',
        partOfSeries: 'Cat Cards',
        year: 2018,
        medium: ['ink'],
        paintedOn: 'Postcard',
        height: 6,
        width: 4,
        tags: ['cat', 'greeting card', 'hand-lettering'],
        fileName: 'catCardNo4'
    },
    {title: 'Cat Card No. 5',
        partOfSeries: 'Cat Cards',
        year: 2018,
        medium: ['ink'],
        paintedOn: 'Postcard',
        height: 6,
        width: 4,
        tags: ['cat', 'greeting card', 'hand-lettering'],
        fileName: 'catCardNo5'
    },
    {title: 'Chaotic Neutral',
        partOfSeries: '',
        year: 2018,
        medium: ['ink'],
        paintedOn: 'Postcard',
        height: 6,
        width: 4,
        tags: ['greeting card', 'hand-lettering'],
        fileName: 'chaoticNeutralCard'
    },
    {title: 'Coffee Bound',
        partOfSeries: '',
        year: 2025,
        medium: ['coffee', 'ink'],
        paintedOn: 'Watercolor paper',
        height: 6.5,
        width: 4,
        tags: [],
        fileName: '2025coffeeBound'
    },
    {title: 'Coffee Fiend Flash',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['flash', 'traditional American tattoo', 'hand-lettering'],
        fileName: '2021coffeeFiendFlash'
    },
    {title: 'Coffee Fiend Flash Outline',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 11,
        width: 8.5,
        tags: ['flash', 'traditional American tattoo', 'hand-lettering', 'outline'],
        fileName: '2021coffeeFiendOutline'
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
    {title: 'Colors I (Dis)Like',
        partOfSeries: '',
        year: 2021,
        medium: ['acrylic'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['abstract', 'learning exercise'],
        fileName: '2021colorIDisLike'
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
        fileName: '2024cortanaFlashNo2',
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
    {title: 'Crybaby Flash Outline',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: '',
        height: 0,
        width: 0,
        tags: ['flash', 'traditional American tattoo', 'outline'],
        fileName: '2021crybabyOutline'
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
    {title: 'Dancer in the rain',
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
        fileName: '2021daphne',
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
    {title: 'Estaciones No. 1',
        partOfSeries: 'Estaciones',
        year: 2021,
        medium: ['acrylic'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['learning exercise', 'hand-lettering'],
        fileName: '2021estacionesNo1'
    },
    {title: 'Estaciones No. 2',
        partOfSeries: 'Estaciones',
        year: 2021,
        medium: ['acrylic'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['learning exercise'],
        fileName: '2021estacionesNo2'
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
    {title: 'Firey Face',
        partOfSeries: '',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 2.5,
        width: 2.5,
        tags: [''],
        fileName: '2016fireyFace'
    },
    {title: 'Fish Legs No. 1',
        partOfSeries: 'Fish Legs',
        year: 2025,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 8.5,
        width: 11,
        tags: ['flash', 'pin up', 'traditional American tattoo', 'hand-lettering'],
        fileName: '2025fishLegsNo1'
    },
    {title: 'Fish Legs No. 2',
        partOfSeries: 'Fish Legs',
        year: 2025,
        medium: ['ink'],
        paintedOn: 'Cotton watercolor paper',
        height: 6,
        width: 6,
        tags: ['flash', 'pin up', 'traditional American tattoo', 'hand-lettering'],
        fileName: '2025fishLegsNo2'
    },
    {title: 'Food-gasm',
        partOfSeries: 'Self-portraits',
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
    {title: 'Green Haired Space Babe',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Mixed media paper with vellum surface',
        height: 12,
        width: 9,
        tags: ['science fiction', 'space babe'],
        fileName: '2023greenHairSpaceBabe'
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
    {title: 'Happiness',
        partOfSeries: '',
        year: 2016,
        medium: ['colored pencil', 'ink'],
        paintedOn: 'Journal',
        height: 0,
        width: 0,
        tags: ['hand-lettering'],
        fileName: '2016happiness'
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
    {title: 'Hell Raiser Flash Outline',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 12,
        width: 8.5,
        tags: ['traditional American tattoo', 'flash'],
        fileName: '2021hellRaiserOutline'
    },
    {title: 'Helmet Designs No. 1',
        partOfSeries: 'Helmet Designs',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: ['sketch'],
        fileName: '2021helmetDesignsNo1'
    },
    {title: 'Helmet Designs No. 2',
        partOfSeries: 'Helmet Designs',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: ['sketch'],
        fileName: '2021helmetDesignsNo2'
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
    {title: 'The Household in Fall',
        partOfSeries: '',
        year: 2024,
        medium: ['ink'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: ['comic', 'slice of life', 'sketch'],
        fileName: '2024theHouseholdInFall'
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
        fileName: '2025ingredientes',
    },
    {title: 'Julieta',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor paper',
        height: 6.5,
        width: 4,
        tags: ['portrait'],
        fileName: '2025julieta'
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
        tags: ['cat', 'hand-lettering', 'greeting card'],
        fileName: '2019kittyGreetingsNo1'
    },
    {title: 'Kitty Greetings No. 2',
        partOfSeries: 'Kitty Greetings',
        year: 2019,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 4,
        width: 6,
        tags: ['cat', 'hand-lettering', 'greeting card'],
        fileName: '2019kittyGreetingsNo2'
    },
    {title: 'Kitty Greetings No. 3',
        partOfSeries: 'Kitty Greetings',
        year: 2019,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 4,
        width: 6,
        tags: ['cat', 'hand-lettering', 'greeting card'],
        fileName: '2019kittyGreetingsNo3'
    },
    {title: 'Kitty Greetings No. 4',
        partOfSeries: 'Kitty Greetings',
        year: 2019,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 4,
        width: 6,
        tags: ['cat', 'hand-lettering', 'greeting card'],
        fileName: '2019kittyGreetingsNo4'
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
    {title: 'Knuckle Outline',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 11,
        width: 8.5,
        tags: ['hand-lettering', 'flash', 'traditional American tattoo', 'outline'],
        fileName: '2021knuckleOutline'
    },
    {title: 'Lady Luck',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Mixed media paper with vellum surface',
        height: 12,
        width: 9,
        tags: ['outline'],
        fileName: '2021ladyLuck'
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
    {title: 'Live, Love, Laugh No. 1',
        partOfSeries: 'Live, Love, Laugh',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 2.5,
        width: 2.5,
        tags: [''],
        fileName: '2016liveLoveLaughNo1'
    },
    {title: 'Live, Love, Laugh No. 2',
        partOfSeries: 'Live, Love, Laugh',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 2.5,
        width: 2.5,
        tags: [''],
        fileName: '2016liveLoveLaughNo2'
    },
    {title: 'Live, Love, Laugh No. 3',
        partOfSeries: 'Live, Love, Laugh',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 2.5,
        width: 2.5,
        tags: [''],
        fileName: '2016liveLoveLaughNo3'
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
    {title: 'Luna',
        partOfSeries: '',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 2.5,
        width: 2.5,
        tags: ['hand-lettering'],
        fileName: '2024luna'
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
    {title: 'Martini Maiden',
        partOfSeries: '',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 3,
        width: 2,
        tags: [''],
        fileName: '2016martiniMaiden'
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
    {title: 'Neko',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor journal',
        height: 5.5,
        width: 3.5,
        tags: ['cat'],
        fileName: '2025neko'
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
    {title: 'Piropo Card No. 1',
        partOfSeries: 'Pirpopo Cards',
        year: 2020,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Postcard',
        height: 6,
        width: 4,
        tags: ['hand-lettering', 'greeting card'],
        fileName: 'piropoCardNo1'
    },
    {title: 'Piropo Card No. 2',
        partOfSeries: 'Pirpopo Cards',
        year: 2020,
        medium: ['ink'],
        paintedOn: 'Postcard',
        height: 4,
        width: 6,
        tags: ['hand-lettering', 'greeting card'],
        fileName: 'piropoCardNo2'
    },
    {title: 'Piropo Card No. 3',
        partOfSeries: 'Pirpopo Cards',
        year: 2020,
        medium: ['ink'],
        paintedOn: 'Postcard',
        height: 4,
        width: 6,
        tags: ['hand-lettering', 'greeting card'],
        fileName: 'piropoCardNo3'
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
    {title: 'Pluma y Tintero',
        partOfSeries: '',
        year: 2020,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: [],
        fileName: '2020plumaYtintero'
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
    {title: 'Portfolio Cover',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: [''],
        fileName: '2021portfolioCover'
    },
    {title: 'Portrait in Six Layers',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['learning exercise', 'portrait'],
        fileName: '2023portraitInSixLayers'
    },
    {title: 'Portrait of a Dancer in Six Layers',
        partOfSeries: '',
        year: 2023,
        medium: ['watercolor'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 8.5,
        width: 12,
        tags: ['learning exercise', 'dancer', 'portrait'],
        fileName: '2023portraitOfADancerInSixLayers'
    },
    {title: 'Portrait of Tallulah',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor'],
        paintedOn: 'Watercolor paper',
        height: 6.5,
        width: 4,
        tags: ['dancer', 'portrait'],
        fileName: '2025aPortraitOfTallulah'
    },
    {title: 'Profile in Math',
        partOfSeries: 'Self-portraits',
        year: 2018,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Page from book',
        height: 12,
        width: 9,
        tags: [''],
        fileName: '2018profileInMath'
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
    {title: 'Punta Reyes',//TODO
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: ['local scene'],
        fileName: '2021puntaReyes'
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
    {title: "The Robots' Train Station Scene",
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
    {title: 'Sally Supernova Outline',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
         paintedOn: 'Calligraphy writing paper',
        height: 11,
        width: 8.5,
        tags: ['space babe', 'pin up', 'science fiction', 'hand-lettering', 'outline'],
        fileName: '2021sallySupernovaOutline'
    },
    {title: 'El Sapito',
        partOfSeries: '',
        year: 2025,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor journal',
        height: 3.5,
        width: 5.5,
        tags: [''],
        fileName: '2025elSapito'
    },
    {title: 'Self',
        partOfSeries: 'Self-portraits',
        year: 2017,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Journal',
        height: 0,
        width: 0,
        tags: [''],
        fileName: '2017self'
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
        fileName: '2022spaceBabe(White)',
    },
    {title: 'Space Babe Explorer',
        partOfSeries: '',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
        tags: ['space babe', 'pin up', 'science fiction'],
        fileName: '2022spaceBabeExplorer',
    },
    {title: 'Space Babe Explorer Outline',
        partOfSeries: '',
        year: 2022,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 12,
        width: 8.5,
        tags: ['space babe', 'pin up', 'science fiction', 'outline'],
        fileName: '2022spaceBabeExplorerOutline',
    },
    {title: 'The Spiral Sketch',
        partOfSeries: '',
        year: 2016,
        medium: ['pencil'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: ['sketch', 'surreal'],
        fileName: '2016theSpiralSketch'
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
    {title: 'Stained Flower',
        partOfSeries: '',
        year: 2020,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Watercolor postcard',
        height: 6,
        width: 4,
        tags: ['floral'],
        fileName: '2020stainedFlower'
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
    {title: 'A Study in Bloom (Outlines) No. 1',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 11,
        width: 8.5,
        tags: ['floral', 'learning exercise', 'outline'],
        fileName: '2021aStudyInBloomOutlineNo1'
    },
    {title: 'A Study in Bloom (Outlines) No. 2',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 11,
        width: 8.5,
        tags: ['floral', 'learning exercise', 'outline'],
        fileName: '2021aStudyInBloomOutlineNo2'
    },
    {title: 'A Study in Bloom (Outlines) No. 3',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 11,
        width: 8.5,
        tags: ['floral', 'learning exercise', 'outline'],
        fileName: '2021aStudyInBloomOutlineNo3'
    },
    {title: 'Sunset Swing',
        partOfSeries: '',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 2.5,
        width: 2.5,
        tags: [''],
        fileName: '2016sunsetSwing'
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
        fileName: '2021throatpunch',
    },
    {title: 'Throat Punch Outline',
        partOfSeries: '',
        year: 2021,
        medium: ['ink'],
         paintedOn: 'Calligraphy writing paper',
        height: 11,
        width: 8.5,
        tags: ['outline'],
        fileName: '2021sallySupernovaOutline'
    },
    {title: 'El Tintero Titilante',
        partOfSeries: '',
        year: 2019,
        medium: ['ink'],
        paintedOn: 'Calligraphy writing paper',
        height: 0,
        width: 0,
        tags: ['hand-lettering'],
        fileName: '2019elTinteroTitilante'
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
    {title: 'Unamused kitties',
        partOfSeries: '',
        year: 2021,
        medium: ['watercolor', 'ink'],
        paintedOn: 'Cotton paper with vellum finish',
        height: 12,
        width: 8.5,
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
    {title: '(Warp) Engine Emissions',
        partOfSeries: '',
        year: 2016,
        medium: ['acrylic'],
        paintedOn: 'Canvas on wooden frame',
        height: 3,
        width: 2,
        tags: ['pop culture', 'surreal'],
        fileName: '2016warpEngineEmissions'
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
    {title: 'Wish You Were Beer',
        partOfSeries: '',
        year: 2016,
        medium: ['colored pencil'],
        paintedOn: 'Paper',
        height: 0,
        width: 0,
        tags: ['fantasy'],
        fileName: '2016wishYouWereBeer'
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
        fileName: '2024zSpacegirl',
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
const writeMediaList = (mediaArr) => {
    let mediaList = mediaArr[0][0].toUpperCase() + mediaArr[0].slice(1)
    if (mediaArr.length === 2) {
      mediaList += ' and ' + mediaArr[1]
    }
    return mediaList
}
function openArchive(tagToShow = '', tagType = '') {
  //Write #filter-bar with .media and .tags fields in scansCatalogue
    let filterContent = `<p>Filter by media:</p>`
    mediaTags.forEach((tagName, i) => {
        filterContent += `
        <button class='filter-btn' onclick="openArchive('${tagName}', 'mediaFilter'); activateBtn(${i});">${tagName.replaceAll('_', ' ').replaceAll('+', ' and ')}</button>`
    })
    filterContent += `<br>
            <p>Filter by tag:</p>`
    tagTags.sort().forEach((tagName, i) => {
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
    const maxScansShown = 20
    const myGallery = document.getElementById('gallery')
    myGallery.innerHTML = ''
    organizedScans.forEach((scannedImg, i) => {
        //Get data of painting
        const { title, partOfSeries, year, medium, paintedOn, height, width, fileName } = scannedImg
        const mediaList = writeMediaList(medium)
        const dimensionsInIn = height === 0 ? '' : `${height} x ${width} inches`

        //Build and push the art div
        const classes = i < maxScansShown ? 'archived-art' : 'archived-art hidden'
        const archivedArtDiv = `
        <div class='${classes}'>
            <img src='scans/${fileName}.jpeg' alt='${title}'>
            <p class='copyrightP'>
            <span class='myTitle'> ${title} </span> © ${year} <br>
            ${mediaList} on <br>
            ${paintedOn} <br>
            ${dimensionsInIn}
            </p>
        </div>`
        myGallery.innerHTML += archivedArtDiv

    })
    //Add button
    const loadingBtn = document.getElementById('loading-btn')
    if (organizedScans.length < maxScansShown) {
        loadingBtn.classList.add('hidden')
    } else {
        loadingBtn.classList.remove('hidden')
    }
}
function loadMoreArt(startIndx) {
    //Reveal the divs with class 'archived-art' and index startIndx to startIndx+20
    const artDivs = document.getElementsByClassName('archived-art')
    const endIndx = startIndx + 20
    for (let i = startIndx; (i < endIndx) && (i < artDivs.length); i++) {
        artDivs[i].classList.remove('hidden')
    }
    //Update button
    const loadingBtn = document.getElementById('loading-btn')
    if (endIndx <= artDivs.length) {
        loadingBtn.setAttribute('onClick', `loadMoreArt(${endIndx})`)
    } else {
        loadingBtn.classList.add('hidden')
    }
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

//Portfolio (prev. Artist Catalogue)
const collectionsCatalogue = {
    'Space Babes': {
        intro: 'Mid-century science fiction meets pinups',
        files: [ //11 watercolors + ink outline
            '2022spaceBabe(Green)',
            '2022spaceBabe(White)',
            '2022spaceBabe(Blue)',
            '2022spaceBabe(Purple)',
            '2023starTease',
            '2021sallySupernova',
            '2024zSpacegirl',
            '2021daphne',
            '2021velma',
            '2025hotToasterNo1',
            '2025hotToasterNo2',
        ]
    },
    'Fantastique': {
        intro: 'A place for the whimsical, fantastic, or otherwise odd',
        files: [//4 watercolors, 1 ink, 3 watercolors + ink outline
            '2023theForestScene',
            '2023theRobotTrainStationScene',
            '2023royalty',
            '2024theFates',
            '2023inkbot',
            '2023theDancingOnionheadsScene',
            '2023zenAndTheArtOfRobotMaintenance',
            '2024merfolk',
        ]
    },
    'Bold Ones': {
        intro: 'Bold outlines, soft colors',
        files: [//13 watercolors + ink outlines, 1 ink
            '2024theElfWithTheDragonTattoo',
            '2021throatpunch',
            '2025fishLegsNo1',
            '2023tattooedPinupNo1',
            '2023tattooedPinupNo2',
            '2023tattooedPinupNo3',
            '2023tattooedPinupNo4',
            '2024ruin',
            '2025ingredientes',
            '2024cortanaFlashNo1',
            '2024cortanaFlashNo2',
            '2023coolCatsSaySorryMom',
            '2023beetleguiseFlash',
            '2022gypsyFlash'
        ]
    }
}
function openCollection(collectionName) {

    //Add .active class to div with ID: 'collection-name-btn'
    const collectionBtns = document.getElementsByClassName('collection-title')
    for(let i = 0; i < collectionBtns.length; i++) {
        collectionBtns[i].classList.remove('active')
    }
    const activeCollectionName = collectionName.toLowerCase().replaceAll(' ', '-') + '-btn'
    const activeCollectionButton = document.getElementById(activeCollectionName)
    activeCollectionButton.classList.add('active')

    //Fill in the p with class collection-intro with the intro of activeCollection
    const activeCollection = collectionsCatalogue[collectionName]
    const collectionIntroSpace = document.getElementById('collection-intro')
    collectionIntroSpace.innerHTML = activeCollection.intro

    //Fill in the div with ID catalogue-list with the files of activeCollection
    const fileNames = activeCollection.files
    const collectionScans = fileNames.map(fName => scansCatalogue.find(s => s.fileName === fName))
    const collectionList = document.getElementById('portfolio-list')
    let collectionContent = ''
    collectionScans.forEach(scanObj => {
        collectionContent += `<div class='catalog-card'>
                <img src='scans/${scanObj.fileName}.jpeg' alt='${scanObj.title}'>
                <p class='gallery-tag'><span class='card-title'>${scanObj.title}</span> <br><br> ${scanObj.year}. <br> ${writeMediaList(scanObj.medium)} on <br> ${scanObj.paintedOn}. ${scanObj.height > 0 ? `<br> ${scanObj.height} x ${scanObj.width} inches.` : ''} </p>
            </div>`
    })
    collectionList.innerHTML = collectionContent

    //Add a way to navigate to the other two collections from the bottom of the page
    const collectionNames = ['Space Babes', 'Fantastique', 'Bold Ones']
    const otherCollections = collectionNames.filter(cName => cName !== collectionName)
    collectionList.innerHTML += `<hr>
    <div>
    <p>View the other collections:</p>
    ${otherCollections.map(n => `<div class='collection-title' onclick='openCollection("${n}")'>${n} Collection</div>`).join(' ')}
    </div>`

    //Sroll to the intro
    collectionIntroSpace.scrollIntoView()
}

//Blog
function openBlogPost(postID) {//Open a blog post
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
function goBackToBlog() {//Open all blog posts
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

//Shop
const printsCatalogue = [
    {fileName: '2022spaceBabe(Blue)',
        title: 'Space Babe (Blue)',
        partOfSeries: 'OG Space Babes',
        year: 2022,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 1,
        etsyURL: '4445557514/space-babes-art-prints-signed',
        redBubURL: '#',
    },
    {fileName: '2022spaceBabe(Green)',
        title: 'Space Babe (Green)',
        partOfSeries: 'OG Space Babes',
        year: 2022,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 1,
        etsyURL: '4445557514/space-babes-art-prints-signed',
        redBubURL: '#',
    },
    {fileName: '2022spaceBabe(Purple)',
        title: 'Space Babe (Purple)',
        year: 2022,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 1,
        etsyURL: '4445557514/space-babes-art-prints-signed',
        redBubURL: '#',
    },
    {fileName: '2022spaceBabe(White)',
        title: 'Space Babe (White)',
        year: 2022,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 1,
        etsyURL: '4445557514/space-babes-art-prints-signed',
        redBubURL: '177734947'
    },
    {fileName: '2024zSpacegirl',
        title: 'Z the Spacegirl',
        year: 2024,
        prints4x6: 0,
        prints5x7: 1,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445580266/z-the-spacegirl-art-print-signed',
        redBubURL: '#',
    },
    {fileName: '2021sallySupernova',
        title: 'Sally Supernova',
        year: 2021,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 1,
        prints9x12: 0,
        etsyURL: '4445554007/sally-supernova-art-print-signed',
        redBubURL: '177734761',
    },
    {fileName: '2024cortanaFlashNo1',
        title: 'Cortana Flash No. 1',
        partOfSeries: 'Cortana Flash',
        year: 2024,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 1,
        prints9x12: 0,
        etsyURL: '4445572248/cortana-tattoo-flash-sheet-art-print',
        redBubURL: '#',
    },
    {fileName: '2024cortanaFlashNo2',
        title: 'Cortana Flash No. 2',
        partOfSeries: 'Cortana Flash',
        year: 2024,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 3,
        prints9x12: 0,
        etsyURL: '4445572248/cortana-tattoo-flash-sheet-art-print',
        redBubURL: '#',
    },
    {fileName: '2023starTease',
        title: 'Star Tease',
        year: 2023,
        prints4x6: 0,
        prints5x7: 1,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445570427/star-tease-art-print-signed',
        redBubURL: '#',
    },
    {fileName: '2025hotToasterNo1',
        title: 'Hot Toaster No. 1',
        partOfSeries: 'Hot Toasters',
        year: 2025,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '#',
        redBubURL: '177739040',
    },
    {fileName: '2021daphne',
        title: 'Daphne',
        partOfSeries: 'Daphne and Velma',
        year: 2021,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 3,
        prints9x12: 0,
        etsyURL: '4445560709/daphne-and-velma-art-print-signed',
        redBubURL: '#',
    },
    {fileName: '2021velma',
        title: 'Velma',
        partOfSeries: 'Daphne and Velma',
        year: 2021,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 1,
        prints9x12: 0,
        etsyURL: '4445560709/daphne-and-velma-art-print-signed',
        redBubURL: '#',
    },
    //Fantastique
    {fileName: '2023theForestScene',
        title: 'The Forest Scene',
        year: 2023,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '#',
        redBubURL: '177734444',
    },
    {fileName: '2023theDancingOnionheadsScene',
        title: "The Dancing Onionheads' Scene",
        year: 2023,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '#',
        redBubURL: '177733625',
    },
    {fileName: '2023theRobotTrainStationScene',
        title: "The Robots' Train Station Scene",
        year: 2023,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '#',
        redBubURL: '177739338',
    },
    {fileName: '2023royalty',
        title: 'Royalty',
        year: 2023,
        prints4x6: 0,
        prints5x7: 1,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445602120/royalty-art-print-signed',
        redBubURL: '#',
    }, //177740452: luna y sol
    //Bold ones
    {fileName: '2023tattooedPinupNo1',
        title: 'Tattooed Pinup No. 1',
        partOfSeries: 'Tattooed Pinups',
        year: 2023,
        prints4x6: 7,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445677485/tattooed-pin-up-art-print-signed',
        redBubURL: '#',
    },
    {fileName: '2023tattooedPinupNo2',
        title: 'Tattooed Pinup No. 2',
        partOfSeries: 'Tattooed Pinups',
        year: 2023,
        prints4x6: 1,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445677485/tattooed-pin-up-art-print-signed',
        redBubURL: '#',
    },
    {fileName: '2023tattooedPinupNo3',
        title: 'Tattooed Pinup No. 3',
        partOfSeries: 'Tattooed Pinups',
        year: 2023,
        prints4x6: 1,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445677485/tattooed-pin-up-art-print-signed',
        redBubURL: '177739851',
    },
    {fileName: '2023tattooedPinupNo4',
        title: 'Tattooed Pinup No. 4',
        partOfSeries: 'Tattooed Pinups',
        year: 2023,
        prints4x6: 1,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445677485/tattooed-pin-up-art-print-signed',
        redBubURL: '#',
    },
     {fileName: '2024theElfWithTheDragonTattoo',
        title: 'The Elf with the Dragon Tattoo',
        year: 2024,
        prints4x6: 0,
        prints5x7: 1,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445600739/the-elf-with-the-dragon-tattoo-art-print',
        redBubURL: '#',
    },
    {fileName: '2025fishLegsNo1',
        title: 'Fish Legs No. 1',
        year: 2025,
        prints4x6: 0,
        prints5x7: 1,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445610786/fish-legs-art-print-signed',
        redBubURL: '177739703',
    },
    {fileName: '2023beetleguiseFlash',
        title: 'Horror Flash',
        year: 2023,
        prints4x6: 1,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '4445655695/horror-flash-art-print-signed',
        redBubURL: '#',
    },
    {fileName: '2021throatpunch',
        title: 'Throat Punch',
        year: 2021,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 1,
        prints9x12: 0,
        etsyURL: '4445691091/throat-punch-art-print-signed',
        redBubURL: '#',
    },
    {fileName: '2025ingredientes',
        title: 'Ingredientes',
        year: 2025,
        prints4x6: 0,
        prints5x7: 0,
        prints8x10: 0,
        prints9x12: 0,
        etsyURL: '#',
        redBubURL: '177734621',
    },
]
function openShop() {
    const myShop = document.getElementById('shop-gallery')
    let strigyfiedShop = ''
    printsCatalogue.forEach(item => {
        const priceStrss = []
        if (item['prints4x6'] > 0) {
            priceStrss.push(`<a href='https://www.etsy.com/listing/${item.etsyURL}' target='_blank'>4 x 6 inch print available for \$20</a>`)
        }
        if (item['prints5x7'] > 0) {
            priceStrss.push(`<a href='https://www.etsy.com/listing/${item.etsyURL}' target='_blank'>5 x 7 inch print available for \$30</a>`)
        }
        if (item['prints8x10'] > 0) {
            priceStrss.push(`<a href='https://www.etsy.com/listing/${item.etsyURL}' target='_blank'>8 x 10 inch print available for \$70</a>`)
        }
        if (item['prints9x12'] > 0) {
            priceStrss.push(`<a href='https://www.etsy.com/listing/${item.etsyURL}' target='_blank'>9 x 12 inch print available for \$100</a>`)
        }
        let redBubPtag = ''
        if (item.redBubURL !== '#') {// ?ref=studio-promote
            redBubPtag = `<p><a href='https://www.redbubble.com/shop/ap/${item.redBubURL}' target='_blank'>Available as  a design on Red Bubble</a></p>`
        }
        const estyPtag = priceStrss.length > 0 ? `<p> ${priceStrss.join(' <br> ')} </p>` : ''
        strigyfiedShop += `<div class='shop-listing'>
            <img src='scans/${item.fileName}.jpeg' alt='${item.title}'>
            <p class='card-title'> ${item.title} </p>
            ${estyPtag}
            ${redBubPtag}
        </div>`
    })
    myShop.innerHTML = strigyfiedShop
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

// Back to top button
function takeMeToTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}