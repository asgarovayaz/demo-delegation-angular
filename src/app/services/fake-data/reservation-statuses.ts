export interface IReservationStatus {
    title: string;
    total: number;
    status: number;
}

const data: IReservationStatus[] = [
    {
        title: 'Hotel reservation',
        total: 18,
        status: 12
    },
    {
        title: 'Rooms reservation',
        total: 15,
        status: 12
    },
    {
        title: 'Meal reservation',
        total: 6,
        status: 2
    },
    {
        title: 'Flight reservation',
        total: 10,
        status: 0
    }
];

export default data;
