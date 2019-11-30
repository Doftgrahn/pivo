import { db } from '../utils/fireconfig';

export default async function getleaderboard(getBeer) {
    const dbRef = db.collection('pivo');

    dbRef.onSnapshot(snapshot => {
        const foodList = [];
        snapshot.forEach(doc => {
            foodList.push({ ...doc.data(), id: doc.id });
        });
        getBeer(foodList);
    });
}
