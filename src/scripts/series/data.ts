export interface Feature {
  image?: string;
  title: string;
  labels: string[];
}

export interface Slide {
  title: string;
  href: string;
  descriptions: string[];
  features: Feature[];
  images: string[];
}

export interface Data {
  slides: Slide[];
}

export const DATA: Data = {
  slides: [
    {
      title: "RK 9000",
      href: "#RK9000",
      descriptions: [
        "Обновленный клапан выдоха для легкого дыхания",
        "Анатомическая форма носовой части фильтрующей полумаски дополнена гибкой пластиной для адаптации к особенностям лица",
      ],
      features: [
        {
          image: "assets/images/series/protection.svg",
          title: "Защита от всех видов аэрозолей",
          labels: ["Пыль", "Дым", "Туман"],
        },
        {
          image: "assets/images/series/additional-protection.svg",
          title: "Дополнительная защита",
          labels: [
            "Органические газы и пары от нагрева металлов",
            "Сварочные аэрозоли, озон",
            "Кислые газы",
            "Неорганические газы",
          ],
        },
      ],
      images: [
        "assets/images/series/0/0.jpeg",
        "assets/images/series/0/1.jpeg",
        "assets/images/series/0/2.jpeg",
        "assets/images/series/0/3.jpeg",
      ],
    },
    {
      title: "RK 6000",
      href: "#RK6000",
      descriptions: [
        "Дополнительный внутренний слой - респиратор не сминается при дыхании",
      ],
      features: [
        {
          image: "assets/images/series/protection.svg",
          title: "Защита от всех видов аэрозолей",
          labels: ["Пыль", "Дым", "Туман"],
        },
      ],
      images: [
        "assets/images/series/1/0.jpeg",
        "assets/images/series/1/1.jpeg",
        "assets/images/series/1/2.jpeg",
        "assets/images/series/1/3.jpeg",
      ],
    },
    {
      title: "АЛИНА®",
      href: "#АЛИНА®",
      descriptions: [
        "Эластичная линия прилегания позволяет респиратору сжиматься и растягиваться, подстраиваясь под параметры лица",
        "Широкий диапазон параметров защиты органов дыхания",
      ],
      features: [
        {
          image: "assets/images/series/protection.svg",
          title: "Защита от всех видов аэрозолей",
          labels: ["Пыль", "Дым", "Туман"],
        },
        {
          image: "assets/images/series/additional-protection.svg",
          title: "Дополнительная защита",
          labels: [
            "Органические газы и пары от нагрева металлов",
            "Сварочные аэрозоли, озон",
            "Кислые газы",
            "Неорганические газы",
            "Основные газы",
            "Вирусы и бактерии",
            "Радиоактивный йод",
            "Радиоактивные и канцерогенные аэрозоли",
          ],
        },
      ],
      images: [
        "assets/images/series/2/0.jpeg",
        "assets/images/series/2/1.jpeg",
        "assets/images/series/2/2.jpeg",
        "assets/images/series/2/3.jpeg",
      ],
    },
    {
      title: "ЮЛИЯ®",
      href: "#ЮЛИЯ®",
      descriptions: [
        "Классическая чашеобразная форма",
        "Отсутствие металлических элементов и возможность многоразового использования",
      ],
      features: [
        {
          image: "assets/images/series/protection.svg",
          title: "Защита от всех видов аэрозолей",
          labels: ["Пыль", "Дым", "Туман"],
        },
        {
          image: "assets/images/series/additional-protection.svg",
          title: "Дополнительная защита",
          labels: [
            "Органические газы и пары от нагрева металлов",
            "Сварочные аэрозоли, озон",
            "Кислые газы",
            "Неорганические газы",
          ],
        },
      ],
      images: [
        "assets/images/series/3/0.jpeg",
        "assets/images/series/3/1.jpeg",
        "assets/images/series/3/2.jpeg",
        "assets/images/series/3/3.jpeg",
      ],
    },
    {
      title: "НЕВА®",
      href: "#НЕВА®",
      descriptions: [
        "Легкий и компактный респиратор",
        "Носовой зажим обеспечивает плотное прилегание в области носа",
      ],
      features: [
        {
          image: "assets/images/series/protection.svg",
          title: "Защита от всех видов аэрозолей",
          labels: ["Пыль", "Дым", "Туман"],
        },
        {
          image: "assets/images/series/additional-protection.svg",
          title: "Дополнительная защита",
          labels: [
            "Органические газы и пары от нагрева металлов",
            "Сварочные аэрозоли, озон",
            "Вирусы и бактерии",
          ],
        },
      ],
      images: [
        "assets/images/series/4/0.jpeg",
        "assets/images/series/4/1.jpeg",
        "assets/images/series/4/2.jpeg",
      ],
    },
    {
      title: "GAGARA®",
      href: "#GAGARA®",
      descriptions: [
        "Респиратор двойного сложения помещается в карман",
        "Лучшее от медицинской маски и профессионального респиратора",
      ],
      features: [
        {
          image: "assets/images/series/protection.svg",
          title: "Защита от всех видов аэрозолей",
          labels: ["Пыль", "Дым", "Туман"],
        },
        {
          image: "assets/images/series/additional-protection.svg",
          title: "Дополнительная защита",
          labels: ["Вирусы и бактерии"],
        },
      ],
      images: [
        "assets/images/series/5/0.jpeg",
        "assets/images/series/5/0.jpeg",
      ],
    },
  ],
};
