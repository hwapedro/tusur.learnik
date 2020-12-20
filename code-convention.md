# Соглашение по коду

# Оглавление

1. [Файловая структура модуля или компонента](#structure)
2. [Прочие советы по файловой структуре](#structure_others)
3. [Про нейминг](#naming)
4. [Про реакт](#react)
5. [Про CSS](#css)
6. [Общее соглашение по коду](#common_style)
7. [Соглашение по коду TypeScript](#ts_style)

### Файловая структура модуля или компонента <a name="structure"></a>

1. Объявление типов, интерфейсов и прочего выносим в отдельный файл `interface.ts`
2. Реализацию роутинга в рамках модуля выносим в отдельный файл `.route.ts`
3. Стили пишем на styled-components в отдельных файлах согласно файловой структуре (style.ts)

```
Component
├── dependencies                   # папки компонент и модулей, которые непосредственно используются в Component.tsx. Структура папки должна наследовать текущую
├── Component.constant.ts          # константы
├── Component.interface.ts         # файл с объявлениями типов (types, interfaces и прочее)
├── Component.style.ts             # стили для Module
├── Component.route.ts             # React Router Switch компонент для Module (опционально)
├── Component.tsx                  # корневой файл. Непосредственно реализация компонента.
```

### Про нейминг <a name="naming"></a>

1. Не стоит использовать сокращения в функциях map, reduce и прочих

```typescript
const updatedCategories = categories.map((c, i) => some stuff...) // плохо
const updatedCategories = categories.map((category, index) => some stuff...) // хорошо
```

2. Используем arguments destructing только тогда, когда количество полей в объекте - аргументе функции не превышает пяти. Начиная с крупных объектов, используем `const { entity1, entity2,entity3, entity4, entity5, entityN } = props`

```typescript
const Component = ({ prop1, prop2, prop3, prop4, prop5 }) => <div /> // хорошо

const Component = props => {
  const { prop1, prop2, prop3, prop4, prop5, prop6 } = props // хорошо
  return <div />
}

const Component = ({ prop1, prop2, prop3, prop4, prop5, prop6 }) => <div /> // плохо
```

3. В случае глубокой вложенности не используем глубокий destructuring. Максимальный уровень вложенности для использования этого паттерна - 3 уровня.

```typescript
const {
  entity1: {
    entity2: {
      entity3: { entity4: entity5 }
    }
  }
} = props // так не делаем
```

## Про реакт <a name="react"></a>

0. Преимущественно пытаемся все написать с хуками.

1. Импорты делятся на несколько блоков:

```typescript
import React, { FC } from 'react' // пакеты реакта и редакса
import { useSelector } from 'react-redux'
// ПУСТАЯ СТРОКА
import Button from '@atlassian-ui-kit/button' // компоненты сторонних пакетов
// ПУСТАЯ СТРОКА
import { isEmpty } from 'ramda' // пакеты утилитарных функций
// ПУСТАЯ СТРОКА
import { OrderWrapper } from 'OrderWrapper/OrderWrapper' // импорт самописных компонентов и их интерфейсов, типов
import { OrderWrapperProps } from 'OrderWrapper/OrderWrapper/OrderWrapper.interface'
// ПУСТАЯ СТРОКА
import { ComponentProps } from './Component.interface' // импорт собственных типов, интерфейсов, стилей, графики
import { ContainerStyled, ButtonStyled } from './StudyModule.style'
```

2. Стрелочных функций в render-методах следует избегать. На каждый рендер будет создаваться новый инстанс стрелочной функции

```typescript
<Input
  ...пропсы компонента
  onChange={value => setFieldValue(value, 'name')}
/>
```

3. Не используем конструкторы в компонентах. State всегда объявляется как поле класса и его все значения, берутся ли они из пропсов или определяются на месте, инициализируются внутри.
4. Если значение из стейта/пропов используется в нескольких местах - уместно использовать геттер.
5. Порядок объявления полей класса:

- Сначала объявляются обычные переменные - поля класса (включая state)
- Затем объявляются геттеры (при желании)
- Затем объявляются lifecycle - методы
- Затем объявляются хэндлеры
- Затем объявляются вспомогательные методы

6. Рефы следует прописывать не в конструкторе, а отдельным полем класса
7. Стараемся максимально использовать React.memo и React.PureComponent

## Про CSS <a name="css"></a>

Объявления логически связанных свойств группируются в следующем порядке:

- Позиционирование
- Блочная модель
- Типографика
- Оформление
- Анимация
- Разное

```css
declaration-order {
  /* Позиционирование */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Блочная модель */
  display: block;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Типографика */
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  line-height: 1.5;
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: ${colors.red};

  /* Оформление */
  background-color: ${colors.white};
  border-radius: 3px;
  opacity: 1;

  /* Анимация */
  transition: color 1s;

  /* Разное */
  will-change: auto;
}
```

## Соглашение по коду TypeScript <a name="ts_style"></a>

1. Интерфейсы и типы:

- наименование _не должно_ содержать префиксов `I` или `T`
- наименование _должно_ содержать постфикс по типу интерфейса: `ComponentProps`, `ComponentState`

```typescript
/* плохо */
export interface IButton {
  color: string
}

export interface IButtonProps {
  color: string
}

/* хорошо */
export interface ButtonProps {
  color: string
}
```

- Интерфейсы можно наследовать от чего-либо.
- Использование необязательных переменных должно быть осмысленным. Любой интерфейс может иметь как обязательные параметры, так и не обязательные. Если в интерфейсе все параметры стали не обязательными, значит есть проблемы с архитектурой самого компонента.
- Очевидно, что вместо того, чтобы писать в интерфейсе `value: someType | undefined`, следует использовать необязательный параметр: `value?: someType`
- В случае желания написать что-то из серии `const example: Type1 | Type2 | string | number | whatever` - следует задуматься как минимум о том, чтобы обязательно вынести это в отдельный тип.
- В случае, если поле является необязательным, необходимо указывать default - значение этого поля.

2. Енамы и константы

- Все переменные должны выносить в файл `constant.ts`
- Одиночные константы должны называться с большой буквы через нижнее подчеркивание. Например: `MY_CONST`
- Переменные, в которых может содержаться перечисление, должны назваться в единственном числе с заглавной ведущей буквой без символов тире и нижнего подчеркивания
- Если необходимо написать switch, либо ряд if, стоит создать для этого enum. Это предостережет от опечаток и поможет сравнить значения правильно.
