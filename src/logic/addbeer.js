import { db } from '../utils/fireconfig';

export default async function addbeer(user, leaderboard) {
    const userbase = leaderboard.find(x => x.userId === user.uid);
    if (userbase) {
        const dishInfo = {
            beer: userbase.beer + 1,
            user: user.displayName,
            photo: user.photoURL,
            userId: user.uid
        };
        const dbRef = db.collection('pivo').doc(userbase.id);
        await dbRef.set(dishInfo);
    } else {
        const dishInfo = {
            beer: 1,
            user: user.displayName,
            photo: user.photoURL,
            userId: user.uid
        };
        const dbRef = db.collection('pivo').doc();
        await dbRef.set(dishInfo);
    }
}
