import BlackLamp from "../img/products/black_lamp.jpg"
import BlackLamp1 from "../img/products/black_lamp_1.webp"
import BlackLamp2 from "../img/products/black_lamp_2.jpg"

import BlackAndWhiteLamp from "../img/products/blackand_white.jpg"
import BlackAndWhiteLamp1 from "../img/products/blackand_white_1.webp"
import BlackAndWhiteLamp2 from "../img/products/blackand_white_2.webp"

import ChairBoom from "../img/products/chair_boom.jpg"
import ChairBoom1 from "../img/products/chair_boom_1.webp"
import ChairBoom2 from "../img/products/chair_boom_2.webp"

import Comfy from "../img/products/comfy.jpg"
import Comfy1 from "../img/products/comfy_1.webp"
import Comfy2 from "../img/products/comfy_2.webp"

import Copenhagen from "../img/products/copenhagen.jpg"
import Copenhagen1 from "../img/products/copenhagen_1.webp"
import Copenhagen2 from "../img/products/copenhagen_2.webp"

import GoldenLamp from "../img/products/golden_lamp.png"
import GoldenLamp1 from "../img/products/golden_lamp_1.webp"
import GoldenLamp2 from "../img/products/golden_lamp_2.webp"

import LampBlue from "../img/products/lamp_blue.png"
import LampBlue1 from "../img/products/lamp_blue_1.webp"
import LampBlue2 from "../img/products/lamp_blue_2.webp"

import MatLamp from "../img/products/mat.png"
import MatLamp1 from "../img/products/mat_1.webp"
import MatLamp2 from "../img/products/mat_2.webp"

import ModernGold from "../img/products/modern_gold.jpg"
import ModernGold1 from "../img/products/modern_gold_1.webp"
import ModernGold2 from "../img/products/modern_gold_2.webp"

import Other from "../img/products/other.jpg"
import Other1 from "../img/products/other_1.jpg"
import Other2 from "../img/products/other_2.jpg"

import PulpUnit from "../img/products/pulpunit.jpg"
import PulpUnit1 from "../img/products/pulpunit_1.jpg"
import PulpUnit2 from "../img/products/pulpunit_2.jpg"

import Shelf from "../img/products/shelf.jpg"
import Shelf1 from "../img/products/shelf_1.webp"
import Shelf2 from "../img/products/shelf_2.webp"

import SofaCorner from "../img/products/sofa_corner.jpg"
import SofaCorner1 from "../img/products/sofa_corner_1.jpg"
import SofaCorner2 from "../img/products/sofa_corner_2.jpg"

import SofaDouble from "../img/products/sofa_double.jpg"
import SofaDouble1 from "../img/products/sofa_double_1.jpg"
import SofaDouble2 from "../img/products/sofa_double_2.jpg"

import SofaYellow from "../img/products/sofa_yellow.jpg"
import SofaYellow1 from "../img/products/sofa_yellow_1.jpg"
import SofaYellow2 from "../img/products/sofa_yellow_2.jpg"

import TableKitchen from "../img/products/table_kitchen.jpg"
import TableKitchen1 from "../img/products/table_kitchen_1.jpg"
import TableKitchen2 from "../img/products/table_kitchen_2.jpg"

import TableLamp from "../img/products/table_lamp.png"
import TableLamp1 from "../img/products/table_lamp_1.webp"
import TableLamp2 from "../img/products/table_lamp_2.webp"

import TableMarble from "../img/products/table_marble.jpg"
import TableMarble1 from "../img/products/table_marble_1.jpg"
import TableMarble2 from "../img/products/table_marble_2.jpg"

import TableRound from "../img/products/table_round.jpg"
import TableRound1 from "../img/products/table_round_1.jpg"
import TableRound2 from "../img/products/table_round_2.jpg"

