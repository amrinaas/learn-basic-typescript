const carMarkers: string[] = ['ford', 'honda', 'toyota'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corola'],
    ['camaro']
];

//WHY DO WE CARE
// 1. Help with inference when extracting values
const myCar = carMarkers[0];
const myCars = carMarkers.pop();

// 2. Prevent incompatible values
// carMarkers.push(100);  -> cant do this, should push with same type of annotations

// 3. Help with map / looping
carMarkers.map((car: string): string => {
    return car;
})

// 4. Flexible types - arrays can still contain multiple different types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2022-11-01');