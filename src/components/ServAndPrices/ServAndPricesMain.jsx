import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import "../../styles/ServAndPrices/ServAndPricesMain.css";

const servicesData = [
    { id: 1, name: "Прием (осмотр, консультация) врача-стоматолога-терапевта первичный", price: 500, section: "Терапевтический прием" },
    { id: 2, name: "Восстановление зуба пломбой I, V, VI класс по Блэку с использованием стоматологических цементов", price: 1500, section: "Терапевтический прием" },
    { id: 3, name: "Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов химического отверждения", price: 1500, section: "Терапевтический прием" },
    { id: 4, name: "Восстановление зуба пломбой с нарушением контактного пункта II, III класс по Блэку с использованием стоматологических цементов", price: 1800, section: "Терапевтический прием" },
    { id: 5, name: "Восстановление зуба пломбой с нарушением контактного пункта II, III класс по Блэку с использованием материалов химического отверждения", price: 2000, section: "Терапевтический прием" },
    { id: 6, name: "Восстановление зуба пломбой IV класс по Блэку с использованием стеклоиномерных цементов", price: 2000, section: "Терапевтический прием" },
    { id: 7, name: "Восстановление зуба пломбой IV класс по Блэку с использованием материалов химического отверждения", price: 2200, section: "Терапевтический прием" },
    { id: 8, name: "Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров", price: 2400, section: "Терапевтический прием" },
    { id: 9, name: "Восстановление зуба пломбой с нарушением контактного пункта II, III класс по Блэку с использованием материалов из фотополимеров", price: 2800, section: "Терапевтический прием" },
    { id: 10, name: "Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров", price: 3000, section: "Терапевтический прием" },
    { id: 11, name: "Восстановление зуба вкладками, виниром, полукоронкой из фотополимерного материала прямым методом", price: 4800, section: "Терапевтический прием" },
    { id: 12, name: "Восстановление зуба материалами из фотополимеров с использованием анкерных штифтов", price: 6600, section: "Терапевтический прием" },
    { id: 13, name: "Восстановление зуба материалами из фотополимеров с использованием титановых штифтов", price: 6600, section: "Терапевтический прием" },
    { id: 14, name: "Восстановление зуба материалами из фотополимеров с использованием стекловолоконных штифтов", price: 6600, section: "Терапевтический прием" },
    { id: 15, name: "Фиксация внутриканального штифта/вкладки", price: 2000, section: "Терапевтический прием" },
    { id: 16, name: "Удаление внутриканального штифта/вкладки", price: 1500, section: "Терапевтический прием" },
    { id: 17, name: "Трепанация зуба, искусственной коронки", price: 700, section: "Терапевтический прием" },
    { id: 18, name: "Наложение девитализирующей пасты", price: 200, section: "Терапевтический прием" },
    { id: 19, name: "Наложение лечебной прокладки", price: 200, section: "Терапевтический прием" },
    { id: 20, name: "Экстирпация пульпы", price: 300, section: "Терапевтический прием" },
    { id: 21, name: "Ампутация пульпы", price: 300, section: "Терапевтический прием" },
    { id: 22, name: "Распломбировка корневого канала ранее леченного пастой", price: 500, section: "Терапевтический прием" },
    { id: 23, name: "Распломбировка корневого канала ранее леченного фосфат-цементом/резорцин-формальдегидным методом", price: 700, section: "Терапевтический прием" },
    { id: 24, name: "Ультразвуковое расширение корневого канала зуба", price: 800, section: "Терапевтический прием" },
    { id: 25, name: "Инструментальная и медикаментозная обработка корневого канала", price: 400, section: "Терапевтический прием" },
    { id: 26, name: "Пломбирование корневого канала зуба пастой", price: 300, section: "Терапевтический прием" },
    { id: 27, name: "Пломбирование корневого канала зуба гуттаперчивыми штифтами", price: 500, section: "Терапевтический прием" },
    { id: 28, name: "Закрытие перфорации стенки корневого канала зуба", price: 500, section: "Терапевтический прием" },
    { id: 29, name: "Временное пломбирование лекарственным препаратом корневого канала", price: 300, section: "Терапевтический прием" },
    { id: 30, name: "Наложение временной пломбы", price: 100, section: "Терапевтический прием" },
    { id: 31, name: "Снятие временной пломбы", price: 100, section: "Терапевтический прием" },
    { id: 32, name: "Профессиональное отбеливание зубов внутрикоронковое для измененных в цвете зубов (1 зуб)", price: 1500, section: "Терапевтический прием" },
    { id: 33, name: "Ультразвуковое удаление наддесневых и поддесневых зубных отложений аппаратом Пьезон", price: 3500, section: "Терапевтический прием" },
    { id: 34, name: "Удаление наддесневых и поддесневых зубных отложений в области одного зуба", price: 300, section: "Терапевтический прием" },
    { id: 35, name: "Профессиональная гигиена полости рта и зубов", price: 2000, section: "Терапевтический прием" },
    { id: 36, name: "Местное применение реминерализующих препаратов в области зуба", price: 300, section: "Терапевтический прием" },
    { id: 37, name: "Аппликация лекарственного препарата на слизистую оболочку полости рта", price: 200, section: "Терапевтический прием" },
    { id: 38, name: "Инъекционное введение лекарственных препаратов в челюстно-лицевую область", price: 200, section: "Терапевтический прием" },
    { id: 39, name: "Назначение лекарственных препаратов при заболеваниях полости рта и зубов", price: 200, section: "Терапевтический прием" },
    { id: 40, name: "Электроодонтометрия зуба (ЭОД)", price: 200, section: "Терапевтический прием" },
    { id: 41, name: "Определение индексов гигиены полости рта", price: 200, section: "Терапевтический прием" },
    { id: 42, name: "Определение пародонтальных индексов", price: 200, section: "Терапевтический прием" },
    { id: 43, name: "Описание и интерпретация рентгенографических изображений", price: 400, section: "Терапевтический прием" },
    { id: 44, name: "Измерение артериального давления на переферических артериях", price: 300, section: "Терапевтический прием" },
    { id: 45, name: "Прием (осмотр, консультация) врача-стоматолога-ортопеда первичный", price: 1000, section: "Ортопедический прием" },
    { id: 46, name: "Восстановление зуба коронкой временной прямым методом", price: 1800, section: "Ортопедический прием" },
    { id: 47, name: "Восстановление зуба коронкой временной лабораторным методом", price: 1800, section: "Ортопедический прием" },
    { id: 48, name: "Восстановление зуба коронкой постоянной металлической цельнолитой", price: 4700, section: "Ортопедический прием" },
    { id: 49, name: "Восстановление зуба коронкой постоянной металлической цельнолитой с напылением", price: 4900, section: "Ортопедический прием" },
    { id: 50, name: "Восстановление зуба коронкой постоянной металлокерамической", price: 7900, section: "Ортопедический прием" },
    { id: 51, name: "Восстановление зуба коронкой постоянной металлокерамической с плечевой массой и индивидуальным воспроизведением эстетики на зубы в линии улыбки", price: 7900, section: "Ортопедический прием" },
    { id: 52, name: "Восстановление зуба коронкой постоянной металлической штампованной", price: 2600, section: "Ортопедический прием" },
    { id: 53, name: "Восстановление зуба коронкой постоянной металлической штампованной с напылением", price: 2900, section: "Ортопедический прием" },
    { id: 54, name: "Восстановление зуба коронкой постоянной металлической бюгельной", price: 3400, section: "Ортопедический прием" },
    { id: 55, name: "Восстановление зуба коронкой постоянной металлической бюгельной с напылением", price: 3600, section: "Ортопедический прием" },
    { id: 56, name: "Восстановление зуба коронкой постоянной пластмассовой", price: 2800, section: "Ортопедический прием" },
    { id: 57, name: "Восстановление зуба коронкой постоянной комбинированной по Белкину", price: 5300, section: "Ортопедический прием" },
    { id: 58, name: "Восстановление зуба коронкой постоянной комбинированной по Белкину с напылением", price: 5500, section: "Ортопедический прием" },
    { id: 59, name: "Восстановление зуба коронкой постоянной телескопической", price: 7900, section: "Ортопедический прием" },
    { id: 60, name: "Восстановление зуба коронкой с использованием цельнолитой культевой вкладки простой", price: 3400, section: "Ортопедический прием" },
    { id: 61, name: "Восстановление зуба коронкой с использованием цельнолитой культевой вкладки разборной", price: 4000, section: "Ортопедический прием" },
    { id: 62, name: "Восстановление зуба коронкой с использованием цельнолитой культевой вкладки с атачменом", price: 7900, section: "Ортопедический прием" },
    { id: 63, name: "Восстановление зуба коронкой с использованием цельнолитой культевой вкладки с металлокерамической облицовкой", price: 11300, section: "Ортопедический прием" },
    { id: 64, name: "Протезирование зуба с использованием имплантата коронкой постоянной металлокерамической", price: 9200, section: "Ортопедический прием" },
    { id: 65, name: "Протезирование зуба с использованием имплантата коронкой постоянной металлической цельнолитой", price: 5200, section: "Ортопедический прием" },
    { id: 66, name: "Протезирование зуба с использованием имплантата коронкой постоянной металлической цельнолитой с напылением", price: 5500, section: "Ортопедический прием" },
    { id: 67, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами металлокерамические", price: 7900, section: "Ортопедический прием" },
    { id: 68, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами металлокерамические с искусственной десной", price: 1300, section: "Ортопедический прием" },
    { id: 69, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами металлическим цельнолитым", price: 4500, section: "Ортопедический прием" },
    { id: 70, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами металлическим цельнолитым с напылением", price: 5200, section: "Ортопедический прием" },
    { id: 71, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами пластмассовыми", price: 3200, section: "Ортопедический прием" },
    { id: 72, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами пластмассовыми временными", price: 1800, section: "Ортопедический прием" },
    { id: 73, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами штамповано-паяными", price: 2600, section: "Ортопедический прием" },
    { id: 74, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами штамповано-паяными с напылением", price: 2800, section: "Ортопедический прием" },
    { id: 75, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами штамповано-паяными с фасеткой", price: 3800, section: "Ортопедический прием" },
    { id: 76, name: "Восстановление целостности зубного ряда несъемными мостовидными протезами штамповано-паяными с фасеткой с напылением", price: 4000, section: "Ортопедический прием" },
    { id: 77, name: "Коррекция прикуса с использованием съемных и несъемных ортопедических конструкций", price: 13000, section: "Ортопедический прием" },
    { id: 78, name: "Протезирование частичными съемными пластиночными протезами (1 челюсть)", price: 13000, section: "Ортопедический прием" },
    { id: 79, name: "Протезирование частичными съемными пластиночными протезами с армированием (1 челюсть)", price: 16500, section: "Ортопедический прием" },
    { id: 80, name: "Протезирование частичными съемными пластиночными протезами с замковой фиксацией (1 челюсть)", price: 7600, section: "Ортопедический прием" },
    { id: 81, name: "Протезирование частичными съемными пластиночными протезами из нейлона (1 челюсть)", price: 19000, section: "Ортопедический прием" },
    { id: 82, name: "Протезирование частичными съемными пластиночными протезами для временного замещения 1-4 отсутствующих зубов (иммедиат-протез)", price: 5000, section: "Ортопедический прием" },
    { id: 83, name: "Протезирование зубов полными съемными пластиночными протезами (1 челюсть)", price: 13000, section: "Ортопедический прием" },
    { id: 84, name: "Протезирование зубов полными съемными пластиночными протезами с армированием", price: 16500, section: "Ортопедический прием" },
    { id: 85, name: "Протезирование зубов полными съемными пластиночными протезами с замковой фиксацией (1 челюсть)", price: 7600, section: "Ортопедический прием" },
    { id: 86, name: "Протезирование съемными бюгельными протезами с кламмерной фиксацией (1 челюсть)", price: 32500, section: "Ортопедический прием" },
    { id: 87, name: "Протезирование съемными бюгельными протезами с замковой фиксацией (1 челюсть)", price: 35000, section: "Ортопедический прием" },
    { id: 88, name: "Протезирование съемными бюгельными протезами с телескопической фиксацией (1 челюсть)", price: 7600, section: "Ортопедический прием" },
    { id: 89, name: "Восстановление целостности зубного ряда съемными мостовидными протезами с телескопической фиксацией (1 челюсть)", price: 7600, section: "Ортопедический прием" },
    { id: 90, name: "Снятие оттиска с одной челюсти альгинатной массой", price: 800, section: "Ортопедический прием" },
    { id: 91, name: "Снятие оттиска с одной челюсти массой из С-силикона", price: 900, section: "Ортопедический прием" },
    { id: 92, name: "Снятие оттиска с одной челюсти массой из А-силикона", price: 1200, section: "Ортопедический прием" },
    { id: 93, name: "Снятие оттиска с одной челюсти массой из поливинилсилаксана", price: 1200, section: "Ортопедический прием" },
    { id: 94, name: "Снятие оттиска с одной челюсти с использованием индивидуальной ложки", price: 3000, section: "Ортопедический прием" },
    { id: 95, name: "Снятие оттиска с одной челюсти ложки с имплантатов открытым методом", price: 1200, section: "Ортопедический прием" },
    { id: 96, name: "Снятие оттиска с одной челюсти с имплантатов закрытым методом", price: 1200, section: "Ортопедический прием" },
    { id: 97, name: "Снятие оттиска с одной челюсти для изготовления силиконового ключа", price: 1200, section: "Ортопедический прием" },
    { id: 98, name: "Определение вида смыкания зубных рядов с помощью лицевой дуги", price: 4200, section: "Ортопедический прием" },
    { id: 99, name: "Определение центральной окклюзии", price: 500, section: "Ортопедический прием" },
    { id: 100, name: "Исследование на диагностических моделях челюстей", price: 500, section: "Ортопедический прием" },
    { id: 101, name: "Исследование на диагностических моделях челюстей с изготовлением хирургического шаблона для позиционирования имплантатов", price: 5400, section: "Ортопедический прием" },
    { id: 102, name: "Исследование на диагностических моделях челюстей с восковой моделировкой (WАx-Up) будущей ортопедической конструкции с целью планирования препарирования, эстетики и функции (1 единица)", price: 1800, section: "Ортопедический прием" },
    { id: 103, name: "Определение прикуса при помощи примерки в полости рта результата воскового моделирования (Moke-Up) из временного композитного материала, планирования эстетики и функции (1 единица)", price: 4200, section: "Ортопедический прием" },
    { id: 104, name: "Трепанация зуба, искусственной коронки", price: 1000, section: "Ортопедический прием" },
    { id: 105, name: "Избирательное пришлифовывание твердых тканей зуба (1 единица)", price: 300, section: "Ортопедический прием" },
    { id: 106, name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций (1 единица) поликарбоксилатный", price: 1300, section: "Ортопедический прием" },
    { id: 107, name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций СИЦ", price: 2000, section: "Ортопедический прием" },
    { id: 108, name: "Повторная фиксация на временный цемент несъемных ортопедических конструкций", price: 300, section: "Ортопедический прием" },
    { id: 109, name: "Снятие, постановка коронки постоянной цельнометаллической, металлокерамической (1 единица)", price: 1000, section: "Ортопедический прием" },
    { id: 110, name: "Снятие, постановка коронки постоянной пластмассовой, штампованой (1 единица)", price: 700, section: "Ортопедический прием" },
    { id: 111, name: "Снятие, постановка коронки временной (1 единица)", price: 300, section: "Ортопедический прием" },
    { id: 112, name: "Снятие, постановка коронки с имплантата", price: 1000, section: "Ортопедический прием" },
    { id: 113, name: "Снятие несъемной ортопедической конструкции с использованием ультразвукового скалера", price: 700, section: "Ортопедический прием" },
    { id: 114, name: "Перебазировка съемного протеза лабораторным методом", price: 3400, section: "Ортопедический прием" },
    { id: 115, name: "Приварка кламмера", price: 1500, section: "Ортопедический прием" },
    { id: 116, name: "Приварка зуба", price: 1500, section: "Ортопедический прием" },
    { id: 117, name: "Починка перелома базиса самотвердеющей пластмассой", price: 1500, section: "Ортопедический прием" },
    { id: 118, name: "Починка двух переломов базиса самотвердеющей пластмассой", price: 1800, section: "Ортопедический прием" },
    { id: 119, name: "Изготовление эластической прокладки", price: 3400, section: "Ортопедический прием" },
    { id: 120, name: "Изготовление дуги вестибулярной", price: 4000, section: "Ортопедический прием" },
    { id: 121, name: "Облицовка замка, ответной части замка керамикой", price: 7800, section: "Ортопедический прием" },
    { id: 122, name: "Замена втулки/матрицы атачмена", price: 2000, section: "Ортопедический прием" },
    { id: 123, name: "Прием (осмотр, консультация) врача-стоматолога-хирурга первичный", price: 600, section: "Хирургический прием" },
    { id: 124, name: "Проводниковая анестезия", price: 350, section: "Хирургический прием" },
    { id: 125, name: "Инфильтрационная анестезия", price: 350, section: "Хирургический прием" },
    { id: 126, name: "Аппликационная анестезия", price: 150, section: "Хирургический прием" },
    { id: 127, name: "Удаление зуба", price: 2000, section: "Хирургический прием" },
    { id: 128, name: "Удаление зуба сложное с разъединением корней", price: 2200, section: "Хирургический прием" },
    { id: 129, name: "Удаление зуба 8 нижнего", price: 2600, section: "Хирургический прием" },
    { id: 130, name: "Операция удаления ретенированного, дистопированного или сверхкомплектного зуба", price: 7500, section: "Хирургический прием" },
    { id: 131, name: "Резекция верхушки корня", price: 6000, section: "Хирургический прием" },
    { id: 132, name: "Вскрытие подслизистого или поднадкостничного очага воспаления в полости рта", price: 1800, section: "Хирургический прием" },
    { id: 133, name: "Отсроченный кюретаж лунки удаленного зуба", price: 1500, section: "Хирургический прием" },
    { id: 134, name: "Цистотомия или цистэктомия", price: 6000, section: "Хирургический прием" },
    { id: 135, name: "Пластика альвеолярного отростка", price: 3500, section: "Хирургический прием" },
    { id: 136, name: "Коррекция объема и формы альвеолярного отростка", price: 1500, section: "Хирургический прием" },
    { id: 137, name: "Гингивэктомия", price: 1500, section: "Хирургический прием" },
    { id: 138, name: "Диатермокоагуляция при патологии полости рта и зубов", price: 1500, section: "Хирургический прием" },
    { id: 139, name: "Пластика уздечки верхней губы", price: 1500, section: "Хирургический прием" },
    { id: 140, name: "Пластика уздечки нижней губы", price: 1500, section: "Хирургический прием" },
    { id: 141, name: "Пластика уздечки языка", price: 1500, section: "Хирургический прием" },
    { id: 142, name: "Вестибулопластика", price: 8000, section: "Хирургический прием" },
    { id: 143, name: "Лечение перекоронита (промывание, рассечение и/или иссечение капюшона)", price: 1800, section: "Хирургический прием" },
    { id: 144, name: "Остановка луночного кровотечения без наложения швов", price: 1100, section: "Хирургический прием" },
    { id: 145, name: "Наложение шва на слизистую оболочку рта", price: 300, section: "Хирургический прием" },
    { id: 146, name: "Снятие послеоперационных швов (лигатур)", price: 800, section: "Хирургический прием" },
    { id: 147, name: "Внутрикостная дентальная имплантация", price: 18000, section: "Хирургический прием" },
];

const sections = ["Все", "Терапевтический прием", "Ортопедический прием", "Хирургический прием"];

const ServAndPricesMain = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSection, setSelectedSection] = useState("Все");

    const filteredServices = servicesData.filter(service =>
        (selectedSection === "Все" || service.section === selectedSection) &&
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="main">
            <HashLink className="back-to-top" to="#top">↑</HashLink>
            <div className="main-container">
                <div className="contacts-info-item phone">
                    <strong>Телефон:</strong>
                    <br />
                    <a href="tel:+79135520282">+7 (913) 552 02 82</a>
                </div>

                <h1 className="main-title">Прейскурант</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Поиск услуги..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="filter-container">
                    {sections.map(section => (
                        <button
                            key={section}
                            className={`filter-button ${selectedSection === section ? "active" : ""}`}
                            onClick={() => setSelectedSection(section)}
                        >
                            {section}
                        </button>
                    ))}
                </div>
                <ul className="services-list">
                    {filteredServices.map(service => (
                        <li key={service.id} className="service-item">
                            <span className="service-name">{service.name}</span>
                            <span className="service-price">{service.price} ₽</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default ServAndPricesMain;