import WoodChair from "../img/products/wood_chair.png"
import WoodChair1 from "../img/products/wood_chair_1.webp"
import WoodChair2 from "../img/products/wood_chair_2.webp"

 const items = [
    {
        id: 1,
        quantity: 1,
        category: "Sofas",
        img: SofaDouble,
        description: "Диван двухместный",
        price: 15500,
        otherImgs: [SofaDouble, SofaDouble1, SofaDouble2],
        specs:
        "Бюджетный двухместный диван-кровать. Практичный и функциональный, легко трансформируется в односпальную кровать. Идеально подходит для небольших квартир или гостевых комнат.",
        texture: "Шинил",
        weight: "20кг",
        size: "190см x 70см",
    },
    
    {
        id: 2,
        quantity: 1,
        category: "Lamps",
        img: BlackAndWhiteLamp,
        description: "Черно-белая лампа",
        price: 3300,
        otherImgs: [BlackAndWhiteLamp, BlackAndWhiteLamp1, BlackAndWhiteLamp2],
        specs:
        "Лампа, которая вдохновлена перфорированным металлом и узорами, которые создает свет, проникая через маленькие отверстия. Контраст между грубым перфорированным металлом и гладким опаловым стеклом делает лампу простой и значимой. Благодаря своему элегантному выражению, она сияет независимо от того, включен свет или выключен.",
        texture: "Пластик",
        weight: "6кг",
        size: "20см x 20см",
    },
    {
        id: 3,
        quantity: 1,
        category: "Chairs",
        img: ChairBoom,
        description: "Традиционное кресло",
        price: 5800,
        otherImgs: [ChairBoom, ChairBoom1, ChairBoom2],
        specs:
        "Кресло предназначено для отдыха, это классический датский дизайн с современным и минималистским выражением. Благодаря стильным подушкам и деревянной раме, отполированной вручную, он представляет собой идеальный скандинавский дизайн, придающий дому индивидуальность.",
        texture: "Wood",
        weight: "8кг",
        size: "60см x 40см",
    },
    {
        id: 4,
        quantity: 1,
        category: "Chairs",
        img: Comfy,
        description: "Комфортное кресло",
        price: 6500,
        otherImgs: [Comfy, Comfy1, Comfy2],
        specs:
        "Данная серия, разработанная датским дизайнером Саймоном Легалдом, который является воплощением современной элегантности. Элегантные и решительные, как кончик крыла, подлокотники призывно раздвигаются, словно хотят обнять вас в мягком, уютном пространстве кресла.",
        texture: "Comfi (Комфи) ",
        weight: "25кг",
        size: "60см x 30см",
    },
    {
        id: 5,
        quantity: 1,
        category: "Chairs",
        img: Copenhagen,
        description: "Копенгаген Кресло",
        price: 6000,
        otherImgs: [Copenhagen, Copenhagen1, Copenhagen2],
        specs:
        "В этой серия стульев, постарались воплотить смысл слова безопасность, тепло и удобство. Это выражение в изящных органических формах и плавных изгибах, которые обеспечивают высокий уровень комфорта и комфорта в креслах.",
        texture: "Wood",
        weight: "14кг",
        size: "65см x 35см",
    },
    {
        id: 6,
        quantity: 1,
        category: "Lamps",
        img: GoldenLamp,
        description: "Золотая лампа",
        price: 3500,
        otherImgs: [GoldenLamp, GoldenLamp1, GoldenLamp2],
        specs:
        "Золотая лампа, разработанная в 1968 году, изначально предназначался для индустрии гостеприимства, а также для витрин и выставочных залов. Затем лампа стала популярной в частных домах, а благодаря своему стильному дизайну и большому выбору цветов в последние годы она снова стала популярной.",
        texture: "Пластик",
        weight: "4кг",
        size: "15см x 15см",
    },
    {
        id: 7,
        quantity: 1,
        category: "Lamps",
        img: LampBlue,
        description: "Лампа голубая",
        price: 2000,
        otherImgs: [LampBlue, LampBlue1, LampBlue2],
        specs:
        "Голубая лампа, представляет собой качественную лампу с уникальным и волшебным внешним видом. Серия ламп имеет фантастическое выражение, и, особенно, когда она включена, она создает особую атмосферу в комнате, в которой она висит. Лампа идеально подходит как для обеденного стола, так и для кухонной стойки, а также для освещения гостиной.",
        texture: "Пластик",
        weight: "2кг",
        size: "15см x 15см",
    },
    {
        id: 8,
        quantity: 1,
        category: "Lamps",
        img: MatLamp,
        description: "Матовая черная лампа",
        price: 2500,
        otherImgs: [MatLamp, MatLamp1, MatLamp2],
        specs:
        "Матовая чёрная лампа представляет собой стильное и современное осветительное устройство с матовой отделкой, которое придает ей элегантный и изысканный вид. Её поверхность имеет глухой, неотражающий блеск, что создает эффектную игру света и тени.",
        texture: "Металл",
        weight: "6кг",
        size: "20см x 15см",
    },
    {
        id: 9,
        quantity: 1,
        category: "Lamps",
        img: ModernGold,
        description: "Золотая современная лампа",
        price: 4100,
        otherImgs: [ModernGold, ModernGold1, ModernGold2],
        specs:
        "Лампа изготовлена по специальной технологии металлизации, что делает внешний вид совершенно уникальным. Первый в своем роде. Включенная лампа прозрачна, и вы можете увидеть захватывающую игру цветов",
        texture: "Пластик",
        weight: "3кг",
        size: "20см x 20см",
    },
    {
        id: 10,
        quantity: 1,
        category: "Chairs",
        img: Other,
        description: "Маленькое кресло овчина",
        price: 4900,
        otherImgs: [Other, Other1, Other2],
        specs:
        "Традиционное кресло из овчины, ограниченная серия.",
        texture: "Овечья шкура",
        weight: "15кг",
        size: "150см x 70см",
    },
    {
        id: 11,
        quantity: 1,
        category: "Shelves",
        img: PulpUnit,
        description: "Целлюлозный блок – 5 отсеков",
        price: 2500,
        otherImgs: [PulpUnit, PulpUnit1, PulpUnit2],
        specs:
        "Целлюлозные агрегаты легкие и прочные, их можно использовать как горизонтально, так и вертикально. Угловые файлы и папки с кольцами, разработанные специально для бумаги формата А4, аккуратно помещаются внутри.",
        texture: "Дерево",
        weight: "45кг",
        size: "250см x 60см",
    },
    {
        id: 12,
        quantity: 1,
        category: "Shelves",
        img: Shelf,
        description: "Полка черный ясень",
        price: 2100,
        otherImgs: [Shelf, Shelf1, Shelf2],
        specs:
        "Минималистичная настенная полка, разработанная с учетом функциональности и эстетики. Без лишних деталей и чистых линий эта коллекция легко и элегантно висит на стене, создавая спокойствие и обзор вещей, которые хочется поставить на полку.",
        texture: "Дерево",
        weight: "10кг",
        size: "60см x 20см",
    },
    {
        id: 13,
        quantity: 1,
        category: "Sofas",
        img: SofaCorner,
        description: "Диван угловой",
        price: 25100,
        otherImgs: [SofaCorner, SofaCorner2, SofaCorner2],
        specs:
        "Роскошный и просторный угловой диван с обивкой из бархата, обеспечивающий комфортное и уютное место для отдыха и общения.",
        texture: "Флок",
        weight: "35кг",
        size: "230см x 150см",
    },
    {

      id: 14,
      quantity: 1,
      category: "Lamps",
      img: BlackLamp,
      description: "Лампа «Солнце»",
      price: 3700,
      otherImgs: [BlackLamp, BlackLamp1, BlackLamp2],
      specs:
      "Лампа «Солнце»,  представляет собой качественную лампу с уникальным и волшебным внешним видом. Серия «Солнце»,  имеет фантастическое выражение, и, особенно, когда она включена, она создает особую атмосферу в комнате, в которой она висит. Лампа идеально подходит как для обеденного стола, так и для кухонной стойки, а также для освещения гостиной.",
      texture: "Пластик",
      weight: "4кг",
      size: "20см x 20см",
    },
    {
        id: 15,
        quantity: 1,
        category: "Sofas",
        img: SofaYellow,
        description: "Диван желтый",
        price: 23000,
        otherImgs: [SofaYellow, SofaYellow1, SofaYellow2],
        specs:
        "Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс». Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и функциональность, собранные воедино – «Динс» просто создан для размеренного отдыха в кругу семьи или компании друзей!",
        texture: "Кожа",
        weight: "30кг",
        size: "230см x 70см",
    },
    {
        id: 16,
        quantity: 1,
        category: "Tables",
        img: TableKitchen,
        description: "Стол «Фостер»",
        price: 10300,
        otherImgs: [TableKitchen, TableKitchen1, TableKitchen2],
        specs:
        "Стол Фостер недорогой и очень стильный стол, выполненный в стиле 'лофт' с текстурой столешницы под натуральное дерево. Идеальный вариант для тех, кто проектирует свой интерьер в минималистическом стиле, а также ищет что-то современное и необычное.  ",
        texture: "Дерево",
        weight: "15кг",
        size: "110см x 60см",
    },
    {
        id: 17,
        quantity: 1,
        category: "Lamps",
        img: TableLamp,
        description: "Настольная лампа",
        price: 2100,
        otherImgs: [TableLamp, TableLamp1, TableLamp2],
        specs:
        "Лампа также стала популярной в частных домах, особенно в последние годы. Это не в последнюю очередь благодаря стильному дизайну лампы и множеству цветовых вариантов, благодаря которым она подойдет куда угодно.",
        texture: "Металл",
        weight: "5кг",
        size: "25см x 15см",
    },
    {
        id: 18,
        quantity: 1,
        category: "Tables",
        img: TableMarble,
        description: "Стол из мрамора",
        price: 20300,
        otherImgs: [TableMarble, TableMarble1, TableMarble2],
        specs:
        "Мраморный стол - это роскошная и изысканная мебельная деталь, которая придает интерьеру элегантность и роскошь. Мрамор является прочным и долговечным материалом, который выдерживает тяжелые нагрузки и не теряет своего блеска со временем.",
        texture: "Мрамор",
        weight: "25кг",
        size: "80см x 80см",
    },
    {
        id: 19,
        quantity: 1,
        category: "Tables",
        img: TableRound,
        description: "Стол круглый",
        price: 14100,
        otherImgs: [TableRound, TableRound1, TableRound2],
        specs:
        "Круглый деревянный стол - это элегантная и универсальная мебельная деталь, которая добавляет теплоты и стиля в любое помещение. Стол имеет круглую форму, что создает приятное ощущение гармонии и равновесия в помещении. ",
        texture: "Дерево",
        weight: "15кг",
        size: "70см x 70см",
    },
    {
        id: 20,
        quantity: 1,
        category: "Chairs",
        img: WoodChair,
        description: "Дубовый испанский стул",
        price: 3500,
        otherImgs: [WoodChair, WoodChair1, WoodChair2],
        specs:
        "«Испанский стул», является одним из первых проектов Борге Могенсена, поэтому он является одним из его самых узнаваемых продуктов во всем мире.",
        texture: "Wood",
        weight: "15кг",
        size: "60см x 30см",
    },    
]

export default items;