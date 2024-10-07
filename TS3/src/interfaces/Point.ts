interface Restaurants {
    _id: string;
    company: string;
    location: {
        coordinates: [number, number];
    };
}