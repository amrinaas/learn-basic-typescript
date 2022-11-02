const profile = {
    names: 'Max',
    age: 26,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }   
}

// destructuring
// write the annotations based on the object /value
const { age, names }: { age: number, names: string } = profile;
const {
     coords: { lat, lng} 
}: {coords: { lat: number; lng: number}} = profile
